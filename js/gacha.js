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
  var res = []
  var star = "3", idx

  window.crypto.getRandomValues(array)

  for (var i = 0; i < n; i++) {
    var k = array[i] % 10000

    if (k < p5 * 100) {
      res.push("5" + element + type)
      star = "5"
      idx = i
    }
    else if (k < p5 * 100 + p4 * 100)
      res.push("4" + element + type)
    else
      res.push("3" + element + type)
  }

  children = selectChild(res, array)

  if (star != "5") {
    star = res[res.length - 1][0]
    idx = res.length - 1
  }

  printAll(children, star, idx)

  return children
}

