let a =[100,180,200];
let b=[0,1,2];
let expectedResult= [100,181,202];
function sum(a,b){
    return a+b;
}
function testSum(a,b,expectedResult){
    for(let i = 0; i<a.length; i++){
        let check ;
        check = sum(a[i],b[i]) === expectedResult[i];
        if(check){
            console.log("Yes");
        }
        else{
            console.log(sum(a[i],b[i]));
        }
    }
}
testSum(a,b,expectedResult);