<template>
  <div class="input-box">
    <input type="text" placeholder="Your e-mail">
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.input-box{
  flex: 1;
  height: 50px;
  background: #FFFFFF;
  border: 1px solid rgba(124, 177, 66, 0.15);
  box-sizing: border-box;
  border-radius: 12px;
  min-width: 200px;
  /*width: auto;*/
  display: flex;
  align-items: center;
  padding-left: 16px;
  margin-right: 32px;
}
input {
  font-size: 16px;
  font-weight: 600;
  color: #DED6D6;
  border:none;
  outline:none;
}
input:placeholder-shown {
  border: none;
}
/*Mobile version*/
@media screen and (max-width: 540px) {
  .input-box{
    margin-right: 8px;
  }
  input:placeholder-shown{
    max-width: 80px;
  }
}
</style>