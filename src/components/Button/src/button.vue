<template>
    <button 
        class="v-button"
        @click="handleClick"
        :class="[
            type?`v-button-${type}`:'',
            size?`v-button-${size}`:'',
            {
                'is-disabled':disabled,
                'is-plain':plain,
                'is-round':round,
            }
        ]"
    >
        <span v-if="$slots.default"><slot></slot></span>
    </button>
</template>

<script>
export default {
    name:"v-button",
    props:{
        size:String,
        type:String,
        round:{
            type:Boolean,
            default:false
        },
        plain:{
            type:Boolean,
            default:false
        },
        disabled:{
            type:Boolean,
            default:false
        }
    },
    methods:{
        handleClick(e){
            this.$emit('click', e);
        }
    }
}
</script>
<style lang="scss">
    @import '@/assets/styles/button.scss'
    // .v-button{
    //     display: inline-block;
    //     line-height: 1;
    //     white-space: nowrap;
    //     cursor: pointer;
    //     background: #fff;
    //     border: 1px solid #DCDFE6;
    //     border-color: #DCDFE6;
    //     color: #606266;
    //     -webkit-appearance: none;
    //     text-align: center;
    //     box-sizing: border-box;
    //     outline: none;
    //     margin: 0;
    //     transition: .1s;
    //     font-weight: 500;
    //     -moz-user-select: none;
    //     -webkit-user-select: none;
    //     -ms-user-select: none;
    //     padding: 12px 20px;
    //     font-size: 14px;
    //     border-radius: 4px;
    // }
    // .v-button:hover, .v-button:focus {
    //     color: #409EFF;
    //     border-color: #c6e2ff;
    //     background-color: #ecf5ff;
    // }
</style>