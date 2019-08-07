<script>
import tabBar from './tabsBar'

const noop = ()=>{

}
export default  {
    name:"tab-nav",
    props:{
        panes:Array,
        currentIndex:Number,
        onTabClick:{
            type:Function,
            default:noop
        }
    },
    components:{
        tabBar
    },
    render(h){
        let {
            panes,
            currentIndex,
            onTabClick
        } = this
        const width = window.innerWidth/panes.length

        const tabNav = panes.map((pane,index)=>{
            const title = pane.title
            return (
                <div
                    style={`width:${width}px`}
                    title={title}
                    class={{ 
                        'v-tab-nav':true,
                        'v-tab-nav-active':index===currentIndex
                    }}
                    on-click={(ev)=>{onTabClick(pane,index,ev)}}
                >
                    {title}
                </div>
            )
        })
        let style = {}
        style.width = `${width}px`
        const transform = `translateX(${width*(currentIndex)}px)`
        style.transform = transform
        style.msTransform = transform
        style.webkitTransform = transform
        
        const tabBar = (
            <tab-bar bodyStyle={style} />
        )

        return (
            <div class="v-tab-header">
                {[tabNav,tabBar]}
            </div>
        )
    }
}
</script>