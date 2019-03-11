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
router.put('/:boardId' + '/list' + '/:listId', (req, res, next) => {
  Lists.findById({ _id: req.params.id }, req.body, { new: true })
    .then(list => {
      list.push(req.body)
      res.send("Successfully Updated")
    })
    .catch(err => {
      console.log(err)
      next()
    })

  //DELETE
  router.delete('/:boardId' + '/list' + '/:listId', (req, res, next) => {
    Lists.findOneAndDelete({ _id: req.params.id })
      .then(deletedList => {
        res.send("Successfully Deleted")
      })
      .catch(err => {
        res.status(400).send('ACCESS DENIED; Invalid Request')
      })
  })
})


module.exports = router