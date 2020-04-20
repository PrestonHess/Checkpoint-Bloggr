<template>
  <div class="about container-fluid text-center">
    <h1>Welcome {{ profile.name }}</h1>
    <img class="rounded" :src="profile.picture" alt="" />
    <p>{{ profile.email }}</p>
    <create-blog></create-blog>
    <h5>Published Blogs</h5>
    <MyBlog v-for="blog in myBlogs" :blogData="blog" :key="blog._id"></MyBlog>
  </div>
</template>

<script>
import createBlog from '../components/createBlog.vue'
import MyBlog from '../components/MyBlog.vue'
export default {
  name: "Profile",
  mounted() {
    this.$store.dispatch('getMyBlogs')
  },
  computed: {
    profile() {
      return this.$store.state.profile;
    },
    myBlogs() {
      return this.$store.state.myBlogs;
    }
  },
  components: {
    MyBlog,
    createBlog
  }
};
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
