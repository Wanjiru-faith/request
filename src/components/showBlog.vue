<template>
<!--wide is a string pass it in single quotations -->
  <div v-theme:column ="'wide'" id="show-blog">
  
  <h1>All Blog Article</h1>
  <input type="text" v-model="search" placeholder="search blog">
  <div v-for="blog in  filteredBlogs" class="single-Blog">
  <router-link v-bind:to="'/blog/' + blog.id">
  <h2>{{blog.title | to-uppercase}}</h2>
  </router-link>
  <article>{{blog.content | snippet}}</article>
  </div>

  </div>
</template>

<script>
import searchMixin from '../assets/mixins/searchMixin.js';

export default {
    
  //register component
    components:{
        
    },
    data(){
        return{
            blogs:[],
            search:[]

        }
    },
    methods:{
        
    },
    created(){
        this.$http.get('https://blog-project-848c9.firebaseio.com/posts.json').then(function(data){
            return data.json();
        }).then(function(data){
            var blogsArray = [];
            for (let key in data){
                data[key].id = key
                blogsArray.push(data[key]);
            }
            this.blogs = blogsArray
            console.log(blogsArray);

        }) 
    },
    computed:{
        
    },
    //regitering filters locally
     filters:{
         toUppercase(value){
             return value.toUpperCase(); 
         },
         snippet(value){
         return value.slice(0,100) + '...';
         }
     },
     //registering the rainbow directive locally
     directives:{
         'rainbow':{
             bind(el,binding,vnode){
                 el.style.color = "#" + Math.random().toString().slice(2,8);

             }
         }
     },
     mixins:[searchMixin]
}
</script>
<style>
#show-blog{
    max-width:800px;
    margin:0 auto;
}
.single-Blog{
    padding:20px;
    margin:20px 0;
    box-sizing: border-box;
    background:#eee;
}

</style>