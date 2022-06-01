import React, { useState } from "react";
import { useForm } from "react-hook-form";

import "./UrlInput.css";

const UrlInput = (props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onTouched", defaultValues: { url: "http://www." } });

  const [newUrl, setNewUrl] = useState();

  function onSubmit(data, e) {
    console.log(data);
    e.preventDefault();
    props.setData((prev) => prev.concat({ id: Date.now(), url: data.url }));
  }

  return (
    <React.Fragment>
      <section>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Validate URL</h2>
          <input
            onChange={(e) => setNewUrl(e.target.value)}
            type="url"
            {...register("url", {
              required: { value: true, message: "URL is Required" },
              pattern: {
                value: /^((ftp|http|https):\/\/)?www\.([A-z]+)\.([A-z]{2,})/,
                message: "Please enter a valid URL",
              },
            })}
          />
          <input type="submit" value="Validate URL"></input>
          {errors.url && <span>{errors.url.message}</span>}
        </form>
      </section>
    </React.Fragment>
  );
};

export default UrlInput;
