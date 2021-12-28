<template>
  <transition name="slide" tag="div">
    <div class="aside" v-show="show">
      <div class="close-btn" @click="$emit('close')">
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.2608 7.49787L14.6306 2.14055C14.8658 1.90539 14.9979 1.58646 14.9979 1.2539C14.9979 0.921347 14.8658 0.602412 14.6306 0.36726C14.3955 0.132107 14.0765 0 13.744 0C13.4114 0 13.0925 0.132107 12.8573 0.36726L7.5 5.73707L2.14268 0.36726C1.90752 0.132107 1.58859 -2.47773e-09 1.25603 0C0.923478 2.47773e-09 0.604543 0.132107 0.369391 0.36726C0.134239 0.602412 0.00213119 0.921347 0.00213119 1.2539C0.00213119 1.58646 0.134239 1.90539 0.369391 2.14055L5.7392 7.49787L0.369391 12.8552C0.252343 12.9713 0.159441 13.1094 0.0960411 13.2616C0.0326416 13.4138 0 13.577 0 13.7418C0 13.9067 0.0326416 14.0699 0.0960411 14.2221C0.159441 14.3743 0.252343 14.5124 0.369391 14.6285C0.485482 14.7455 0.6236 14.8384 0.775777 14.9018C0.927954 14.9652 1.09118 14.9979 1.25603 14.9979C1.42089 14.9979 1.58411 14.9652 1.73629 14.9018C1.88847 14.8384 2.02659 14.7455 2.14268 14.6285L7.5 9.25867L12.8573 14.6285C12.9734 14.7455 13.1115 14.8384 13.2637 14.9018C13.4159 14.9652 13.5791 14.9979 13.744 14.9979C13.9088 14.9979 14.072 14.9652 14.2242 14.9018C14.3764 14.8384 14.5145 14.7455 14.6306 14.6285C14.7477 14.5124 14.8406 14.3743 14.904 14.2221C14.9674 14.0699 15 13.9067 15 13.7418C15 13.577 14.9674 13.4138 14.904 13.2616C14.8406 13.1094 14.7477 12.9713 14.6306 12.8552L9.2608 7.49787Z" fill="#1A1A1A"/>
        </svg>
      </div>
      <div>
        <ul >
          <li v-for="(item) in items"
              :key="item.title"
              @click="clickMe(item)">
            <Iconly class="icon" :name="item.icon" color="#1A1A1A"/>
            {{ item.title }}
          </li>
          <li class="demo">
            FOR CLIENTS
          </li>
          <li @click="login">
            <Iconly class="icon" name="User" color="#1A1A1A"/>
            Login / Register
          </li>
          <li class="demo">
            FOR PARTNERS
          </li>
          <li>
            <Iconly class="icon" name="Work" color="#1A1A1A"/>
            Partner login
          </li>
          <li>
            <Iconly class="icon" name="Scan" color="#1A1A1A"/>
            Upload your goods
          </li>
        </ul>
      </div>
    </div>
  </transition>
</template>

<script>
import Iconly from "@/components/Iconly/Iconly";
export default {
  components: {Iconly},
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data(){
    return{
      items: [
        {
          title: 'Main page',
          icon:'Home'
        },
        {
          title: 'Support',
          icon: 'Chat'
        },
        {
          title: 'Blog',
          icon: 'Paper'
        },
        {
          title: 'About company',
          icon: 'Discovery'
        },
        {
          title: 'Vacancies',
          icon: 'AddUser'
        }
      ]
    }
  },
  methods:{
    clickMe(val){
      console.log("clicked -", val)
    },
    login(){
      console.log('login is working')
    }
  }
}
</script>

<style scoped>
.icon{
  margin-right: 18px;
}
.slide-enter-active {
  transition: all .5s ease;
}
.slide-leave-active {
  transition: all .5s ease;
}
.slide-enter-from, .slide-leave-to {
  transform: translateX(100%);
}
.aside {
  width: 350px;
  height: 100vh;
  background: #FFFFFF;
  box-shadow: -11px 22px 44px -12px rgba(124, 177, 66, 0.25);
  color: #1A1A1A;
  position: fixed;
  z-index: 100;
  top: 0;
  right: 0;
  padding: 32px;
  box-sizing: border-box;
}
.close-btn{
  cursor: pointer;
}

/*List style*/
ul{
  list-style-type: none;
  margin: 32px 0 0 0;
  padding: 0;
}
li{
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
  color: #1A1A1A;
  padding-bottom: 16px;
  user-select: none;
}
li:hover{
  cursor: pointer;
  color: #7CB142;
}
.demo{
  cursor: none;
  pointer-events: none;
  padding-top: 20px;
  font-size: 14px;
  color: #DED6D6;
}
</style>