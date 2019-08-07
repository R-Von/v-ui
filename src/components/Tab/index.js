import Tabs from './src/tabs'
import TabsPane from './src/tabsPane'



Tabs.install = function(Vue){
    Vue.component(Tabs.name,Tabs)
}

TabsPane.install = function(Vue){
    Vue.component(TabsPane.name,TabsPane)
}

export {Tabs,TabsPane}