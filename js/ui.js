function getIcon(list, n) {
  if (n == 0) {
    document.getElementById("icons").appendChild(document.createElement("div"))
    return
  }
  var img = document.createElement("img")
  img.width = 64
  img.title = childDict[list[0]]

  var url = "./resource/image/childIcon/" + list[0] + ".png"
  var request = new XMLHttpRequest()

  request.open("GET", url, true)
  request.responseType = "blob"
  request.onload = function() {
    if (request.status == 200) {
      var response = request.response
      img.src = URL.createObjectURL(response)
      document.getElementById("icons").appendChild(img)

      getIcon(list.slice(1), n - 1)
    }
  }

  request.send()
}

function printResult(list) {
//  if (document.getElementById("icons") != null)
//    document.getElementById("icons").remove()

  var divIcons = document.createElement("div")
  divIcons.id = "icons"

  document.getElementById("res").appendChild(divIcons)
  getIcon(list, list.length)
}

