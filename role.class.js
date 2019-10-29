//Creating a class to keep track of amount of roles deployed

function RoleManager(){
  this.role = role
  this.count = 0

  count() {
    var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    console.log('Harvesters: ' + harvesters.length);
  }
}


module.exports = RoleManager()
