<template>
  <div class="hello" @click="emitMyEvent">
    this is component a{{number}}
  <slot></slot>
    <slot name="header"></slot>
    <p>qaaa</p>
    <slot name="footer"></slot>
  </div>
</template>

<script>
export default {
  name: 'hello',
  props:{
    "my-number":[Number,String]
  },
  data () {
    return {
      msg:"hello from a"
    }
  },
  methods:{
    emitMyEvent(){
      this.$emit("myEvent",this.msg)
    }
  }
  
}
</script>

<style scoped>
</style>
