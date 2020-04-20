<template>
  <div class="blog">
    <div class="card m-3" @click="selectBlog()">
    <!-- <img class="card-img-top img-fluid" :src="blogData.imgUrl"> -->
    <div class="card-body" >
      <h5 class="card-title">{{blogData.title}}</h5>
      <p class="card-text">{{blogData.body}}</p>
      <small>- {{blogData.creator.name}}</small>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'blog',
  props: ['blogData'],
  data(){
    return {}
  },
  computed:{
    
  },
  methods:{
    selectBlog() {
      this.$store.commit('setActiveBlog', {});
      this.$router.push({
        name: "BlogDetails",
        params: { blogId: this.blogData._id }
      })
    }
  },
  components:{}
}
</script>


<style scoped>

</style>