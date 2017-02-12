<template lang="jade">
  div.products-page
    div.nav
      h1 Products
  
</template>

<script>
export default {
  name: 'ProductPage',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.products-page {
  display: flex;
  flex-basis: 100%;
  flex-wrap: wrap;
  
  .nav {
    display: flex;
    flex-basis: 100%;
    flex-wrap: wrap;
  }
  
}
</style>
