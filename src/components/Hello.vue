<template>
  <div class="hello">
  </div>
</template>

<script>
import Vue from "vue"
export default {
  components:{
  },
  name: 'hello',
  data () {
    return {
      show:true,
      number:"",
      msg: 'Welcome to Your Vue.js App',
      wait:"",
      link:"www.baidu",
      select:null,
      myBox:[],
      className:{
        "red-color":true,
        "blue-color":false
      },
      isPartA:true,
      isPartB:false,
      arr:[
        {
          name:"apple",
          price:13
        },
        {
          name:"orange",
          price:16
        },
        {
          name:"piie",
          price:12
        }
      ]
    }
  },
  methods:{
    addItem:function(){
      Vue.set(this.arr,1,{
          name:"pineapple",
          price:233
        })
      this.isPartA=!this.isPartA;
      this.show=!this.show;
      console.log(this.arr)
    },
    keyDown(){
      console.log(22)
    },
    onComaMyEvent(para){
      console.log("onComaMyEvent:"+para)
    }
  },
  computed:{
    waitNum(){
      return this.wait.replace(/\d+/g,"");
    }
  },
  watch:{
    wait(old,newVal){
      console.log(old,newVal)
    }
  }

}
</script>

<style lang="stylus" scoped>
</style>
