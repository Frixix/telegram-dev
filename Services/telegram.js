console.log("📨 Telegram Service activo");

const telegramService = {
  sendMessage(chatId, message) {
    console.log(`📩 Mensaje enviado a ${chatId}: ${message}`);
  },

  receiveCommand(command) {
    console.log(`🤖 Comando recibido: ${command}`);
  }
};

module.exports = telegramService;
