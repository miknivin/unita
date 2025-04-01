"use client";

import axios from "axios";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import ErrorMsg from "../error-msg";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

// Create a validation schema using yup
const schema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
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

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setError("");
    setSuccess("");
    try {
      const response = await axios.post("/api/contact", data);
      setSuccess(response.data.message || "Message sent successfully!");
      reset();
    } catch (err: any) {
      setError(err.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="row gx-20">
        <div className="col-sm-6 mb-20">
          <div className="it-contact-input-box">
            <input
              type="text"
              placeholder="First Name:"
              {...register("firstName")}
            />
            <ErrorMsg msg={errors.firstName?.message || ""} />
          </div>
        </div>
        <div className="col-sm-6 mb-20">
          <div className="it-contact-input-box">
            <input
              type="text"
              placeholder="Last Name:"
              {...register("lastName")}
            />
            <ErrorMsg msg={errors.lastName?.message || ""} />
          </div>
        </div>
        <div className="col-sm-6 mb-20">
          <div className="it-contact-input-box">
            <input
              type="email"
              placeholder="Email Address:"
              {...register("email")}
            />
            <ErrorMsg msg={errors.email?.message || ""} />
          </div>
        </div>
        <div className="col-sm-6 mb-20">
          <div className="it-contact-input-box">
            <input type="text" placeholder="Phone:" {...register("phone")} />
            <ErrorMsg msg={errors.phone?.message || ""} />
          </div>
        </div>
        <div className="col-12 mb-20">
          <div className="it-contact-input-box">
            <input
              type="text"
              placeholder="Subject:"
              {...register("subject")}
            />
            <ErrorMsg msg={errors.subject?.message || ""} />
          </div>
        </div>
        <div className="col-12 mb-40">
          <div className="it-contact-textarea-box">
            <textarea
              placeholder="Write a message...."
              {...register("message")}
            ></textarea>
            <ErrorMsg msg={errors.message?.message || ""} />
          </div>
        </div>
      </div>
      {error && <p className="text-danger">{error}</p>}
      {success && <p className="text-success">{success}</p>}
      <button type="submit" className="it-btn-primary" disabled={loading}>
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default ContactForm;
