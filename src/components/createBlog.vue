<template>
  <div class="createBlog">
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-primary btn-lg m-2"
      data-toggle="modal"
      data-target="#modelId"
    >Post Blog</button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="modelId"
      tabindex="-1"
      role="dialog"
      aria-labelledby="modelTitleId"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Create Blog</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div class="modal-body">
            <form @submit.prevent="createBlog()">
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  name="title"
                  v-model="newBlog.title"
                  aria-describedby="helpId"
                  placeholder="Title"
                  required
                />
              </div>
              <div class="form-group">
                <small id="helpId" class="form-text text-muted mb-1">Blog it out</small>
                <textarea
                  name="body"
                  v-model="newBlog.body"
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="8"
                  required
                ></textarea>
              </div>
              <div class="form-group">
                <small id="helpId" class="form-text text-muted mb-1">Add an image to your blog</small>
                <input
                  type="text"
                  name="imgUrl"
                  class="form-control"
                  placeholder="Enter image url..."
                  aria-describedby="helpId"
                  v-model="newBlog.imgUrl"
                />
              </div>
              <button type="sumbit" class="btn btn-primary mx-1">Publish</button>
              <button type="button" class="btn btn-secondary mx-1" data-dismiss="modal">Close</button>
            </form>
          </div>
          <div class="modal-footer">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "createBlog",
  data() {
    return {
      newBlog: {}
    };
  },
  methods: {
    createBlog() {
      this.$store.dispatch('postBlog', this.newBlog)
      this.newBlog = {};
    }
  }
};
</script>


<style scoped>
</style>