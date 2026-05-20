console.log("🧠 OpenAI Service activo");

const openAIService = {
  model: "gpt-4",

  ask(prompt) {
    console.log(`💡 Prompt enviado: ${prompt}`);
  }
};

module.exports = openAIService;
