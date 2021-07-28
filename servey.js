const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const generateQuestion = function (callback) {
rl.question(`What's your name? Nicknames are also acceptable :) `, (answer) => {
  console.log(`Thank you. Your name is: ${answer}`);

  generateQuestion(rl.question(`What's an activity you like doing? `, (answer) => {
    console.log(`Thank you. You like: ${answer}`);
  
    generateQuestion(rl.question('Why do you like that activiity? ', (answer) => {
      console.log(`Thank you. The reason is: ${answer}`);
    
      generateQuestion(rl.question('What do you listen to while doing that?', (answer) => {
        console.log(`Thank you. You'd like to listen: ${answer}`);
      
        generateQuestion(rl.question('Why do you listen that? ', (answer) => {
          console.log(`Thank you. The reason is: ${answer}`);
        
          generateQuestion(rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer) => {
            console.log(`Thank you. Your favourite meal is: ${answer}`);
          
            generateQuestion(rl.question(`What's your favourite thing to eat for that meal? `, (answer) => {
              console.log(`Thank you. Your favourie to eat for that meal is: ${answer}`);
            
              generateQuestion(rl.question(`Where do you want to go for your vaction? `, (answer) => {
                console.log(`Thank you. The place ypu want to visit is: ${answer}`);
              
                generateQuestion(rl.question(`Which sport is your absolute favourite? `, (answer) => {
                  console.log(`Thank you. Your favourie to sport is: ${answer}`);
                
                  generateQuestion(rl.question(`What is your superpower? In a few words, tell us what you are amazing at!`, (answer) => {
                    console.log(`Thank you. Your superpower is: ${answer}`);
                  
                    rl.close();
                  }))
                }))
              }))
            }))
          }))
        }))
      }))
    }))
  }))
})
};
generateQuestion();


















