<template>
  <div class="card-background">
    <img :src="require(`@/assets/${items.image}`)" alt="BestSellerPic">
    <div class="inner-box">
      <div class="text">
        <span>{{ items.text }}</span>
      </div>
      <div class="day">
        <span>{{ items.day }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: Object,
  }
}
</script>

<style scoped>
.card-background{
  display: flex;
  position: relative;
  max-width: 336px;
  width: 336px;
  max-height: 302px;
  height: 302px;
  overflow: hidden;
  box-sizing: border-box;
}
img{
  position: absolute;
  top: 0;
  left: 0;
}
.inner-box{
  position: absolute;
  top: 202px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  max-width: 296px;
  width: 296px;
  max-height: 100px;
  height: 100px;
  box-sizing: border-box;
  background: linear-gradient(290.46deg, #FBFAF8 0%, #FFFFFF 100%);
  border: 1px solid rgba(124, 177, 66, 0.15);
  border-radius: 20px;
  padding: 16px 16px 14px 16px;
}
.text{
  font-weight: 600;
  font-size: 17px;
  line-height: 100%;
  box-sizing: border-box;
  max-width: 264px;
  width: 264px;
  max-height: 48px;
  height: 48px;
  margin-bottom: 5px;
  white-space: pre-wrap;
}
.day{
  font-weight: normal;
  font-size: 15px;
  line-height: 120%;
  display: flex;
  align-items: center;
  text-align: right;
  color: #1A1A1A;
  justify-content: right;

}

</style>