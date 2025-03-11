import Order from "../models/order.model.js";




export const order = async (req, res) =>{
    try {
        const { pickup, garbagetype, image} = req.body;
        if(!pickup ||!garbagetype ){
            return res.status(400).json({error: "Please fill all the fields"});
        };

        const userId = req.user._id;

        // const uploadResponse = await cloudinary.uploader.upload(image)
        // const updatedUser = await User.findByIdAndUpdate(userId, {image: uploadResponse.secure_url}, {new: true});

        const newOrder = new Order({
            user:userId,
            pickup,
            garbagetype,
            image
        });

        if(newOrder){
            await newOrder.save();
            res.status(201).json({
                pickup: newOrder.pickup,
                garbagetype: newOrder.garbagetype,
                image: newOrder.image
            });
        
        } else {
            res.status(400).json({error: "Invalid order data"}); 
        }
    } catch (error) {
        console.log("error in order", error.message)
        res.status(500).json({message:"Internal server error"});
    }
};

