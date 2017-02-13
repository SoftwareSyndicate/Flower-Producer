<template lang="html">
  <div id="app">
    <div class="nav-container">
      <navbar></navbar>
    </div>
  
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<script>
import Navbar from 'components/Navbar'
export default {
  name: 'App',
  components: {
    'navbar': Navbar
  }
}
</script>

<style lang="stylus">

html
  height 100%


body 
  margin 0
  background-color #f6f8ff
  height 100%



h1, h2, h3, h4, h5, h6, p 
  margin 0px
  padding 0px
  color rgba(0, 0, 0, .5)
  font-weight: normal;


button
  color white
  height 30px
  border-radius 2px
  background-color #00e468
  box-shadow inset 0 -1px 0 0 #10c462
  border none
  cursor pointer
  font-size 14px
  line-height: 1em
  


#app 
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  
  .nav-contanier 

  .fade-enter-active, .fade-leave-active 
    transition all .2s ease

  .fade-enter, .fade-leave-active
    opacity 0

  .view
    margin 0 auto
    position relative
      
</style>
