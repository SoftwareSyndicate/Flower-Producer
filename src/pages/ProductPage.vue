<template lang="pug">
div#add-product-page
  div.product-form-container
    product-form(:product="product", :updates="productUpdates")

</template>

<script>
import ProductForm from 'components/ProductForm'
import { mapGetters } from 'vuex'

export default {
  name: 'ProductPage',
  components: {
    'product-form': ProductForm
  },
  computed: {
    ...mapGetters([
      'product',
      'productUpdates'
    ])
  },
  watch: {
    product: {
      handler: function(val){
        if(this.first){
          this.$store.commit('SET_PRODUCT', val)
        }
        this.first = false;
      },
    }
  },
  data(){
    return {
      first: true 
    }
  },
  created(){
    this.$store.commit('SET_PRODUCT', this.product)
  }
}
</script>

<style lang="stylus" scoped>
  
#add-product-page
  display flex
  flex-basis 100%
  flex-wrap wrap
  padding-top 3em
  padding-left 3em
  
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
