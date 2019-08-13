import Vue from 'vue'
import msgboxVue from './main.vue'


const msgboxConstructor = Vue.extend(msgboxVue)



const MessageBox = function(option){
    // console.log(option)

    const instance = new msgboxConstructor({
        data:option
    })

    instance.$mount()

    document.body.appendChild(instance.$el)

    return instance

}

export default MessageBox