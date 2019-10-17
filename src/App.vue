<template>

  <div id="app">
    <blog-header></blog-header>
    <router-view></router-view>

<!--     
    <add-blog> </add-blog>
    <show-blogs> </show-blogs>
    <br>
    <list-blogs></list-blogs> -->
  </div>
</template>

<script>


// import addBlog from './components/addBlog.vue'
// import showBlogs from './components/showBlogs.vue'
// import listBlogs from './components/listBlogs.vue'
import header from './components/header.vue'

export default {
  //name: 'app',
  components: {
    // 'add-blog' : addBlog,
    // 'show-blogs' : showBlogs, 
    // 'list-blogs': listBlogs,
    'blog-header' : header,
  },
  data(){
    return {
      //title:  'Dynamic title'
     
    }
},

}
</script>

<style >

body{
  margin:0;
  font-family: 'Nunito SemiBold';
}

</style>



