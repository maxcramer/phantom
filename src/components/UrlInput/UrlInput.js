import React, { useState } from "react";
import { useForm } from "react-hook-form";

import "./UrlInput.css";

const UrlInput = (props) => {
  // REACT FORMS
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onTouched", defaultValues: { url: "http://www." } });

  // ADD A NEW URL
  const [newUrl, setNewUrl] = useState();
  function onSubmit(data, e) {
    e.preventDefault();
    props.setData((prev) => prev.concat({ id: Date.now(), url: data.url }));
  }

  return (
    <React.Fragment>
      <section>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Validate URL</h2>
          <input
            className="text_input"
            onChange={(e) => setNewUrl(e.target.value)}
            type="url"
            {...register("url", {
              // URL VALIDATION
              required: { value: true, message: "URL is Required" },
              pattern: {
                value: /^((ftp|http|https):\/\/)?www\.([A-z]+)\.([A-z]{2,})/,
                message: "Please enter a valid URL",
              },
            })}
          />
          {/* ERROR MESSAGE FOR INVALID URL */}
          {errors.url && <span>{errors.url.message}</span>}
          <input
            className="submit_btn"
            type="submit"
            value="Validate URL"
          ></input>
        </form>
      </section>
    </React.Fragment>
  );
};

export default UrlInput;
