const express = require('express');
const concat = require('concat');
const router = express.Router();
const Group = require('../models/group');
const Member = require('../models/member');
const PersonalityInsightsV3 = require('watson-developer-cloud/personality-insights/v3');

//-----------------------------------------------Watson-----------------------------------------------//


const personalityInsights = new PersonalityInsightsV3({
    version: '2017-10-13',
    iam_apikey: 'ITHx8SQNN6fwhMr1s_7yWZE6J8I6jFqqsncujo_yHCZa',
    url: 'https://gateway.watsonplatform.net/personality-insights/api/'
});

const profileParams = {
    content: 'Hola',
    content_type: 'text/plain',
    consumption_preferences: true,
    raw_scores: true,
    content_language: 'es',
    accept_language: 'es'
};

//---------------------------------------------------------Routes---------------------------------------------------///-------------funcionAux--------------------------------------------------


//--------------Create gruop --------------------------------------------------
router.post('/members/:id/groups', async (req, res) => {
    var id_member = req.params.id;
    req.body.members = [{ "member": id_member }];
    const { name, numberMembers, members } = req.body;
    var group = new Group({ name, numberMembers, members });
    var actualGroups = await Member.findById(id_member);//.groups
    var toAdd = { "group": group };
    var grupitos = actualGroups.groups.concat(toAdd); //concat([actualGroups.groups, toAdd]);
        Member.findOneAndUpdate({ _id: id_member }, { $set: { groups: grupitos } }, { new: true }, (err, doc) => {
            if (err) {
                console.log("Something wrong when updating data!");
            }
            console.log(doc);
        }),

        await group.save();

    res.json({ status: 'group created by : ' + id_member });

})

//--------------Post member within personility---------------------------------------
router.post('/members', async (req, res) => {
    const { name, email, password, repassword, age, sex, document, personality } = req.body;
    var newMember = new Member({ name, email, password, repassword, age, sex, document, personality });
    await newMember.save();
    res.json({ status: 'member saved' });

})

/** --------------------- Add member a group----------------------------------------*/
router.put('/groups/:id', async (req, res) => {
    
    //Add member to Group
    var actualMembers = await Group.findById(req.params.id);
    var toAdd = req.body.members[0].member;
    console.log(actualMembers.members +'************')
    console.log('---------------------' +req.body.members[0].member)
    var newMembers = actualMembers.members.concat({"member":toAdd});
    await Group.findOneAndUpdate({ _id: req.params.id }, { $set: { members: newMembers } }, { new: true }, (err, doc) => {
        if (err) {
            console.log("Something wrong when updating data!");
        }

        console.log(doc);
    });

    //Add group to member
    var group = await Group.findById(req.params.id);
    var actualGroups = await Member.findById(toAdd);//.groups
    console.log('*************'+group)
    console.log(actualGroups)
    var newGroup = { "group": group };
    console.log(',,,,,,,,,,,,,,,'+newGroup)
    var grupitos = actualGroups.groups.concat(newGroup);
    console.log('------------------------' + grupitos + '.........')
    await Member.findOneAndUpdate({ _id: toAdd },  {$set: { groups: grupitos } }, { new: true }, (err, doc) => {
        if (err) {
            console.log("Something wrong when updating data!");
        }
        console.log(doc);
    }),
    res.json({ status: 'Group updated' });

});


router.delete('members/:id', async (req, res) => {
    await Member.findByIdAndDelete(req.params.id);
    res.json('Member deleted');
});

router.delete('groups/:id', async (req, res) => {
    await Group.findByIdAndDelete(req.params.id);
    res.json('Group deleted');
});

router.get('/members/:id', async (req, res) => {
    const user = await Member.findById(req.params.id);
    res.json(user);
});
router.get('/members/:id/groups', async (req, res) => {
    const user = await Member.findById(req.params.id);
    res.json(user.groups);
});
router.get('/members', async (req, res) => {
    const user = await Member.find();
    res.json(user);
});

router.get('/groups', async (req, res) => {
    const user = await Group.find();
    res.json(user);
});

router.get('/groups/:id', async (req, res) => {
    const user = await Group.findById(req.params.id);
    res.json(user);
});

module.exports = router;