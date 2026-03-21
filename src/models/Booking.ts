import mongoose, { Schema, Document } from 'mongoose';

export enum BookingStatus {
    PENDING = 'pending',
    CONFIRMED = 'confirmed',
    CANCELLED = 'cancelled',
    COMPLETED = 'completed',
}

export interface IBooking extends Document {
    userEmail: string;
    packageId: string; // Reference to Package ID
    packageName: string;
    travelDate: string;
    numberOfTravelers: number;
    totalPrice: number;
    currency: string;
    status: BookingStatus;
    contactNumber: string;
    specialRequests?: string;
    createdAt: Date;
    updatedAt: Date;
}

const BookingSchema: Schema = new Schema(
    {
        userEmail: { type: String, required: true },
        packageId: { type: String, required: true },
        packageName: { type: String, required: true },
        travelDate: { type: String, required: true },
        numberOfTravelers: { type: Number, required: true },
        totalPrice: { type: Number, required: true },
        currency: { type: String, default: 'INR' },
        status: {
            type: String,
            enum: Object.values(BookingStatus),
            default: BookingStatus.PENDING,
        },
        contactNumber: { type: String, required: true },
        specialRequests: { type: String },
    },
    { timestamps: true }
);

export default mongoose.models.Booking || mongoose.model<IBooking>('Booking', BookingSchema);
