const mongodb = require('mongoose');
const User = require('../users/userSchema');
const bcrypt = require('bcrypt');
const auth = require('../../authentication/auth');

exports.getUsers = (req, res) => {
  User.find()
  .then(data => res.status(200).json(data))
  .catch(err => res.status(500).json(err))
}

exports.registerUser = (req, res) => {

  User.exists({ email: req.body.email }, (err, result) => {
    if(err) {
      return res.status(400).json(err)
    } else {

      if(result) {
        return res.status(400).json({
          statusCode: 400,
          status: false,
          message: 'Email address is already taken'
        })
      }
      else {

        const salt = bcrypt.genSaltSync(10);
        bcrypt.hash(req.body.password, salt, (err, hash) => {

          if(err) {
            return res.status(500).json({
              statusCode: 500,
              status: false,
              message: 'Failed when encrypting user password'
            })
          }

          const newUser = new User({
            firstName:    req.body.firstName,
            lastName:     req.body.lastName,
            email:        req.body.email,
            passwordHash: hash
          })

          newUser.save()
            .then(() => {
              res.status(201).json({
                statusCode: 201,
                status: true,
                message: 'User was created successfully'
              })
            })
            .catch(() => {
              res.status(500).json({
                statusCode: 500,
                status: false,
                message: 'Failed to create user'
              })
            })
        })
      }
    }
  })
}

exports.getUserDetails = (req, res) => {
  User.findOne({ _id: req.params.id })
  .then(user => {
    console.log(user)
    if(user === null) {
      return res.status(404).json({
        statusCode: 404,
        message: 'Incorrect userId'
      })
    } else {
      return res.status(200).json({
        statusCode: 200,
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        admin: user.admin
      })
    }
  })
},

exports.loginUser = (req, res) => {
  User.findOne({ email: req.body.email })
    .then(user => {
      if(user === null) {
        return res.status(404).json({
          statusCode: 404,
          status: false,
          message: 'Incorrect email or password'
        })
      }

      try {
        bcrypt.compare(req.body.password, user.passwordHash, (err, result) => {
          if(err) {
            return res.status(400).json(err)
          }
          else {
  
            if(result) {
              return res.status(200).json({
                statusCode: 200,
                status: true,
                message: 'Authentication was successful',
                // firstName: user.firstName,
                token: auth.generateToken(user)
              })
            }
            return res.status(401).json({
              statusCode: 401,
              status: false,
              message: 'Incorrect email or password'
            })
  
          }
        })
      }
      catch {
        return res.status(500).json({
          statusCode: 500,
          status: false,
          message: 'Unable to authenticate user. Please contact the system administrator'
        })
      }
    })
}

exports.editUserDetails = (req, res) => {
  User.updateOne({ _id: req.body.id }, {
  ...req.body,
  firstName: req.body.firstName,
  lastName: req.body.lastName,
  email: req.body.email
  })

  .then(() => {
  res.status(200).json({
      statusCode: 200,
      status: true,
      message: 'User updated successfully'
      })
  })
  .catch(() => {
  res.status(500).json({
      statusCode: 500,
      status: false,
      message: 'Failed to update user'
      })
  })
}

exports.deleteUser = (req, res) => {
  User.exists({ _id: req.params.id }, (err, result) => {
    if(err) {
      return res.status(400).json(err)
    } 
    else {
      if(result){
        User.deleteOne({ _id: req.params.id })
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