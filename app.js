const express = require('express')
const app = express()
const port = 3000

const { Band, Manager, Song } = require('./models')

app.get('/', (req, res) => {

    Song.findAll({
        include: [{
            model: Manager,
        }]
    })
        .then(songs => {
            res.send(songs)
        })
        .catch(err => res.send(err))
})

app.listen(port, () => console.log(`App listening on port ${port}`))