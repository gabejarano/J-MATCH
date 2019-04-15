const express = require('express');
const router = express.Router();
const Group = require('../models/taks');
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

//---------------------------------------------------------Routes---------------------------------------------------//

router.get('/', async (req, res) => {
    const users = await Group.find();
    res.json(users);
});


var p = {"hola":"que"};
var text = " ";

router.post('/', async (req, res) => {
    text = req.body.description + ". " + req.body.profile + ". " + req.body.projects + ". " + req.body.qualities + ". " + req.body.achievement + ".";
    profileParams.content = text;
    personalityInsights.profile(profileParams, function (err, response) {
        if (err) {
            console.log('error:', err);
        } else {
            req.body.personality = response;
            const { name, age, sex, document, personality, group } = req.body;
            var user = new Group({ name, age, sex, document, personality, group });
            user.save();
            res.json({ status: 'User saved' });
        }
    });
});

router.put('/:id', async (req, res) => {
    const { name, age, sex, document, personality, group } = req.body;
    const newUser = { name, age, sex, document, personality, group };
    await Group.findByIdAndUpdate(req.params.id, newUser);
    res.json('User updated');
});

router.delete('/:id', async (req, res) => {
    await Group.findByIdAndDelete(req.params.id);
    res.json('User deleted');
});

router.get('/:id', async (req, res) => {
    const user = await Group.findById(req.params.id);
    res.json(user);
});

module.exports = router;