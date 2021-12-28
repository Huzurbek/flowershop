<template>
  <div class="main-container">
<!--    Leftside-->
    <div class="percentage-box">
      <img src="@/assets/subscribe-percentage.png" alt="Percentage">
    </div>
<!--    Rightside-->
    <div class="subscribe-box">
      <div class="headline">
        <span>Want to get <span style="color: #7CB142">15%</span> discount?</span>
      </div>
      <div class="form">
<!--        Input component-->
        <input-component/>
<!--        Submit component-->
        <submit :text="text"/>
      </div>
      <div class="subscribe-info">
        <span>Subscribe right now to Secret offers and get collections of items with a discount of -15%</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      text: 'Subscribe',
    }
  },
components:{
  "input-component": require("@/components/Input.vue").default,
  "submit": require("@/components/Submit.vue").default,
}
}
</script>

<style scoped>
.main-container{
  /*border: 1px solid red;*/
  display: flex;
  justify-content: space-between;
}
.percentage-box{
  box-sizing: border-box;
  max-width: 704px;
  width: 704px;
  max-height: 430px;
  height: 430px;
}

.subscribe-box{
  padding-left: 32px;
  box-sizing: border-box;
}
.headline{
  max-width: 704px;
  margin-bottom: 32px;
}
.headline span{
  font-weight: bold;
  font-size: 58px;
  line-height: 100%;
  color: #1A1A1A;
}
.form{
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  margin-bottom: 32px;
}

.subscribe-info{
  padding-top: 44px;
  font-weight: normal;
  font-size: 25px;
  line-height: 100%;
  color: #1A1A1A;
}
/*Mobile version*/
@media screen and (max-width: 540px) {
  .main-container{
    justify-content: center;
  }
  .percentage-box{
    display: none;
  }
  .subscribe-box{
    background: linear-gradient(290.46deg, #FBFAF8 0%, #FFFFFF 100%);
    border: 1px solid rgba(124, 177, 66, 0.15);
    box-shadow: 11px 22px 44px -12px rgba(124, 177, 66, 0.25);
    border-radius: 12px;
    padding: 16px;
    max-width: 343px;
    width: 343px;
  }
  .headline{
    max-width: 311px;
    margin-bottom: 16px;
  }
  .headline span{
    font-size: 33px;
  }
  .form{
    margin-bottom: 16px;
  }
  .subscribe-info{
    font-size: 14px;
    font-weight: 400;
    padding-top: 0;
  }

}
</style>