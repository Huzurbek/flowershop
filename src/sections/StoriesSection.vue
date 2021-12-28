<template>
  <div class="stories">
    <div class="stories-box">
      <div class="circle">
        <img src="@/assets/Ellipse1.png" alt="CircleOne">
      </div>
      <div class="circle-text">
        <span>Rose</span>
      </div>
    </div>
    <div class="stories-box">
      <div class="circle">
        <img src="@/assets/Ellipse2.png" alt="CircleOne">
      </div>
      <div class="circle-text">
        <span>Hits</span>
      </div>
    </div>
    <div class="stories-box">
      <div class="circle">
        <img src="@/assets/Ellipse3.png" alt="CircleOne">
      </div>
      <div class="circle-text">
        <span>Sale</span>
      </div>
    </div>
    <div class="stories-box">
      <div class="circle">
        <img src="@/assets/Ellipse1.png" alt="CircleOne">
      </div>
      <div class="circle-text">
        <span>Children</span>
      </div>
    </div>
    <div class="stories-box">
      <div class="circle">
        <img src="@/assets/Ellipse4.png" alt="CircleOne">
      </div>
      <div class="circle-text">
        <span>Home</span>
      </div>
    </div>
    <div class="stories-box">
      <div class="circle">
        <img src="@/assets/Ellipse5.png" alt="CircleOne">
      </div>
      <div class="circle-text">
        <span>Love</span>
      </div>
    </div>
    <div class="stories-box">
      <div class="circle">
        <img src="@/assets/Ellipse6.png" alt="CircleOne">
      </div>
      <div class="circle-text">
        <span>Other</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
/*Stories*/
.stories{
  display: flex;
  justify-content: center;
}
.stories .stories-box{
  display: flex;
  flex-direction: column;
}
.stories .stories-box .circle-text{
  align-self: center;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  padding-top: 8px
}
.stories .circle{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border: 2px solid #7CB142;
  border-radius: 100px;
  /*margin-right: 42px;*/
}
/*.stories .circle :last-child{*/
/*  margin-right: 0;*/
/*}*/

</style>