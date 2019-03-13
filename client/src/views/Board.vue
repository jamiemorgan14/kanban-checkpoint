<template>
  <div class="board container-fluid mt-2">
    <form @submit.prevent="addList">
      <input type="text" placeholder="title" v-model="newList.title" required>
      <button type="submit">Create List</button>
    </form>
    <div class="row">
      <div class="col mt-3">
        <h1>{{board.title}}</h1>
      </div>
    </div>
    <div class="row">
      <list class="col-4" v-for="list in lists" :listData='list'></list>
    </div>
  </div>
</template>

<script>
  import list from '@/components/ListComp.vue';

  export default {
    name: "board",
    data() {
      return {
        newList: {
          title: "",
          boardId: this.$route.params.boardId,
          authorId: this.$store.state.user._id
        }
      }
    },
    mounted() {
      this.$store.dispatch('getLists', this.$route.params.boardId)
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
      }
    },
    props: ["boardId"],
    components: {
      list
    },
    methods: {
      addList() {
        this.$store.dispatch('addList', this.newList)
      }
    }

  };
</script>