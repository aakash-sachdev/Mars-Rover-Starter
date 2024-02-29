/*Class Message details:
  Two properties:
  1) name is a string
  2) commands is an Array (contains several Commands)
  Message is responsible for bundling the commands and delivering them to the rover.
*/

// Class Name Message

class Message {
   constructor(name, commands = []) {
     this.name = name;
     
     // Logic for  checking name input :
      if (!name) {
         throw Error("Message name required.");
      }
     
      this.commands = commands;
   }
}

module.exports = Message;