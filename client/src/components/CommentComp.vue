<template>
  <div class="comments ml-5">
    <p @mouseover="showCommentDelete = true" @mouseleave="showCommentDelete = false" class="inline mr-2">{{commentData.description}}
      <i v-if="showCommentDelete" @click="deleteComment(activeList)" class="fas fa-times inline small-x ml-1"></i></p>
  </div>
</template>

<script>
  export default {
    mounted() {

    },
    name: "comments",
    props: ["commentData"],
    data() {
      return {
        showCommentDelete: false
      }
    },
    computed: {
      activeList() {
        return this.$store.state.activeList
      }
    },
    methods: {
      deleteComment(activeList) {
        debugger
        this.$store.dispatch('deleteComment', activeList)
      }
    },
    components: {}
  }
</script>