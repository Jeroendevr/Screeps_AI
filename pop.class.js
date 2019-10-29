class PopulationManager {
  constructor(){

  }

  spawn() {
    var newName = 'Harvester' + Game.time
    console.log('Spwaning new harvester: ' + newName)
    Game.spwans['Spwan1'].spawnCreep([WORK,CARRY,MOVE], newName,
      {memory: {role: 'harvester'}})
  }
}





module.exports = new PopulationManager()
