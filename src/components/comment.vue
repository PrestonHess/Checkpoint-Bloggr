<template>
  <div class="comment">
    <ul v-if="!editing">{{commentData.body}}  -{{commentData.creator.name}} </ul>
    <div v-else>
      <form>
        <div class="form-group">
          <input type="text"
            class="form-control" name="body" v-model="commentData.body" aria-describedby="helpId">
          <button type="submit" @click.prevent="editComment()">Save</button>
        </div>
      </form>
    </div>
    <div v-if="commentData.creatorEmail == this.$auth.userInfo.email">
    <span><button type="button" class="btn btn-danger" @click.prevent="deleteComment()">Delete</button></span>
    <button type="button" class="btn btn-danger" @click="editing = !editing">Edit</button>
    </div>
  </div>
</template>


<script>
export default {
  name: 'comment',
  props: ['commentData'],
  data(){
    return {
      editing : false,
      commentData: {

      }
    }
  },
  computed:{},
  methods:{
    deleteComment() {
      this.$store.dispatch('deleteComment', this.commentData)
    },
    editComment() {
      this.$store.dispatch('editComment', this.commentData)
      this.editing = false;
    }
  },
  components:{}
}
</script>


<style scoped>

</style>