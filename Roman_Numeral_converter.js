function convertToRoman(num) {
    let s="";
           while(num!=0){  
               if(num>=1 && num<4){
                   s+="I";
                   num--;
               }
               else if(num>=4 && num<5){
                   s+="IV";
                   num-=4;
               }
               else if(num>=5 && num<9){
                   s+="V";
                   num-=5;
               }
               else if(num>=9 && num<10){
                   s+="IX";
                   num-=9;
               }
               else if(num>=10 && num<40){
                   s+="X";
                   num-=10;
               }
                else if(num>=40 && num<50){
                   s+="XL";
                   num-=40;
               }
                else if(num>=50 && num<90){
                   s+="L";
                   num-=50;
               }
               else if(num>=90 && num<100){
                   s+="XC";
                   num-=90;
               }
                else if(num>=100 && num<400){
                   s+="C";
                   num-=100;
               }
               else if(num>=400 && num<500){
                   s+="CD";
                   num-=400;
               }
                else if(num>=500 && num<900){
                   s+="D";
                   num-=500;
               }
               else if(num>=900 && num<1000){
                  s+="CM";
                   num-=900;
               }
               else{
                   s+="M";
                   num-=1000;
               }
           }
           return s;
   }
   
   convertToRoman(36);