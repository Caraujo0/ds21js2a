//* PROBLEM 2
 //* Base Conversions
 function baseconversions(number,base){
    let restack=new stack();
    let res;
    let baseString='';
    let digitos='0123456789ABCDEF';
      
      while(number>0){
      res=Math.floor(number%base);
      restack.push(res);
        number=Mathfloor(number/base);
      }
      while(!restack.isEmpty()){
      baseString+=[restack.pop()];
      }
      return baseString;  
    }
      console.log(baseconversions(100345, 2));
      console.log(baseconversions(100345, 8));
      console.log(baseconversions(100435, 16));
    