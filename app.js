const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World 🖕')
})

app.listen(process.env.PORT || 5000, () => console.log('listening on port 5000'))
