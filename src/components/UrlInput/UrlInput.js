import React from "react";
import { useForm } from "react-hook-form";

import "./UrlInput.css";

const UrlInput = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: "onTouched", defaultValues: { url: "https://" } });

  const onSubmit = (data) => console.log(data);

  return (
    <React.Fragment>
      <section>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>Validate URL</h2>
          <input
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
