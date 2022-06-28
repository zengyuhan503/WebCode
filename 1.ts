

const arr = (arr1) => {
    let obj = {
        '0': '#FFF1'
        '1': '#FFF2'
        '2': '#FFF3'
    }
    return arr1.map(item => {
        return obj[item]
    })
}