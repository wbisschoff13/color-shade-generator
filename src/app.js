import { genPalette } from "./hsp_calc"
var colors = ["#ffffff", "#333333"]

document.getElementById("generate").onclick = function () {
  let hex = document.getElementById("hex").value
  let palette = document.getElementById("palette")
  let type = document.querySelector("input[name=type]:checked").value

  let res = genPalette(hex, type)
  let count = 0
  palette.innerHTML = ``
  res.forEach((element) => {
    count += 100
    var item = document.createElement("div")
    item.innerHTML = `<div class="flex items-center m-2 py-2 pl-2 pr-4 bg-white rounded-md shadow flex-auto">
                        <div class="ml-4 h-12 w-12 rounded-lg shadow-inner flex-none" style="background-color: ${element};"></div>
                        <div class="flex flex-wrap items-center text-blue-700 leading-none pl-1 mr-2">
                          <div class="ml-4 m-1 font-bold">${count}</div>
                          <div class="ml-4 m-1 font-light w-16">${element}</div>
                        </div>
                      </div>`
    palette.appendChild(item)
  })
}

{
  /* <div class="flex items-center m-2 py-2 pl-2 pr-4 bg-white rounded-md shadow flex-auto">
  <div class="ml-4 h-12 w-12 rounded-lg shadow-inner flex-none" style="background-color: #800000;"></div>
  <div class="flex flex-wrap items-center text-blue-700 leading-none pl-1 mr-2">
    <div class="ml-4 m-1 font-bold">500</div>
    <div class="ml-4 m-1 font-light w-16">#800000</div>
  </div>
</div> */
}
