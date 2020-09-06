var p4 = 12.88


function selectChild(name, array) {
  var res = []

  for (var i = 0; i < name.length; i++) {
    res.push(listDict[name[i]][array[i] % listDict[name[i]].length] + "_01")
  }

  return res
}

function main(p5, n, element, type) {
  var array = new Uint32Array(n)
  res = []

  window.crypto.getRandomValues(array)

  for (var i = 0; i < n; i++) {
    var k = array[i] % 10000

    if (k < p5 * 100)
      res.push("5" + element + type)
    else if (k < p5 * 100 + p4 * 100)
      res.push("4" + element + type)
    else
      res.push("3" + element + type)
  }

  console.log(res)

  children = selectChild(res, array)
  console.log(children.map(elem => childDict[elem]))

  printResult(children)

  return children
}

