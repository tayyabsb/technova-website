const express = require("express");
const path = require("path");

const app = express();

const PORT = 3000;

// Read JSON data
app.use(express.json());

// Serve frontend files
app.use(express.static(path.join(__dirname, "public")));

// Contact API
app.post("/api/contact", (req, res) => {

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({
            message: "Please fill all fields."
        });
    }

    console.log("New Contact Message:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    res.json({
        message: "Thank you! Your message was received."
    });

});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});