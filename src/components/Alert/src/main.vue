<template>
  <transition name="v-alert-fade">
    <div 
      class="v-alert is-light" 
      :class="`v-alert-${type}`"
      v-show="visible"
      role="alert" >
      <div class="v-alert-content">
        <span class="v-alert-title" v-if="title">
          <slot name="title">{{title}}</slot>    
        </span>  
        <p class="v-alert-description" v-if="$slots.default">
          <slot></slot>
        </p>
        <i class="v-alert-closebtn" v-if="closable" @click="close">关闭</i>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name:"v-alert",
    props:{
      title:String,
      type:String,
      closable:{
        type:Boolean,
        default:true
      }
    },
    data(){
      return {
        visible:true
      }
    },
    methods:{
      close(){
        this.visible = !this.visible
        this.$emit('close')
      }
    }
  }
</script>

<style lang="scss">
    @import '@/assets/styles/alert.scss'
</style>
