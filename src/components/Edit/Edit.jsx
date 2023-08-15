import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import Input from "../Input/Input";
import { update } from "../../Redux/UserSlice";
const Edit = (props)=>{
    const {setEdit} =props;
    const user = useSelector((state)=>state.user);//lấy dữ liệu 
   const dispatch = useDispatch();// dÙNG  cái này để truyền mấy state vào store để store có thể update và hiển thị ra màn hình
    const [name,setName]= useState(user.name);
    const [age,setAge]=useState(user.age);
    const [address,setAddress]=useState(user.address);
    const [description,setDesciption]=useState(user.description);
    const [theme,setTheme]=useState(user.theme);
    const [avatar1 ,setAvatar1] =useState(user.avatar1)
    const avatar =[
        "https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/363833496_594714486128845_7855065573598762553_n.jpg?_nc_cat=109&cb=99be929b-59f725be&ccb=1-7&_nc_sid=be3454&_nc_ohc=cjq-tj5G4gEAX_uUICC&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfBNjofqZtOb8dxw4KERnbEqGHFG1FAb8n2Dm-dfD96Yug&oe=64DE6472",
        "https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/239878076_561323168442483_1019455534316393591_n.jpg?_nc_cat=110&cb=99be929b-59f725be&ccb=1-7&_nc_sid=7a1959&_nc_ohc=iQXpVTQdbhQAX_HUuCL&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfAo4tQw_iGneSy0Bz1nsxy2mtT99gohsdUdYYW2zhvDhg&oe=64DEEA8A",
        "https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-6/245852813_1021440785375057_588660424468307493_n.jpg?_nc_cat=106&cb=99be929b-59f725be&ccb=1-7&_nc_sid=300f58&_nc_ohc=9dG2M3a0d7sAX8yObrE&_nc_ht=scontent.fsgn2-5.fna&oh=00_AfAG0pAhj7xso_TEE_jGew1HLN_imjIvJwT0h5G1-BOWhg&oe=64DEC908",
        "https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/356854731_1199992284732405_2435044155006409783_n.jpg?_nc_cat=103&cb=99be929b-59f725be&ccb=1-7&_nc_sid=300f58&_nc_ohc=io-au2xl7mAAX8Wb16i&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfD9bxUclKDgtFSsuAbFYczQL3pcLHJXXPntXed2-Csdrg&oe=64DF6C37",
        "https://scontent.fsgn2-6.fna.fbcdn.net/v/t39.30808-6/290919425_125926910131124_4952875861052774530_n.jpg?_nc_cat=111&cb=99be929b-59f725be&ccb=1-7&_nc_sid=7a1959&_nc_ohc=NRfxJNpRE7kAX9KTMF-&_nc_ht=scontent.fsgn2-6.fna&oh=00_AfBLLxcira1G1EbITqRwrASjUzD6IrCZJwy0FvSRV6V01A&oe=64DE2A98",
        "https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/344849891_1292470781706683_1448824903999396302_n.jpg?_nc_cat=103&cb=99be929b-59f725be&ccb=1-7&_nc_sid=be3454&_nc_ohc=o-xthwsPYDQAX9JElLD&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfAKBzixF83dDo986cXNenhNPxxzIIis6dStM2-V5rh-iw&oe=64DEC430",
        "https://scontent.fsgn2-3.fna.fbcdn.net/v/t39.30808-6/358605852_742875450925384_6034335909674070309_n.jpg?_nc_cat=107&cb=99be929b-59f725be&ccb=1-7&_nc_sid=be3454&_nc_ohc=wQkJ04snTZEAX88gUmu&_nc_ht=scontent.fsgn2-3.fna&oh=00_AfDmhWGLPQzUFcqy0VRvoasqto3yx74z9hRbfQgz2GPiBw&oe=64DE18A9"
    ]
    const handleSubmit = (e)=>{
            e.preventDefault();// để khi nhấn vào nó sẽ không tải lại trang nếu không có cái đó sẽ tự động tải lại trang
            setEdit(false);
            const updateUser = {
                name:name,
                age:age,
                address:address,
                description: description,
                avatar1:avatar1,
                theme:theme
            }
            dispatch(update(updateUser));
    }
    return (
        <>
        <div className="flex flex-col justify-center items-center py-[100px]">
            <form className=" border border-[#1b74e4] py-7 px-10 rounded-lg w-max" onSubmit={handleSubmit}>
                <div className="flex items-center justify-center">
                    <button className="bg-[#1b74e4] w-max px-7 py-3 rounded-sm text-white hover:text-[#1b74e4] font-sans hover:bg-white border hover:border-[#1b74e4] transition-all duration-500 cursor-pointer flex items-center justify-center">Lưu</button>
                </div>
                <div className="text-[25px] font-bold py-3">Chỉnh sửa thông tin</div>
                <div>
                    <Input label="Họ và tên" data={user.name} setData={setName} />
                    <Input label="Tuổi" data={user.age} setData={setAge} />
                    <Input label="Quê quán" data={user.address} setData={setAddress} />
                    <Input label="Mô tả" data={user.description} setData={setDesciption} />
                    <div className="py-4 flex flex-row gap-3">
                        {avatar.map((url)=>{
                            return(
                                <>
                                <img onClick={(e)=>setAvatar1(e.target.src)} src={url} alt="" className="w-[100px] h-[100px]"></img>
                                </>
                            )
                        })}
                    </div>
                    <div className="py-4 flex flex-row gap-3">
                        <label className="basis-2/6 font-bold pt-2 border-[]">Màu nền</label>
                        <input className="basis-4/6 w-full px-3 py-2 border outline-none text-[14px] font-bold placeholder:text-[14px] placeholder:font-bold border-[#1b74e4]" value={theme} type="color" onChange={(e)=>setTheme(e.target.value)}></input>
                    </div>
                </div>
            </form>
        </div>
        </>
    )
}
export default Edit;