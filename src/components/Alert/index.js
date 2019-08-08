import Alert from './src/main'

Alert.install = (Vue)=>{
    Vue.component(Alert.name,Alert)
}

export default Alert