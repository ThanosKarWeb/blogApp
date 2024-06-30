/* eslint-disable no-unused-vars */
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";

const api = axios.create({
  baseURL: "http://localhost:8800/api",
  withCredentials: true,
});

const Write = () => {
  const navigate = useNavigate();
  const state = useLocation().state;
  const [value, setValue] = useState(state ? state.desc : "");
  const [title, setTitle] = useState(state ? state.title : "");
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState(state ? state.category : "");

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await api.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();

    try {
      state
        ? await api.put(`/posts/${state.id}`, {
            title,
            desc: value,
            category,
            img: file ? imgUrl : "",
          })
        : await api.post(`/posts/`, {
            title,
            desc: value,
            category,
            img: file ? imgUrl : "",
            date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
          });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="add">
      <div className="content">
        <input
          type="text"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status</b> Draft
          </span>
          <span>
            <b>Visibility</b> Public
          </span>
          <input
            style={{ display: "none" }}
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <label htmlFor="file">Upload image</label>
          <div className="buttons">
            <button>Save as Draft</button>
            <button onClick={handleSubmit}>Publish</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <input
            type="radio"
            checked={category === "art"}
            name="cat"
            value="art"
            id="art"
            onChange={(e) => setCategory(e.target.value)}
          />
          <label htmlFor="art">Art</label>
          <input
            type="radio"
            checked={category === "sci"}
            name="sci"
            value="sci"
            id="sci"
            onChange={(e) => setCategory(e.target.value)}
          />
          <label htmlFor="sci">Science</label>
          <input
            type="radio"
            checked={category === "tech"}
            name="tech"
            value="tech"
            id="tech"
            onChange={(e) => setCategory(e.target.value)}
          />
          <label htmlFor="tech">Tech</label>
          <input
            type="radio"
            checked={category === "cin"}
            name="cin"
            value="cin"
            id="cin"
            onChange={(e) => setCategory(e.target.value)}
          />
          <label htmlFor="cin">Cinema</label>
          <input
            type="radio"
            checked={category === "des"}
            name="des"
            value="des"
            id="des"
            onChange={(e) => setCategory(e.target.value)}
          />
          <label htmlFor="des">Design</label>
          <input
            type="radio"
            checked={category === "food"}
            name="food"
            value="food"
            id="food"
            onChange={(e) => setCategory(e.target.value)}
          />
          <label htmlFor="food">Food</label>
        </div>
      </div>
    </div>
  );
};

export default Write;
