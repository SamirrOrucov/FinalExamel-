
import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors'
const app = express()
const port = 3003
app.use(express.json())
app.use(cors())
const { Schema } = mongoose;

const eatSchema = new Schema({
  image: String, // String is shorthand for {type: String}
  title: String,
  detail: String,
  price: Number

});
const EatModel = mongoose.model('Eat', eatSchema);

app.get('/:id', async (req, res) => {

  try {
    const { id } = req.params
    const product = await EatModel.findById(id)
    res.send(product)
  } catch (error) {
    res.send(error.message)

  }
})
app.get('/', async (req, res) => {
  const product = await EatModel.find({})
  res.send(product)
})
app.post('/', async (req, res) => {
  try {
    const { image, title, detail, price } = req.body
    const newProduct = new EatModel({ image, title, detail, price })
    await newProduct.save()
    res.send('Got a POST request')
  } catch (error) {
    res.send(error.message)

  }

})
app.put('/:id', async (req, res) => {
  try {
    const { id } = req.params

    const { image, title, detail, price } = req.body
    const product = await EatModel.findByIdAndUpdate(id, { image, title, detail, price })

    res.send('Got a Update request')
  } catch (error) {
    res.send(error.message)

  }

})

app.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params
    const product = await EatModel.findByIdAndDelete(id)
    res.send("deleted")
  } catch (error) {
    res.send(error.message)

  }
})
mongoose.connect('mongodb+srv://samir:samir@cluster0.ywgcy8n.mongodb.net/')
  .then(() => console.log('Connected!'))
  .catch(() => console.log("Not Connected!"))
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
