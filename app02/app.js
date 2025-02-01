import express from 'express'

const app = express()

const PORT = process.env.PORT || 4000

app.get("/",(req,res)=> {
    res.json({"message" : "hello gaby"})
})

app.listen(PORT, '0.0.0.0', (req, res) => {
    console.log(`server on port ${PORT}`)
})