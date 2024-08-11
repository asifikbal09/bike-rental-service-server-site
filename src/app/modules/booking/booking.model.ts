import { Schema, Types } from "mongoose";
import { IBooking } from "./booking.interface";

const bookingSchema = new Schema<IBooking>({
    userId:{
        type:Types.ObjectId,
        ref:"User",
        required:true,
    },
    bikeId:{
        type:Types.ObjectId,
        ref:"Bike",
        required:true
    },
    startTime:{
        type:Date,
        required:true
    },
    returnTime:{
        type:Date,
        required:true
    },
    totalCost:{
        type:Number,
        required:true,
    },
    isReturned:{
        type:Boolean,
        default:false,
    }
})