let router = require('express').Router()
let Tasks = require('../models/task')

//GET
//gets all lists by board id
router.get('/:boardId', (req, res, next) => {
  Tasks.find({ boardId: req.params.boardId })
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
  Tasks.findOne({ _id: req.params.listId })
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
  Tasks.create(req.body)
    .then(newList => {
      res.send(newList)
    })
    .catch(err => {
      console.log(err)
      next()
    })
})


//PUT
// router.put('/:boardId' + '/list' + '/:listId', (req, res, next) => {
//   Tasks.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
//     .then(list => {
//       res.send(list)
//     })
// })

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
router.delete('/:boardId' + '/list' + '/:listId', (req, res, next) => {
  Tasks.findById(req.params.listId)
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