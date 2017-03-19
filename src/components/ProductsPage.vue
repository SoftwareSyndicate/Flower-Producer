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
      return [
        {
          created_by: {

          },
          id: 0,
          name: "Saigon Cinnamon Snickerdoodle Cookie",
          product_images: ["http://www.thegoodship.com/wp-content/uploads/2016/09/snicker-new.png"],
          tags: ["Edible", "Organic"] ,
          created_at: new Date(),
          likes: 840,
          comments: 420,
          thc_content: 10.0,
        },
        {
          created_by: {

          },
          id: 1,
          name: "Deep Dark Chocolate Bar",
          product_images: ["http://www.thegoodship.com/wp-content/uploads/2016/09/deepdark-new.png"],
          tags: ["Edible", "Organic"] ,
          created_at: new Date(),
          likes: 840,
          comments: 420,
          thc_content: 10.0
        },
        {
          created_by: {

          },
          id: 2,
          name: "Lemon Lime Pastilles",
          product_images: ["http://www.thegoodship.com/wp-content/uploads/2015/04/packaging_rendering_pastilles_lemon_lime_flat-website.png"],
          tags: ["Edible", "Organic"] ,
          created_at: new Date(),
          likes: 840,
          comments: 420,
          thc_content: 2.5
        }
      ]
    },
    filteredProducts(){
      return this.products;
    },
    productFilters(){

    }
  },
  created: function(){
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
