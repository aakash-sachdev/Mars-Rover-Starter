/*Class Rover details:
  Four properties:
  1) position
  2) mode
  3) generatorWatts
  4) receiveMessage - function

An object representing the mars rover. 
*/

// Class Name Rover

class Rover {
   constructor(position, mode = 'NORMAL', generatorWatts = 110 ) {
     this.position = position; // number representing the rover’s position.
     this.mode = mode ;
     this.generatorWatts = generatorWatts ;
   }
   receiveMessage(message){ //handles the various types of commands it receives and updates the rover’s properties.
      
      let results = []; // Each element in the array is an object that corresponds to one Command in message.commands.

      for (let i = 0; i < message.commands.length; i++) {
         let commandRover = message.commands[i];

         // creating 'STATUS_CHECK' condition:
         if(commandRover.commandType === 'STATUS_CHECK' ) {
            results.push({completed: true, roverStatus : {mode: "NORMAL", generatorWatts : 110, position: 87382098}})
            // creating 'MODE_CHANGE' condition:
         } else if ( commandRover.commandType === 'MODE_CHANGE')  {
            results.push({completed: true});
            // console.log(commandRover.value) to check the return value 
            this.mode = commandRover.value;
            // creating 'MOVE' condition:
         } else if ( commandRover.commandType === 'MOVE') {
            if(this.mode === 'LOW_POWER') { // If the value is LOW MODE it will update completed false and confirm that the rover’s position did not change.
               console.log(results);
               results.push({completed: false});
            } else if (this.mode === 'NORMAL') {
               results.push({completed: true});
               this.position = commandRover.value;
            }
         }
      }

      return {
         message: message.name,
         results: results
      }
   }
}

module.exports = Rover;