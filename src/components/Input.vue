<template lang="jade">
  input(:placeholder="placeholder", type="text", v-model="modelCopy")
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
      modelCopy: this.model
    }
  }
}
</script>

<style lang="stylus" scoped>
input
  border-radius 2px
  border solid 1px #d6dae9
  outline none
  font-size 15px
  padding 20px 0px 20px 20px
  width 100%
  min-width 100px

  &:focus
    border 1px #10c462 solid
    transition border .5s

</style>
