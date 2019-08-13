## messagebox
### 全局方法
- $msgbox(option)
- $alert(message,title,options)或者$alert(message,options)
- $confirm(message,title,options)或者$confirm(message,options)
- $prompt(message,title,options)或者$prompt(message,options)

### options

参数|说明|类型|可选值|默认值
--|--|--|--|--
title|标题|string|-|-
message|消息正文|string|-|-
showClose|显示关闭按钮|boolean|-|true
beforeClose|关闭前的回调 暂停实例的关闭|function(action,instance,done){}|-|-
showCancelButton|取消按钮|boolean|-|false
showConfirmButton|确定按钮|boolean|-|true
cancelButtonText|取消按钮文本|string|-|取消
confirmButtonText|确定按钮文本|string|-|确定
title||||