import mitter from './bus'

let n=1
document.addEventListener('click',function(){
    mitter.exec('log',n)
    n++
})

