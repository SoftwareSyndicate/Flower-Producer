<template lang="jade">
  div.product-form
    div.section
      div.section-header
        h3 General info
        i.material-icons(v-if="!generalOpen", @click="generalOpen = true") keyboard_arrow_down
        i.material-icons(v-else, @click="generalOpen = false") keyboard_arrow_up

      transition(name="open", mode="out-in", v-if="generalOpen")
        div.section-body
          div.field
            div.label-container
              span.label Product name
            div.input-container
              s-input(:placeholder="'Add name...'", :model.sync="product.model")

          div.field
            div.label-container
              span.label Short product description

            div.description-container
              span.description But I must explain to you how all this mistaken idea of denouncing of a pleasure and praising pain was born and I will give you a complete account of the system.

            div.input-container
              s-textarea(:placeholder="'Add description...'", :model.sync="product.description")


    div.section
      div.section-header
        h3 Retail info
        i.material-icons(v-if="!retailOpen", @click="retailOpen = true") keyboard_arrow_down
        i.material-icons(v-else, @click="retailOpen = false") keyboard_arrow_up

      transition(name="open", mode="out-in", v-if="retailOpen")
        div.section-body
          div.row
            div.field
              div.label-container
                span.label Wholesale pricing

              div.input-container
                s-input(:placeholder="'$'")


            div.field
              div.label-container
                span.label Retail pricing

              div.input-container
                s-input(:placeholder="'$'")

    div.section
      div.section-header
        h3 Cannabinoid & Ingredient info
        i.material-icons(v-if="!cannabinoidOpen", @click="cannabinoidOpen = true") keyboard_arrow_down
        i.material-icons(v-else, @click="cannabinoidOpen = false") keyboard_arrow_up

      transition(name="open", mode="out-in", v-if="cannabinoidOpen")
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


    div.section
      div.section-header
        h3 Product marketing
        i.material-icons(v-if="!productOpen", @click="productOpen = true") keyboard_arrow_down
        i.material-icons(v-else, @click="productOpen = false") keyboard_arrow_up


      div.section-body


</template>

<script>
export default {
  name: 'AddProductPage',
  data() {
    return {
      generalOpen: true,
      retailOpen: true,
      cannabinoidOpen: true,
      productOpen: true,
      product: {
        name: "New",
        description: "",
        wholesale_price: 0.0,
        retail_price: 0.0,
        cannabinoid_profile: "",
        extraction_method: ""
      },
    }
  },
}
</script>

<style lang="stylus" scoped>
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
      align-items center
      display flex
      flex-basis 100%
      border-bottom solid 2px #e8eaf4
      padding-bottom 20px
      margin-bottom 20px

      h3
        font-weight 500
        color #1f2532

      i
        margin-left auto
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
          flex-basis 50%


</style>
