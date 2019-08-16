import Vue from 'vue'
import toastVue from './main.vue'

const toastConstruct = Vue.extend(toastVue)

const Toast = function(option){
    const instance = new toastConstruct({
        data:option
    })

    instance.showToast = true
    
    instance.$mount()

    document.body.appendChild(instance.$el)

    const delay = 2000

    setTimeout(()=>{
        instance.showToast = false
    },delay)

    return instance
}

export default Toast