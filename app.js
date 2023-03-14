var array = ['li','div','li','p','h1','p','h1','div','div','li','h1','p','h1','ol','br'];
var counts = {li:0, div:0, p:0, h1:0,a:0,ol:0,br:0,}

for(var el of array){
    counts[el]++; array.sort((a, b)=> a.length-b.length)
}
console.log(counts);

