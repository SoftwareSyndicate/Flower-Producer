<template lang="jade">
  div.breadcrumbs
    div.crumb(v-for="crumb in crumbs")
      router-link(:to="crumb.route") 
        {{crumb.name}}
      img(src="../assets/arrow-left.svg")
</template>

<script>
export default {
  name: 'BreadCrumbs',
  props: {
    crumbs: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
    
    }
  }
}
</script>

<style lang="stylus" scoped>
.breadcrumbs
  background-color rgba(0, 0, 0, .05)
  display flex
  flex-basis 100%
  padding 10px 0px 10px 70px   
  
  .crumb
    display flex
    align-items center
    &:first-child
      margin-right 20px

    &:last-child
      a
        color rgba(0, 0, 0, .9)
      img
        display none

    a
      margin-right 20px
      font-size 14px
      text-decoration none
      color rgba(0, 0, 0, .4)

</style>
