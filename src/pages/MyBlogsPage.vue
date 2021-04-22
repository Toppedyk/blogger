<template>
  <div class="myBlogsPage">
    <h1>Hello From My BlogsPage</h1>
    <form @submit.prevent="create">
      <div class="form-group">
        <label for="title">Title</label>
        <input type="text"
               class="form-control"
               name="title"
               id="title"
               v-model="state.newBlog.title"
               placeholder="Title..."
               required
        >
      </div>
      <div class="form-group">
        <label for="body">Body</label>
        <input type="text"
               class="form-control"
               name="body"
               id="body"
               v-model="state.newBlog.body"
               placeholder="Body..."
               required
        >
        <div class="form-group">
          <label for="imgUrl">Image Url </label>
          <input type="text"
                 class="form-control"
                 name="imgUrl"
                 id="imgUrl"
                 v-model="state.newBlog.imgUrl"
                 placeholder="Image Url.."
          >
        </div>
      </div>
      <button type="submit" class="btn btn-primary">
        Create Blog
      </button>
    </form>
    <div v-if="state.myBlogs">
      <BlogPost v-for="blog in state.myBlogs" :key="blog.id" :blog="blog" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'
import { AppState } from '../AppState'
import { blogsService } from '../services/BlogsService'
import { accountService } from '../services/AccountService'
import Notification from '../utils/Notification'
export default {

  name: 'MyBlogsPage',
  setup() {
    const route = useRoute()
    const state = reactive({
      newBlog: {},
      account: computed(() => AppState.account),
      user: computed(() => AppState.user),
      activeBlogs: computed(() => AppState.activeBlogs),
      activeProfile: computed(() => AppState.activeProfile),
      myBlogs: computed(() => AppState.myBlogs)
    })
    onMounted(async() => {
      await accountService.getProfile(route.params.id)
      await blogsService.getBlogsById()
    })
    return {
      state,
      async create() {
        try {
          await blogsService.create(state.newBlog)
          state.newBlog = {}
          Notification.toast('Successfully Created', 'success')
        } catch (error) {
          Notification.toast('Error: ' + error, 'error')
        }
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
