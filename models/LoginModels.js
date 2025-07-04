import mongoose from 'mongoose';

const UserListSchema = new mongoose.Schema({
    name: String,
    pass: String
});


export const UserList = mongoose.model('UserList', UserListSchema , 'Users');


