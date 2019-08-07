<template>
    <div class="v-tab-pane" v-if="active">
        <slot></slot>
    </div>
</template>
<script>
export default  {
    name:"v-tab-pane",
    props:{
        title:String,
        index:Number
    },
    computed:{
        active(){
            return this.index===this.$parent.currentIndex
        }
    }
}
</script>