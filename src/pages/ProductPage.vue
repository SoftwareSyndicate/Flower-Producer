<template lang="pug">
div#add-product-page
  div.product-form-container
    product-form(:product.sync="product", :updates.sync="updates")

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
  watch: {
    updates: {
      handler: function(val){
        console.log("halp")
        console.log(val)
        this.$store.commit("COPY_PRODUCT", val)        
      },
      deep: true
    }
  },
  data(){
    return {
      updates: {
        name: "",
        description: ""
      }
    }
  },
  methods: {
    save(){

    }
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
