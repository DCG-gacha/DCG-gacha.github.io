var starList = ["3", "4", "5"]
var elementList = ["Fire", "Water", "Grass", "Light", "Dark"]
var typeList = ["Attacker", "Tanker", "Healer", "Buffer", "Debuffer"]
var childDict = {}
var listDict = {}


function loadFile(path) {
  var result = null
  var request = new XMLHttpRequest()

  request.open("GET", path, false)
  request.send()

  if (request.status == 200)
    result = request.responseText

  return result
}

function loadList(star, name) {
  if (star != null)
    filename = "./resource/text/" + star + "star/" + "list_" + star + name + ".txt"

  else
    filename = "./resource/text/list.txt"

  return loadFile(filename).trim().split("\n")
}

function mappingChild() {
  for (var i = 0; i < listDict["all"].length; i++) {
    l = listDict["all"][i].split("\t")
    childDict[l[0]] = l[1].replace("_", " ")
  }
}

function init() {
  starList.forEach(
    star =>
    listDict[star] = loadList(star, "")
  )
  starList.forEach(
    star =>
    typeList.forEach(
      type =>
      listDict[star + type] = loadList(star, type)
    )
  )
  starList.forEach(
    star =>
    elementList.forEach(
      element =>
      listDict[star + element] = loadList(star, element)
    )
  )

  listDict["all"] = loadList(null, null)

  mappingChild()
}

