console.log("🚀 Debug Agent iniciado");

const debugAgent = {
  name: "Debug Agent",
  status: "active",

  tasks: [
    "Detectar errores",
    "Revisar logs",
    "Analizar fallos",
    "Sugerir correcciones"
  ],

  debug(error) {
    console.log(`🐞 Analizando error: ${error}`);
  }
};

module.exports = debugAgent;
