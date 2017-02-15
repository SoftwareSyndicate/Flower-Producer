<template lang="jade">
  div.product-list-item
    h3 product list item
</template>

<script>
export default {
  name: 'ProductListItem',
  props: {
    product: {
      type: Object,
      default: () => {}
    }
  },
  data(){
    return {}
  },
}
</script>

<style lang="stylus" scoped>
.product-list-item 
  display flex
  flex-basis 100%
  flex-wrap wrap
  background-color rgba(0, 0, 0, .5)
  align-items center
  justify-content center
  padding 40px

  h3
    color white
    



    
</style>
