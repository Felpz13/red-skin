
export function generateId(){
    return Math.floor(Math.random()*100000);
}

export function calculateProfitPerPlayer(players, totalProfit){
    if(players.lenght > 0){
        let updatedPlayers = [...players]
        const totalWaste = calculateTotalWaste(players)
    
        const playersLenght = players.lenght
        updatedPlayers.forEach(player=>{
            player.profit = player.waste + ((totalProfit - totalWaste) / playersLenght)
        })
        
        return updatedPlayers
    } else{
        return []
    } 
}

function calculateTotalWaste(players){
    return players.reduce((acc, player) => acc + player.waste)
}