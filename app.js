const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

//Server Start
app.listen(port, () => {
	console.log(`App listening on port ${port}`)
})

// get trainers
app.get('/:id', (req, res) => {
    res.json(json.trainers[req.params.id].name)
})



let json = {
    "trainers": [
        {
        "name":"tori",
        "pokemon": [
            "shinx",
            "charmander",
            "maractus",
            "glaceon"]
        },
        {
        "name": "anna",
        "pokemon": [
            "scyther",
            "celebi",
            "snorlax",
            "ditto"]
        },
        {
        "name": "anna",
        "pokemon": [
            "scyther",
            "celebi",
            "snorlax",
            "ditto"]
        }
    ]
}



// ('Trainer', {
//  Trainer_ID: Number,
//  trainer_name: String,
//  sex: ['Male','Female'],
//  pokemon:[ 'Pikachu', 'Eevee','Charmander'],
//  badges: ["Boulder Badge","Cascade Badge","Rainbow Badge"]
// }
