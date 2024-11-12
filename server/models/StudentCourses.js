const mongoose = require("mongoose");

const StudentCoursesSchema = new mongoose.Schema({
	userId: String,
	courses: {
		type: [
			{
				courseId: { type: String, required: true },
				title: { type: String, required: true },
				instructorId: { type: String, required: true },
				instructorName: { type: String, required: true },
				dateOfPurchase: { type: Date, required: true },
				courseImage: { type: String, required: true },
			},
		],
		default: [],
	},
});

module.exports = mongoose.model("StudentCourses", StudentCoursesSchema);
