import CA from './src/componentA'
import CB from './src/componentB'

CA.install = function(Vue){
    Vue.component(CA.name,CA)
}

CB.install = function(Vue){
    Vue.component(CB.name,CB)
}

export { CA , CB }