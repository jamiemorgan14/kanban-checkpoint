<template>
  <div class="list">
    <drop @drop="changeList" class="card mt-3">
      <div class="card-header"></div>
      <div class="card-body">
        <h5 class="card-title">{{listData.title}}</h5>
        <hr>
        <task v-for="task in tasks" :taskData="task" :key="task._id"></task>
      </div>
      <div class="card-footer text-muted text-center">
        <div class="btn-group btn-group-sm  d-flex justify-content-between" role="group" aria-label="Basic example">
          <i class="far fa-plus-square mx-1 point" @click="showTaskForm = !showTaskForm"></i>

          <i class="fas fa-external-link-alt mx-1 point" @click="openOne(listData)" data-toggle="modal" data-target="#exampleModal"></i>

          <i @click="deleteList(listData)" class="far fa-trash-alt mx-1 point"></i>
        </div>

        <form class="mt-2" v-if="showTaskForm" @submit.prevent="createTask(newTask), showTaskForm = false">
          <input type="text" v-model="newTask.description" required>
          <button type="submit" class="btn-sm btn-info">Create Task</button>
        </form>
      </div>
    </drop>
  </div>
</template>

<script>
  import task from "@/components/taskComp.vue";
  import oneList from "@/components/OneList.vue";
  export default {
    mounted() {
      this.$store.dispatch("getTasks", this.listData);
    },
    name: "list",
    props: ["listData", "taskData"],
    data() {
      return {
        newTask: {
          description: "",
          authorId: this.$store.state.user._id,
          listId: this.listData._id,
          boardId: this.$route.params.boardId
        },
        showTaskForm: false
      };
    },
    computed: {
      lists() {
        return this.$store.state.lists;
      },
      tasks() {
        return this.$store.state.tasks[this.listData._id];
      }
    },
    methods: {
      deleteList(listData) {
        this.$store.dispatch("deleteList", listData);
      },
      createTask(newTask) {
        this.$store.dispatch("makeTask", newTask);
        event.target.reset();
      },
      openOne(list) {
        this.$store.dispatch(("setActiveList", "setActiveTasks"), list);
      },
      changeList(task) {
        let oldListId = task.listId;
        task.listId = this.listData._id;

        this.$store.dispatch("changeList", {
          task,
          boardId: this.listData.boardId,
          listId: this.listData._id,
          oldListId
        });
      }

    }
</script>
<style>
  .card {
    background-color: rgba(30, 43, 49, 0.514);
    color: white
  }

  .point {
    cursor: pointer
  }
</style>