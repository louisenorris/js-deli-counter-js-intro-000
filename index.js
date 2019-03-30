function takeANumber(katzDeliLine, name) {
var position = katzDeliLine.length+1
   katzDeliLine.push(name);
   return "Welcome, " + name +". You are number "+ position +" in line.";
}

function nowServing (katzDeliLine) {
  var name;
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }

  name = katzDeliLine.shift()
  return "Currently serving "+ name +".";
}

function currentLine(line) {
if (katzDeliLine.length === 0) {
  return "The line is currently empty.";
}

var deliString = `The line is currently: 1. ${katzDeliLine[0]}`

for(let i = 1; i<katzDeliLine.length;i++) {
  deliString += `,${i+1}. ${katzDeliLine[i]}`
}
return deliString
}