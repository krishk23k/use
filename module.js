import mongoose from "mongoose"

const schem = new mongoose.Schema({
    Name:{
        type:mongose.Schema.Types.String,
    },
    Age:{
        type:mongose.Schema.Types.String,
    },
    City:{
        type:mongose.Schema.Types.String,
    },
    Class:{
        type:mongose.Schema.Types.String,
    }
})

const DataModel = mongoose.model("schem" , schem)
export default DataModel