// Define the saturdayFun function with default activity
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // Define the mondayWork function with default activity
  let mondayWork = function(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
  }
  
  // Define the wrapAdjective function
  function wrapAdjective(flair = '*') {
    return function(adjective) {
      return `You are ${flair}${adjective}${flair}!`;
    }
  }
  
  // Test the defined functions
  console.log(saturdayFun()); // Output: This Saturday, I want to roller-skate!
  console.log(mondayWork()); // Output: This Monday, I will go to the office.
  const awesome = wrapAdjective('||');
  console.log(awesome('awesome')); // Output: You are ||awesome||!
   
