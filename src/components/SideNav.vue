<template lang="jade">
  div#side-nav
    div.header
      h1
        router-link(to="/") Flower

    div.items
      div.item(v-for="item in items")
        router-link(:to="item.route") {{item.name}}
        
    
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'SideNav',
  data(){
    return {
      items: [
        {name: 'Products', route: '/products'},
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>

#side-nav 
  width 100%
  height 100%
  background-color #f6f8ff

  .header
    display flex
    flex-basis 100%
    align-items center
    height 40px
    padding-left 12px
    border-bottom solid 1px #e7eaf3
    margin-bottom 60px 
    
    h1 
      font-weight normal

      a 
        text-decoration none
        font-size .8em

  .items
    display flex
    flex-wrap wrap

    .item
      padding-left 12px
      display flex
      flex-basis 100%

      .sub-item
        display flex
        flex-basis 100%


</style>
