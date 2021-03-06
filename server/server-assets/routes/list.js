let router = require('express').Router()
let Lists = require('../models/list')

//GET
//gets all lists by board id
router.get('/boards/:boardId/lists', (req, res, next) => {
  Lists.find({ boardId: req.params.boardId, authorId: req.session.uid })
    .then(lists => {
      res.send(lists)
    })
    .catch(err => {
      console.log(err)
      next()
    })
})

//GETONE
router.get('/boards/:boardId/lists/:listId', (req, res, next) => {
  Lists.findOne({ _id: req.params.listId, authorId: req.session.uid })
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      console.error(err)
      next()
    })
})

//POST
router.post('/boards/:boardId/lists', (req, res, next) => {
  req.body.authorId = req.session.uid
  Lists.create(req.body)
    .then(newList => {
      res.send(newList)
    })
    .catch(err => {
      console.log(err)
      next()
    })
})

// PUT
router.put('/boards/:boardId/lists/:listId', (req, res, next) => {
  delete req.body.authorId
  Lists.findOneAndUpdate({ _id: req.params.listId }, req.body, { new: true })
    .then(list => {
      res.send(list)
    })
    .catch(err => {
      res.status(500).send(err)
    })
})

//DELETE
router.delete('/boards/:boardId/lists/:listId', (req, res, next) => {
  Lists.findById(req.params.listId)
    .then(list => {
      if (!list.authorId.equals(req.session.uid)) {
        return res.status(401).send("ACCESS DENIED!")
      }
      list.remove(err => {
        if (err) {
          console.log(err)
          next()
          return
        }
        res.send("Successfully Deleted")
      })
        .catch(err => {
          res.status(400).send('ACCESS DENIED; Invalid Request')
        })
    })
})

module.exports = router