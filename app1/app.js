import express from 'express'

const app = express()

const PORT = process.env.PORT || 3001

app.get("/",(req,res)=> {
    res.json({"message" : "hello fran"})
})

app.listen(PORT, '0.0.0.0', (req, res) => {
    console.log(`server on port ${PORT}`)
})