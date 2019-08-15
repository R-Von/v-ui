<template>
    <div class="v-steps">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:"v-steps",
    props:{
        active:{
            type:Number,
            default:0
        },
        finishStatus:{
            type: String,
            default: 'success'
        },
        processStatus:{
            type: String,
            default: 'process'
        }
    },
    data(){
        return{
            steps:[]
        }
    },
    watch:{
        steps(steps){
            steps.forEach((child,index) => {
                child.index = index
            });
        }
    }
}
</script>
<style lang="scss">
    @import '@/assets/styles/step.scss';
</style>