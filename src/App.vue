<template>
  <div id="app">
    <Nav />
    <Header>
      <li class="nav-item">
          <router-link to="/" class="nav-link" active-class="active"><i class="fas fa-home fa-fw mr-2"></i>Blog Home <span class="sr-only">(current)</span></router-link>
      </li>
      <li class="nav-item">
          <router-link to="/post" class="nav-link"><i class="fas fa-bookmark fa-fw mr-2"></i>Blog Post</router-link>
      </li>
      <li class="nav-item">
          <a class="nav-link" href="about.html"><i class="fas fa-user fa-fw mr-2"></i>About Me</a>
      </li>
    </Header>
    <router-view/>
    <RightBtnGroup/>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'
import Header from '@/components/Header.vue'
import Config from '@/components/Config.vue'
import Footer from '@/components/Footer.vue'
import RightBtnGroup from '@/components/RightBtnGroup.vue'

export default {
  name: 'app',
  components: {
    Nav,
    Header,
    Config,
    Footer,
    RightBtnGroup
  }
}
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983
</style>
