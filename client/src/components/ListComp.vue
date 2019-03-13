<template>
  <div class="list">
    <div class="card text-center mt-3">
      <div class="card-header">
      </div>
      <div class="card-body">
        <h5 class="card-title">{{listData.title}}</h5>
        <task v-for="task in tasks" :taskData='task'></task>
        <button @click="showTaskForm = !showTaskForm" class="btn-sm btn-secondary">Make New Task</button>
        <form v-if="showTaskForm" @submit.prevent="createTask(newTask), showTaskForm = false">
          <input type="text" v-model="newTask.description" required>
          <button type="submit" class="btn btn-info">Create Task</button>
        </form>
        <button href="#" class="btn-sm btn-primary">Go to List</button>
        <button @click="deleteList(listData)" class="btn-sm btn-danger">Delete List</button>
      </div>
      <div class="card-footer text-muted">
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