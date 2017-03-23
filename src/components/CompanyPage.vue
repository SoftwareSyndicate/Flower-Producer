<template lang="jade">
  div.company-page
    h1 Company Info Page comming soon!
</template>

<script>
export default {
  name: 'CompanyPage',
  data() {
    return {    }
  },
  created: function(){
    this.$store.commit("UPDATE_BREADCRUMBS", [
      {name: 'Company', route: '/company'},
    ]);
  }
}
</script>

<style lang="stylus" scoped>
.company-page
  display flex
  flex-basis 100%
  flex-wrap wrap


</style>
