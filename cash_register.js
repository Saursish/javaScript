const currency={
    "PENNY":1,
    "NICKEL":5,
    "DIME":10, 
    "QUARTER":25 ,
    "ONE":100,
    "FIVE":500,
    "TEN":1000,
    "TWENTY":2000,
    "ONE HUNDRED":10000
  }
  
  
  
  function checkCashRegister(price, cash, cid) {
    let changes=cash*100-price*100;
    let change2=changes;
    let totalSum=0;
    let modifiedCid=cid.reverse();
    let changes1=[];
    for(let i of modifiedCid){
      totalSum+=i[1]*100;
      let amount=i[1]*100;
      let curr=i[0];
      let currentSum=0;
      while(changes>=currency[curr] && amount > 0){
        amount-=currency[curr];
        currentSum+=currency[curr];
        changes-=currency[curr];
      }
      changes1.push([i[0],currentSum/100]);
    }
    let changes2=changes1.filter(ele=>ele[1]!=0)
    let ans={status:'',
    change:[]
    }
    if(totalSum===change2){
      ans.status='CLOSED';
      ans.change=cid.reverse();
    }
    else if(changes>0)
    ans.status='INSUFFICIENT_FUNDS';
    else{
      console.log(change2+" "+totalSum)
    ans.status='OPEN'
    ans.change=changes2;
    }
  return ans;
  }