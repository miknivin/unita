"use client";

import axios from "axios";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import ErrorMsg from "../error-msg";

interface FormData {
  name: string;
  surname: string;
  contactNumber: string;
  email: string;
  address: string;
  resume?: FileList;
}

interface ApplicationFormProps {
  jobId: string;
  onClose: () => void;
}

// Create a validation schema using Yup
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  surname: yup.string().required("Surname is required"),
  contactNumber: yup.string().required("Contact number is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  address: yup.string().required("Address is required"),
  resume: yup.mixed().test("fileRequired", "Resume is required", (value) => {
    return value instanceof FileList && value.length > 0;
  }),
});

const ApplicationForm = ({ jobId, onClose }: ApplicationFormProps) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema) as any,
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setError("");
    setSuccess("");

    const formData = new FormData();
    formData.append("jobId", jobId);
    formData.append("name", data.name);
    formData.append("surname", data.surname);
    formData.append("contactNumber", data.contactNumber);
    formData.append("email", data.email);
    formData.append("address", data.address);

    if (data.resume && data.resume.length > 0) {
      formData.append("resume", data.resume[0]);
    }

    try {
      const response = await axios.post("/api/jobs/applicants", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setSuccess(
        response.data.message || "Application submitted successfully!"
      );
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
            <input type="text" placeholder="Name:" {...register("name")} />
            <ErrorMsg msg={errors.name?.message || ""} />
          </div>
        </div>
        <div className="col-sm-6 mb-20">
          <div className="it-contact-input-box">
            <input
              type="text"
              placeholder="Surname:"
              {...register("surname")}
            />
            <ErrorMsg msg={errors.surname?.message || ""} />
          </div>
        </div>
        <div className="col-sm-6 mb-20">
          <div className="it-contact-input-box">
            <input
              type="text"
              placeholder="Contact Number:"
              {...register("contactNumber")}
            />
            <ErrorMsg msg={errors.contactNumber?.message || ""} />
          </div>
        </div>
        <div className="col-sm-6 mb-20">
          <div className="it-contact-input-box">
            <input
              type="email"
              placeholder="Email ID:"
              {...register("email")}
            />
            <ErrorMsg msg={errors.email?.message || ""} />
          </div>
        </div>
        <div className="col-12 mb-20">
          <div className="it-contact-input-box">
            <input
              type="text"
              placeholder="Address:"
              {...register("address")}
            />
            <ErrorMsg msg={errors.address?.message || ""} />
          </div>
        </div>
        <div className="col-12 mb-40">
          <div className="it-contact-input-box">
            <input
              type="file"
              className="form-control h-100"
              {...register("resume")}
              accept=".pdf,.doc,.docx"
            />
            <ErrorMsg msg={errors.resume?.message || ""} />
          </div>
        </div>
      </div>
      {error && <p className="text-danger">{error}</p>}
      {success && <p className="text-success">{success}</p>}
      <button type="submit" className="it-btn-primary" disabled={loading}>
        {loading ? "Submitting..." : "Submit Application"}
      </button>
    </form>
  );
};

export default ApplicationForm;
