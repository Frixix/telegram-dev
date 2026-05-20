console.log("🚀 Review Agent iniciado");

const reviewAgent = {
  name: "Review Agent",
  status: "active",

  tasks: [
    "Revisar código",
    "Analizar calidad",
    "Detectar malas prácticas",
    "Optimizar estructura"
  ],

  review(file) {
    console.log(`📋 Revisando archivo: ${file}`);
  }
};

module.exports = reviewAgent;
