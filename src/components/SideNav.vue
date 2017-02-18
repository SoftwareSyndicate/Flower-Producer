<template lang="jade">
  div#side-nav
    div.header
      h1
        router-link(to="/") Flower
  
</template>

<script>
export default {
  name: 'SideNav',
  data () {
    return {

    }
  }
}
</script>

<style lang="stylus" scoped>

#side-nav 
  display flex
  width 100%
  height 100%
  background-color: #f6f8ff;

  .header
    display flex
    flex-basis 100%
    align-items center
    height 39px
    padding-left 12px
    border-bottom solid 1px #e7eaf3
    
    h1 
      font-weight normal

      a 
        text-decoration none
        font-size .8em

</style>
