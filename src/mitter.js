export default function mitter(){
   let myevent = new Map() 
    return {
        exec(...data){

            data[1] ? myevent.get(data[0])(data[1]) : myevent.get(data[0])()
        },
        add(...data){
            myevent.set(data[0],data[1])
        }
    }
}