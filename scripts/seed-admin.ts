import mongoose from 'mongoose';
import dbConnect from '../src/lib/mongodb';
import User, { UserRole } from '../src/models/User';
import { hashPassword } from '../src/lib/auth-utils';

async function seedAdmin() {
    try {
        console.log('Connecting to database...');
        await dbConnect();

        const username = 'peacock vacation';
        const rawPassword = 'abhinav';
        const email = 'admin@peacockvacations.com';

        const existingAdmin = await User.findOne({ username });
        if (existingAdmin) {
            console.log('Super admin already exists.');
            process.exit(0);
        }

        console.log('Hashing password...');
        const hashedPassword = await hashPassword(rawPassword);

        console.log('Creating super admin user...');
        const superAdmin = new User({
            username,
            password: hashedPassword,
            email,
            role: UserRole.SUPER_ADMIN,
            displayName: 'Peacock Vacations Super Admin',
        });

        await superAdmin.save();
        console.log('Super admin seeded successfully!');
        process.exit(0);
    } catch (error) {
        console.error('Error seeding admin:', error);
        process.exit(1);
    }
}

seedAdmin();
