<template lang="jade">
  div.product-form
    form
      p taco
    
</template>

<script>
export default {
  name: 'AddProductPage',
  data() {
    return {
      product: {
        name: "New"
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.add-product-page 
  display flex
  flex-basis 100%
  flex-wrap wrap

  .nav
    background-color rgba(0, 0, 0, .05)
    display flex
    flex-basis 100%
    flex-wrap wrap
    padding 10px 0 10px 0
    align-items center

    h4
      font-size: 14px;
      margin-left 10px       
      &:first-child
        margin-left 70px       
    a
      margin-left auto
      margin-right 70px


</style>
