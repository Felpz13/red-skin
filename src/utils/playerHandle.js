export function generateId() {
  return Math.floor(Math.random() * 100000);
}

export function calculateProfitPerPlayer(players, totalProfit) {
  if (players.length > 0) {
    let updatedPlayers = [...players];
    const totalWaste = calculateTotalWaste(players);
    const playersLenght = players.length;
    updatedPlayers.forEach(player => {
      player.profit =
        totalProfit > totalWaste
          ? player.waste + (totalProfit - totalWaste) / playersLenght
          : 0;
    });

    return updatedPlayers;
  } else {
    return [];
  }
}

function calculateTotalWaste(players) {
  let total = 0;
  players.forEach(player => {
    total += player.waste;
  });
  return total;
}
