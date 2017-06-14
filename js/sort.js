/**
 * Created by zhang on 6/8/2017.
 */

var array = [];

for(var i=0,len=10000; i<len; i++){
    array[i] = parseInt(Math.random()*100);
}


function sort(arr) {
    var i =0;
    var l = arr.length;
    var tmp = null;
    while(i > l){
        for(var j= i; j<l; j++){
            if(arr[j] > arr[j+1]){
                
                tmp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tmp;
                
            }
            console.log(2);
        }
        
        i++;
    }
}


sort(array);
console.log(array);


