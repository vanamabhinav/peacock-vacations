import mongoose, { Schema, Document, Model } from 'mongoose';

export enum UserRole {
    USER = 'user',
    ADMIN = 'admin',
    SUPER_ADMIN = 'super_admin',
}

export interface IUser extends Document {
    firebaseUid?: string;
    email: string;
    username?: string;
    password?: string;
    displayName?: string;
    photoURL?: string;
    role: UserRole;
    createdAt: Date;
    updatedAt: Date;
}

const UserSchema: Schema = new Schema(
    {
        firebaseUid: { type: String, sparse: true, unique: true },
        email: { type: String, required: true, unique: true },
        username: { type: String, sparse: true, unique: true },
        password: { type: String },
        displayName: { type: String },
        photoURL: { type: String },
        role: {
            type: String,
            enum: Object.values(UserRole),
            default: UserRole.USER,
        },
    },
    { timestamps: true }
);

const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);

export default User;
