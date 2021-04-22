<template>
  <div class="blogPost col-md-3 mb-4">
    <div class="card">
      <img :src="blog.imgUrl" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">
          {{ blog.title }}
        </h5>
        <a href="#" class="btn btn-primary">Read Blog</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogPost',
  props: {
    blog: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
