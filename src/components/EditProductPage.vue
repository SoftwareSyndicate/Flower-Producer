<template lang="jade">
  div.add-product-page
    div.product-form-container
      product-form :product=product

</template>

<script>
import ProductForm from 'components/ProductForm'
export default {
  name: 'AddProductPage',
  components: {
    'product-form': ProductForm
  },
  created: function(){
    this.$store.commit("UPDATE_BREADCRUMBS", [
      {name: 'Products', route: '/products'},
      {name: 'Edit', route: '/products/:id/edit'}
    ]);
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
      font-size 14px
      margin-left 10px

      &:first-child
        margin-left 70px
    a
      margin-left auto
      margin-right 70px

  .product-form-container
    display flex
    flex-basis 100%


</style>
