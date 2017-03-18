<template lang="jade">
  div#side-nav
    div.header
      div.rectangle
      router-link(to="/") Flower

    div.items
      router-link(:to="item.route", tag="div", v-for="item in items").item
        a {{item.name}}


</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'SideNav',
  data(){
    return {
      items: [
        {name: 'Products', route: '/products'},
        {name: 'Company', route: '/company'},
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>

weird-green = #3ed783

#side-nav
  width 100%
  height 100%
  background-color #f6f8ff

  .header
    display flex
    flex-basis 100%
    align-items center
    height 60px
    border-bottom solid 1px #e7eaf3
    margin-bottom 60px

    .rectangle
      width 30px
      height 30px
      border-top-right-radius 6px
      border-bottom-right-radius 6px
      background-color weird-green
      margin-right 10px


    a
      font-size 14px
      font-weight 600
      color #1f2532



  .items
    display flex
    flex-wrap wrap
    padding-left 24px
    padding-right 24px

    .item
      padding 16px
      display flex
      flex-basis 100%
      margin-bottom 16px
      transition all .25s ease-in-out

      &.router-link-active
        border-radius 4px
        background-color #d3d9ee
        box-shadow inset 0 -2px 0 0 rgba(0, 0, 0, 0.08)

        a
          color #4f5460

      a
        font-size 14px
        font-weight 600
        color #959bb4

      .sub-item
        display flex
        flex-basis 100%


</style>
