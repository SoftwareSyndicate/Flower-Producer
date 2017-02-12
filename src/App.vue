<template lang="jade">
  div#app
    div.nav-container
      navbar
    div.view-container
      transition name="fade" mode="out-in"
        router-view
    
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


#app 
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  
  .nav-contanier 

  .view-container
  
    fade-enter-active, .fade-leave-active 
      transition all .2s ease
      
</style>
