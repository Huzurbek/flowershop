<template>
  <div class="main-container">
<!--    Info-box part-->
    <info-box/>
<!--    Small cards-->
    <small-cards-container class="position"/>
  </div>
</template>

<script>
export default {
data(){
  return {
  }
},
  components:{
    "info-box": require("@/components/popularCategories/InfoBox.vue").default,
    "small-cards-container": require("@/components/popularCategories/SmallCardsContainer.vue").default,
  }
}
</script>
<style scoped>
.main-container{
  display: flex;
  justify-content: space-between;
}

/*Mobile Version*/
@media screen and (max-width: 540px) {
  .main-container{
    flex-direction: column;

  }
  .position{
  align-self: center;
  }
}
</style>