<template lang="jade">
  div.add-product-page
    div.product-form-container
      product-form :product=product
      
</template>

<script>
import ProductForm from 'components/ProductForm'
export default {
  name: 'AddProductPage',
  data() {
    return {
      product: {
        name: "New"
      },
      crumbs: [
        {
          name: "Products",
          route: "/products"
        },
         {
          name: "Add a Product",
          route: "/products/add"
        }
      ]
    }
  },
  components: {
    'product-form': ProductForm
  },
  created: function(){
    this.$emit('set-crumbs', this.crumbs);
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

  .product-form-container
    padding 30px 70px 30px 70px


</style>
