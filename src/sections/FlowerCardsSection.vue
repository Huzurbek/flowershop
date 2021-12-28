<template>
  <div class="flower-cards">
    <div class="container">
      <div class="small-container mb" >
        <div class="card-size-sm card-background">
          <div class="card-text">
            <span>Bouquets for Birthday</span>
          </div>
          <img src="@/assets/cardpic1.png" alt="CardPic">
        </div>
        <div class="card-size-sm card-background">
          <div class="card-text">
            <span>Bouquets for Anniversary</span>
          </div>
          <img src="@/assets/cardpic2.png" alt="CardPic">
        </div>
      </div>
      <div class="demo">
        <div class="card-size-lg card-background mb">
          <div class="card-text">
            <span>Bouquets for Love</span>
          </div>
          <img src="@/assets/cardpic3.png" alt="CardPic">
        </div>
        <div class="card-size-md card-background">
          <div class="card-text">
            <span>Bouquets for Christmas</span>
          </div>
          <img src="@/assets/cardpic6.png" alt="CardPic">
        </div>
      </div>
    </div>
    <div class="container">
      <div class="demo">
        <div class="card-size-lg card-background mb">
          <div class="card-text">
            <span>Bouquets for Congratulations</span>
          </div>
          <img src="@/assets/cardpic4.png" alt="CardPic">
        </div>
        <div class="card-size-md card-background mb">
          <div class="card-text">
            <span>Bouquets for Children</span>
          </div>
          <img src="@/assets/cardpic5.png" alt="CardPic">
        </div>
      </div>
      <div class="small-container">
        <div class="card-size-sm card-background">
          <div class="card-text">
            <span>Bouquets for Apologies</span>
          </div>
          <img src="@/assets/cardpic7.png" alt="CardPic">
        </div>
        <div class="card-size-sm card-background">
          <div class="card-text">
            <span>Other</span>
          </div>
          <img src="@/assets/cardpic8.png" alt="CardPic">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.flower-cards {
  display: flex;
  justify-content: space-between;
}
.container{
  display: flex;
  flex-direction: column;
}
.small-container{
  display: flex;
  justify-content: space-between;
}

.mb{
  margin-bottom: 32px;
}
.card-background{
  box-sizing: border-box;
  background: linear-gradient(290.46deg, #FBFAF8 0%, #FFFFFF 100%);
  border: 1px solid rgba(124, 177, 66, 0.15);
  border-radius: 30px;
}
img{
  position: absolute;
  bottom: 0;
  right: 0;
}
span{
  display: block;
  font-weight: bold;
  line-height: 34px;
  font-size: 33px;
  width:250px;
  color: #1A1A1A;
  /*white-space: pre-wrap;*/
}

.card-size-sm, .card-size-md, .card-size-lg{
  position: relative;
  box-sizing: border-box;
  padding: 24px;
  overflow: hidden;
}
.card-size-sm{
  max-width: 336px;
  width: 336px;
  height: 336px;
  max-height: 336px;
}
.card-size-lg{
  max-width: 704px;
  width: 704px;
  height: 430px;
  max-height: 430px;
}
.card-size-md{
  max-width: 704px;
  width: 704px;
  max-height: 336px;
  height: 336px;
}
/*Mobile Version*/
@media screen and (max-width: 540px) {
  .flower-cards{
    flex-direction: column;
    border: 1px solid green;
  }
  .demo{
    display: flex;
    justify-content: space-between;
  }
  .card-size-sm, .card-size-md, .card-size-lg{
    max-width: 163px;
    width: 163px;
    max-height: 163px;
    height: 163px;
    padding: 16px;
  }
  img{
    max-width: 120px;
    max-height: 119px;
  }
  span{
    width: 131px;
    font-weight: 600;
    font-size: 16px;
    line-height: 17px;

  }
}

</style>