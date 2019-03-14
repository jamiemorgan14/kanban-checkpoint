<template>
  <div class="board mt-2">
    <div class="row">
      <div class="col-sm-12 col-md-3">

        <form @submit.prevent="addList">
          <input type="text" placeholder="title" v-model="newList.title" required>
          <button type="submit">Create List</button>
        </form>
      </div>
      <div class="col-sm-12 col-md-3 offset-2">
        <h1>{{board.title}}</h1>
      </div>
    </div>

    <div class="row">
      <list class="col-sm-12 col-md-4" v-for="list in lists" :listData='list'></list>
    </div>

    <oneList data-toggle="modal"></oneList>
  </div>
</template>

<script>
  import list from '@/components/ListComp.vue';
  import oneList from '@/components/OneList.vue'


  export default {
    name: "board",
    data() {
      return {
        newList: {
          title: "",
          boardId: this.$route.params.boardId,
          authorId: this.$store.state.user._id
        },
        showOpenView: false
      }
    },
    mounted() {
      this.$store.dispatch('getLists', this.$route.params.boardId)
      this.$store.dispatch('setActiveBoard', this.newList.boardId)
    },
    computed: {
      board() {
        return this.$store.state.boards.find(b => b._id == this.boardId) || { title: 'Loading...' }
      },
      lists() {
        return this.$store.state.lists;
      },
      user() {
        return this.$store.state.user
      },
      activeList() {
        return this.$store.state.activeList
        if (this.$store.state.activeList) {
          this.showOpenView
        }

      }
    },
    props: ["boardId"],
    components: {
      list,
      oneList
    },
    methods: {
      addList() {
        this.$store.dispatch('addList', this.newList)
      },
    }

  };
</script>