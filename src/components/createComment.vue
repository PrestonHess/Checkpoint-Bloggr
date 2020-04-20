<template>
  <div class="create-comment">
    <form @submit.prevent="createComment()">
      <div class="form-group">
        <input type="text" name="body" v-model="newComment.body" class="form-control" required placeholder="Comment on this blog.." aria-describedby="helpId">
      </div>
      <span>
        <button type='sumbit' class="btn btn-secondary">Comment</button>
      </span>
    </form>
  </div>
</template>


<script>
export default {
  name: 'create-comment',
  data(){
    return {
      newComment : {}
    }
  },
  computed:{
    activeBlogId() {
      return this.$store.state.activeBlog.blog._id;
    }
  },
  methods:{
    createComment() {
      this.newComment.blogId = this.activeBlogId;
      this.$store.dispatch('addComment', this.newComment);
      this.newComment = {};
    }
  },
  components:{}
}
</script>


<style scoped>

</style>