import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import BlogEditor from "../components/Editor.js";
import SendIcon from "@mui/icons-material/Send";

export default function Blog() {
  return (
    <Container sx={{ p: 2 }} maxWidth="lg">
      <Typography variant="h3" component="div" gutterBottom>
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
        sx={{ my: 2, mr: 3, width: "45vw" }}
      />
      <TextField
        color="primary"
        id="outlined-basic"
        label="Name (Optional)"
        variant="outlined"
        sx={{ my: 2, width: "25vw" }}
      />
      <BlogEditor />
      <Button sx={{ mt: 2 }} variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
    </Container>
  );
}
