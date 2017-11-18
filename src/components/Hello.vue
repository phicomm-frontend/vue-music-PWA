<template>
  <div class="hello">
    <ul>
      <li v-for="(item,index) in arr" :class="{odd:index%2}">{{item}}+{{index}}</li>
    </ul>
    <input type="button" @click="addItem" value="addItem">
    <input type="text" @keydown.enter="keyDown">
    <input type="checkbox" v-model="myBox" value="1">
    <input type="checkbox" v-model="myBox" value="2">
    <input type="checkbox" v-model="myBox" value="3">{{myBox}}
    <select v-model="select">
      <option value="1">1</option>
      <option value="2">2</option>
    </select>
    {{select}}
    <a :href="link" @click="addItem" :class="className" id="">link</a>
    <p v-if="isPartA">isPartA</p>
    <p v-show="isPartB">isPartB</p>
    <input type="text" v-model="number">{{number}}
    <comA @myEvent="onComaMyEvent" :my-number="number">
      <p slot="header">herader</p>
      oiip
      <div class="" slot="header">footer</div>
    </comA>
    <transition name="show">
      <div v-show="show">show</div>
    </transition>
  </div>
</template>

<script>
import Vue from "vue"
import comA from './a'
export default {
  components:{
    comA
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

<style scoped>
</style>
