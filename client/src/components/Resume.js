import axios from "axios";

const apiEndpoint = "http://localhost:3000";
const Resume = (event) => {
  event.preventDefault();
  axios.get(apiEndpoint + "/resume", { responseType: "blob" }).then((res) => {
    const url = window.URL.createObjectURL(new Blob([res.data]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "resume.pdf"); //or any other extension
    document.body.appendChild(link);
    link.click();
  });
};

export default Resume;
