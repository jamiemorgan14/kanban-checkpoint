<template>
  <div class="boards row">
    <div class="col-12 text-center text-light">
      <h1>All of your Boards, all in one place</h1>
    </div>
    <div class="col-12 text-center">
      <form @submit.prevent="addBoard">
        <input type="text" placeholder="title" v-model="newBoard.title" required>
        <input type="text" placeholder="description" v-model="newBoard.description" class="ml-1"><br>
        <button type="submit" class="btn btn-outline-light mt-3">Create Board</button>
      </form>
      <hr>
    </div>

    <div class="col-sm-12 col-md-4" v-for="board in boards" :key="board._id">

      <router-link :to="{name: 'board', params: {boardId: board._id}}">
        <div class="card">
          <div class="d-flex justify-content-between mt-2 mx-2">

            <i @click="deleteBoard(board._id)" class="far fa-trash-alt ml-2"></i>
          </div>
          <hr>
          <div class="card-body text-center mt-2">
            <h5 class="card-title">{{board.title}}</h5>
            <h6 class="card-subtitle text-muted sub-desc">{{board.description}}</h6>
          </div>
        </div>
      </router-link>


    </div>
  </div>
</template>

<script>
  import router from '@/router.js'
  export default {
    name: "boards",
    created() {
      //blocks users not logged in
      if (!this.$store.state.user._id) {
        this.$router.push({ name: "login" });
      } else {
        this.$router.push({ name: "boards" })
      }
    },
    mounted() {
      this.$store.dispatch("getBoards");
    },
    data() {
      return {
        newBoard: {
          title: "",
          description: ""
        }
      };
    },
    computed: {
      boards() {
        return this.$store.state.boards;
      }
    },
    methods: {
      addBoard() {
        this.$store.dispatch("addBoard", this.newBoard);
        this.newBoard = { title: "", description: "" };
      },
      deleteBoard(boardId) {
        this.$store.dispatch("deleteBoard", boardId);
      }
    }
  };
</script>
<style scoped>
  input {
    height: 50px;
    width: 400px;
    text-align: center;
    border: 1px solid rgba(224, 224, 224, 0.473);
    border-radius: 3%
  }

  .boards {
    color: black
  }

  .card {
    height: 220px;
    background-color: rgba(30, 43, 49, 0.514);
    color: white
  }

  .far {
    cursor: pointer
  }

  .sub-desc {
    color: lightgoldenrodyellow
  }
</style>