function getIcons(list, n, size) {
  if (n == 0)
    return []

  var img = document.createElement("img")

  img.src = "https://dcg-gacha.github.io/resource/image/child/" + list[0] + ".png"
  img.width = size
  img.title = childDict[list[0]]

  return [img].concat(getIcons(list.slice(1), n - 1, size))
}

function printLoadImg(star, t) {
  var img = document.createElement("img")
  var divLoading = document.getElementById("loading")

  img.src = "https://dcg-gacha.github.io/resource/image/ui/summon_" + star + ".png"
  img.width = 405
  img.height = 720

  divLoading.appendChild(img)

  setTimeout(function() {
    img.remove()
  }, t)
}

function printBg(star) {
  var bgImg = document.getElementById("bg")

  bgImg.src = "https://dcg-gacha.github.io/resource/image/ui/summon_" + star + "_bg.png"
}

function printThumb(childName) {
  var divSummonThumb = document.getElementById("summonThumb")
  var children = divSummonThumb.children

  while (children.length)
    children[0].remove()

  thumb = getIcons([childName], 1, 128)
  divSummonThumb.appendChild(thumb.pop())
}

function printChildName(childName) {
  var divSummonChildName = document.getElementById("summonChildName")
  var children = divSummonChildName.children
  var p = document.createElement("p")

  p.className = "childName"
  p.textContent = childDict[childName]

  while (children.length)
    children[0].remove()

  divSummonChildName.appendChild(p)
}

function printResults(list) {
  var divSummonResults = document.getElementById("summonResults")
  var children = divSummonResults.children

  while (children.length)
    children[0].remove()

  if (list.length <= 1)
    return

  icons = getIcons(list, list.length, 60)
  for (var i = 0; i < icons.length; i++) {
    if (i == 5)
      divSummonResults.appendChild(document.createElement("br"))
    divSummonResults.appendChild(icons[i])
  }
}

function printScreen(list, idx) {
  var divSummonResults = document.getElementById("summonResults")

  printThumb(list[idx])
  printChildName(list[idx])
  printResults(list)
}

function printReceipt(list) {
  var divReceipt = document.getElementById("receipt")
  var size = 64

  icons = getIcons(list, list.length, size)
  icons.forEach(elem => divReceipt.appendChild(elem))
  divReceipt.appendChild(document.createElement("div"))
}

function printAll(list, star, idx) {
  var t = 3000

  if (star == "5")
    t = 5000

  printLoadImg(star, t)
  setTimeout(function() {
    printBg(star)
  }, 500)

  printScreen(list, idx)

  setTimeout(function() {
    printReceipt(list)
  }, t)
}

