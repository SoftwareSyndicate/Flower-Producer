<template lang="pug">
div#app
  div.nav-container
    s-nav(:items="nav_items", :brand="org.name")

  div.content-container
    div.breadcrumbs-container
      s-breadcrumbs(:crumbs="crumbs")
        div.actions(slot="actions")
          div.product-actions(v-if="$route.name === 'product'")
            s-button(title="Cancel", :onclick="cancel")
            s-button(title="Save Product", :classes="['primary']", :onclick="save")
          div.product-actions(v-if="$route.name === 'products'")
            router-link(:to="{ name: 'product', params: { id: 'new' }}")
              s-button(title="Add a new Product", :classes="['primary']")
              
    div.view-container
      transition(name="fade", mode="out-in")
        router-view.vue

</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  computed: mapGetters ({
    nav_items: 'nav_items',
    crumbs: 'crumbs',
    org: 'org'
  }),
  methods: {
    cancel(){
      this.$router.back();
    },
    save(){
      console.log("save")
      console.log(this.$store)
    },
  }
}
</script>

<style lang="stylus">

html
  height 100%


body
  margin 0
  background-color #fff

h1, h2, h3, h4, h5, h6, p, a, span
  margin 0px
  padding 0px
  color rgba(0, 0, 0, .5) !default
  font-weight normal !default
  text-decoration none
  line-height 1em

a
 color rgba(0, 0, 0, .5) 


#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height 100%
  display flex
  flex-wrap wrap

  .nav-container
    display flex
    flex-basis 15%  

  .content-container
    flex-basis 85%  
    flex-wrap wrap  
    
    .breadcrumbs-container
      flex-basis 100%

      .actions
        display flex

        .product-actions
          display flex
          .s-button
            margin-left 1em

    .view-container
      flex-basis 100%
      padding 0em !important

      .fade-enter-active, .fade-leave-active
        transition all .2s ease

      .fade-enter, .fade-leave-active
        opacity 0


</style>
