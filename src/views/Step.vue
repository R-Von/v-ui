<template>
    <div class="content">
        <div class="content-item">
            <v-steps :active="active">
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
        <div class="content-item"> 
            <v-button @click="next">下一步</v-button>
        </div>       
        <div class="content-item"> 
            {{active}}
        </div>       

    </div>
</template>
<script>
export default {
    data() {
      return {
        active: 0
      };
    },
    methods:{
        next(){
            if (this.active++ > 2) this.active = 0;
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