var starList = ["3", "4", "5"]
var elementList = ["Fire", "Water", "Grass", "Light", "Dark"]
var typeList = ["Attacker", "Tanker", "Healer", "Buffer", "Debuffer"]
var childDict = {}


function loadFile(path) {
  var result = null
  var request = new XMLHttpRequest()

  request.open("GET", path, false)
  request.send()

  if (request.status == 200)
    result = request.responseText

  return result
}

function loadList(star, filename) {
  if (star === null)
    filename = "./resource/text/" + filename

  else
    filename = "./resource/text/" + star + "star/" + filename

  return loadFile(filename).trim().split("\n")
}

function mappingChild(list) {
  for (var i = 0; i < list.length; i++) {
    l = list[i].split("\t")
    childDict[l[0]] = l[1]
  }
}

function init() {
  list_5 = loadList("5", "list_5.txt")
  list_4 = loadList("4", "list_4.txt")
  list_3 = loadList("3", "list_3.txt")

  list_all = loadList(null, "list.txt")
  mappingChild(list_all)
}

