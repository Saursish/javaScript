function rot13(str) {
    let ans="";
    for(let i=0;i<str.length;i++){
      if(str.charCodeAt(i)>=65&&str.charCodeAt(i)<=90){
        ans+=String.fromCharCode((str.charCodeAt(i))%26+65);
      }
      else
      ans+=str.charAt(i);
    }
    return(ans);
  }
  
  rot13("SERR CVMMN!");