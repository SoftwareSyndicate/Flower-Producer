<template lang="html">
  <div id="app">
    <div class="left">
      <side-nav></side-nav>
    </div>
    
    <div class="right">
      <div class="breadcrumbs-container">
        <breadcrumbs :crumbs="crumbs"></breadcrumbs>
      </div>
      
      <transition name="fade" mode="out-in">
        <router-view class="view" v-on:set-crumbs="setBreadCrumbs"></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import SideNav from 'components/SideNav'
import BreadCrumbs from 'components/BreadCrumbs'
export default {
  name: 'App',
  components: {
    'side-nav': SideNav,
    'breadcrumbs': BreadCrumbs
  },
  data(){
    return {
      crumbs: []
    }
  },
  methods: {
    setBreadCrumbs(crumbs){
      this.crumbs = crumbs;
    }
  }
}
</script>

<style lang="stylus">

html
  height 100%


body 
  margin 0
  background-color #fff
  height 100%

h1, h2, h3, h4, h5, h6, p, a, span
  margin 0px
  padding 0px
  color rgba(0, 0, 0, .5)
  font-weight normal
  text-decoration none

#app 
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  display flex
  height 100%
  
  .left
    flex-basis 20%
    height 100%
    border-right solid 1px #e7eaf3
    
  .right
    flex-basis 80%

    .breadcrumbs-container
      border-bottom solid 1px #e7eaf3
    
    .fade-enter-active, .fade-leave-active 
      transition all .2s ease

    .fade-enter, .fade-leave-active
      opacity 0

    .view
      margin 0 auto
      position relative
      padding 30px
      
</style>
