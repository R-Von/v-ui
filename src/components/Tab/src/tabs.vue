<script>
import tabNav from './tabsNav'

export default  {
    name:"v-tab",
    props:{
        active:{
            type:Number,
            default:0
        }
    },
    components:{
        tabNav
    },
    data(){
        return{
            currentIndex:0,
            panes:[]
        }
    },
    methods:{
        handleClick(tab,index,ev){
            this.$emit('tabClick',ev,tab);
            this.currentIndex = index
        },
        setCurrent(num){
            this.currentIndex = num
        },
        getInitPanes(){
            if(this.$slots.default){
                const paneSlots = this.$slots.default
                const panes = paneSlots.map(({componentInstance})=>componentInstance)
                this.panes = panes
            }else{
                this.panes = []
            }
        }
    },
    watch:{
        active(val){
            this.setCurrent(val)
        }
    },
    render(h){
        const {
            currentIndex,
            panes,
            handleClick
        } = this

        const navData = {
            props:{
                currentIndex,
                panes,
                onTabClick:handleClick
            }
        }        
        const header = (
            <tab-nav {...navData} />
        )
        const body = (
             <div class="v-tab-body">
                {this.$slots.default}
             </div>
        )

        return(
            <div class="v-tab">
                {[header,body]}
            </div>
        )
    },
    mounted(){
        this.setCurrent(0)
        this.getInitPanes()
    }
}
</script>
<style lang="scss">
    .v-tab{
        width:100%;
    }
    .v-tab-header{
        width:100%;
        height:60px;
        display:flex;
        border-bottom:2px solid #dedede;
        box-sizing:border-box;
        position:relative;
    }
    .v-tab-nav{
        height:60px;
        line-height:60px;
        cursor:pointer;
        text-align:center;
    }
    .v-tab-nav-active{
        color:#409EFF;
    }
    .v-tab-nav:hover{
        color:#409EFF;
    }
    .v-tab-body{
        padding:20px 30px;
    }
    .v-tab-bar{
        position:absolute;
        height:2px;
        background:#409EFF;
        bottom:0;
        left:0;
        z-index: 1;
        transition: transform .3s cubic-bezier(.645,.045,.355,1);
    }
</style>