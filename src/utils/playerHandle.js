import { removeCurrency, toCurrency } from "./currencyHandler";

export function generateId() {
  return Math.floor(Math.random() * 100000);
}

export function calculateProfitPerPlayer(players, totalProfit) {
  if (players.length > 0) {
    let updatedPlayers = [...players];

    updatedPlayers.forEach(player => {
      player.profit = toCurrency(
        calculatePlayerTotalProfit(player, players, totalProfit)
      );
    });

    return updatedPlayers;
  } else {
    return [];
  }
}

function calculatePlayerTotalProfit(player, players, totalProfit) {
  const totalWaste = calculateTotalWaste(players);

  return totalProfit > totalWaste
    ? removeCurrency(player.waste) + (totalProfit - totalWaste) / players.length
    : 0;
}

function calculateTotalWaste(players) {
  let total = 0;
  players.forEach(player => {
    total += removeCurrency(player.waste);
  });
  return total;
}
