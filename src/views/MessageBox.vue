<template>
    <div class="content">
        <div class="content-item">
            <v-button @click="open">MessageBox</v-button>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        open(){
            this.$msgbox({
                title:"消息",
                message:"内容"
            })
        }
    }
}
</script>
<style lang="scss">
    .content{
        width:80%;
        margin:30px auto;
    }
    .content-item{
        margin-bottom:30px
    }
</style>