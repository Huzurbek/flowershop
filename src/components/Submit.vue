<template>
  <div class="submit">{{text}}</div>
</template>

<script>
export default {
  props: {
    text: String,
  }
}
</script>

<style scoped>
.submit{
  height: 50px;
  background: #7CB142;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding:0 32px;
  cursor: pointer;
  color:white;
  font-weight: bold;
  white-space: nowrap;
  /*Its additional*/
  width: fit-content;
}

.submit:hover{
  background: #71a03a;
}
/*Mobile version*/
@media screen and (max-width: 540px) {
  .submit{
    padding: 0 10px
  }
}
</style>