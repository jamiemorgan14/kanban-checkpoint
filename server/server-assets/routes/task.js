let router = require('express').Router()
let Tasks = require('../models/task')

//GET
//gets all  by board id
router.get('/boards/:boardId/lists/:listId/tasks', (req, res, next) => {
  Tasks.find({ listId: req.params.listId })
    .then(tasks => {
      res.send(tasks)
    })
    .catch(err => {
      console.log(err)
      next()
    })
})

//get one task
router.get('boards/:boardId/lists/:listId/tasks/:taskId', (req, res, next) => {
  Tasks.find({ taskId: req.params.taskId })
    .then(task => {
      res.send(task)
    })
    .catch(err => {
      console.log(err)
      next()
    })
})

//POST
router.post('/boards/:boardId/lists/:listId/tasks', (req, res, next) => {
  Tasks.create(req.body)
    .then(newTask => {
      res.send(newTask)
    })
    .catch(err => {
      console.log(err)
      next()
    })
})


//PUT
router.put('/boards/:boardId/lists/:listId/tasks/:taskId', (req, res, next) => {
  Tasks.findOneAndUpdate({ _id: req.params.taskId }, req.body, { new: true })
    .then(task => {
      res.send(task)
    })
    .catch(err => {
      res.status(400).send('ACCESS DENIED; Invalid Request')
    })
})

//add subcomment
router.put('/boards/:boardId/lists/:listId/tasks/:taskId/subComments', (req, res, next) => {
  Tasks.findById(req.params.taskId)
    .then(task => {
      task.subComments.push(req.body)
      task.save(err => {
        if (err) {
          return res.status(500).send(err)
        }
        return res.status(200).send(task)
      })
    })
})

router.delete('/boards/:boardId/lists/:listId/tasks/:taskId/subComments/:commentId', (req, res, next) => {
  Tasks.findById(req.params.taskId)
    .then(task => {
      task.subComments.id(req.params.commentId).remove()
      task.save(err => {
        if (err) {
          return res.status(500).send(err)
        }
        return res.status(200).send('Comment eliminated')
      })
    })
})





//DELETE
router.delete('/boards/:boardId/lists/:listId/tasks/:taskId', (req, res, next) => {
  Tasks.findById(req.params.taskId)
    .then(task => {
      // @ts-ignore
      if (!task.authorId.equals(req.session.uid)) {
        return res.status(401).send("ACCESS DENIED!")
      }
      task.remove(err => {
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