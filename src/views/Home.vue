<template>
  <div class="home">
    <div class="main-wrapper">
	    <section class="cta-section theme-bg-light py-5">
		    <div class="container text-center">
			    <h2 class="heading">DevBlog - A Blog Template Made For Developers</h2>
			    <div class="intro">Welcome to my blog. Subscribe and get my latest blog post in your inbox.</div>
			    <form class="signup-form form-inline justify-content-center pt-3">
            <div class="form-group">
                <label class="sr-only" for="semail">Your email</label>
                <input type="email" id="semail" name="semail1" class="form-control mr-md-1 semail" placeholder="Enter email">
            </div>
            <button type="submit" class="btn btn-primary">Subscribe</button>
          </form>
		    </div><!--//container-->
	    </section>
	    <div class="tlinks">Collect from <a href="http://www.cssmoban.com/"  title="网站模板">网站模板</a></div>
	    <section class="blog-list px-3 py-5 p-md-5">
		    <div class="container">

			    <div class="item mb-5" v-for="i in list" :key="i.ID">
				    <div class="media">
					    <img class="mr-3 img-fluid post-thumb d-none d-md-flex" :src="i.imageUrl" alt="image">
					    <div class="media-body">
						    <h3 class="title mb-1"><router-link :to="'/post/' + i.ID">{{i.title}}</router-link></h3>
						    <div class="meta mb-1"><span class="date">Published {{i.date}} ago</span><span class="time"> {{i.time}} mins read</span><span class="comment"><a href="#"> {{i.comment}} comments</a></span></div>
						    <div class="intro">{{i.intro}}</div>
						    <a class="more-link" href="blog-post.html">Read more &rarr;</a>
					    </div><!--//media-body-->
				    </div><!--//media-->
			    </div><!--//item-->
			    
			    <nav class="blog-nav nav nav-justified my-5">
				  <a class="nav-link-prev nav-item nav-link d-none rounded-left" href="#">Previous<i class="arrow-prev fas fa-long-arrow-alt-left"></i></a>
				  <a class="nav-link-next nav-item nav-link rounded" href="blog-list.html">Next<i class="arrow-next fas fa-long-arrow-alt-right"></i></a>
				</nav>
				
		    </div>
	    </section>
	    

    
    </div><!--//main-wrapper-->
    
    
    
    
    
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data() {
    return {
      list: [
        {
          ID: 1,
          title: "Why Every Developer Should Have A Blog",
          date: "2 months",
          time: 5,
          comment: 8,
          intro: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies...",
          imageUrl: require("../../static/images/blog/blog-post-thumb-1.jpg")
        },
        {
          ID: 2,
          title: "Title 2",
          date: 3,
          time: 20,
          comment: 8,
          intro: "intro 2",
          imageUrl: require("../../static/images/blog/blog-post-thumb-2.jpg")
        }
      ]
    };
  }
}
</script>
