<template>
    <div id="post">
            <div class="main-wrapper">
                <article class="blog-post px-3 py-5 p-md-5">
                    <div class="container">
                        <header class="blog-post-header">
                            <h2 class="title mb-2">{{blog.title}}</h2>
                            <div class="meta mb-3"><span class="update-date">最后修改: {{blog.updateTime}}</span><span class="comment"><a href="#">{{blog.commentNum}} comments</a></span></div>
                        </header>
                        
                        <div class="blog-post-body" v-html="blog.content">
                        </div>
                        <div>
                            <textarea id="textarea" v-model="text">
                            </textarea>
                            <p>
                                {{text}}
                            </p>
                        </div>
                    </div>
                </article>
            </div><!--//main-wrapper-->
    
    </div>
</template>

<script>
import $ from 'jquery'
import hljs from 'highlight.js'
import showdown from 'showdown'

export default {
    data() {
        return {
            id: this.$route.params.id,
            blog: {},
            text: "",
            list: [{
                    id: 1,
                    title: "Why Every Developer Should Have A Blog",
                    updatedate: "2 months",
                    commentNum: 8,
                    content: `# 标题1
## 标题2
# 标题1
## 标题2
### 标题3
![image](https://upload-images.jianshu.io/upload_images/2789632-924fcedc08fa0a58.png?imageMogr2/auto-orient/strip|imageView2/2/w/342/format/webp)
1. 啊啊啊
    * aa
    * bb
2. 巴巴爸爸

* **加粗**字体
* 列表

> 标注`,
                    textType: "markdown"
                },
                {
                    ID: 2,
                    title: "Title 2",
                    updatedate: "3 days",
                    commentNum: 8,
                    content: `
                        <p>This is Post 2</p>
                    `,
                    textType: "text"
                }]
        };
    },
    created() {
        this.getData();
    },
    methods: {
        getData() {
            var val = this.list[this.id - 1];
            if (val.textType == "markdown") {
                var converter = new showdown.Converter();
                val.content = converter.makeHtml(val.content);
            }
            this.blog = val;
            // this.$api.get("blog/" + this.id, null, r => {
            //     this.blog = r.data.result;
            // });
        },
        showtext() {
            alert(this.text);
        }
    },
    watch: {
        $route(to) {
        this.dat = {};
        this.isShow = true;
        this.id = to.params.id;
        this.getData();
        }
    }
}

/**
 *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT 
 *  THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR 
 *  PLATFORM OR CMS.
 *  
 *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: 
 *  https://disqus.com/admin/universalcode/#configuration-variables
 */
/*
var disqus_config = function () {
    // Replace PAGE_URL with your page's canonical URL variable
    this.page.url = PAGE_URL;  
    
    // Replace PAGE_IDENTIFIER with your page's unique identifier variable
    this.page.identifier = PAGE_IDENTIFIER; 
};
*/

$(document).ready(function() {  // REQUIRED CONFIGURATION VARIABLE: EDIT THE SHORTNAME BELOW
    var d = document, s = d.createElement('script');
    
    // IMPORTANT: Replace 3wmthemes with your forum shortname!
    s.src = '';
    
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);

    $('pre code').each(function(i, block) {
	    hljs.highlightBlock(block);
	 });
});
</script>