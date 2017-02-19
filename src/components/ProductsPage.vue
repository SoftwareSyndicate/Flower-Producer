<template lang="jade">
  div.products-page

    div.header
      router-link(to="/products/add") 
        s-button(:title="'add new product'")
  
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
import Button from 'components/Button'

export default {
  name: 'ProductPage',
  components: {
    'product-list-item': ProductListItem,
    's-button': Button
  },
  data(){
    return {
      
    }
  },
  created: function(){
    this.$store.commit("UPDATE_BREADCRUMBS", [
      {name: 'Home', route: '/home'},
      {name: 'Products', route: '/products'}
    ]);
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

  .product-list
    display flex
    flex-basis 100%
    flex-wrap wrap
    
    .product-container
      display flex
      flex-basis 100%
      margin-bottom 15px
      cursor pointer

      
</style>
