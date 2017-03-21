<template lang="jade">
  div.products-page

    div.header
      h2.product-count {{filteredProducts.length}} products available

      router-link(to="/products/add")
        s-button(:title="'add new product'")

    div.product-list
      div.product-container(v-for="product in filteredProducts")
        product-list-item(:product="product")
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
  computed: {
    products(){
      return this.$store.getters.products;
    },
    filteredProducts(){
      return this.products;
    },
    productFilters(){

    }
  },
  created(){
    this.$store.commit("UPDATE_BREADCRUMBS", [
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
    align-items center

    .product-count
      font-size 20px
      color #1f2532

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

</style>
