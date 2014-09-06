_ = require('./lib/lodash.min')

do ->
  'use strict'
  arr = ["Fee", "Fi", "Fi", "Fi", "Fo", "Fum", "Lorem", "Ipsum", "Fee", "Fee", "Ipsum", "Ipsum", "Ipsum"]
  mostFreq = []

  getDupes = (target, inc) ->
    count = 1
    i = inc + 1
    pointer = []

    pointer = target.slice()
      .map (value) ->
        return value.toLowerCase()

    if inc < pointer.length
      for i in [1..pointer.length] by 1
        if pointer[inc] is pointer[i]
          count++

      if count > 1
        newPointer = (i for i in pointer when pointer[inc] isnt i)

        mostFreq.push
          text: pointer[inc]
          frequency: count

        getDupes(newPointer, (inc + 1))

      else
        getDupes(pointer, (inc + 1))

  getDupes(arr, 0)
  console.log(_.sortBy(mostFreq, 'frequency').reverse())