// const users = [];

// //purpose -> adds a user to a specific lobby/room
// const addUser = ({ id, name, room }) => {
//     name = name.trim().toLowerCase();
//     room = room.trim().toLowerCase();

//     //checking if user exists in the same room
//     const existingUser = users.find((user) => user.room === room && user.name === name);

//     if (existingUser) {
//         return { error: "Username taken!" };
//     }

//     //adding a new user
//     const user = { id, name, room };

//     users.push(user);

//     return { user }
// }

// const removeUser = (id) => {
//     const index = users.findIndex((user) => user.id === id);

//     //replaces @ index and returns removed user
//     if (index !== -1) {
//         return users.splice(index, 1)[0]
//     }
// }

// const getUser = (id) => users.find((user) => user.id === id);

// const getUsersInRoom = (room) => users.filter((user) => user.room === room);


// module.exports = { addUser, removeUser, getUser, getUsersInRoom };