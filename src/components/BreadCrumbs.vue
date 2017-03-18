<template lang="jade">
  div.breadcrumbs
    div.crumb(v-for="crumb in breadcrumbs")
      router-link(:to="crumb.route")
        {{crumb.name}}
      img(src="../assets/arrow-left.svg")
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'BreadCrumbs',
  computed: mapState({
    breadcrumbs: state => state.breadcrumbs
  })
}
</script>

<style lang="stylus" scoped>

breadcrumbs-height = 60px;

.breadcrumbs
  display flex
  flex-basis 100%
  padding-left 10px
  height breadcrumbs-height

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

</style>
