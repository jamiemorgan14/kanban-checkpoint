<template>
  <div class="oneList">
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h3 class="modal-title" id="exampleModalLabel">{{activeList.title}}</h3>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <h4 class="ml-1">Tasks:</h4>
            <div v-for="task in activeTasks" class="ml-5">
              <task :taskData="task"></task> <br>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import task from "@/components/taskComp.vue"
  export default {
    name: "oneList",
    props: ["taskData"],
    mounted() {
    },
    data() {
      return {

      }
    },
    computed: {
      activeList() {
        return this.$store.state.activeList
      },
      activeTasks() {
        return this.$store.state.activeTasks
      }
    },
    methods: {},
    components: {
      task
    }
  }
</script>