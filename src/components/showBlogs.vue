<template>
<div v-theme:column="'narrow'" id="show-blogs">
    <h1> All Blog Articles</h1>
    <input type="text" v-model="search" placeholder="Search blogs"/>

    <p> Vue Directives are used by adding v- before the command eg v-for, v-bind, v-model. We can make a custom directive. v-rainbow is a custom directive</p>
    <p>Filters are used to chang the output of data to a browser. it doesn't change the actual data. it only changes the output</p>
    <p>For example, to-uppercase is a filter that converts the blog titles to uppercase also, snippet is a filter we made, to reduce articles to 100 strings. </p>
    <p> Mixing is a chunk of code that we can use over and over in different places. We ll be changing our search query to mixing so that we can use it in other places too</p>
    <p> when styling for active links, use the exact keyword to check for exactly a link that is active, check the header component to see example.</p>
    <div v-for="blog in filteredBlogs" :key="blog.id" class="single-blog"> 
       <router-link v-bind:to="'/blog/' + blog.id"> <h2 v-rainbow > {{ blog.title | to-uppercase }}</h2> </router-link>
        <article> {{ blog.body | snippet }} </article>
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
        // filteredBlogs:function(){
        //     return this.blogs.filter((blog)=>{
        //         return blog.title.match(this.search);
        //     });
        // }
    },
    //registering filters locally. (Although not used).
    /*filters:{
        'to-lowerCase':function(value){
            return value.toUpperCase();
        }
    },
    //registering directives locally. (Although not used).
    directives:{
        'rainbows' : {
            bind(el, binding,vnode){
           el.style.color =  "#" + Math.random().toString().slice(2,8);
        }
    }
    },*/
    
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



