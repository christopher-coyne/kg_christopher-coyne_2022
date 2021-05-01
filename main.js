let numDict = {0: "Zero", 1: "One", 2: "Two", 3: "Three", 4: "Four", 5: "Five", 6: "Six",
7: "Seven", 8: "Eight", 9: "Nine"}

let args = process.argv.slice(2)

let finalStr = ""
args.forEach((val, ind) => {
  let numStr = ""
  for(const digit of val) {
    numStr += numDict[digit]
  }
  finalStr += `${numStr},`
})

console.log(finalStr)

