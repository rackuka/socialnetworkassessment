const socialGraphs = require('../src/socialgraphs')

test('[3, 3, 3, 3, 3, 1, 3] => [[0, 1, 2], [3, 4, 6], [5]]', () => {
  expect(socialGraphs([3, 3, 3, 3, 3, 1, 3])).toEqual([[0, 1, 2], [3, 4, 6], [5]])
})

test('[2, 2, 2, 2] => [[0, 1], [2, 3]]', () => {
  expect(socialGraphs([2, 2, 2, 2])).toEqual([[0, 1], [2, 3]])
})