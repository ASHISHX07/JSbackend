import mongoose, {Schema, Types} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
    {
        videoFile: {
            type: String,    // cloudinary URL
            required: true
        },
        thumbnail: {
            type: String,    // cloudinary URL
            required: true
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: Number,
            required: true
        },
        description: {
            type: Number,   // cloudinary URL
            required: true
        },
        views: {
            type: Number,
            default: 0
        },
        isPublished: {
            type: Boolean,
            default: true
        },
        owner: {
            type: Types.ObjectId,
            ref: "User"
        }
    },
    {timestamps: true}
)

videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video", videoSchema)
