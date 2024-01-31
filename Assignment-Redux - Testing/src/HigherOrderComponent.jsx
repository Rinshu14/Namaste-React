export default HigherOrderComponent=(InputResCard)=>{

    return (props)=>{
      
        return(
         <div className=" relative  rounded-lg">
         <label className="  m-0 w-20 p-1   bg-slate-950 text-white  absolute top-5 left-[1.3rem] rounded-r-md">Promoted</label>
            <InputResCard restaurant={props.restaurant} className="h-[100%]" />
            {/* <span className="  m-0 w-20 p-1   bg-slate-950 text-white  absolute top-5 left-[1.3rem] rounded-r-md">Promoted</span> */}
            </div>
            )
    }
}