const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Command class", function() {

  it("throws error if command type is NOT passed into constructor as the first parameter", function() {
    expect( function() { new Command();}).toThrow(new Error('Command type required.'));
  });
  
  // Second Command test - checks that the constructor in the Command class correctly sets the commandType property in the new object.
  it("constructor sets command type", function() {
    //Created a new variable with new object argument.
    let newCommandType = new Command('testValue', 1500);
    //Checked the by comparing it using test.
    expect(newCommandType.commandType).toBe('testValue');
  });

  // Third Command test - test checks that the constructor correctly sets the value property in the new object.
  it("constructor sets a value passed in as the 2nd argument", function() {
    //Created a new variable with new object argument.
    let newValue = new Command('testValue', 2000);
    //Checked the by comparing it using test.
    expect(newValue.value).toBe(2000);
  });

});