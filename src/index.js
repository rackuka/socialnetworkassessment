const socialGraphs = require('./socialgraphs')
const yargs = require('yargs')
const fs = require('fs')

// Make sure we got a filename on the command line.
if (process.argv.length < 3) {
  console.log('Usage: node ' + process.argv[1] + ' FILENAME');
  process.exit(0);
}
// Read the file and print its contents.
let filename = process.argv[2];

try {
  if (fs.existsSync(filename)) {
    fs.readFile(filename, 'utf8', function(err, data) {
      if (err) throw err;
      let input = data.toString().split("\n");
      input.shift() // Remove first element which is size of data

      console.log('input:');
      console.log(data)

      const res = socialGraphs(input)

      console.log()
      console.log('output:')
      res.forEach((group) => {
        console.log(group.join(' '))
      })
    })
  }
  else {
    console.log(`File does not exist: ${filename}`)
  }
} catch(err) {
  console.error(err)
  process.exit(1)
}