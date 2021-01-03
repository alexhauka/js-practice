function pigIt(str){
  let newArray = str.split(' ');
  let newString = '';
  //console.log(newArray);
  for (let word of newArray) {
    newString += word.substr(1) + word[0] + 'ay ';
  }
  return newString;
}


pigIt('pig latin is cool');