var p4 = 12.88


function selectChild(stars, array) {
  var res = []

  for (var i = 0; i < stars.length; i++) {
    if (stars[i] == 5)
      res.push(list_5[array[i] % list_5.length] + "_01")
    else if (stars[i] == 4)
      res.push(list_4[array[i] % list_4.length] + "_01")
    else
      res.push(list_3[array[i] % list_3.length] + "_01")
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
      res.push(5)
    else if (k < p5 * 100 + p4 * 100)
      res.push(4)
    else
      res.push(3)
  }

  console.log(res)

  children = selectChild(res, array)
  console.log(children.map(elem => childDict[elem]))

  printResult(children)

  return children
}

