import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip, faPlus } from "@fortawesome/free-solid-svg-icons";
import { Button, Alert, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { styles } from "./Styles";
import { useState } from "react";
import { useMutation } from "react-query";
import { API } from "../../config/api";
import { RiAttachmentFill } from "react-icons/ri";

const AddFilm = () => {
  const getCategories = async () => {
    try {
      const response = await API.get("/categories");
      setCategories(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();

  // const [rates, setRates] = useState([
  //   { titleEpisode: "", attachThumbnail: "", linkFilm: "" },
  // ]);

  // const addRate = () => {
  //   setRates([
  //     ...rates,
  //     { titleEpisode: "", attachThumbnail: "", linkFilm: "" },
  //   ]);
  // };

  const [message, setMessage] = useState(null);

  const [categories, setCategories] = useState([]); //Store all category data
  const [categoryId, setCategoryId] = useState([]); //Save the selected category id
  const [preview, setPreview] = useState(null); //For image preview

  const [form, setForm] = useState({
    title: "",
    thumbnailfilm: "",
    year: "",
    description: "",
    linkfilm:  "",
    category_id: 0,
  });

  const handleChange = (e) => {
    console.log("punya si ", e.target.name);
    setForm({
      ...form,
      [e.target.name]:
        e.target.type === "file" ? e.target.files : e.target.value,
    });

    // Create image url for preview
    if (e.target.type === "file") {
      let url = URL.createObjectURL(e.target.files[0]);
      setPreview(url);
    }
  };

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      // Configuration Content-type
      const config = {
        headers: {
          "Content-type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.token}`,
        },
      };

      const formData = new FormData();
      formData.set("title", form?.title);
      formData.set("description", form?.description);
      formData.set("year", form?.year);
      formData.set("linkfilm", form?.linkfilm);
      formData.set("category_id", form?.category_id);
      formData.set(
        "thumbnailfilm",
        form.thumbnailfilm[0],
        form.thumbnailfilm[0].name
      );

      console.log(form);

      const response = await API.post("/film", formData, config);
      console.log(response);

      navigate("/list-film");

      // Handling response here
    } catch (error) {
      const alert = (
        <Alert variant="danger" className="py-1">
          Failed
        </Alert>
      );
      setMessage(alert);
      console.log(error);
    }
  });

  useEffect(() => {
    console.log(form);
    getCategories();
  }, [form.thumbnailfilm]);

  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit.mutate(e);
        }}
      >
        <div style={styles.container} className="mt-4 mb-4">
          <h4>Add Film</h4>
          <div className="form-group mb-2">
            <div
              style={{
                display: "flex"
              }}
            >
              <Form.Group
                style={{ width: "100%" }}
                controlId="formBasicAttache"
              >
                <Form.Control
                  type="text"
                  name="title"
                  // data-id=""
                  // id="titlefilm"
                  className="formBasicAttache"
                  placeholder="Title"
                  style={styles.customInputTitle}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group
                style={{ marginLeft: "10px", width: "12rem" }}
                controlId="formBasicAttache"
              >
                <label for="attachThumbnail" className="labelThumbnail rounded">
                  Attach{" "}
                  <span>
                    <RiAttachmentFill style={{ fontSize: "30px" }} />
                  </span>
                </label>
                <input
                  id="attachThumbnail"
                  type="file"
                  onChange={handleChange}
                  name="thumbnailfilm"
                />
              </Form.Group>
            </div>
          </div>
          <div className="form-group mb-4">
            <div>
              <div className="form-group mb-2">
                <input
                  type="text"
                  name="year"
                  data-id=""
                  id="year"
                  className="year"
                  placeholder="Year"
                  style={styles.customInput}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group mb-2">
                <select
                  name="category_id"
                  id="list"
                  onChange={handleChange}
                  style={styles.customInput}
                >
                  <option className="bg-dark" disabled selected>
                    Category
                  </option>
                  <option className="bg-dark" value="2">TV Series</option>
                  <option className="bg-dark" value="1">Movie</option>
                </select>
              </div>
              <div className="form-group mb-0">
                <textarea
                  style={styles.textarea}
                  placeholder="Description"
                  id="desc"
                  name="description"
                  rows="4"
                  cols="50"
                  className="text-muted"
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="form-group mb-2">
                <input
                  type="text"
                  name="linkfilm"
                  data-id=""
                  id="linkfilm"
                  className="linkFilm"
                  placeholder="Linkfilm"
                  style={styles.customInput}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        <div className="d-flex form-group justify-content-between" style={{height:"300px"}}>
          <Button
            className="btn bg-danger text-white border-0 btn-regis px-5"
            type="submit"
            style={{height:"40px"}}
          >
            Save Film
          </Button>
          {preview && (
                    <div>
                      <img
                        src={preview}
                        style={{
                          maxWidth: "150px",
                          maxHeight: "150px",
                          objectFit: "cover",
                          boxShadow:"0px 0px 20px #ff0f1f9d"
                        }}
                        alt={preview}
                      />
                    </div>
                  )}
        </div>
        </div>
      </form>
    </div>
  );
};

export default AddFilm;
