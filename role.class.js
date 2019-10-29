//Creating a class to keep track of amount of roles deployed

class RoleManager(role){
  /** @param {string} role **/

  constructor(role,count){
    this.role = role
    this.count = 0
  }

  countCreep() {
    var creep_with_role = _.filter(Game.creeps, (creep) => creep.memory.role == this.role);
    this.count = harvesters.length
    console.log('Harvesters: ' + this.count);
  }
}

module.exports = {RoleManager: new RoleManager()}
