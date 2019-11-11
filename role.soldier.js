/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('role.soldier');
 * mod.thing == 'a thing'; // true
 */
var roleSoldier = {
  /**@param {Creep} creep **/
  run: function(creep) {
    // TODO: find a hostile and kill
    // TODO: find hostile in room
    const target = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS)
    console.log(creep.attack(target));
    switch (creep.attack(target)) {
      case OK:
        console.log('Creep hit the target');
      break
      case ERR_NOT_IN_RANGE :
        creep.moveTo(target)
      default :

    }

  }
}

module.exports = roleSoldier
