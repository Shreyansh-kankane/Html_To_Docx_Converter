const bodyParser = require("body-parser");
const express = require("express");
const multer = require("multer");
const grabzit = require("grabzit");
const cors = require("cors");

const app = express();
const path = require("path");
const fs = require("fs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cors());

let count = 0;
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + "-" + count);
    },
});

const upload = multer({ storage: storage });

app.post("/getDocx", upload.single("file"), (req, res) => {
    // console.log(req.file);
    count++;
    // console.log(count);
    const countTemp = count;
    if (!req.file) {
        return res.status(400).json({ message: "No files were uploaded." });
    }

    const filePath = path.join(__dirname, req.file.path);
    console.log(req.file.originalname)
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            return res.status(500).json({ error: "Error reading the uploaded file." });
        }

        const fileContent = data;
        var client = new grabzit(
            "YzU4YTljY2ZkOGQzNDlhMGJmODRiZjExNDA1YTU4MDA=",
            "Lj8zPyo/Pyk/Pz8/Mz9tVQgEP1g/Pz8/FCY/P3YpP24="
        );
        client.html_to_docx(fileContent);
        client.save_to(`uploads/result${countTemp}.docx`, function (error, id) {
            if (error != null) {
                console.log(error);
                return res.status(500).json({ error: "Error reading the uploaded file." });
            }
            console.log("File saved at :" + id)
            res.sendFile(__dirname + `/uploads/result${countTemp}.docx`);
        });
    });
});
app.listen(5000, () => {
    console.log("Server running on port 5000...");
});