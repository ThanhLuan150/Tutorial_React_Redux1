const Input = (props)=>{
    const {data, setData ,label} =props;
    return(
        <>
        <div className="py-4 flex flex-row gap-3">
            <label className="basis-2/6 font-bold pt-2">{label}</label>
            <input className="basis-4/6 w-full px-3 py-2 border outline-none text-[14px] font-bold placeholder:text-[14px] placeholder:font-bold border-[#1b74e4]"type="text" placeholder={data} onChange={(e)=>setData(e.target.value)}></input>
        </div>
        </>
    )
}
export default Input;