
function Add(a,b){
	a = a.toString()
	b = b.toString()
	var lenA = a.length,lenB = b.length
	var maxlen = Math.max(lenA,lenB)
	a = a.padStart(maxlen,0)
	b = b.padStart(maxlen,0)
	var result = new Array(maxlen+1)

	var cha = 0
	var temp = 0

	for(var i=maxlen-1; i>=0; i--){
		temp = Number(a[i]) + Number(b[i]) + cha
		cha = Math.floor(temp / 10)
		result[i+1] = temp % 10
	}
	result[0] = cha
	result = delHeadZero(result.join(''))
	return result
}

function Minus(a,b){
	a = a.toString()
	b = b.toString()
	var result
	if(a>=0 && b>=0){
		result = MinusBase(a,b)
	}else if(a<0 && b>=0){
		result = '-' + Add(b, Math.abs(a).toString())
	}else if(a>=0 && b<0){
		result = Add(a, Math.abs(b).toString())
	}else if(a<0 && b<0){
		result = '-' + Add(Math.abs(a).toString(), Math.abs(b).toString())
	}
	return result
}

function Multiply(a,b){
	a = a.toString()
	b = b.toString()
	var lenA = a.length,lenB = b.length
	var result = '0'
	var tempresult =  new Array(lenA+lenB-1)
	var temp = 0
	var cha = 0
	var offset = ''
	for(var i=lenB-1; i>=0; i--){
		for(j=lenA-1; j>=0; j--){
			temp = a[j] * b[i] + cha
			cha = Math.floor(temp / 10)
			tempresult[j+1] = temp % 10
		}
		tempresult[0] = cha
		tempresult = tempresult.join('')+offset
		cha = 0
		result = Add(result, tempresult)
		tempresult =  new Array(lenA+lenB-1)
		offset = offset + '0'
	}
	return result
}

function divide(a,b){
	a = a.toString()
	b = b.toString()
	var x = 0, temp=0
	var result = []
	for(var i=0,len=a.length; i<len; i++){
		temp = Number(a[i]) + x*10
		result.push(Math.floor(temp / b))
		x = temp % b
	}
	result = delHeadZero(result.join(''))
	return result
}

function bigdivide(a,b){
	a = a.toString()
	b = b.toString()
	var x = 0, temp=0, lmp
	var result = []
	for(var i=0,len=a.length; i<len; i++){
		temp = Add(a[i],Multiply(x,10))
		lmp = devideBase(temp, b)
		result.push(lmp.qua)
		x = lmp.mod
	}
	result = delHeadZero(result.join(''))
	return result
}

function devideBase(a,b){
	var result = {mod: 0, qua: 0}
	if(!compare(a,b)){
		result.mod = a
	}else{
		for(var i=9; i>0; i--){
			if(compare(a,Multiply(b,i))){
				result.qua = i
				result.mod = Minus(a, Multiply(b,i))
				break
			}
		}
	}
	return result
}

function MinusBase(a,b){
	var lenA = a.length,lenB = b.length
	var maxlen = Math.max(lenA,lenB)
	a = a.padStart(maxlen,0)
	b = b.padStart(maxlen,0)
	var result = new Array(maxlen)
	var negflag = ''
	if(!compare(a,b)){
		[a,b] = [b,a]
		negflag = '-'
	}

	var cha = 0
	var temp = 0
	for(var i=maxlen-1; i>=0; i--){
		temp = Number(a[i]) - Number(b[i]) + cha
		if(temp < 0){
			temp = temp + 10
			result[i] = temp
			cha = -1
		}else{
			cha = 0
			result[i] = temp
		}
	}

	result = negflag + delHeadZero(result.join(''))
	return result
}

function compare(a,b){
	var lenA = a.length, lenB = b.length
	if(lenA > lenB){
		return true
	}else if(lenA < lenB){
		return false
	}else if(a === b){
		return true
	}else{
		for(var i=0; i<lenA; i++){
			if(a[i] != b[i]){
				return a[i]>b[i]? true: false
			}
		}
	}
}

function print(str){
	var el = document.getElementById('test')
	el.innerText = str || ''
}

function delHeadZero(str){
	return str.replace(/\b(0+)/gi,"")
}


//print(Add('11111111','22222222'))
//print(Minus('-11111111','22222222'))
//print(Multiply('11111','33'))
print(bigdivide('555555555555555555555555555555555555','111111111111111111111111111111111111'))
//print(delHeadZero('00000000000032222222222845734832000000444444'))

