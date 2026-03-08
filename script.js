let memory = null;

function writeMemory(program){

let name,data;

if(program === 1){
name = document.getElementById("name1").value;
data = document.getElementById("data1").value;
}else{
name = document.getElementById("name2").value;
data = document.getElementById("data2").value;
}

let log = document.getElementById("log");

if(memory !== null){
let msg = "⚠ Memory Overwritten! Previous data lost.";
addLog(msg);
}

memory = data;

document.getElementById("memoryContent").innerText =
"Written by " + name + " : " + data;

addLog(name + " wrote '" + data + "' to Memory Address 100");

}

function addLog(message){
let li = document.createElement("li");
li.innerText = message;
document.getElementById("log").appendChild(li);
}
