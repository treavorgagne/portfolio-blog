import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import BlogEditor from "../components/Editor.js";

export default function Blog() {
  return (
    <Container sx={{ bgcolor: "#8C97A9", p: 2, height: "100vh" }} maxWidth="lg">
      <Typography variant="h2" component="div" gutterBottom>
        Add Blog Post
      </Typography>
      <Typography variant="h5" gutterBottom>
        To add a blog entry please complete and submit the title, blog, and
        optional name field. Write about anything you wish to share. All
        experiences and stories are welcomed. On submittion of your blog post, I
        will be notified via email to review and approve your post. All blogs
        are stored in a mongoDB database hosted on AWS.
      </Typography>
      <Divider sx={{ bgcolor: "black" }} gutterBottom />

      <TextField
        color="primary"
        id="outlined-basic"
        label="Title"
        variant="outlined"
        sx={{ m: 2, width: "50vh" }}
      />

      <TextField
        color="primary"
        id="outlined-basic"
        label="Name (Optional)"
        variant="outlined"
        sx={{ m: 2, width: "50vh" }}
      />

      <BlogEditor />
    </Container>
  );
}
