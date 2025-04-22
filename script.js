const API_URL = "https://script.google.com/macros/s/AKfycbw89D-ezgJhguHffhPnTab4FeoSbRG6Sp1LVhd1_T66CmqSb19xd6JtjTyhmY8e6eOVnw/exec";

document.getElementById("matchForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const jogador1 = document.getElementById("player1").value.trim();
  const jogador2 = document.getElementById("player2").value.trim();
  const pontos1 = parseInt(document.getElementById("score1").value);
  const pontos2 = parseInt(document.getElementById("score2").value);

  fetch(API_URL, {
    method: "POST",
    body: JSON.stringify({
      jogador1,
      pontos1,
      jogador2,
      pontos2
    }),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(res => res.json())
  .then(data => {
    alert("Resultado registrado! Vencedor: " + data.vencedor);
    // Aqui você pode atualizar seu ranking local ou recarregar os dados do Google Sheets
  });

  this.reset();
});
