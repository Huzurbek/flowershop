<template>
  <div class="address">
    <div class="address-text"><span>Your favorite shops with delivery</span></div>
    <div class="city-search">
      <div class="input-box">
        <svg width="19" height="21" viewBox="0 0 19 21" style="margin-right: 11px" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0.645752 8.74767C0.645752 3.95615 4.6498 0.0833435 9.49309 0.0833435C14.35 0.0833435 18.3541 3.95615 18.3541 8.74767C18.3541 11.1622 17.476 13.4038 16.0306 15.3037C14.4362 17.3995 12.4709 19.2255 10.2588 20.6588C9.75253 20.99 9.29562 21.015 8.73997 20.6588C6.51527 19.2255 4.55001 17.3995 2.96919 15.3037C1.52282 13.4038 0.645752 11.1622 0.645752 8.74767ZM6.57724 9.01746C6.57724 10.6226 7.88706 11.8851 9.49309 11.8851C11.1002 11.8851 12.4226 10.6226 12.4226 9.01746C12.4226 7.4248 11.1002 6.10088 9.49309 6.10088C7.88706 6.10088 6.57724 7.4248 6.57724 9.01746Z" fill="#7CB142"/>
        </svg>
        <input type="text" placeholder="Enter the city and delivery address">
      </div>
      <div class="btn-submit">
        <span>Show more</span>
        <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.3238 8.17812C10.265 8.23854 10.0427 8.49687 9.83571 8.70937C8.62204 10.0458 5.45594 12.2333 3.79881 12.901C3.54715 13.0083 2.91088 13.2354 2.57093 13.25C2.24519 13.25 1.93467 13.175 1.63835 13.0229C1.26898 12.8104 0.972662 12.476 0.810298 12.0813C0.705776 11.8073 0.543412 10.9875 0.543412 10.9729C0.381048 10.076 0.291748 8.61875 0.291748 7.00833C0.291748 5.47396 0.381048 4.07604 0.513984 3.16562C0.529205 3.15104 0.691569 2.13229 0.869155 1.78333C1.1949 1.14583 1.83116 0.75 2.51208 0.75H2.57093C3.01439 0.765625 3.94697 1.16146 3.94697 1.17604C5.5148 1.84479 8.60783 3.925 9.85093 5.30729C9.85093 5.30729 10.201 5.6625 10.3532 5.88437C10.5907 6.20312 10.7084 6.59792 10.7084 6.99271C10.7084 7.43333 10.5755 7.84375 10.3238 8.17812Z" fill="white"/>
        </svg>

      </div>
    </div>
    <div class="notification"><span>Huge selection of local shops. From flower shops to grocery chains</span></div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.address{
  border: 1px solid green;
  padding-top: 207px;
  margin-right: 73px;
}
.address-text{
  margin-bottom: 32px;
}
.address-text span{
  font-weight: bold;
  font-size: 58px;
  letter-spacing: -0.5px;
  line-height: 100%;
}
.city-search{
  display: flex;
  margin-bottom: 32px;
  margin-top: 32px;
}
.input-box{
  border: 1px solid rgba(124, 177, 66, 0.15);
  box-sizing: border-box;
  border-radius: 12px;
  padding: 0 20px;
  height:50px;
  display: flex;
  align-items: center;
  margin-right: 32px;
}

input {
  font-size: 16px;
  font-weight: 600;
  width: 275px;
  color: #DED6D6;
  border:none;
  outline:none;
  /*align-self: flex-end;*/
}
input:placeholder-shown {
  border: none;
  font-size: 16px;
}
.btn-submit{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-left: 22px;
  padding-right: 22px;
  background: #7CB142;
  border-radius: 12px;
  height: 50px;
}
.btn-submit span{
  font-weight: 600;
  font-size: 16px;
  color: #FFFFFF;
  margin-right: 8px;
}

.notification span{
  font-weight: normal;
  font-size: 23px;
  line-height: 100%;
  color: #484848
}
</style>