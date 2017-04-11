function theBeatlesPlay(muse,inst){
  let ary = []
  for(let i = 0; i < muse.length; i++){
    ary.push(`${muse[i]} plays ${inst[i]}`)
  }
  return ary
}

function johnLennonFacts(ary){
  let count = 0
  while(count < ary.length){
    ary[count] += '!!!'
    count++
  }
  return ary
}


function iLoveTheBeatles(n){
  let ary = []
  do{
    ary.push('I love the Beatles!')
    n++
  }while(n < 15)
  return ary
}