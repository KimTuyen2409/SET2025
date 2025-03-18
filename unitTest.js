let a =[2,3,4];
let b=[5,6,7];
let expectedResult= [7,9,11];
function sum(a,b){
    return a+b;
}
function testSum(check){
    for(let i = 0; i <= a.length; i++){
        check = sum(a[i],b[i]) === expectedResult[i];
        if(check){
            console.log("Yes");
        }
        else{
            console.log(sum(a[i],b[i]));
        }
    }
}
