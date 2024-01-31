export default Contact=()=>{
    return (
        <div>
            <input type="email" placeholder="Email" className="h-12 w-48  m-5 p-2 border-2 border-solid border-slate-700 rounded-lg"></input>
            <input type="number" placeholder="Number" className="h-12 w-48  m-5 p-2 border-2 border-solid border-slate-700 rounded-lg"></input>
            <button className="h-9 w-20  m-5 p-2 border-2 border-solid border-slate-700 rounded-lg bg-orange-400">Submit</button>
        </div>
    )
}