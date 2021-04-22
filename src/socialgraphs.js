function socialGraphs(sizes) {
  let output = []
  let index = []

  for (let i = 0; i < sizes.length; i++) {
    let grpSize = sizes[i]
    let grpIdx = index[grpSize] !== undefined ? index[grpSize] : output.length
    let group = output[grpIdx] !== undefined ? output[grpIdx] : []
    group.push(i)
    output[grpIdx] = group
    if (group.length == grpSize) {
      index[grpSize] = undefined
    }
    else {
      index[grpSize] = grpIdx
    }
  }

  return output
}

module.exports = socialGraphs