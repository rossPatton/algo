/**
 * @reference https://evernote.com/careers/challenge.php #2
 * count frequency of words in string, return in order of highest to lowest
 */

const _ = require('./lib/lodash.min'),
      arr = ["Fee", "Fi", "Fi", "Fi", "Fo", "Fum", "Lorem", "Ipsum", "Fee", "Fee", "Ipsum", "Ipsum", "Ipsum"],
      text = "Fee Fi Fo Fum Lorem Ipsum Fee Fi Fi Fi";

;(function() {
  'use strict';

  var mostFreq = []; // store our result as key / value pairs

  function getDupes(target, inc) {
    // keep count of duplicate words
    var count = 1,
        pointer = [];

    // if string, turn into array
    if (_.isString(target)) {
      target = target.split(' ');
    }

    // make copy, lowercase it, iterate on that instead of the orig
    pointer = target.slice().map(function(value) {
      return value.toLowerCase();
    });

    // do nothing if we're at the end, stop
    if (inc < pointer.length) {

      // start at inc, loop through the array, find dupes, count them
      // @TODO do this with _.every or _.some instead of a for loop
      for (var i = (inc + 1); i < pointer.length; i++) {
        if (pointer[inc] === pointer[i]) {
          count++;
        }
      }

      // if there are any dupes, the count will be > 1
      if (count > 1) {
        // we've found all dupes of inc, so remove them
        let newPointer = _.filter(pointer, function (str) {
          return pointer[inc] !== str;
        });

        // push our string and the count to our final array
        mostFreq.push({
          text: pointer[inc],
          frequency: count
        });

        // keep going recursively, with dupes removed
        getDupes(newPointer, (inc + 1));
      } else {
        // if no dupes for inc, just keep going
        getDupes(pointer, (inc + 1));
      }
    }
  }

  getDupes(arr, 0);

  // console.log(_.sortBy(mostFreq, 'frequency')); // low to high
  console.log(_.sortBy(mostFreq, 'frequency').reverse()); // high to low
  return _.sortBy(mostFreq, 'frequency').reverse();

}());