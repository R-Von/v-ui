<template>
    <div class="v-step">
        <!-- v-step -->
        <div class="v-step-header">
            <!-- {{title}} -->
            <div class="v-step-line">
                <i class="v-step-line-inner"></i>
            </div>
            
            <div class="v-step-text">
                <div class="v-step-text-inner">
                    1
                </div>
            </div>
        </div>
        <div class="v-step-main">
            <div class="v-step-title">
                 {{title}}
            </div>
            <div class="v-step-description">
                {{description}}
            </div>
        </div>

    </div>
</template>
<script>
export default {
    name:"v-step",
    props:{
        title:{
            type:String,
            default:""
        },
        description:{
            type:String,
            default:""
        }
    }
}
</script>