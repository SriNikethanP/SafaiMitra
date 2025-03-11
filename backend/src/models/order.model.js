import mongoose from "mongoose";


const OrderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    captain: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'captains',
        required: true
    },

    status: {
        type: String,
        enum: [ 'pending', 'accepted', "ongoing", 'completed', 'cancelled' ],
        default: 'pending',
    },

    orderId: {
        type: String,
    },

    garbagetype: {
        type: String,
        required: true,
        enum:['wet', 'dry', 'recycle'],
        default: 'recycle',
    },
    selectedDate: {
        type: Date,
        required: true
    },
    location: {
        lat: {
            type: Number,
            default:"",
            required: true
            
        },
        long: {
            type: Number,
            default:"",
            required: true
        }
    }
})


const Order = mongoose.model("Order", OrderSchema);

export default Order;

