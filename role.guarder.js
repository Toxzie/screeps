var roleGuarder = require('role.guarder');

module.exports = {
    // a function to run the logic for this role
    run: function(creep) {
    		var target = creep.pos.findNearest(Game.HOSTILE_CREEPS);
			if(target && creep.hits > creep.hitsMax - 500 /* no more attack */) {
						creep.moveTo(target);
						creep.attack(target);
			} else {
					creep.moveTo(Game.spawns.Spawn1);
			}
}