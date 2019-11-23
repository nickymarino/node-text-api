const express = require('express')
const bodyparser = require('body-parser')
var toZalgo = require('to-zalgo')

const app = express();
const port = process.env.port || 3200

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: false }))

app.listen(port, () => {
    console.log(`running on port ${port}`)
})

app.get('/', (req, res) => res.send('Hello world!'))

app.get('/magic-8-ball', (req, res) => {
    const responses = [
        'It is certain.',
        'It is decidedly so.',
        'Without a doubt.',
        'Yes - definitely.',
        'You may rely on it.',
        'As I see it, yes.',
        'Most likely.',
        'Outlook good.',
        'Yes.',
        'Signs point to yes.',
        'Reply hazy, try again.',
        'Ask again later.',
        'Better not tell you now.',
        'Cannot predict now.',
        'Concentrate and ask again.',
        "Don't count on it.",
        'My reply is no.',
        'My sources say no.',
        'Outlook not so good.',
        'Very doubtful.'
    ]

    res.status(200).json({
        prediction: randomItemFromArray(responses)
    })
})

app.post('/to-zalgo', (req, res) => {
    if (req.body.text === undefined) {
        res.status(400).json({
            "code": 400,
            "message": "Missing 'text' argument"
        })
        return
    }

    original = req.body.text
    zalgo = toZalgo(original)

    res.status(200).json({
        "code": 200,
        "original": original,
        "zalgo": zalgo
    })
})

function randomItemFromArray(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}