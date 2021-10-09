function pointFun(x,y){
    this.x = x;
    this.y = y;
}
function show(arr){
    for(let i=0;i<arr.length;i++){
        console.log(arr[i].x + ", "+arr[i].y);
    }
}
const p1 = new pointFun(1,2);
const p2 = new pointFun(2,4);
const p3 = new pointFun(8,1);
const p4 = new pointFun(2,9);
const point = [p1,p2,p3,p4];
show(point)