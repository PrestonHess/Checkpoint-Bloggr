<template>
  <div class="home container-fluid">
    <div class="row">
      <createBlog v-if="$auth.isAuthenticated"></createBlog>
    </div>
    <div class="row">
      <div class="card-columns">
        <blog v-for="blog in blogs" :blogData='blog' :key="blog._id"></blog>
      </div>
    </div>
  </div>
</template>

<script>
import Blog from '../components/Blog.vue'
import createBlog from '../components/createBlog.vue'
export default {
  name: "home",
  mounted() {
    this.$store.dispatch('getBlogs')
  },
  computed: {
    blogs() {
      return this.$store.state.blogs
    }
  },
  components: {
    Blog,
    createBlog
  }
};
</script>
