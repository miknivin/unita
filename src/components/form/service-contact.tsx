"use client";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ErrorMsg from "../error-msg";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: yup.string().required("Phone number is required"),
  subject: yup.string().required("Subject is required"),
  message: yup
    .string()
    .min(5, "Message must be at least 5 characters")
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
          <input
            type="text"
            placeholder="First Name:"
            {...register("firstName")}
          />
          <ErrorMsg msg={errors.firstName?.message || ""} />
        </div>
      </div>

      <div className="mb-20">
        <div className="it-contact-input-box">
          <input
            type="text"
            placeholder="Last Name:"
            {...register("lastName")}
          />
          <ErrorMsg msg={errors.lastName?.message || ""} />
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
