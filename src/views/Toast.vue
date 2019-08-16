<template>
    <div class="content">
        <div class="content-item">
            <v-button @click="toast">Toast</v-button>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        toast(){
            this.$toast({
                message:"this is a toast"
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