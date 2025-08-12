const mongoose = require("mongoose");
const { schema } = mongoose;

const ProfileSchema = new schema(
    {
        imageURL: { type: String, required: true },
        summary: { type: String, required: true },
        skills: { type: [String], required: true },
        workExperience: { type: String, required: true },
        linkedinUrl: { type: String, required: true },
        githubUrl: { type: String, required: true },
        codingPlatforms: { type: [String], required: true },
        resumeUrl: { type: String, required: true },
    },
    { timestamp: true }
);

module.exports = mongoose.model("User", ProfileSchema);
