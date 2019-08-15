import Step from './src/step'
import Steps from './src/steps'

Step.install = function(Vue){
    Vue.component(Step.name,Step)
}

Steps.install = function(Vue){
    Vue.component(Steps.name,Steps)
}

export { Step , Steps }