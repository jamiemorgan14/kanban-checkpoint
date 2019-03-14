<template>
  <div class="list">
    <div class="card mt-3">
      <div class="card-header">
      </div>
      <div class="card-body">
        <h5 class="card-title">{{listData.title}}</h5>
        <hr>
        <task v-for="task in tasks" :taskData='task'></task>


      </div>
      <div class="card-footer text-muted text-center">
        <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
          <button @click="showTaskForm = !showTaskForm" class="btn-sm btn-secondary mx-1">Make New Task</button>
          <button href="#" class="btn-sm btn-primary mx-1">Go to List</button>
          <button @click="deleteList(listData)" class="btn-sm btn-danger mx-1">Delete List</button>
        </div>
        <form class="mt-2" v-if="showTaskForm" @submit.prevent="createTask(newTask), showTaskForm = false">
          <input type="text" v-model="newTask.description" required>
          <button type="submit" class="btn-sm btn-info">Create Task</button>
        </form>
        <hr>
        Last Updated???
      </div>
    </div>
  </div>
</template>

<script>
  import task from '@/components/taskComp.vue'
  export default {
    mounted() {
      this.$store.dispatch('getTasks', this.listData)
    },
    name: "list",
    props: ['listData'],
    data() {
      return {
        newTask: {
          description: '',
          authorId: this.$store.state.user._id,
          listId: this.listData._id,
          boardId: this.$route.params.boardId
        },
        showTaskForm: false
      }
    },
    computed: {
      lists() {
        return this.$store.state.lists
      },
      tasks() {
        return this.$store.state.tasks[this.listData._id]
      }
    },
    methods: {
      deleteList(listData) {
        this.$store.dispatch('deleteList', listData)
      },
      createTask(newTask) {
        this.$store.dispatch('makeTask', newTask)
        event.target.reset()
      }
    },
    components: {
      task
    }
  }
</script>