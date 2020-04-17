<template>
  <div class="home">
    <h1>Welcome</h1>
    <Blog v-for="blog in blogs" :blogData='blog' :key="blog._id"></Blog>
    <p v-if="$auth.isAuthenticated">Show if isAuth</p>
    <createBlog v-if="$auth.isAuthenticated"></createBlog>
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
