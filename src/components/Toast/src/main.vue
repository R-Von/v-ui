<template>
   
    <div class="v-toast" v-if="showToast">
        <transition name="v-toast-fade">
            <div class="toast" v-show="visible">
                {{message}}
            </div>
        </transition>
    </div>
   
</template>    
<script>
export default {
    name:"v-toast",
    data(){
        return {
            message:"toast",
            showToast:false,
            visible:false
        }
    },
    mounted(){
       this.visible = true
    }
}
</script>
<style lang="scss">
    .toast{
        width:200px;
        height:50px;
        background-color: rgba(0, 0, 0, .5);
        position: fixed;
        top:50%;
        left:40%;
        color:#ffffff;
        border-radius:16px;
        text-align: center;
        line-height: 50px;
        font-size: 18px;
        user-select: none;
    }

    .v-toast-fade-enter-active,.v-toast-fade-leave-active {
        transition: all .2s linear;
    }
    .v-toast-fade-enter,.v-toast-fade-leave-active {
        background: rgba(0,0,0,0);
    }

</style>