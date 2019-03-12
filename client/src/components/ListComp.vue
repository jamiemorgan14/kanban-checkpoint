<template>
  <div class="list row">
    <div v-for="list in lists" :listData='list' class="col-3">
      <div class="card text-center mt-3">
        <div class="card-header">
        </div>
        <div class="card-body">
          <h5 class="card-title">{{list.title}}</h5>
          <p class="card-text">list tasks</p>
          <a href="#" class="btn btn-primary">Go to List</a>
        </div>
        <div class="card-footer text-muted">
          Last Updated???
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "list",
    props: [],
    data() {
      return {}
    },
    computed: {
      lists() {
        return this.$store.state.lists
      }
    },
    methods: {},
    components: {}
  }
</script>