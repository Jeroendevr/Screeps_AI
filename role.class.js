//Creating a class to keep track of amount of roles deployed

class RoleManager{
  constructor(role,count){
    this.role = role
    this.count = 0
  }

  countCreep() {
    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    this.count = harvesters.length
    console.log('Harvesters: ' + this.count);
  }
}

module.exports = {RoleManager: new RoleManager()}
