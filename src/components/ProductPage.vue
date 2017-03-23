<template lang="pug">
div.add-product-page
  div.product-form-container
    product-form(:product="product")

</template>

<script>
import ProductForm from 'components/ProductForm'
import { mapGetters } from 'vuex'

export default {
  name: 'AddProductPage',
  components: {
    'product-form': ProductForm
  },
  
  computed: {
    ...mapGetters([
      'product',
    ])
  },
  created(){
    let id = this.$route.params.id;
    if(id === 'new'){
      this.$store.commit("UPDATE_BREADCRUMBS", [
        {name: 'Products', route: '/products'},
        {name: 'Add a Product', route: '/products/new'}
      ]);
    } else if(this.product){
      this.$store.commit("UPDATE_BREADCRUMBS", [
        {name: 'Products', route: '/products'},
        {name: this.product.name, route: 'products/' + id}
      ]);
    }

    console.log(this.product)   
  },

  methods: {
    save(){

    }
  }
}
</script>

<style lang="stylus" scoped>

.view
  margin 0px
  padding-right 0px !important

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

  .syndicate-button
    margin-left auto
    margin-right 30px

</style>
