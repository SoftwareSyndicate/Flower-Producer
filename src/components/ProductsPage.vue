<template lang="jade">
  div.products-page

    div.header
      router-link(to="/products/add") 
        button add new product
      
    div.product-list
      div.product-container
        product-list-item
      div.product-container
        product-list-item
      div.product-container
        product-list-item
      div.product-container
        product-list-item
</template>

<script>
import ProductListItem from 'components/ProductListItem'
export default {
  name: 'ProductPage',
  components: {
    'product-list-item': ProductListItem
  },
  data(){
    return {
      crumbs: [
        {
          name: "Products",
          route: "/products"
        }
      ]
    }
  },
  created: function(){
    this.$emit('set-crumbs', this.crumbs);
  }
}
</script>

<style lang="stylus" scoped>
.products-page 
  display flex
  flex-basis 100%
  flex-wrap wrap

  .header
    display flex
    flex-basis 100%
    margin-bottom 20px

    a 
      margin-left auto
      margin-right 70px
      margin-top 20px

  .product-list
    display flex
    flex-basis 100%
    flex-wrap wrap
    padding-left 70px
    padding-right 70px

    .product-container
      display flex
      flex-basis 100%
      margin-bottom 15px

      
</style>
