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
// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "/public/html/index.html");
// });


const upload = multer({ storage: storage });

app.post("/getDocx", upload.single("file"), (req, res) => {
    console.log(req.file);
    count++;
    console.log(count);
    const countTemp = count;
    if (!req.file) {
        return res.status(400).json({ message: "No files were uploaded." });
    }

    const filePath = path.join(__dirname, req.file.path);
    console.log(req.file.originalname)
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            return res
                .status(500)
                .json({ error: "Error reading the uploaded file." });
        }

        const fileContent = data;
        var client = new grabzit(
            "MjhkOGE2ZTk2YWMxNDg4ZWEzMWFmMjM3YWI0YjRiMzM=",
            "Pxg/ED8/PwU/Kj8/Pz8/PzA/Pz8/JT9uOD8sBmk/ID8="
        );
        client.html_to_docx(fileContent);
        client.save_to(`uploads/result${countTemp}.docx`, function (error, id) {
            if (error != null) {
                console.log(err);
                res
                    .status(500)
                    .json({ error: "Error reading the uploaded file." });
            }
            res.sendFile(__dirname + `/uploads/result${countTemp}.docx`);
        });
    });
});
app.listen(5000, () => {
    console.log("Server running on port 5000...");
});