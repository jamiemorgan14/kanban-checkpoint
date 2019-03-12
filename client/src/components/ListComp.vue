<template>
  <div class="list">
    <div class="card text-center mt-3">
      <div class="card-header">
      </div>
      <div class="card-body">
        <h5 class="card-title">{{listData.title}}</h5>
        <task v-for="task in tasks" :taskData='task'></task>
        <a href="#" class="btn btn-primary">Go to List</a>
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
      return {}
    },
    computed: {
      lists() {
        return this.$store.state.lists
      },
      tasks() {
        return this.$store.state.tasks[this.listData._id]
      }
    },
    methods: {},
    components: {
      task
    }
  }
</script>