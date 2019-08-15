<template>
    <div class="content">
        <h2>V-UI</h2>

        <ul>
            <li><router-link to='/alert'>Alert</router-link></li>
            <li><router-link to='/button'>Button</router-link></li>
            <li><router-link to='/message'>Message</router-link></li>
            <li><router-link to='/tab'>Tab</router-link></li>
            <li><router-link to='/message_box'>MessageBox</router-link></li>
            <li><router-link to='/step'>Step</router-link></li>
            <li>...</li>
            <li>...</li>
            <li>...</li>
            <li>...</li>
        </ul>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    .content{
        width:80%;
        margin:50px auto 0;
        text-align:left;
    }
    ul{
        margin-top:40px;
        li{
            list-style:inside;
        }
    }
</style>