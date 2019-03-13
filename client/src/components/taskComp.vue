<template>
  <div class="task row">
    <div class="col">
      <ul>
        <li class="task" @click="showSubForm = !showSubForm" v-bind:class="{completed: editedTask.completed}">{{taskData.description}}
          <i v-if="!taskData.completed" @click="editedTask.completed = !editedTask.completed, markComplete(editedTask)"
            class="far fa-square"></i>
          <i v-if="taskData.completed" @click="editedTask.completed = !editedTask.completed, markComplete(editedTask)"
            class="far fa-check-square"></i></li>
        <!-- <form action="">
          <input type="
            text" v-model="taskData.description"></input>
            </form> -->
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
        showSubForm: false,
        editedTask: {
          completed: this.taskData.completed,
          description: this.taskData.description,
          listId: this.taskData.listId,
          _id: this.taskData._id,
          boardId: this.$route.params.boardId
        }
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
    color: grey
  }
</style>