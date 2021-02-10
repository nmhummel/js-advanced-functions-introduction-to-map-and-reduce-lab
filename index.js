
function mapToNegativize(sourceArray) {
    let newArray = [];
    for (const number of sourceArray) {
        newArray.push(number * -1)
    }
    return newArray
}

function mapToNoChange(sourceArray){
    for (const number of sourceArray) {
        return sourceArray
    }
}

function mapToDouble(sourceArray) {
    let newArray = [];
    for (const number of sourceArray) {
        newArray.push(number * 2)
    }
    return newArray
}

let mapToSquare = (sourceArray) => {
    let newArray = [];
    for (const number of sourceArray) {
        newArray.push(number ** 2)
    }
    return newArray
}

//////////////////////////////////

function reduceToTotal(sourceArray, start=0) {
    let total = start
    for (let i = 0; i < sourceArray.length; i++) {
        total = total + sourceArray[i]
    }
    return total
}

function reduceToAllTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        if (!sourceArray[i]) return false
    }
    return true;
}

function reduceToAnyTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++) {
        if (sourceArray[i]) return true
    }
    return false;
}