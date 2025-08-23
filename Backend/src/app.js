const express = require("express");
const multer = require("multer");
const { uploadfile, deletefile } = require("./services/storage.service");
const postModel = require("./models/post.model");
const cors = require("cors");
const path = require("path");

const upload = multer({ storage: multer.memoryStorage() });
const app = express();
app.use(express.static("public"));
const allowedOrigins = [ 
  "https://post-creation-rho.vercel.app" 
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);
app.use(express.json());

app.post("/posts", upload.single("image"), async (req, res) => {
  const caption = req.body.caption;
  const file = req.file.buffer;

  const fileName =
    Date.now() +
    "-" +
    Math.floor(Math.random() * 279998) +
    req.file.originalname;

  console.log(fileName);

  const result = await uploadfile(file, fileName);

  console.log(result);

  await postModel.create({
    caption: caption,
    url: result.url,
    imageId: result.fileId,
  });

  res.status(200).json({
    message: "File uploaded successfully",
    data: {
      caption: caption,
      url: result.url,
      imageId: result.fileId,
    },
  });
});

app.get("/posts", async (req, res) => {
  const post = await postModel.find();

  res.json({
    message: "All Post Fetched Successfully",
    data: post,
  });
});

app.delete("/posts/:id", async (req, res) => {
  const postId = req.params.id;

  /// delete from imagekit

  const post = await postModel.findByIdAndDelete(postId);
  const result = await deletefile(post.imageId);
  if (!result) {
    return res.status(500).json({ message: "Failed to delete image from storage" });
  }
  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }

  res.status(200).json({
    message: "Post deleted successfully",
    data: post,
  });
});

app.get("*name" , (req , res) => {
   res.sendFile(path.join(__dirname ,".." ,"public/index.html"))
})

module.exports = app;
