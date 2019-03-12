let router = require('express').Router()
let Tasks = require('../models/task')

//GET
//gets all  by board id
router.get('/:boardId/lists/:listId/tasks', (req, res, next) => {
  Tasks.find({ listId: req.params.listId })
    .then(tasks => {
      res.send(tasks)
    })
    .catch(err => {
      console.log(err)
      next()
    })
})

//POST
router.post('/:boardId/lists/:listId/tasks', (req, res, next) => {
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
router.put('/:boardId/lists/:listId/tasks/:taskId', (req, res, next) => {
  Tasks.findOneAndUpdate({ _id: req.params.taskId }, req.body, { new: true })
    .then(task => {
      res.send(task)
    })
    .catch(err => {
      res.status(400).send('ACCESS DENIED; Invalid Request')
    })
})

// router.put('/:id/sub-comments', (req, res, next) => {
//   Task.findById(req.params.id)
//     .then(task => {
//       //if req.body._id exists then you are trying to delete a subComment
//       //else you are creating a sub comment
//       if (!req.body._id) {
//         //create it
//         task.subComments.push(req.body)
//       } else {
//         //delete it
//         task.subComments.forEach((sc, i) => {
//           if (sc._id.toString() == req.body._id) {
//             task.subComments.splice(i, 1)
//           }
//         })
//       }
//       return task.save()
//     })
//     .then(() => res.send("Task Sent"))
//     .catch(next)
// })

//DELETE
router.delete('/:boardId/lists/:listId/tasks/:taskId', (req, res, next) => {
  Tasks.findById(req.params.taskId)
    .then(task => {
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

// localhost:3000/api/boards/5c86cf144a951fe4f8750723/lists/5c8730a6324058f2e1270765/tasks