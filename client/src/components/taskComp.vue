<template>
  <div class="task row">
    <div class="col">
      <ul>
        <li class="task" @click="showform = !showform">{{taskData.description}} <i @click="" class="far fa-square"></i>
          <i class="far fa-check-square"></i></li>
        <form v-if="showform">
          <input type="text" v-model="newTask.description">
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
        newTask: {
          description: '',
          authorId: this.$store.state.user._id,
          listId: this.taskData.listId
        },
        showform: false
      }
    },
    computed: {
      tasks() {
        return this.$store.state.tasks
      }
    },
    methods: {},
    components: {

    }
  }
</script>
<style>
  .task {
    cursor: pointer;
  }
</style>