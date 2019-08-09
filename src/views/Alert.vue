<template>
    <div class="content">
        <div class="content-item">
            <v-alert  
            title="成功提示的文案"
            type="success" @close="closeAlert"/>
        </div>
         <div class="content-item">
            <v-alert  
            title="成功提示的文案"
            type="success"
            :closable="false"/>
        </div>
        <div class="content-item">
            <v-alert  
            title="消息提示的文案"
            type="info" />
        </div>
        <div class="content-item">
            <v-alert  
            title="警告提示的文案"
            type="warning"/>
        </div>
        <div class="content-item">
            <v-alert  
            title="错误提示的文案"
            type="error" />
        </div>
    </div>
    
</template>
<script>
export default {
    methods:{
        closeAlert(){
            alert('close')
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
