<template>
  <div class="blog-details container-fluid">
    <div class="row justify-content-center">
      <div class="col-10 bg-light rounded my-2">
        <img :src="blog.imgUrl" class="rounded my-2 shadow img-fluid" />
        <h3>{{blog.title}}</h3>
        <small class="text-muted">Plublished: {{blog.createdAt}}</small>
        <div>
          <span>
            <img :src="blog.creator.picture" alt="Avatar" class="avatar m-2" />
          </span>
          <small>- {{blog.creator.name}}</small>
        </div>
        <p>{{blog.body}}</p>
        <h5>Comments</h5>
        <comment v-for="comment in comments" :commentData="comment" :key="comment._id"></comment>
        <create-comment v-if="$auth.isAuthenticated"></create-comment>
      </div>
    </div>
  </div>
</template>

<script>
import comment from "../components/comment.vue";
import createComment from "../components/createComment.vue";
export default {
  name: "blogDetails",
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("getBlog", this.$route.params.blogId);
  },
  computed: {
    blog() {
      return this.$store.state.activeBlog.blog;
    },
    comments() {
      return this.$store.state.activeBlog.comments;
    }
  },
  methods: {},
  components: {
    comment,
    createComment
  }
};
</script>


<style scoped>
.avatar {
  vertical-align: middle;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>