let userNames=[];


function listNames() {
  for(i=0;i<userNames.length;i++) {
    document.getElementById("main").innerHTML=userNames.toString();
  }
}

function addToEnd() {
  let clientSubject =userNames.push(prompt("Enter Subject Name"));
  let clientResults = parseInt(prompt("Enter Subject Score"));
  document.getElementById("name").innerHTML+=clientSubject+",";
  let outputScore = document.getElementById("score").innerHTML+=clientResults+",";
  listNames();

}