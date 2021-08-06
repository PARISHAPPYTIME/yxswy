// 处理二维数组
// 对于二维数组的处理可以分为两种，一种按列访问，一种是按行访问。
// 按列访问，外层循环对应行，内层循环对应列。
// 例如，上述的数组，每一行对应一个学生三门科目的成绩记录，可以通过相加所有成绩，然后除以科目数来得到该生的平均成绩。
const grades = [
    [88,86,82],
    [91,82,83],
    [77,72,79],
    [86,80,82]
];
let total = 0;
let average = 0.0;
for(let row = 0;row<grades.length;++row){
    for(let col = 0;col<grades[row].length;++col){
        total += grades[row][col];
    }
    average = total/grades[row].length;
    console.log("student "+parseInt(row + 1)+" average: "+average.toFixed(2));   // toFixed 表示按照 2 位来保留小数
    total = 0;
    average = 0.0;
}

// 对于按行访问，则外层循环对应列，内层循环对应行，
// 例如还是上述数组，现在的数组表示一个学生三场考试四门科目的各科分数，我们来求每场考试的平均成绩

const grades2 = [
    [88,86,82],
    [91,82,83],
    [77,72,79],
    [86,80,82]
];
let total2 = 0;
let average2 = 0.0;
//这里假设每场考试的科目都一样，所以可以通过grades[0].length来获取考试数量
for(let col = 0;col < grades2[0].length;++col ){
    for(let row= 0;row<grades2.length;++row){
        total2 += grades2[row][col];
    }
    average2 = total2/grades2.length;
    console.log("exam "+parseInt(col + 1)+" average: "+average2.toFixed(2));
    total2 = 0;
    average2 = 0.0;
}