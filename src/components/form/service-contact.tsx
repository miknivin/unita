"use client";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ErrorMsg from "../error-msg";


interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}


const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: yup.string().required("Phone number is required"),
  subject: yup.string().required("Subject is required"),
  message: yup
    .string()
    .min(10, "Message must be at least 10 characters")
    .required("Message is required"),
});

const ServiceContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit((data: FormData) => {
    alert(JSON.stringify(data));
    reset();
  });

  return (
    <form onSubmit={onSubmit} noValidate>
      <div className="mb-20">
        <div className="it-contact-input-box">
          <input type="text" placeholder="Name:" {...register("name")} />
          <ErrorMsg msg={errors.name?.message || ""} />
        </div>
      </div>

      <div className="mb-20">
        <div className="it-contact-input-box">
          <input
            type="email"
            placeholder="Email address:"
            {...register("email")}
          />
          <ErrorMsg msg={errors.email?.message || ""} />
        </div>
      </div>

      <div className="mb-20">
        <div className="it-contact-input-box">
          <input type="text" placeholder="Phone:" {...register("phone")} />
          <ErrorMsg msg={errors.phone?.message || ""} />
        </div>
      </div>

      <div className="mb-20">
        <div className="it-contact-input-box">
          <input type="text" placeholder="Subject:" {...register("subject")} />
          <ErrorMsg msg={errors.subject?.message || ""} />
        </div>
      </div>

      <div className="mb-40">
        <div className="it-contact-textarea-box">
          <textarea
            placeholder="Write a message...."
            {...register("message")}
          ></textarea>
          <ErrorMsg msg={errors.message?.message || ""} />
        </div>
      </div>

      <button type="submit" className="it-btn-primary">
        Send Message
      </button>
    </form>
  );
};

export default ServiceContactForm;
