import { atom, selector } from "recoil";


export const userState = atom({
    key: 'counterState',
    default: {
        username: "Piter",
        id: 1234,
    },
  });
  

    export const usernameState = selector({
    key: 'completedTasksCount',
    get: ({ get }) => {
        const user = get(userState)
        return user.id
    },
  });