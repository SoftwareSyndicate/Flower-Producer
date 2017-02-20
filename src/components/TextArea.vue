<template lang="jade">
  textarea(:placeholder="placeholder", type="text", v-model="model")
</template>

<script>
export default {
  name: 'Syndicate-Input',
  props: {
    placeholder: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    model: {
      type: String,
      default: ""
    },
  },
  data() {
    return {
    
    }
  }
}
</script>

<style lang="stylus" scoped>
textarea
  border-radius 2px
  border solid 1px #d6dae9
  outline none
  font-size 15px
  padding 15px 0px 15px 20px
  width 100%
  min-width 100px
  min-height 100px

  &:focus
    border 1px #10c462 solid
    transition border .5s
    
</style>
