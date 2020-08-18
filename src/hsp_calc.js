const hsluv = require("hsluv")
const _ = require("underscore")

function linspace(startValue, stopValue, cardinality) {
  var arr = []
  var step = (stopValue - startValue) / (cardinality - 1)
  for (var i = 0; i < cardinality; i++) {
    arr.push(Math.round((startValue + step * i) * 1000) / 1000)
  }
  return arr
}

function genPalette(hex, type = "NORMAL", num = 9) {
  let s = []
  let l = []

  let a = hsluv.hexToHsluv(hex)
  let h = a[0]
  let s2 = a[1]

  s.push(100)
  // s = s.concat(linspace(88, 68, num - 1))

  s = s.concat(linspace(s2, (s2 * 68) / 88, num - 1))
  l = linspace(98, 25, num)

  if (type == "DULL") {
    // s = linspace(45, 35, num)
    s = linspace((s2 * 45) / 88, (s2 * 35) / 88, num)
  } else if (type == "BRIGHT") {
    s = []
    s.push(100)
    // s = s.concat(linspace(90, 100, num - 1))
    s = s.concat(linspace(s2, 100, num - 1))
    l = linspace(98, 40, num)
  }
  let colors = []

  _.zip(s, l).forEach((element) => {
    let s2 = element[0]
    let l2 = element[1]
    colors.push(hsluv.hsluvToHex([h, s2, l2]))
  })
  return colors
}

// console.log(genPalette("#ED8936", "BRIGHT"))
export { genPalette }
