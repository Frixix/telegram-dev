console.log("🌍 Deploy Service activo");

const deployService = {
  provider: "Vercel",

  deploy() {
    console.log("🚀 Deploy ejecutado");
  },

  status() {
    console.log("📡 Verificando estado del deploy");
  }
};

module.exports = deployService;
