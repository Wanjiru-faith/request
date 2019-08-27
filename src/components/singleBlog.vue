<template>
<div id="single-blog">
<h1 >{{blog.title}}</h1>
<article>{{blog.content}} {{id}}</article>
<p>Genre:{{blog.genre}}</p>
<ul>
<li v-for="category in blog.categories"> {{category}} </li>

</ul>


</div>

</template> 

<script>
export default{
    data(){
        return{
            id:this.$route.params.id,
            blog:{}
        }
    },
    created(){
        console.log(this.$route.params)
        this.$http.get('https://blog-project-848c9.firebaseio.com/posts/' + this.id + '.json')
        .then(function(data){
            return data.json();  
        }).then(function(data){
            this.blog =data;
            console.log(data);
        });
    }
}

</script>
<style>
#single-blog{
    max-width:960px;
    margin: 0 auto;
}

</style>
