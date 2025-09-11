import api from './index'

// 获取首页文章
export const getPosts = () => {
  return api.get('/posts')
}

// 获取分类
export const getCategories = () => {
  return api.get('/categories')
}

// 获取热门文章
export const getPopularPosts = () => {
  return api.get('/posts/popular')
}

// 获取标签
export const getTags = () => {
  return api.get('/tags')
}

// 获取文章详情
export const getPostById = (data:any) => {
  return api.post('/posts/detail', data)
}