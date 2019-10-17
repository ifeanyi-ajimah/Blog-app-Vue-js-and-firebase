<template>
<div class="single-blog">
    <h1> {{ blog.title | to-upperCase }}</h1>

    <article> {{ blog.body }}</article>
</div>

  
</template>

<script>
//import { log } from 'util';


export default {

  components: {
    
  },
  data(){
    return {
      id: this.$route.params.id,
      blog:{},
    }
},

methods:{

},
created(){
    // ES6 -- this.$http.get(`http://jsonplaceholder.typicode.com/posts/${this.id}`).then(function(data){
    this.$http.get('http://jsonplaceholder.typicode.com/posts/' + this.id).then(function(data){
        //console.log(data);
        this.blog = data.body;
    });
},

filters:{
        'to-upperCase':function(value){
            return value.toUpperCase();
        }
    },

}
</script>

<style  scoped>

.single-blog{
    max-width: 960px;
    margin: 0 auto;
}

</style>



