const fs = require("fs").promises;

// Write Data to File
const writeFile = async (filename, data) => {
    await fs.writeFile(filename, JSON.stringify(data, null, 2));
};

// Read Data from File
const readFile = async (filename) => {
    const data = await fs.readFile(filename, "utf8");
    return JSON.parse(data);
};

// Delete File
const deleteFile = async (filename) => {
    await fs.unlink(filename);
};

module.exports = { writeFile, readFile, deleteFile };
