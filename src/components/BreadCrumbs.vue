<template lang="pug">
div.breadcrumbs
  div.crumbs
    div.crumb(v-for="crumb in breadcrumbs")
      router-link(:to="crumb.route") {{crumb.name}}
      img(src="../assets/arrow-left.svg")
      
  div.actions
    router-link(:to="{name: 'product', params: {id: 'new'}}", v-if="$route.name === 'products'")
      s-button(:title="'add new product'")
    div(v-if="$route.name === 'product'")
      s-button(:title="'save'", :onclick="save")
    
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'BreadCrumbs',
  computed: {
    ...mapGetters (['breadcrumbs'])
  },
  methods: {
    save(){
      this.$store.dispatch("saveProduct", {product: this.$store.getters.product})
    }
  }
}
</script>

<style lang="stylus" scoped>

breadcrumbs-height = 60px;

.breadcrumbs
  display flex
  align-items center
  flex-basis 100%
  padding-left 10px
  padding-right 60px
  height breadcrumbs-height
    
  .crumbs
    display flex
    align-items center
    
    .crumb
      display flex
      align-items center
      &:first-child
        margin-right 20px

      &:last-child
        img
          display none

      a
        margin-right 20px
        font-size 14px
        text-decoration none

  .actions
    margin-left auto

</style>
