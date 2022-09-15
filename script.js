
function getPermut(str){
    if(typeof str !== "string"){
        const inputNotString = new Error(`${str} is not a string`)
        throw inputNotString
    }
    
    if(str.length < 2){
        return str
    }else if(str.length === 2){
        const result = []

        result.push(str)

        //reorder the two letter string then add to result
        const [firstChar, secondChar] = str.split("")
        const newStr = secondChar + firstChar
        result.push(newStr)

        return result.sort()

    }else if(str.length > 2){
        const result = []

        for(let i = 0; i < str.length; i++){
            const strArr = [...str.split("")]
            const currChar = strArr.splice(i, 1)
            const charPermut = getPermut(strArr.join(""))

            charPermut.forEach(permuted => {
                result.push(currChar + permuted)
            })
        }

        return result.sort()
    }
}