<template>
  <div class="blog-details container-fluid">
    <div class="row justify-content-center">
      <div class="col-8 text-center">
        <img :src="blog.imgUrl" class="m-3 image-fluid">
        <h3> {{blog.title}} </h3>
        <p> {{blog.body}} </p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'blogDetails',
  data(){
    return {}
  },
  created() {
    this.$store.dispatch('getBlog', this.$route.params.blogId)
  },
  computed:{
    blog() {
      return this.$store.state.activeBlog.blog;
    }
  },
  methods:{},
  components:{}
}
</script>


<style scoped>

</style>