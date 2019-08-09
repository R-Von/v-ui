import Vue from 'vue'
import Main from './main.vue'

let messageConstructor = Vue.extend(Main)

// 使用基础 Vue 构造器，创建一个“子类”。
let instance;
let instances = [];

const Message = function(option) {

    if(typeof option === 'string'){
        option = {
            message:option
        }
    }

    instance = new messageConstructor({
        data:option
    })


    instance.$mount()   //mount 后 才有 $el


    document.body.appendChild(instance.$el)

    instance.visible = true

    let verticalOffset = 20

    instances.forEach(item => {
        verticalOffset += item.$el.offsetHeight + 16
    })

    instance.verticalOffset = verticalOffset

    instances.push(instance)

    return instance
}

export default Message