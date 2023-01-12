//TODO: seeds script should come here, so we'll be able to put some data in our local env
require("dotenv").config();
require("../models/User");
require("../models/Item");
require("../models/Comment");

const mongoose = require("mongoose");
const { faker } = require("@faker-js/faker");

const isProduction = process.env.NODE_ENV === "production";

if (!process.env.MONGODB_URI) {
	console.warn("Missing MONGODB_URI in env, please add it to your .env file");
}

mongoose.connect(process.env.MONGODB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
	useCreateIndex: true,
});
if (isProduction) {
} else {
	mongoose.set("debug", true);
}

const User = mongoose.model("User");
const Item = mongoose.model("Item");
const Comment = mongoose.model("Comment");

const testUser = () => {
	return {
		username: faker.database.mongodbObjectId(),
		email: faker.internet.email(),
		bio: faker.lorem.paragraph(),
		image: faker.image.avatar(),
		role: "user",
		favorites: [],
		following: [],
	};
};

const testItem = () => {
	const title = faker.commerce.productName() + " " + faker.datatype.uuid();
	return {
		title,
		slug: faker.helpers.slugify(title),
		description: faker.commerce.productDescription(),
		image: faker.image.image(),
		tagList: title.split(" "),
		comments: [],
	};
};

const testComment = () => {
	return {
		body: faker.lorem.paragraph(),
		seller: User.findOne()._id,
		item: Item.findOne()._id,
	};
};

const hundredUsers = faker.helpers.uniqueArray(testUser, 100);
const hundredItems = faker.helpers.uniqueArray(testItem, 100);
const hundredComments = faker.helpers.uniqueArray(testComment, 100);

const seedTestData = async () => {
	// await User.deleteMany({});
	// await Item.deleteMany({});
	// await Comment.deleteMany({});
	await User.insertMany(hundredUsers);
	await Item.insertMany(hundredItems);
	await Comment.insertMany(hundredComments);
	console.log("Database seeded");
	mongoose.connection.close();
};

seedTestData()
	.then(() => {
		process.exit();
	})
	.catch((err) => {
		console.error(err);
		process.exit();
	});
