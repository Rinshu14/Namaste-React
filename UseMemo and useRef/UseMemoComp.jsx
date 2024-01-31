import { useState ,useMemo} from "react";

export default UseMemoComp = () => {
  const [ISPrime, setIsPrime] = useState(null);
  const[theme ,setTheme]=useState("light")


  function onChangeHandle(e) {
    setIsPrime(e.target.value);
  }
  
 
const nPrime=useMemo(()=>findNthPrime(ISPrime),[ISPrime])


  return (
    <div className={(theme == "light") ?"bg-orange-400 h-56 w-64":"bg-slate-800 h-56 w-64 text-gray-50"}>
    
    <button className="bg-white text-slate-900 w-24 h-9 m-4" onClick={()=>{(theme == "light")? setTheme("dark"):setTheme("light")}}>Toggle</button>
      <input
        type="number"
        className="p-2 m-2 text-black"
        onChange={onChangeHandle}
      ></input>
      <p>prime no=={nPrime}</p>

    </div>
  );


  function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }

    return true;
  }


  function findNthPrime(n) {
    console.log("n called")
    let count = 0;
    let num = 2;
    while (count < n) {
      if (isPrime(num)) {
        count++;
      }
      num++;
    }
    return num - 1;
  }
};
