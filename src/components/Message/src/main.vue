<template>
 <transition name="v-message-fade">
    <div 
    :class="[
        'v-message',
        type?`v-message-${type}`:'',
        showClose?'is-closable':''
    ]"
    :style="positionStyle"
    v-show="visible"
    @mouseenter="clearTimer"
    @mouseleave="startTimer"
    role="alert">
        <slot>
            <p class="v-message-content">
                {{message}}
            </p>
        </slot>
        <i class="v-message-closeBtn" @click="close">关闭</i>
    </div>
 </transition>
</template>
<script>

export default {
   data(){
       return {
           visible:false,
           message:"me",
           showClose:false,
           type:'info',
           duration:3000,
           verticalOffset:20,
           timer:null,
           closed:false,
           onClose:null
       }
   },
   computed: {
       positionStyle(){
           return {
               'top':`${this.verticalOffset}px`
           }
       }
   },
   watch:{
       closed(val){
           if(val){
               this.visible = false
           }
       }
   },
   methods:{
      startTimer(){
          if(this.duration>0){
              this.timer = setTimeout(() => {
                  if(!this.closed){
                      this.close()
                  }
              }, this.duration);
          }
      },
      clearTimer(){
          clearTimeout(this.timer)
      },
      close(){
           this.closed = true
            if(typeof this.onClose === 'function'){
                this.onClose(this)
            }
      } 
   },
   mounted(){
       this.startTimer();
   }
}
</script>
<style lang="scss">
    @import '@/assets/styles/message.scss'
</style>