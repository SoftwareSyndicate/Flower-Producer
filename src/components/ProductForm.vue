<template lang="pug">
div.product-form
  div.section
    div.section-header(:class="{'closed': !generalOpen}", @click="generalOpen = !generalOpen")
      span.top-border
      h3 Genaral Info
      i.material-icons(v-if="!generalOpen") keyboard_arrow_down
      i.material-icons(v-else) keyboard_arrow_up

      
    transition(name="open", mode="out-in", v-if="generalOpen")
      div.section-body
        general-section(:product="product")


        
  retail-section(:product="product")
  cannabinoid-section(:product="product")
  marketing-section(:product="product")
</template>

<script>
import GeneralSection from './FormSections/General'
import RetailSection from './FormSections/Retail'
import CannabinoidSection from './FormSections/Cannabinoid'
import MarketingSection from './FormSections/Marketing'
  
export default {
  name: 'ProductForm',
  components: {
    GeneralSection,
    RetailSection,
    CannabinoidSection,
    MarketingSection
  },
  props: {
    product: {
      type: Object,
      default:  {
        name: "",
        description: "",
        product_images: []
      }
    },
  },
  created(){},
  methods: {
  },
  data() {
    return {
      first: true, 
      generalOpen: true,
      retailOpen: true,
      cannabinoidOpen: true,
      productOpen: true,
    }
  },
}
</script>

<style lang="stylus">
.product-form
  display flex
  flex-basis 100%
  flex-wrap wrap

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
            font-weight 500
            font-size 12px
            color #a7adc6
            line-height 1.33


        .input-container
          display flex
          flex-basis 100%



            

</style>
