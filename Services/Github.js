console.log("🔗 GitHub Service activo");

const githubService = {
  repo: "telegram-dev-agent",

  commit(message) {
    console.log(`✅ Commit realizado: ${message}`);
  },

  push() {
    console.log("⬆️ Push enviado a GitHub");
  },

  pull() {
    console.log("⬇️ Pull realizado");
  }
};

module.exports = githubService;
