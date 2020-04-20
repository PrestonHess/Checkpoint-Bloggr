import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import { api } from "./AxiosStore";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: {},
    blogs: [],
    activeBlog: {},
    myBlogs: []
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setBlogs(state, blogs) {
      state.blogs = blogs;
    },
    setActiveBlog(state, activeBlog) {
      state.activeBlog = activeBlog;
    },
    setMyBlogs(state, myBlogData) {
      state.myBlogs = myBlogData
    }
  },
  actions: {
    setBearer({}, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    async getProfile({ commit }) {
      try {
        let res = await api.get("profile");
        commit("setProfile", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getBlogs({dispatch, commit}) {
      try {
        let res = await api.get("blogs")
        commit('setBlogs', res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async postBlog({dispatch, commit}, newBlog) {
      try {
        let res = await api.post('blogs', newBlog)
        dispatch('getBlogs')
        dispatch('getMyBlogs')
      } catch (error) {
        console.error(error)
      }
    },
    async getBlog({dispatch, commit}, blogId) {
      try {
        let res = await api.get('blogs/' + blogId)
        commit('setActiveBlog', res.data);
      } catch (error) {
        console.error(error)
      }
    },
    async getMyBlogs({dispatch, commit}) {
      try {
        let res = await api.get('profile/blogs')
        commit('setMyBlogs', res.data)
      } catch (error) {
        console.log(error)
      }
    },
    async addComment({dispatch, commit}, newComment) {
      try {
        await api.post('comments', newComment)
        dispatch('getBlog', newComment.blogId)
      } catch (error) {
        console.error(error)
      }
    },
    async deleteComment({dispatch, commit}, comment) {
      try {
        await api.delete('comments/' + comment._id)
        dispatch('getBlog', comment.blogId)
      } catch (error) {
        console.log(error)
      }
    },
    async editComment({dispatch, commit}, comment) {
      try {
        await api.put('comments/' + comment._id, comment)
        dispatch('getBlog')
      } catch (error) {
        console.log(error)
      }
    },
    async editBlog({dispatch, commit}, blogData) {
      try {
        await api.put('blogs/' + blogData._id, blogData)
        dispatch('getMyBlogs')
      } catch (error) {
        console.log(error)
      }
    },
    async deleteBlog({dispatch, commit}, blogId) {
      try {
        await api.delete('blogs/' + blogId)
        dispatch('getMyBlogs')
      } catch (error) {
        console.error(error)
      }
    }
  },
});

// "Roses are Red, Violets are Blue. Unexpected '{' on line 32. "