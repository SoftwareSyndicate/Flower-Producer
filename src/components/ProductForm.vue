<template lang="jade">
  div.product-form
    form
      p Product Form 
    
</template>

<script>
export default {
  name: 'AddProductPage',
  data() {
    return {
      product: {
        name: "New"
      },
    }
  },
}
</script>

<style lang="stylus" scoped>
.product-form
  form
    display flex

</style>
