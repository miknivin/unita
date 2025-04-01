"use client";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useState, useEffect } from "react";
import ErrorMsg from "../error-msg";
import { toast } from "react-toastify";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  serviceInterestedIn: string[];
}

interface ServiceContactFormProps {
  serviceTitle: string;
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
  serviceInterestedIn: yup
    .array()
    .of(yup.string().required("Service is required"))
    .required("At least one service must be selected")
    .min(1, "At least one service must be selected"),
});

const ServiceContactForm = ({ serviceTitle }: ServiceContactFormProps) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    setValue("serviceInterestedIn", [serviceTitle]);
  }, [serviceTitle, setValue]);

  const onSubmit = handleSubmit(async (data: FormData) => {
    setLoading(true);
    setError("");
    setSuccess("");
    try {
      const response = await axios.post("/api/contact", data);
      setSuccess("Message sent successfully!");
      reset();
      toast.success("Message sent successfully!");
    } catch (err) {
      setError("Failed to send message. Please try again.");
      toast.error("Failed to send message.!");
    } finally {
      setLoading(false);
    }
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

      {error && <p className="text-danger">{error}</p>}
      {success && <p className="text-success">{success}</p>}

      <button type="submit" className="it-btn-primary" disabled={loading}>
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default ServiceContactForm;
