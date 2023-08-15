import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {//initialState đây là giá trị ban đầu
        name: 'Lê Trương Thành Luân  ',
        age: '20 tuổi ',
        address: 'Bình Định',
        description: 'Tôi là một Front-end Developer', // Corrected typo here
        avatar1: 'https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-1/363833496_594714486128845_7855065573598762553_n.jpg?stp=dst-jpg_p240x240&_nc_cat=109&cb=99be929b-59f725be&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=cjq-tj5G4gEAX_uUICC&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfDd4Ubwm0AHCCb4y8Rvr8KfPL_ddlVxIG-oMhrABjvE8g&oe=64DE1678',
        theme:'#fff'
    },
    reducers: {
        update: (state, action) => {
            state.name = action.payload.name;
            state.age = action.payload.age;
            state.address = action.payload.address;
            state.description = action.payload.description; // Corrected typo here
            state.avatar1 = action.payload.avatar1;
            state.theme =action.payload.theme;
        },
    }
});

export const { update } = userSlice.actions;
export default userSlice.reducer;
