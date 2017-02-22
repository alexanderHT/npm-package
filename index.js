exports.handsomeComparison = {
  between: function (inputName1, inputname2) {
    let arrayName = [inputName1, inputname2]
    let name1 = ''
    let name2 = ''

    name1 = arrayName[Math.floor(Math.random() * 2)]
    if (name1 == arrayName[0]) {
      name2 = arrayName[1]
    }else {
      name2 = arrayName[0]
    }

    let result = 'So The Result is ' + name1 + ' More Handsome then ' + name2

    return result
  }
}
