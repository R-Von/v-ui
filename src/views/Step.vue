<template>
    <div class="content">
        <div class="content-item">
            <v-steps :active="0">
                <v-step 
                    title="步骤一" 
                    description="1111111111"
                >
                </v-step>
                <v-step 
                    title="步骤二" 
                    description="222222"
                >
                </v-step>
                <v-step  
                    title="步骤三" 
                    description="333333"
                >
                </v-step>
            </v-steps>
        </div>        
    </div>
</template>
<script>
export default {
    
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