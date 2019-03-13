<template>
  <div class="task row">
    <div class="col">
      <ul>

        <li class="task inline">
          <i v-if="!taskData.completed" @click="editedTask.completed = !editedTask.completed, markComplete(editedTask)"
            class="far fa-square mr-2"></i>

          <i v-if="taskData.completed" @click="editedTask.completed = !editedTask.completed, markComplete(editedTask)"
            class="far fa-check-square mr-2"></i>



          <div class="inline">
            <div class=" inline" v-if="!editTaskDetails" @dblclick="editTaskDetails = !editTaskDetails, showTaskDetails = !showTaskDetails" @click="showTaskDetails = !showTaskDetails"
              v-bind:class="{completed: editedTask.completed}">{{taskData.description}}</div>
            <div class="inline" v-if="editTaskDetails">
              <form class="mt-2" @submit.prevent="editTask(editedTask)">
                <input type="text" v-model="editedTask.description" required>
                <div class="inline">
                  <button type="submit" class="btn-sm btn-outline-dark mx-1"><i class="fas fa-check-square submitButton"></i></button>
                  <button @click="editTaskDetails = !editTaskDetails" class="btn-sm btn-outline-dark">
                    <i class="fas fa-times ml-1"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div class="inline" v-if="showTaskDetails">
            <i class="fas fa-caret-down ml-1"></i>
            <i @click="addSubCommentForm = !addSubCommentForm" class="fas fa-comment-medical ml-4"></i>
            <i @click="removeTask(editedTask)" class="far fa-trash-alt ml-2"></i>
          </div>
        </li>

        <form v-if="addSubCommentForm">
          <input type="text"><button><i class="fas fa-check-square"></i></button>
        </form>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    mounted() {
    },
    name: "task",
    props: ['taskData'],
    data() {
      return {
        editedTask: {
          completed: this.taskData.completed,
          description: this.taskData.description,
          listId: this.taskData.listId,
          _id: this.taskData._id,
          boardId: this.$route.params.boardId
        },
        showTaskDetails: false,
        editTaskDetails: false,
        addSubCommentForm: false
      }
    },
    computed: {
      //this may not work...
      tasks() {
        return this.$store.state.tasks[newTask._id]
      }
    },
    methods: {
      markComplete(editedTask) {
        this.$store.dispatch('editTask', editedTask)
      },
      editTask(editedTask) {
        this.$store.dispatch('editTask', editedTask)
        this.editTaskDetails = false
      },
      removeTask(editedTask) {
        this.$store.dispatch('deleteTask', editedTask)
        this.showTaskDetails = false
      },
      addComment(comment) {

      }
    },
    components: {

    }
  }
</script>
<style>
  .task {
    cursor: pointer;
  }

  .completed {
    text-decoration: line-through;
    color: darkslategrey
  }

  li {
    list-style: none;
  }

  .inline {
    display: inline-block
  }

  .card {
    width: 420px
  }

  .submitButton {}
</style>