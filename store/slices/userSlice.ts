import { createSlice } from "@reduxjs/toolkit";
import { IUserState } from "Types/userType";

const initialState: IUserState = {
  userList: [
    {
      id: "id1",
      name: "Brooke",
      surname: "Crawford",
      phone: "547-849-3610",
    },
    {
      id: "id2",
      name: "Nehemiah",
      surname: "Ubsdall",
      phone: "570-303-8714",
    },
    {
      id: "id3",
      name: "Kalinda",
      surname: "Domange",
      phone: "419-765-2015",
    },
    {
      id: "id4",
      name: "Clarabelle",
      surname: "Nowakowska",
      phone: "464-618-8391",
    },
    {
      id: "id5",
      name: "Frazier",
      surname: "Oby",
      phone: "256-463-5215",
    },
    {
      id: "id6",
      name: "Seumas",
      surname: "Willmer",
      phone: "385-436-0648",
    },
    {
      id: "id7",
      name: "Aime",
      surname: "Spence",
      phone: "878-803-6999",
    },
    {
      id: "id8",
      name: "Emili",
      surname: "Adamo",
      phone: "104-116-9657",
    },
    {
      id: "id9",
      name: "Kassia",
      surname: "Pardon",
      phone: "318-944-8772",
    },
    {
      id: "id10",
      name: "Joshia",
      surname: "Cremen",
      phone: "320-184-4576",
    },
  ],
  userWillBeUpdated: {
    id: "",
    name: "",
    surname: "",
    phone: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.userList.push(action.payload);
    },
    removeUser: (state, action) => {
      state.userList = state.userList.filter(
        (user) => user.id !== action.payload.id
      );
    },
    updateUser: (state, action) => {
      state.userList.map((user) => {
        if (user.id === action.payload.id) {
          user.name = action.payload.name;
          user.surname = action.payload.surname;
          user.phone = action.payload.phone;
        }
      });

      state.userWillBeUpdated = {
        id: "",
        name: "",
        surname: "",
        phone: "",
      };
    },
    setUserWillBeUpdated: (state, action) => {
      state.userWillBeUpdated = action.payload;
    },
  },
});

export const { addUser, removeUser, updateUser, setUserWillBeUpdated } =
  userSlice.actions;

export default userSlice.reducer;
