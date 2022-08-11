function addNumbersFromArray(arrays){
    sum=0
    for (let i=0; i<arrays.length; i++) {
        sum+=arrays[i]
    }
    return sum
}

x=addNumbersFromArray([1, 2, 3])
console.log(x)