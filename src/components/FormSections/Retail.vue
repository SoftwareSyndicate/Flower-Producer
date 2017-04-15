<template lang="pug">
div.retail.row-flex

  // Wholesale Pricing
  div.row-25.wholesale
    div.row.label-container
      span.label Wholesale pricing
    div.row-flex
      s-input(:placeholder="'$'", :model="product.wholesale_price", :change="onWholeSalePriceChange", type="'number'" )


  // Retail Pricing
  div.row-25
    div.row.label-container
      span.label Suggested Retail pricing (MSRP)
    div.row-flex
      s-input(:placeholder="'$'", :model="product.retail_price", :change="onRetailPriceChange", type="'number'")


  // Margin
  div.row-flex-20.margin-container
    span.margin Your margin is ${{margin}}
</template>


<style lang="stylus" scoped>
  .label-container
    margin-bottom 12px

  .wholesale
    margin-right 20px

  .margin-container
    align-items center
    padding-top 28px
    margin-left 20px
      
    .margin  
      opacity 0.4
      font-size 13px
      font-weight 500
      color #787e98
  
</style>


<script>
export default {
  name: 'RetailSection',
  props: {
    product: {
      type: Object,
      default:  {
        wholesale_price: 0.00,
        retail_price: 0.00
      }
    },
  },
  computed: {
    margin() {
      if(this.product.retail_price && this.product.wholesale_price){
        return (parseFloat(this.product.wholesale_price) - parseFloat(this.product.retail_price)).toFixed(2) 
      } else {
        return "0.00"
      }
    }
  },
  created(){},
  methods: {
    onWholeSalePriceChange(val){
      this.product.wholesale_price = val.target.value.trim();
    },
    onRetailPriceChange(val){
      this.product.retail_price = val.target.value.trim();
    },
  },
}
</script>
