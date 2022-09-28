//psuedocode
/* 
need variable R, P and S 



prompt-select R,S or P

if user selects R,S or P. The computor will generate random response. if they dont pick either rsp, then alert pops up telling user to pick one.

within S we need condition that says its > P , but < R

within P we need condition that says its > R , but < S

within R we need condition that says its > S , but < p


math.random for computer variable which will be S, P or R




*/


var hand = {
    r:function
    p:
    s:

}

var selection = prompt(
  "welcome to our rock, paper, scissors game! You will be playing against the computer. Enter r for rock, s for scissors or p for paper"
);

function runGame(selection) {
  var computer = math.random(hand);
  if (selection === r && computer === p) {
    var outcome = alert("you lost!");
  }
  if (selection === s && computer === p) {
    var outcome = alert("you lost!");
  }
  if (selection === r && computer === p) {
    var outcome = alert("you lost!");
  }
}
