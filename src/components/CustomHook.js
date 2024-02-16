import {useEffect,useState} from "react";
function useCustomHook(init,compName)
{
    const [counter,setCount]=useState(init);

    function resetCounter (){
        setCount(counter+1);
    }
    useEffect(()=>{
        console.log("counter value:"+ counter +" of " + compName);

},[counter,compName])

 return resetCounter;
}
export default useCustomHook;