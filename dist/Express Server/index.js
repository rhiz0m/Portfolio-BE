"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use((0, morgan_1.default)("tiny"));
app.use((0, cors_1.default)({
    origin: process.env.CORS_ORIGIN,
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
}));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.status(200).send(posts);
    console.log(req.body);
});
app.post("/submit", (req, res) => {
    console.log(req.body);
});
app.put("/projects/web", (req, res) => {
    res.status(200).send({
        id: 5,
        title: "Next.JS. Project",
        date: "2024-08-20",
        content: "This is an Next.JS-project",
        author: "Andreas",
    });
});
app.patch("/projects/web", (req, res) => {
    res.status(200).send({
        id: 6,
        title: "Classic Javascript. Project",
        date: "2024-08-20",
        content: "This is a Javascript project",
        author: "Andreas",
    });
});
app.delete("/projects/web", (req, res) => {
    res.status(200).send({
        id: 0,
        title: "",
        date: "",
        content: "",
        author: "",
    });
});
app.listen(port, () => {
    console.log(`server running on ${port}`);
});
let posts = [
    {
        id: 1,
        title: "React. FE-Project",
        date: "2024-08-20",
        content: "This is a Front End project where I used an React-app to connect with the Backend",
        author: "Andreas",
    },
    {
        id: 2,
        title: "Node/Express. Project",
        date: "2024-08-20",
        content: "This is a Back End project where I used an Node and Express to connect with the Front End",
        author: "Andreas",
    },
    {
        id: 3,
        title: "IOS. Project",
        date: "2024-08-20",
        content: "This is an IOS-project where I used Swift and SwiftUI",
        author: "Andreas",
    },
];
