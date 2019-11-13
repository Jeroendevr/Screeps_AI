/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('buildings.class');
 * mod.thing == 'a thing'; // true
 */

class BuildingPlanner {
// TODO: create a function to plann extensions
// TODO: create a function to layout a certain pattern

  plan() {
    // TODO: place extensions around spawns
    for (const i in Game.spawns) {
      const spwn = Game.spawns[i]
      console.log(spwn.pos.y - 3);
      spwn.room.createConstructionSite(spwn.pos.x + 5, spwn.pos.y, STRUCTURE_EXTENSION)
    }
  }
}


  // NOTE: Function to dynamically add extensions


module.exports = new BuildingPlanner()
