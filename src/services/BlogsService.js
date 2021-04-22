import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class BlogsService {
  async getAll() {
    const res = await api.get('/api/blogs')
    AppState.blogs = res.data
  }

  async create(data) {
    logger.log(data)
    await api.post('api/blogs', data)
    this.getAll()
  }

  async getBlogsById() {
    const res = await api.get('/account/blogs')
    AppState.myBlogs = res.data
  }
}

export const blogsService = new BlogsService()
