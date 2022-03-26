function move({ debug = false, disks = 2, start = 1, goal = 3 }) {
  disks = process.argv[2] > 0 ? process.argv[2] : disks;
  start = process.argv[3] && process.argv[3] < 4 ? process.argv[3] : start;
  goal = process.argv[4] && process.argv[4] < 4 ? process.argv[4] : goal;
  debug = process.argv[5] || debug;
  if (start == goal) { return console.log('Target and start must be different') }

  motionString = ''

  function logger(disks, start, goal) {
    let aux = 6 - start - goal;

    if (disks > 0) {
      logger(disks - 1, start, aux)
      motionString += start + '->' + goal + " "
      debug && console.log(start + '->' + goal)
      logger(disks - 1, aux, goal)
    }
    else {
      return 0
    }
  }

  logger(disks, start, goal)

  return console.log('Steps in chain:\n', motionString)
}

move({ disks: 3 })

// 1 > 1
// 2 > 3
// 3 > 7

//3 console.log(move(1, 3))
//3 => 1->3 1->2 3->2 1->3 2->1 2->3 1->3

//2 console.log(move(1, 3))
//2 => 1->2 1->3 2->3

//2 console.log(move(2, 3))
//2 => 2->1 2->3 1->3