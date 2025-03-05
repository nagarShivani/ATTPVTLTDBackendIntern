const fs = require("fs").promises;
const users = require("../models/userModel");

// Add New User (POST)
const addUser = async (req, res) => {
    const { id, name, age, email } = req.body;
    if (!id || !name || !age || !email) {
        return res.status(400).json({ message: "All fields are required" });
    }

    users.push({ id, name, age, email });

    await fs.writeFile("./users.json", JSON.stringify(users, null, 2));

    res.status(201).json({ message: "User added successfully", user: { id, name, age, email } });
};

module.exports = { addUser };
