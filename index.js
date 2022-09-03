const express = require('express')
const app = express()
const PORT = 3001

app.use(express.static('public'))

app.get('/', (req,res) => {
    res.send('Server is working')
})

app.listen(PORT, () => {
    console.log(`Freeworld listening on port ${PORT}`)
})