import mitter from './bus'

mitter.add('log',(msg)=>{
    console.log(msg);
})