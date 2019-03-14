<template>
  <div class="comments ml-5">
    <p @mouseover="showCommentDelete = true" @mouseleave="showCommentDelete = false" class="inline mr-2">{{commentData.description}}
      <i v-if="showCommentDelete" @click="deleteComment()" class="fas fa-times inline small-x ml-1"></i></p>
  </div>
</template>

<script>
  export default {
    name: "comments",
    props: ["commentData", "taskId"],
    data() {
      return {
        showCommentDelete: false
      }
    },
    computed: {
      activeList() {
        return this.$store.state.activeList
      },
      activeTask() {
        return this.$store.state.activeTask
      }
    },
    methods: {
      deleteComment() {
        let payload = {
          listId: this.activeList._id,
          boardId: this.activeList.boardId,
          taskId: this.taskId,
          commentId: this.commentData._id
        }
        this.$store.dispatch('deleteComment', payload)
      }
    },
    components: {}
  }
</script>