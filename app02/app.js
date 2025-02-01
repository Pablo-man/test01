import express from 'express'

const app = express()

const PORT = process.env.PORT || 3002

app.get("/",(req,res)=> {
    res.json({"message" : "hello gaby"})
})

app.listen(PORT, (req, res) => {
    console.log(`server on port ${PORT}`)
})