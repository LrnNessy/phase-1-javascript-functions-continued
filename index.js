function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`
  }
  saturdayFun();
  saturdayFun("bathe my dog");
  
const mondayWork = function(something = "go to the office") {
    console.log(`This Monday, I will ${something}.`);
    return `This Monday, I will ${something}.`;
  }; 
  mondayWork();
  mondayWork("work from home");

function wrapAdjective(flair = "*") {
    return function (adjective = "a hard worker") {
       console.log(`You are ${flair}${adjective}${flair}!`);
      return `You are ${flair}${adjective}${flair}!`;
    }
   
  }
  wrapAdjective()();
  wrapAdjective("#")("a something");