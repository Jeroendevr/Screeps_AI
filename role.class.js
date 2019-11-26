//Creating a class to keep track of amount of roles deployed
 
class RoleManager {
  /** @param {string} role **/

  constructor(role){
    this.role = role
    this.count = this.countCreep()
    // console.log('RoleManager created')
  }

  countCreep() {
    var creep_with_role = _.filter(Game.creeps, (creep) => creep.memory.role == this.role);
    var creep_amount = creep_with_role.length
    // console.log('Harvesters: ' + this.count);
    return creep_amount
  }

}

module.exports = RoleManager
