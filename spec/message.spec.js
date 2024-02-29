const Message = require('../message.js');
const Command = require('../command.js');

describe("Message class", function() {

    // First Message test -
    it("throws error if command type is NOT passed into constructor as the first parameter", function() {
        expect( function() { new Message();}).toThrow(new Error('Message name required.'));
    });
    
    // Second Message test -
    it("constructor sets name", function() {
      //Created a new variable with new object argument.
      let newName = new Message('testName');
      //Checked the by comparing it using test.
      expect(newName.name).toBe('testName');
    });
    
    //Third Message test -
    it("contains a commands array passed into the constructor as the 2nd argument", function() {
      //Created a new variable with new object argument.
      let newCommands = ["test","array","commands"];
      let newMessage = new Message('testName', newCommands);
      //Checked the by comparing it using test.
      expect(newMessage.commands).toEqual(newCommands); //If it should pass with deep equality, replace "toBe" with "toStrictEqual"
     //Expect(newCommands.commands[1]).toBe("array");
    });
});
