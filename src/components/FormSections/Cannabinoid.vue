<template lang="pug">
div.cannabinoid
  div.section
    div.section-header(:class="{'closed': !open}", @click="open = !open")
      span.top-border
      h3 Cannabinoid & Ingredient info
      i.material-icons(v-if="!open") keyboard_arrow_down
      i.material-icons(v-else) keyboard_arrow_up

    transition(name="open", mode="out-in", v-if="open")
      div.section-body
        div.row
          div.field
            div.label-container
              span.label Cannabinoid profile
            div.input-container
              s-select(:placeholder="'Select profile...'", :items="['Sativa', 'Indica', 'Hybrid']", :model="product.cannabinoid_profile")

        div.row
          div.field
            div.label-container
              span.label Extraction method
            div.input-container
              s-select(:placeholder="'Select method...'", :items="['Ethanol Extraction']", :model="product.extraction_method")



</template>

<script>
export default {
  name: 'CannabinoidSection',
  props: {
    product: {
      type: Object,
      default:  {

      }
    },
  },
  created(){},
  methods: {
    
  },
  data() {
    return {
      open: true,
    }
  },
}
</script>

<style lang="stylus" scoped>
.cannabinoid
  display flex
  flex-basis 100%
  flex-wrap wrap

  .row
    display flex
    flex-basis 100%

  .section
    display flex
    flex-basis 100%
    flex-wrap wrap
    margin-bottom 20px

    .section-header
      cursor pointer
      align-items center
      display flex
      flex-basis 100%
      flex-wrap wrap
      margin-bottom 20px
      border-top-left-radius 4px
      border-bottom-left-radius 4px
      background-color rgba(255, 255, 255, 0.2)
      box-shadow inset 0 -1px 0 0 #c3ead6
      border-left solid 1px #d6dae9
      border-bottom solid 1px #d6dae9

      &.closed
        box-shadow none
        .top-border
          background-color #d6dae9
          
      .top-border
        flex-basis 100%
        height 4px
        background-color #3ed783
        border-top-left-radius 4px
        transition background-color .5s ease

      h3
        font-size 14px
        font-weight 500
        color #4a4e5d
        padding 20px

      i
        margin-left auto
        margin-right 30px
        color rgba(0,0,0,0.5)
        cursor pointer
        border-radius 4px

    .open-enter-active, .open-leave-active
      transition all .5s ease

    .open-enter, .open-leave-active
      opacity 0
      height 0px

    .section-body
      display flex
      flex-basis 100%
      flex-wrap wrap

      .field
        display flex
        flex-wrap wrap
        flex-basis 100%
        margin-bottom 30px


        &.name   
          flex-basis 50%

        &.description
          flex-basis 75%

        &.images
          flex-wrap wrap
          .add-image-container
            cursor pointer
            display flex
            flex-basis 75%
            background-color #fafbff
            border dashed 1px #d6dae9
            height 100px
            border-radius 4px
            justify-content center
            align-items center
            position relative
            margin-bottom 1em
            
            input
              cursor pointer
              opacity 0
              width 100%
              height 100%
              top 0px
              left 0px
              position absolute

          .product-images-container
            display flex
            flex-basis 75%
            border solid 1px #d6dae9
            border-radius 4px
            
            .product-image-container
              display flex
              justify-content center
              align-items center
              width 150px
              padding 1em
              
              img
                width: 100%


        &.wholesale
          flex-basis 25%
          margin-right 1em

        &.retail
          flex-basis 25%
          margin-right 1em
                        
        .label-container
          display flex
          flex-basis 100%
          margin-bottom 12px

          .label
            font-weight 500
            font-size 13px

        .description-container
          display flex
          flex-basis 100%
          margin-bottom 12px

          .description
            text-align left
            width 50%
            font-weight 500
            font-size 12px
            color #a7adc6
            line-height 1.33


        .input-container
          display flex
          flex-basis 100%



            

</style>
