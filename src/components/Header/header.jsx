import { useSelector } from "react-redux";

const Header = (props) =>{
   const {setEdit}= props;
   const handleEdit =() => {
        setEdit(true);
   }
   const  user =useSelector((state)=>state.user)
    return(
        <>
            <div className=" py-4 w-full h-[700px] bg-[#fff]" style={{ background:`${user.theme}` }}>
                <div className="flex justify-center items-center py-6">
                    <img className="w-[300px] h-[300px] rounded-full " src={user.avatar1} />
                </div>
                <div className="flex flex-col justify-center items-center py-4">
                    <div className="text-[#050505] text-[32px] font-bold">{user.name}</div>
                    <div className="text-[#65676b] text-[15px]">{user.age}</div>
                    <div className="text-[#65676b] text-[15px]">{user.address}</div>
                    <div className="text-[#65676b] text-[15px]">{user.description}</div>
                </div>
                <div className="flex justify-center items-center">
                    <div className="bg-[#1b74e4] w-max px-4 py-3 rounded-sm text-white hover:text-[#1b74e4] font-sans hover:bg-white border hover:border-[#1b74e4] transition-all duration-500 cursor-pointer" onClick={handleEdit}>Edit thông tin</div>
                </div>
            </div>
        </>
    )
}


export default Header;