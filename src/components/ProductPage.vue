<template lang="jade">
  div.product-page
    div.nav
      h3 Products
      h3 >
      h3 {{product.name}}
      router-link(to="/products/add") 
        button add new product
</template>

<script>
export default {
  name: 'ProductPage',
  data() {
    return {
      product: {
        name: "THC Cookie"
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.product-page 
  display flex
  flex-basis 100%
  flex-wrap wrap

  .nav
    background-color rgba(0, 0, 0, .05)
    display flex
    flex-basis 100%
    flex-wrap wrap
    padding 10px 0 10px 0

    h3
      margin-left 70px

    a
      margin-left auto
      margin-right 70px


</style>
