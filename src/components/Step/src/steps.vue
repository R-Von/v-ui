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
        }
    }
}
</script>
<style lang="scss">
    @import '@/assets/styles/step.scss';
</style>