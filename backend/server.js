
import express from 'express'
import data from './data.js'

const app = express()
const port = process.env.PORT || 5000;

app.get('/api/products/', async(req, res)=>{
    const products = await data.products;
    res.send(products)
})
app.get('/', (req, res)=>{
    res.send({massage: 'server is ready'})
})

app.listen(port, ()=>{
        console.log(`server at http://localhost:${port}`)
})