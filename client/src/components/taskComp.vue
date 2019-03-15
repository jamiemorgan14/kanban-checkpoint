<template>
  <drag :transfer-data="taskData" class="task row">
    <div class="col">
      <ul>
        <li class="task inline">
          <i
            v-if="!editedTask.completed"
            @click="editedTask.completed = !editedTask.completed, markComplete(editedTask)"
            class="far fa-square mr-2"
          ></i>
          
          <i
            v-if="editedTask.completed"
            @click="editedTask.completed = !editedTask.completed, markComplete(editedTask)"
            class="far fa-check-square mr-2"
          ></i>

          <div class="inline">
            <div
              class="inline"
              v-if="!editTaskDetails"
              @dblclick="editTaskDetails = !editTaskDetails, !showTaskDetails"
              @mouseover="showTaskDetails = true"
              @mouseleave="showTaskDetails = false"
              v-bind:class="{completed: editedTask.completed}"
            >
              <h5>{{taskData.description}}</h5>
            </div>
            <div class="inline" v-if="editTaskDetails">
              <form class="mt-2" @submit.prevent="editTask(editedTask)">
                <input type="text" v-model="editedTask.description" required>
                <div class="inline">
                  <button type="submit" class="btn-sm btn-outline-dark mx-1">
                    <i class="fas fa-check-square submitButton"></i>
                  </button>
                  <button
                    @click="editTaskDetails = !editTaskDetails"
                    class="btn-sm btn-outline-dark"
                  >
                    <i class="fas fa-times"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div
            class="inline"
            v-if="showTaskDetails"
            @mouseover="showTaskDetails = true"
            @mouseleave="showTaskDetails = false"
          >
            <i
              @click="showComments = !showComments, setActiveList(editedTask), setActiveTask(editedTask)"
              class="fas fa-caret-down ml-1"
            ></i>
            <i @click="addSubCommentForm = !addSubCommentForm" class="fas fa-comment-medical ml-4"></i>
            <i @click="removeTask(editedTask)" class="far fa-trash-alt ml-2"></i>
          </div>
        </li>

        <div v-if="showComments">
          <div v-for="comment in taskData.subComments" :key="comment._id">
            <comments :commentData="comment" :taskId="taskData._id"></comments>
          </div>
        </div>

        <form @submit.prevent="addComment" v-if="addSubCommentForm">
          <input required v-model="newComment.description" type="text">
          <button
            @click="addSubCommentForm = false"
            type="submit"
            class="btn-sm btn-outline-dark mx-1"
          >
            <i class="fas fa-check-square"></i>
          </button>
        </form>
      </ul>
    </div>
  </drag>
</template>

<script>
import comments from "@/components/CommentComp.vue";
export default {
  mounted() {},
  name: "task",
  props: ["taskData"],
  data() {
    return {
      editedTask: {
        completed: this.taskData.completed,
        description: this.taskData.description,
        listId: this.taskData.listId,
        _id: this.taskData._id,
        boardId: this.$route.params.boardId,
        subComments: this.taskData.subComments
      },
      newComment: {
        description: "",
        authorId: this.taskData.authorId
      },
      showTaskDetails: false,
      editTaskDetails: false,
      addSubCommentForm: false,
      showComments: false,
      showCommentDelete: false
    };
  },
  computed: {
    //this may not work...
    tasks() {
      return this.$store.state.tasks[this.editedTask._id];
    }
    // subcomments() {
    //   debugger
    //   return this.$store.state.tasks[this.editedTask.subComments]
    // }
  },
  methods: {
    markComplete(editedTask) {
      this.$store.dispatch("editTask", editedTask);
    },
    editTask(editedTask) {
      this.$store.dispatch("editTask", editedTask);
      this.editTaskDetails = false;
      this.newComment = {};
    },
    addComment() {
      this.editedTask.subComments.push(this.newComment);
      this.editTask(this.editedTask);
      event.target.reset();
    },
    removeTask(editedTask) {
      this.$store.dispatch("deleteTask", editedTask);
      this.showTaskDetails = false;
    },
    deleteComment(editedTask) {
      this.$store.dispatch("deleteComment", editedTask);
    },
    setActiveList(payload) {
      this.$store.dispatch("setActiveList2", payload);
    },
    setActiveTask(taskData) {
      this.$store.dispatch("setActiveTask", taskData);
    }

    // addComment(editedTask) {
    //   debugger
    //   this.$store.dispatch('editTask', editedTask)
    // }
  },
  components: {
    comments
  }
};
</script>
<style>
.task {
  cursor: pointer;
}

.completed {
  text-decoration: line-through;
  color: darkslategrey;
}

li {
  list-style: none;
}

.inline {
  display: inline-block;
}

.small-x {
  cursor: pointer;
}
</style>