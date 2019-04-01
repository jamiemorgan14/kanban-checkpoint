<template>
  <div class="board">
    <div class="row text-center boards-view">
      <div class="col-sm-12 mt-1">
        <i @click="goBack" class="far fa-caret-square-left d-flex justify-content-start mt-2 back"></i>
        <h1 class="text-light mt-1">{{board.title}}</h1>
        <div class="row board-details">
          <div class="col-12 text-center mb-1">
            <h4 class="sub-desc">"{{board.description}}"</h4>
          </div>
        </div>
        <form @submit.prevent="addList">
          <input type="text" placeholder="Create a List" v-model="newList.title" required>
          <br>
          <button type="submit" class="btn btn-outline-light mt-3">Create List</button>
        </form>
      </div>
    </div>

    <div class="row">
      <list class="col-sm-12 col-md-4 mt-4" v-for="list in lists" :listData="list"></list>
    </div>
    <div>
      <oneList data-toggle="modal"></oneList>
    </div>
  </div>
</template>

<script>
import list from "@/components/ListComp.vue";
import oneList from "@/components/OneList.vue";
import router from "@/router.js";

export default {
  name: "board",
  created() {
    //blocks users not logged in
    if (!this.$store.state.user._id) {
      this.$router.push({ name: "login" });
    } else {
      this.$router.push({ name: "board", params: { boardId: this.boardId } });
    }
  },
  data() {
    return {
      newList: {
        title: "",
        boardId: this.$route.params.boardId,
        authorId: this.$store.state.user._id
      },
      showOpenView: false
    };
  },
  mounted() {
    this.$store.dispatch(
      "getLists",
      this.$route.params.boardId || this.newList.boardId
    );
    this.$store.dispatch("setActiveBoard", this.newList.boardId);
  },
  computed: {
    board() {
      return (
        this.$store.state.boards.find(b => b._id == this.boardId) || {
          title: "Loading..."
        }
      );
    },
    lists() {
      return this.$store.state.lists;
    },
    user() {
      return this.$store.state.user;
    },
    activeList() {
      return this.$store.state.activeList;
      if (this.$store.state.activeList) {
        this.showOpenView;
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
      this.$store.dispatch("addList", this.newList);
      //this only works for one list then won't post the second
      this.newList = { title: "" };
    },
    goBack() {
      this.$store.dispatch("goBack");
    }
  }
};
</script>

<style scoped>
.board {
  color: black;
}

input {
  height: 50px;
  width: 400px;
  text-align: center;
  border: 1px solid rgba(224, 224, 224, 0.473);
  border-radius: 3%;
}

.board-details {
  bottom: 20px;
}

.sub-desc {
  color: lightgoldenrodyellow;
}

.back {
  color: white;
  cursor: pointer;
}
</style>