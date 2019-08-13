import Vue from 'vue'
import Main from './main.vue'

let messageConstructor = Vue.extend(Main)

// 使用基础 Vue 构造器，创建一个“子类”。
let instance;
let instances = [];
let seed = 1

const Message = function(option) {

    if(typeof option === 'string'){
        option = {
            message:option
        }
    }

    let userOnCLose = option.onClose
    let id = 'message_' + seed++

    option.onClose = function(){
        Message.close(id,userOnCLose)
    }

    instance = new messageConstructor({
        data:option
    })

    instance.id = id

    instance.$mount()  

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
// console.log(Message.close);
Message.close = function(id,userOnCLose){
    // console.log('id',id)
    // console.log('userOnCLose',userOnCLose)
    let len = instances.length
    for(let i = 0 ; i < len ; i++){
        if(id===instances[i].id){
            if(typeof userOnCLose === 'function'){
                userOnCLose(instances[i])
            }
        }
        instances.splice(i,1)
        break
    }
}


export default Message