const { alert } = require("notie")

var username="none";

function reqUsername(){
    username=notie.input({
        text: 'Введите ваше имя:',
        type: 'text',
        submitCallback: function (value) {
            username=value
        },
        submitText: 'Сохранить',
        cancelText: 'Отмена'
    })
}

function hello(){
    if(username==undefined)
    {
        reqUsername()
    }
    if(username!=undefined){
        notie.alert({
            type: 'info',
            text: `Я это сделал, а тебе, ${username}, от меня совет: "Поступай правильно - поступай в ВятГУ!"`,
            time: 5
        })
    }
}