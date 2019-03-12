let router = require('express').Router()
let Lists = require('../models/list')

//GET
//gets all lists by board id
router.get('/:boardId', (req, res, next) => {
  Lists.find({ boardId: req.params.boardId })
    .then(lists => {
      res.send(lists)
    })
    .catch(err => {
      console.log(err)
      next()
    })
})

//GETONE
router.get('/:boardId' + '/list' + '/:listId', (req, res, next) => {
  Lists.findOne({ _id: req.params.listId })
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      console.error(err)
      next()
    })
})

//POST
router.post('/:boardId', (req, res, next) => {
  Lists.create(req.body)
    .then(newList => {
      res.send(newList)
    })
    .catch(err => {
      console.log(err)
      next()
    })
})

//PUT
router.put('/:boardId' + '/list' + '/:listId', async (req, res, next) => {
  try {
    let list = await Lists.findByIdAndUpdate(req.params.id, req.body)
    res.send(list)
  } catch (err) {
    res.status(400).send(err)
  }
})

//DELETE
router.delete('/:boardId' + '/list' + '/:listId', (req, res, next) => {
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