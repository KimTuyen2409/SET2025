// Hàm in bảng cửu chương từ 1 đến n
function printMultiplicationTable(n) {
    for (let i = 1; i <= n; i++) {
        console.log(`\nBảng cửu chương ${i}:`);
        for (let j = 1; j <= 10; j++) {
            console.log(`${i} x ${j} = ${i * j}`);
        }
    }
}
// vi du cho n-5
printMultiplicationTable(5);

// tinh gia tri lon nhat, nho nhat va trung binh
function processArray(arr) {
    if (arr.length === 0) {
        console.log("Mảng rỗng!");
        return;
    }

    // tim gia tri lon nhat va nho nhat
    let max = Math.max(...arr);
    let min = Math.min(...arr);

    // Trung binh
    let sum = arr.reduce((total, num) => total + num, 0);
    let average = sum / arr.length;

    // dap an
    console.log("Giá trị lớn nhất:", max);
    console.log("Giá trị nhỏ nhất:", min);
    console.log("Giá trị trung bình:", average);
}

//vi du
let numbers = [5, 12, 8, 20, 3];
processArray(numbers);
