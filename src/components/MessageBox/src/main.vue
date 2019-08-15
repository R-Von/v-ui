<template>

    <transition name="msgbox-fade">
        <div 
        class="v-message-box_wrapper" 
        v-show="visible"
        role="dialog"
        >
            <div class="v-message-box">
                <div class="v-message-box_header">
                    <div class="v-message-box_title">
                        <span>{{title}}</span>
                    </div>
                    <button class='v-message-box_headerbtn' @click="handleAction('close')">
                        <i class="v-message-box_close" >关闭</i>
                    </button>
                </div>
                <div class="v-message-box_content">
                    {{message}}
                </div>
                <div class="v-message-box_btns">

                </div>
            </div>
        </div>
    </transition>  

</template>
<script>
export default {
    data(){
        return {
            title:"11",
            message:"22",
            visible:true
        }
    },
    methods:{
        handleAction(action){
            if(action==='close'){
                this.doClose()
            }
        },
        doClose(){
            // console.log(this.visible)
            if (!this.visible) return;
            this.visible = false;
        }
    },
    mounted(){
        // console.log(this)
    }
}
</script>
<style lang="scss">
    @import '@/assets/styles/message-box.scss'
</style>