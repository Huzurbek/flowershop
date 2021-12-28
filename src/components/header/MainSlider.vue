<template>
  <div class="slider">
    <div class="slider-content">
      <img src="@/assets/slider1.png" alt="FlowerShop">
      <div class="actions">
        <div class="btn btn-left">
          <svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.676348 5.32187C0.735205 5.26146 0.957441 5.00313 1.16445 4.79063C2.37813 3.45417 5.54422 1.26667 7.20135 0.598958C7.45302 0.491667 8.08928 0.264583 8.42923 0.25C8.75497 0.25 9.06549 0.325 9.36181 0.477083C9.73119 0.689583 10.0275 1.02396 10.1899 1.41875C10.2944 1.69271 10.4567 2.5125 10.4567 2.52708C10.6191 3.42396 10.7084 4.88125 10.7084 6.49167C10.7084 8.02604 10.6191 9.42396 10.4862 10.3344C10.471 10.349 10.3086 11.3677 10.131 11.7167C9.80526 12.3542 9.169 12.75 8.48809 12.75H8.42923C7.98577 12.7344 7.05319 12.3385 7.05319 12.324C5.48537 11.6552 2.39233 9.575 1.14923 8.19271C1.14923 8.19271 0.799136 7.8375 0.646919 7.61562C0.409462 7.29688 0.291748 6.90208 0.291748 6.50729C0.291748 6.06667 0.424684 5.65625 0.676348 5.32187Z" fill="#7CB142"/>
          </svg>
        </div>
        <div class="btn btn-right">
          <span>Next</span>
          <svg width="11" height="13" viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.3238 7.67812C10.265 7.73854 10.0427 7.99687 9.83571 8.20937C8.62204 9.54583 5.45594 11.7333 3.79881 12.401C3.54715 12.5083 2.91088 12.7354 2.57093 12.75C2.24519 12.75 1.93467 12.675 1.63835 12.5229C1.26898 12.3104 0.972662 11.976 0.810298 11.5813C0.705776 11.3073 0.543412 10.4875 0.543412 10.4729C0.381048 9.57604 0.291748 8.11875 0.291748 6.50833C0.291748 4.97396 0.381048 3.57604 0.513984 2.66562C0.529205 2.65104 0.691569 1.63229 0.869155 1.28333C1.1949 0.645833 1.83116 0.25 2.51208 0.25H2.57093C3.01439 0.265625 3.94697 0.661458 3.94697 0.676042C5.5148 1.34479 8.60783 3.425 9.85093 4.80729C9.85093 4.80729 10.201 5.1625 10.3532 5.38437C10.5907 5.70312 10.7084 6.09792 10.7084 6.49271C10.7084 6.93333 10.5755 7.34375 10.3238 7.67812Z" fill="#7CB142"/>
          </svg>
        </div>
      </div>
    </div>
    <div class="slider-controller">
      <div class="slide-btn active-slide-btn"></div>
      <div class="slide-btn"></div>
      <div class="slide-btn"></div>
      <div class="slide-btn"></div>
      <div class="slide-btn"></div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.slider{
  display: flex;
  justify-content: center;
}
/*.slider *{*/
/*  border:1px solid black*/
/*}*/
.slider-content{
  position: relative;
  border: 1px solid navy;
}
.slider-content .btn{
  background: #fbfaf8;
  opacity: 0.5;
  backdrop-filter: blur(25px);
  border-radius: 100px;
  color: #7CB142;
}
.slider-content .actions{
  position: absolute;
  bottom: 24px;
  right: 127px;
  display: flex;
}
/*.actions{*/
/*  display: flex;*/
/*}*/
.btn-left{
  padding: 21px 29px 21px 27px;
  margin-right: 24px;
}
.btn-right{
  padding: 20px 28px 20px 28px;
}
.btn-right span{
  font-weight: 600;
  font-size: 16px;
  margin-right: 23px;
}
/*Second Part*/
.slider-controller{
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid red;
  padding-left: 32px ;
}
.slider-controller .slide-btn{
  align-self: end;
  width: 15px;
  height: 15px;
  border: 1px solid #7CB142;
  box-sizing: border-box;
  border-radius: 100px;
  margin-bottom: 16px;
}
.active-slide-btn{
  background: #7CB142;
}
</style>