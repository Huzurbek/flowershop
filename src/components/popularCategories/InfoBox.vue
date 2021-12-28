<template>
  <div class="info-box">
    <div class="headline"><span>Popular Categories</span></div>
    <div class="text">See ratings, read reviews about shops. And also get big bonuses. If you don't like something, the money will be refunded</div>
    <div class="point-box">
      <div class="follower-point">
        <div class="point">1000+</div>
        <span>Flowers</span>
      </div>
      <div class="review">
        <div class="point">1000+</div>
        <span>real reviews after ordering</span>
      </div>
    </div>
    <!--      Button component-->
    <submit :text="text"/>
  </div>
</template>

<script>
export default {
  data(){
    return {
      text: 'Start shopping',
    }
  },
  components:{
    "submit": require("@/components/Submit.vue").default,
  }
}
</script>

<style scoped>
.info-box{
  display: flex;
  flex-direction: column;
  max-width: 520px;
  width: 520px;
  box-sizing: border-box;
  padding-top: 59px;
}
.headline, .text{
  line-height: 100%;
  color: #1A1A1A;
}
.headline {
  font-weight: bold;
  font-size: 59px;
  margin-bottom: 24px;
}
.text{
  font-weight: normal;
  font-size: 23px;
  margin-bottom: 32px;
}
.point-box{
  display: flex;
  justify-content: space-between;
  max-width: 408px;
  margin-bottom: 32px;
}
.follower-point, .review{
  max-width: 200px;
  font-style: normal;
  font-weight: 600;
  font-size: 19px;
  line-height: 100%;
  letter-spacing: 0.15px;
  color: #7CB142;

}
.point{
  font-weight: bold;
  font-size: 33px;
  line-height: 100%;
  color: #3A2D32;
}
/*Mobile Version*/
@media screen and (max-width: 540px) {
  .info-box{
    max-width: 343px;
    padding-top: 0;
    margin-bottom: 24px;
  }
  .headline{
    font-size: 33px;
    margin-bottom: 8px;
  }
  .text{
    max-width: 343px;
    font-size: 14px;
    line-height: 120%;
    letter-spacing: 0.25px;
    margin-bottom: 16px;
  }
  .point-box{
    margin-bottom: 16px;
  }
  .follower-point, .review{
    max-width: 160px;
    font-size: 16px;
    font-weight: 400;
    line-height: 120%;
  }

}
</style>