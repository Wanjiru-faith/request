<template>
  <div>
  <!--nesting-->
  <app-header></app-header>
  <router-view />
  
  </div>
</template>
    
<script>
// import addBlog from '../src/components/addBlog.vue';
// import showBlog from '../src/components/showBlog.vue';
// import listBlogs from '../src/components/listBlogs.vue';
import header from '../src/components/header.vue';

export default {
  //register component
    components:{
        // 'add-blog':addBlog,
        // 'show-blog':showBlog,
        // 'list-blogs':listBlogs,
        'app-header':header 
    },
    data(){
        return{
 
        }
    },
    methods:{
        
    }
}
</script>



<style>
body{
  margin:0;
  font-family:'Ninito SemiBold';
}

</style>

