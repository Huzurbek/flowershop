<template>
  <div class="main-container">
    <div class="florist-cards">
      <div class="card" v-for="item in items" :key="item">
        <img class="background-img" :src="require(`@/assets/${item.image}`)" alt="Florist">
        <img class="florist-logo" :src="require(`@/assets/${item.logo}`)"  alt="Logo">
      </div>
    </div>
  </div>
</template>

<script>
export default {
data(){
  return {
    items: [
      {
        image: "florist1.png",
        logo: "florist-logo1.png",
        day: "20 june 2020",
      },
      {
        image: "florist2.png",
        logo: "florist-logo2.png",
        day: "20 june 2020",
      },
      {
        image: "florist3.png",
        logo: "florist-logo1.png",
        day: "20 june 2020",
      },


    ],
  }
}
}
</script>

<style scoped>
.florist-cards{
  display: flex;
  justify-content: space-between;

}
.card{
  position: relative;
  max-width: 458px;
  width: 458px;
  max-height: 610px;
  height: 610px;
  box-sizing: border-box;
  background: linear-gradient(290.46deg, #FBFAF8 0%, #FFFFFF 100%);
  border-radius: 20px;
  overflow: hidden;
}
.background-img{
  position: absolute;
}
.florist-logo{
  position: absolute;
  bottom: 32px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
}
</style>