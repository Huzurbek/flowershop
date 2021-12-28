<template>
  <div v-html="getIcon">

  </div>
</template>
<script>
import {icons} from './icons.js'
export default{
  props:{
    name:{
      types:String,
      default:()=>""
    },
    color:{
      type:String,
      default: ()=>""
    }
  },
  computed:{
    getIcon(){
      return icons[this.name].replace(/\{color\}/ig,this.color)
    }
  }
}
</script>
