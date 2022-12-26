const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/submit') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
    });
    req.on('end', () => {
      const data = JSON.parse(body);
      sendMessage(data);
      res.end();
    });
  } else {
    res.statusCode = 404;
    res.end();
  }
});


server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

const TelegramBot = require('telegraf').Telegraf;
const token = "your_bot_token"
const bot = new TelegramBot(token);
const adminChatId = "your_id";

function sendMessage(data){
  let avto = `\n  Автомобиль: ${data["car_brend"]} ${data["car_model"]}`;
  avto += data["car_year"] === "" ? "" : ` ${data["car_year"]} года выпуска`;
  let telegram = data["telegram"] === "" ? "" : `\n  Телеграмм: @${data["telegram"]}`;
  message = `У вас новая заявка!`+
            `\n  Имя: ${data["name"]}`+
            `\n  Номер: ${data["phone"]}`+ telegram + avto +
            `\n  Vin: ${data["vin"]}`+
            `\n  Код машины: ${data["car_code"]}`+
            `\n  Описание проблемы: ${data["description"]}`
  bot.telegram.sendMessage(adminChatId, message, {})
}

bot.command('start', ctx => {
  console.log(ctx.from)
  if (ctx.chat.id == adminChatId)
    bot.telegram.sendMessage(ctx.chat.id, 'Бот работает!', {})
  else
    bot.telegram.sendMessage(ctx.chat.id, 'Извините, но вы не администратор', {})
})
bot.launch();