<template>
    <div 
        class="v-step"
        :class="[
            isLast&&'is-flex'
        ]"
        :style="style"
    >
        <!-- v-step -->
        <div 
            class="v-step-header"
            :class='`is-${currentStatus}`'
        >
            <!-- {{title}} -->
            <div class="v-step-line">
                <i class="v-step-line-inner" :style="lineStyle"></i>
            </div>
            
            <div class="v-step-text">
                <div class="v-step-text-inner">
                    {{index+1}}
                </div>
            </div>
        </div>
        <div class="v-step-main">
            <div 
                class="v-step-title"
                :class='`is-${currentStatus}`'        
            >
                 {{title}}
            </div>
            <div 
                class="v-step-description"
                :class='`is-${currentStatus}`'                
            >
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
    },
    data(){
        return{
            index:-1,
            lineStyle:{},
            internalStatus:''
        }
    },
    beforeCreate(){
        this.$parent.steps.push(this)
    },
    beforeDestroy(){
        const steps = this.$parent.steps
        const index = steps.indexOf(this)
        if(index >= 0){
            steps.splice(index,1)
        }
    },
    methods:{
        updateStatus(val){
            const prevChild = this.$parent.$children[this.index-1]
            if(val > this.index){   
                this.internalStatus = 'success'
            }else if(val===this.index){
                this.internalStatus = 'process'
            }else{
                this.internalStatus = 'wait'
            }
            // console.log('calcProgress(status)')
            // console.log(val)
            // this
            if(prevChild) prevChild.calcProgress(this.internalStatus)
        },
        calcProgress(status){
            let step = 100
            const style = {}

            style.transitionDelay = `${150*this.index}ms`
            if(status === 'process'){
                step = 0
            }else if(status === 'wait'){
                step = 0
                style.transitionDelay = `${-150*this.index}ms`
            }
            style.borderWidth = step?'1px':'0'
            style.width = `${step}%`
            this.lineStyle = style
        }
    },
    computed:{
        currentStatus(){
            return this.internalStatus
        },
        isLast(){
            const parent = this.$parent
            return parent.steps[parent.steps.length-1] === this
        },
        style(){
            const style = {}
            const parent = this.$parent
            const len = parent.steps.length
            const space = `${100/(len-1)}%`
            style.flexBasis = space
            if(this.isLast){
                style.maxWidth = `${100/len}%`
            }else{
                style.marginRight = '0px'
            }
            return style
        }
    },
    mounted(){
        // const unwatch = this.$watch('index',val=>{
        //     console.log(val)
        //     unwatch()
        // })
    },
    watch:{
        'index'(val){
            // console.log(val)
            this.$watch('$parent.active',this.updateStatus,{immediate:true})
        }
    }
}
</script>