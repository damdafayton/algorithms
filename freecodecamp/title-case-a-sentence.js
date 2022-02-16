function titleCase(str) {
  let strList=str.split(' ');
  let newList=[];
  for (let i=0; i<strList.length; i++){
    let newWord=''
    for(let k = 0; k<strList[i].length; k++){
      if (k==0){
        newWord+=strList[i][k].toUpperCase();
      }else{
        newWord+=strList[i][k].toLowerCase();
      }
    }
    newList.push(newWord);
  }
  return newList.join(' ');
}

titleCase("I'm a little tea pot");