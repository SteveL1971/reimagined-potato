const mongodb = require('mongoose');
const Funkopop = require('./productSchema');

exports.getProducts = (req, res) => {
  Funkopop.find()
  .then(data => res.status(200).json(data))
  .catch(err => res.status(500).json(err))
}

exports.getProduct = (req, res) => {
  Funkopop.exists({ _id: req.params.id }, (err, result) => {
    if(err) {
      return res.status(400).json(err)
    }
    else {
      if(result) {
        Funkopop.findById(req.params.id)
          .then(product => res.status(200).json(product))
          .catch(err => res.status(500).json(err))
      }
      else {
        return res.status(404).json({
          statusCode: 404,
          status: false,
          message: 'Ooops this product does not exist'
        })
      }
    }
  })
}

exports.createProduct = (req, res) => {
  Funkopop.exists({ name: req.body.name }, (err, result) => {
    if(err) {
      return res.status(500).json(err)
    } else {
      if(result) {
        return res.status(400).json({
          statusCode: 400,
          status: false,
          message: 'A Funko Pop by that name already exists, please update product instead'
        })
      }
      
      const newFunkopop = new Funkopop({

        name:   req.body.name,
        series:  req.body.series,
        desc: req.body.desc,
        number:   req.body.number,
        price:  req.body.price,
        img:  req.body.img
      })

      newFunkopop.save()
        .then(() => {
          res.status(201).json({
            statusCode: 201,
            status: true,
            message: 'Funko Pop created successfully'
          })
        })
        .catch(() => {
          res.status(500).json({
            statusCode: 500,
            status: false,
            message: 'Failed to create Funko Pop'
          })
        })
    }
  })
}

exports.updateProduct = (req, res) => {
  Funkopop.exists({ _id: req.params.id }, (err, result) => {
    if(err) {
      return res.status(400).json(err)
    } else {
      if(result) {
        Funkopop.updateOne({ _id: req.params.id }, {
          ...req.body,
          modified: Date.now()
        })
        .then(() => {
          res.status(200).json({
            statusCode: 200,
            status: true,
            message: 'Product updated successfully'
          })
        })
        .catch(() => {
          res.status(500).json({
            statusCode: 500,
            status: false,
            message: 'Failed to update product'
          })
        })
      }
      else {
        return res.status(404).json({
          statusCode: 404,
          status: false,
          message: 'Ooops this product does not exist'
        })
      }
    }
  })
}

exports.deleteProduct = (req, res) => {
  Funkopop.exists({ _id: req.params.id }, (err, result) => {
    if(err) {
      return res.status(400).json(err)
    } 
    else {
      if(result){
        Funkopop.deleteOne({ _id: req.params.id })
          .then(() => {
            res.status(200).json({
              statusCode: 200,
              status: true,
              message: 'Product deleted'
            })
          })
          .catch(() => {
            res.status(500).json({
              statusCode: 500,
              status: false,
              message: 'Failed to delete product'
            })
          })
      }
      else {
        return res.status(404).json({
          statusCode: 404,
          status: false,
          message: 'Ooops this product does not exist'
        })
      }
    }
  })
}