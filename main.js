var roleHarvester = require('role.harvester');
var roleSoldier = require('role.soldier')
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder')
var RoleManager = require('role.class')
var PopulationManager = require('population_manager')
var BuildingPlanner = require('building.class')
var testModule = require('testModule')
// const RoomManager = require('Managers/manager_room')


module.exports.loop = function () {

    for(var name in Memory.creeps) {
      // NOTE:  Checks for every creep in memory compare it to live and spawning creep then delete
      var creep = Game.creeps[name]
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }

    PopulationManager.manage()
    BuildingPlanner.plan()

    for(var name in Game.creeps) {
      // NOTE: Create check if creep is in game
        var creep = Game.creeps[name];
        if (!creep.spawning){
          switch (creep.memory.role) {
              case 'builder' :
                roleBuilder.run(creep)
                break
              case 'harvester' :
              roleHarvester.run(creep)
              break
              case 'soldier' :
                roleSoldier.run(creep)
                break
              case 'upgrader' :
                roleUpgrader.run(creep)
                break
            case 'BETA' :
                testModule.list_sources(creep)
                break
            default :
                console.log('Could not find  role defined for ' + creep);
            }
        }
    }
}
