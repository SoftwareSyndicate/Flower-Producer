<template lang="pug">
div.product-form

  // General 
  div.section(:class="{'closed': !generalOpen}")
    div.section-header(:class="{'closed': !generalOpen}", @click="generalOpen = !generalOpen")
      span.top-border
      h3 Genaral Info
      i.material-icons(v-if="!generalOpen") keyboard_arrow_down
      i.material-icons(v-else) keyboard_arrow_up

      
    transition(name="open", mode="out-in", v-if="generalOpen")
      div.section-body
        general-section(:product="product")


  // Retail
  div.section(:class="{'closed': !retailOpen}")
    div.section-header(:class="{'closed': !retailOpen}", @click="retailOpen = !retailOpen")
      span.top-border
      h3 Retail Info
      i.material-icons(v-if="!retailOpen") keyboard_arrow_down
      i.material-icons(v-else) keyboard_arrow_up

      
    transition(name="open", mode="out-in", v-if="retailOpen")
      div.section-body
        retail-section(:product="product")

  // Cannabinoid
  div.section(:class="{'closed': !cannabinoidOpen}")
    div.section-header(:class="{'closed': !cannabinoidOpen}", @click="cannabinoidOpen = !cannabinoidOpen")
      span.top-border
      h3 Cannabinoid & Ingredient Info
      i.material-icons(v-if="!cannabinoidOpen") keyboard_arrow_down
      i.material-icons(v-else) keyboard_arrow_up

      
    transition(name="open", mode="out-in", v-if="cannabinoidOpen")
      div.section-body
        cannabinoid-section(:product="product")


  // Marketing
  div.section(:class="{'closed': !marketingOpen}")
    div.section-header(:class="{'closed': !marketingOpen}", @click="marketingOpen = !marketingOpen")
      span.top-border
      h3 Product marketing
      i.material-icons(v-if="!marketingOpen") keyboard_arrow_down
      i.material-icons(v-else) keyboard_arrow_up

      
    transition(name="open", mode="out-in", v-if="marketingOpen")
      div.section-body
        marketing-section(:product="product")
</template>


<style lang="stylus">
.product-form
  display flex
  flex-basis 100%
  flex-wrap wrap
  margin-bottom 4em
    
  .section
    display flex
    flex-basis 100%
    flex-wrap wrap
    margin-bottom 60px

    &.closed
      margin-bottom 20px
      
    .section-header
      cursor pointer
      align-items center
      display flex
      flex-basis 100%
      flex-wrap wrap
      margin-bottom 30px
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
        font-size 16px
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
                        
    .label
      font-weight 500
      font-size 13px

    .description
      font-size 12px
      color #a7adc6
      line-height 1.33

  .item-container
    margin-top 1em
    height 60px
    padding-left 20px
    padding-right 20px
    background-color #fafbff
    border-radius 4px
    align-items center
    border solid #fafbff 1px;
    transition all .4s ease
    
    .s-button
      margin-left auto
      opacity 0
      transition all .4s ease

    &:hover
      border solid #3ed783 1px;

      .s-button
        opacity 1

    span.dot
      content " "
      width 8px
      height 8px
      border-radius 50%
      margin-right 20px
      margin-top 1px
      background-color #a7adc6

      
</style>


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
      marketingOpen: true,
    }
  },
}
</script>
