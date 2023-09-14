/*
var topic = "HTML";

if (topic === 'HTML') {
  console.log("Let's study HTML!");
} else if (topic === 'CSS') {
  console.log("Let's study CSS!");
} else if (topic === 'Git') {
  console.log("Let's study Git!");
} else if (topic === 'JavaScript') {
  console.log("Let's study JavaScript!");
} else {
  console.log('Please try again!');
}

console.log("test code 2");

var topic = ["HTML","CSS","Git","JavaScript"];
console.log("Lets study",topic[0]);
console.log("Lets study",topic[1]);
console.log("Lets study",topic[2]);
console.log("Lets study",topic[3]);

console.log("test code 2");
*/
function listTopics(){

for (var x=0; x < topic.length;x++){
console.log(topic[x]);
}
}

function selectTopic() {
    if (randomTopic === 'HTML') {
        console.log("Let's study HTML!");
      } else if (randomTopic === 'CSS') {
        console.log("Let's study CSS!");
      } else if (randomTopic === 'Git') {
        console.log("Let's study Git!");
      } else if (randomTopic === 'JavaScript') {
        console.log("Let's study JavaScript!");
      } else {
        console.log('Please try again!');
      }
      
}
var topic = ["HTML","CSS","Git","JavaScript"];
var randomTopic = topic[Math.floor(Math.random() * topic.length)];
console.log("Here are a list of topics.");
listTopics()
console.log("Which topic should we study first?");
selectTopic()