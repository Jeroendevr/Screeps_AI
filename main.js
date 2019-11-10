var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder')
var RoleManager = require('role.class')
var PopulationManager = require('pop.class')

module.exports.loop = function () {

    for(var name in Memory.creeps) {
      // NOTE:  Checks for every creep in memory compare it to live and spawning creep then delete
      // console.log('The following creep ' + name + ' Spawning is ' + Game.creeps[name].spawning);
      var creep = Game.creeps[name]
      //console.log(Creep.spawning == true);
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }

    var harvesterRoleManager = new RoleManager('harvester')
    var builderRoleManager = new RoleManager('builder')


    PopulationManager.manage()


    for(var name in Game.creeps) {
      // NOTE: Create check if creep is in game
        var creep = Game.creeps[name];
        if (!creep.spawning){
          if(creep.memory.role == 'harvester') {
              roleHarvester.run(creep);
          }
          if(creep.memory.role == 'builder') {
              roleBuilder.run(creep);
          }
          if(creep.memory.role == 'upgrader') {
              roleUpgrader.run(creep);
          }  
        }

    }
}
