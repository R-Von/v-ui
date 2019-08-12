<template>
    <div class="content">
        <div class="content-item">
            <v-button @click="alert1">唤起Message</v-button>    
        </div>
        <div class="content-item">
            <v-button type="success" @click="alert2">唤起Success</v-button>    
        </div>
        <div class="content-item">
            <v-button type="warning" @click="alert3">唤起Warning</v-button>    
        </div>
        <div class="content-item">
            <v-button type="danger" @click="alert4">唤起Error</v-button>    
        </div>
        <div class="content-item">
            <v-button @click="alert5">onClose</v-button>    
        </div>
        <!-- <div class="content-item">
            <v-button @click="alert6">唤起Message</v-button>    
        </div> -->
    </div>
</template>
<script>
export default {
    methods:{
        alert1(){
            this.$message('这是一条消息提示')
        },
        alert2(){
            this.$message({
                message:"这是一条消息提示",
                type:"success"
            })
        },
        alert3(){
            this.$message({
                message:"这是一条消息提示",
                type:"warning"
            })
        },
        alert4(){
            this.$message({
                message:"这是一条消息提示",
                type:"error"
            })
        },
        alert5(){
             this.$message({
                message:"这是一条消息提示",
                type:"success",
                onClose:function(){
                    alert('onclose')
                }
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