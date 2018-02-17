//选择排序
function choose(array){
	var temp = 0
	var max = 0,flag=0
	for(var i=0,len=array.length; i<len; i++){
		temp = array[i]
		for(var j=i; j<len; j++){
			if(max < array[j]){
				max = array[j]
				flag = j
			}
		}
		array[i] = max
		array[flag] = temp
		max = 0
		flag = 0
	}
	return array
}

// 冒泡排序
function maopao(array){
	var temp = 0
	for(var i=0,len=array.length; i<len; i++){
		for(var j=0; j< len-i; j++){
			if(array[j]>array[j+1]){
				temp = array[j]
				array[j] = array[j+1]
				array[j+1] = temp
			}
		}
	}
	return array
}

//直接插入排序
function insert(array){
	var temp = 0, j=0
	for(var i=0,len=array.length; i<len; i++){
		for(j=i-1; j>=0; j--){
			if(array[i] > array[j]){
				break
			}
		}
		temp = array[i]
		for(var k=i-1; k>j; k--){
			array[k+1] = array[k]
		}
		array[j+1] = temp
	}
	return array
}

// 快排

function quick(array){
	console.log(array.join(','))
	var temp = 0
	quickBase(0, array.length-1)
	return array

	function quickBase(left, right){
		var mid = array[Math.floor((left + right) / 2)]
		var i = left, j=right
		while(i<=j){
			while(array[i] < mid) i++
			while(array[j] > mid) j--
			if(i<=j){
				temp = array[j]
				array[j] = array[i]
				array[i] = temp
				i++;
				j--;
			}
		}
		if(left<j) quickBase(left, j)
		if(i< right) quickBase(i, right)
	}
}




function print(array){
	var el = document.getElementById('test')
	var ul = document.createElement('ul')
	for(var i=0,len=array.length; i<len; i++){
		var li = document.createElement('li')
		li.innerHTML = array[i]
		ul.appendChild(li)
	}
	el.appendChild(ul)
}

function random(n){
	var array = new Array(n)
	for(var i=0;i<n;i++)
        array[i] = Math.floor(Math.random() * Math.random() * 100);
    return array;
}

print(quick(random(10)))
//print(quick([91,4,42,0,4,7,17,10,1,58]))


//print(Add('11111111','22222222'))
