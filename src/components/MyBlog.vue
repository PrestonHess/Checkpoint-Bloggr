<template>
  <div class="myblog shadow">
    <div class="card m-3">
      <img class="card-img-top img-fluid" :src="blogData.imgUrl" @click="selectBlog()"/>
      <div class="card-body">
        <div v-if="!editing">
          <h5 class="card-title">{{blogData.title}}</h5>
          <p class="card-text">{{blogData.body}}</p>
        </div>
        <div v-else>
          <form class="form">
            <div class="form-group">
              <label for="title" class="mr-2">Article Title</label>
              <input
                type="text"
                v-model="blogData.title"
                class="form-control"
                required
                aria-describedby="helpId"
              />
            </div>
            <br />
            <div class="form-group">
              <label for="title" class="mr-2">Body</label>
              <input
                type="text"
                v-model="blogData.body"
                class="form-control"
                required
                aria-describedby="helpId"
              />
            </div>
            <div class="form-group">
              <label for="title" class="mr-2">Image URL</label>
              <input
                type="text"
                v-model="blogData.imgUrl"
                class="form-control"
                required
                aria-describedby="helpId"
              />
            </div>
            <button class="btn btn-danger m-2" @click.prevent="deleteBlog()">Delete</button>
            <button class="btn btn-success m-2" @click.prevent="editBlog()">Save</button>
          </form>
        </div>
      </div>
      <button type="button" class="btn btn-danger" @click.prevent="editing = !editing">Manage</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "myblog",
  props: ["blogData"],
  data() {
    return {
      editing: false,
      blogData: {}
    };
  },
  computed: {},
  methods: {
    selectBlog() {
      this.$store.commit('setActiveBlog', {});
      this.$router.push({
        name: "BlogDetails",
        params: { blogId: this.blogData._id }
      })
    },
    editBlog() {
      this.$store.dispatch("editBlog", this.blogData);
      this.editing = false;
      this.blogData = {};
    },
    deleteBlog() {
      this.$store.dispatch("deleteBlog", this.blogData._id);
    }
  },
  components: {}
};
</script>


<style scoped>
</style>