const input=[
    [1,2],
    [3,4],
    [5,6],
];
const result=[44];
function caculateShoppingBudget(list){
    let sum = 0;
    for(let i = 0; i<list.legth; i++){
        let priceItem =1;
        for(let j = 0; j<list[0].length; j++){
            priceItem = list[i][j]*priceItem;
        }
        sum = sum + priceItem;
    }
    return sum;
}
function testCaculateShoppingBudget(input,result){
    for(let i =0; i<input.length; i++){
        if(caculateShoppingBudget(input[i]) === result[i]){
        console.log("Yes");
        }
        else{
        console.log("input:",input[i]);
        console.log("output:",result[i]);
        }
    }
}
testCaculateShoppingBudget(input,result);