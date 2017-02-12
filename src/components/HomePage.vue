<template lang="jade">
  div.home-page
    div.nav
      h1 Home
  
</template>

<script>
export default {
  name: 'HomePage',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.home-page {
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
