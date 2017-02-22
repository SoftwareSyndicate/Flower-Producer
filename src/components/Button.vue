<template lang="jade">
  div.syndicate-button
    span {{title}}
</template>

<script>
export default {
  name: 'Syndicate-Button',
  props: {
    title: {
      type: String,
      default: "button"
    }
  },
  data() {
    return {
    
    }
  }
}
</script>

<style lang="stylus" scoped>
  bg-color = #00e468
  
  .syndicate-button
    display flex
    background-color bg-color
    box-shadow inset 0 -1px 0 0 #10c462
    border-radius 2px
    justify-content center
    align-items center
    padding 10px 20px
    cursor pointer
    min-width 100px

    &:hover
      background-color darken(bg-color, 5%)
      
    span 
      color white
      font-size 1em
      line-height 1em
      font-weight 500

    &.secondary
      background-color #fff
      box-shadow inset 0 -1px 0 0 rgba(187, 193, 214, 0.4)
      border solid 1px #bcc1d7
      border-radius 4px
      min-width 50px
      
      span
        color #787e98
        font-size 13px

      &:hover
        background-color darken(#fff, 5%)
        box-shadow none
    
</style>
