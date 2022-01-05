<template>
  <div class="header">
    <div class="logo">
      <img src="@/assets/logo.png" alt="FlowerShop" class="rasm">
    </div>
    <div class="menu-button">
      <div class="btn" style="cursor: pointer" @click="isOpen = !isOpen"><Iconly class="icon-style" name="Category" color="#7CB142"/></div>
      <div class="btn"><Iconly name="User" color="#7CB142"/></div>
    </div>
<!--Slide Menu List-->
      <slide-menu :show="isOpen" @close="isOpen = !isOpen"/>
  </div>
</template>

<script>

export default {
  data(){
    return{
      isOpen: false
    }
  },
  components:{
    "Iconly": require("@/components/Iconly/Iconly").default,
    "slide-menu": require("@/components/navbar/SlideMenu.vue").default,
  }
}
</script>

<style scoped>

.header{
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 65px;
}

.menu-button{
  position: absolute;
  right: 0;
  display: flex;
  padding: 10px 18px;
  box-sizing: border-box;
  background: linear-gradient(290.46deg, #FBFAF8 0%, #FFFFFF 100%);
  border: 1px solid rgba(124, 177, 66, 0.15);
  box-shadow: 11px 22px 44px -12px rgba(124, 177, 66, 0.15);
  backdrop-filter: blur(25px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 12px;
}
.icon-style {
  margin-right: 16px
}
/*Mobile Version*/
@media screen and (max-width: 540px) {
  .header{
    justify-content: left;
  }
  img{
    width: 131px;
    height: 35px;
  }
  .menu-button{
    max-width: 90px;
    max-height: 41px;
  }
  .icon-style {
    margin-right: 14px
  }
}
</style>