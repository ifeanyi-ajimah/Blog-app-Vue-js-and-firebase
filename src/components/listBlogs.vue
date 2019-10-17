<template>
<div v-theme:column="'narrow'" id="show-blogs">
    <h1> List BLOG Titles only. </h1>
    <input type="text" v-model="search" placeholder="Search blogs"/>

    <div v-for="blog in filteredBlogs" :key="blog.id" class="single-blog"> 
        <h2 v-rainbows > {{ blog.title | to-lowerCase }}   </h2>
        <br>
    </div>

</div> 
</template>

<script>

import searchMixin from '../mixins/searchMixin';
export default {
  data(){
    return {
      blogs: [],
      search:'',
     
    }
},

methods:{
    
},

created(){
     this.$http.get('https://jsonplaceholder.typicode.com/posts')
     .then(function(data){
         //console.log(data)
        this.blogs =  data.body.slice(0,15);
     })
    },

    computed: {
       
    },

    //registering filters locally. 
    filters:{
        'to-lowerCase':function(value){
            return value.toLowerCase();
        }
    },
    
    //registering directives locally. 
    directives:{
        'rainbows' : {
            bind(el, binding,vnode){
           el.style.color =  "#" + Math.random().toString().slice(2,8);
        }
    }
    },

    //used mixins for search filter. thats coding it once and using it severally.
    mixins: [searchMixin]


}
</script>

<style scoped>

#show-blogs{
    max-width: 800px;
    margin: 0 auto;
}

.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}


</style>



