message 

Options

参数|说明|类型|可选值|默认值
--|--|--|--|--
message|消息文字|string|--|--
type|主题|string|success / warning / info / error | info
duration|显示时间 毫秒 设为0 则不自动关闭|number|--|3000
showClose|显示关闭按钮|boolean|-|false
onClose|关闭时的回调函数 参数是被关闭的message实例|function|-|-