<template>
    <div id="add-blog">
        <h2> Add a New Blog Post</h2>
        <form v-if="!submitted">
            <label>Blog Title:</label>
            <!--lazy is an input modify-->
            <input type ="text"  v-model.lazy="blog.title" required/>
            
            <label>Blog Content</label>
            <textarea v-model.lazy="blog.content"></textarea>
 
            <div id="checkboxes">
            <input type="checkbox" value="Lifestyle" v-model.="blog.categories"/>
            <label>Lifestyle</label>
            <input type="checkbox" value="Anxiety" v-model="blog.categories"/>
            <label>Anxiety</label>
            <input type="checkbox" value="Depression" v-model="blog.categories"/>
            <label>Depression</label>
            <input type="checkbox" value="Addiction" v-model="blog.categories"/>
            <label>Addiction</label> 
            <input type="checkbox" value="Happiness" v-model="blog.categories"/>
            <label>Happiness</label>
            </div>

            <label>Genre/Type</label>
            <select v-model="blog.genre">
           <option v-for="genre in genres">{{genre}}</option>
           </select>
           <br>
           <div id="postBlog" >

           <button v-on:click.prevent="post"> Add Blog</button>
           </div>
        </form>

        <div id="thanksMessage" v-if="submitted">
        <h3>Thanks for adding your post!!</h3>
        </div>

        <div id="previewBlog">
        <h3>Preview Blog</h3>
        <p>Blog title: {{blog.title}}</p>
        <p>Blog Content:</p>
        <p>{{blog.content}}</p>
        <p>Blog Categories:</p>
        <ul>
        <li v-for="category in blog.categories">{{category}}</li>
        </ul>
        <p>Genre:{{blog.genre}}</p>
        </div>
    </div>

</template>
    
<script>
export default {
    data(){
        return{
            blog:{
            title:"",
            content:"",
            categories:[],
            genre:"",
            genres:['Article','Song', 'Poem'],
            },
            submitted:false,
        }
    },
    //fake jason server to store user inputs
    methods:{
        post:function(){
            this.$http.post('https://blog-project-848c9.firebaseio.com/posts.json',this.blog)
            .then(function(data){
                console.log(data);

                this.submitted = true;
            });
        }
    }
    
}

</script>

<style>
#add-blog*{
    margin:20px auto;
    max-width:500px;
}
#add-blog{
   margin:20px auto;
    max-width:500px;
}
label{
    display:block;
    margin:20px 0 10px;
}
input[type="text"], textarea{
    display:block;
    width:100%;
    padding:8px;
}
#previewBlog{
    padding:10px 20px;
    border:1px dotted #ccc;
    margin:30px 0;
}
h3{
    margin-top:10px;
}
#checkboxes input{
    margin-right:10px;
    display:inline-block;
   
}
#checkboxes label{
    display:inline-block;
    font-size:20px;
}
#postBlog{
  padding-left:150px;
  padding:20px;


}
button{
    margin:2px;
    color:black;
    background: grey;
    outline:none;
    display:block;
    border-radius:3px;
    
}
button:hover{
    cursor:pointer;
}
#thanksMessage{
    color:Purple;

}



</style>