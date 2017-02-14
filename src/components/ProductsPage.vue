<template lang="jade">
  div.products-page
      
    router-link(to="/products/add") 
      button add new product
</template>

<script>
import BreadCrumbs from 'components/BreadCrumbs'
export default {
  name: 'ProductPage',
  components: {
    'breadcrumbs': BreadCrumbs
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

  .breadcrumbs-container
    flex-basis 100%


    
</style>
