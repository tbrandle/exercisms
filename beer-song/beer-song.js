class BeerSong {
  verse(num) {
    if (num === 0) {
      let songVerseZero = 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n'
      return songVerseZero
    } else {
      let bottles = num === 1 ? 'bottle' : 'bottles';
      let songVerse = `${num} ${bottles} of beer on the wall, ${num} ${bottles} of beer.\nTake ${num  === 1 ? 'it' : 'one'} down and pass it around, ${num - 1 === 0 ? 'no more' : num - 1} ${num - 1 === 1 ? 'bottle' : 'bottles'} of beer on the wall.\n`
      return  songVerse;
    }
  };

  sing(start, finish=0) {
    let fullSong = []
    while(start >= finish) {
      fullSong.push(this.verse(start))
      start --
    }
    return fullSong.join("\n")
  };
}

module.exports = BeerSong
