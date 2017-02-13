<template lang="jade">
  div#navbar
    img(src="../assets/flower.svg")
    h1
      router-link(to="/") Flower

    div.left
      router-link(to="/products") Products

  
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {

    }
  }
}
</script>

<style lang="stylus" scoped>

#navbar 
  display flex
  align-items center
  width 100%
  height 70px
  background-color #10c462

  img 
    height 1.8em
    width auto
    margin-left 70px
    margin-right .3em
    color #fff
  
  h1 
    color #fff
    font-weight normal

    a 
      color #fff
      text-decoration none


  .left 
    margin-left auto
    margin-right 70px
    
    a 
      color #fff
      font-size 1.2em
      text-decoration none

</style>
