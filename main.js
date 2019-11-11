var roleHarvester = require('role.harvester');
var roleSoldier = require('role.soldier')
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder')
var RoleManager = require('role.class')
var PopulationManager = require('population_manager')
var testModule = require('testModule')

module.exports.loop = function () {

    for(var name in Memory.creeps) {
      // NOTE:  Checks for every creep in memory compare it to live and spawning creep then delete
      var creep = Game.creeps[name]
        if(!Game.creeps[name]) {
            delete Memory.creeps[name];
            console.log('Clearing non-existing creep memory:', name);
        }
    }

    var harvesterRoleManager = new RoleManager('harvester')
    var builderRoleManager = new RoleManager('builder')

    PopulationManager.manage()
    // NOTE: testModule is for testing purposes the normal population manager is should be decommented
    // testModule.spawn('soldier')



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
          switch (creep.memory.role) {
            case 'soldier' :
              roleSoldier.run(creep)
              break
          }
        }

    }
}
