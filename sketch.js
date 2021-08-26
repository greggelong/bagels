
let button, input, output;

let maxdigit =3;

let maxcount = 10;

let guessNum = 0;

let computerSecret;
let win = false;

function setup(){
  noCanvas();
  input = select('#input');
  input.value(' ');
  button = select('#btn');
  output = select('#output');
  button.mousePressed(goguess)
  computerSecret = getSecNun();
  console.log(computerSecret);
  output.html("I have a 3 digit number")



}

function goguess(){
  guessNum ++; 
  // need to clean the input with trim() or it wont work
  // and only do guesses under these conditions 
  if (guessNum < 11 && !win){
  let cmpReply = getClues(input.value().trim(),computerSecret);
  
  output.html(cmpReply)

  let history = "Guess "+ guessNum + " " + input.value() + " " + cmpReply 

  createP(history);

  input.value(' ')
    } else if (guessNum >= 11 && !win){
      output.html("Too many guesses!!!, my number was "+computerSecret +" Refresh to play again!")

    }else{

  output.html("Refresh the page to play again!")
  }
}



function getSecNun(){
  let nums = [0,1,2,3,4,5,6,7,8,9]
  print(nums);
  let result = "";
  for (let i = 0; i< maxdigit;i++){
    let pick =floor(random(nums.length)); // need to keep changing the array size 
    result = result+ nums.splice(pick,1)  // need to take out the numbers already picked
    print(result, pick, nums)
  }
  return result
}

function getClues(guess,secret){
  if(guess === secret){
    win = true;
    return 'You got it!!! *Refresh the page to play again*'
  }else if(guess !== secret && guessNum == 10){
    return "Too many guesses!!!, my number was "+computerSecret +" Refresh to play again!"
  }
  let ga = guess.split('');
  let sa = secret.split('');
  //print(ga,sa)
 
  let reply = [];
  for(let i=0;i<guess.length;i++){
    if(sa.indexOf(ga[i]) == i){
      reply.push("fermi");
    } else if(sa.includes(ga[i])){
      reply.push("pico");
    }
  }
  if(reply.length == 0){
    return "bagels"
  } else{
      //reply.sort(()=> Math.random() - 0.5)
      return reply.join(', ')
  }
}
