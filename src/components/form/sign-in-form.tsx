'use client';

import Image from 'next/image';
import Link from 'next/link';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import ErrorMsg from '../error-msg';

import socialImg1 from '@/assets/img/inner-page/contact/soacial-1.png';
import socialImg2 from '@/assets/img/inner-page/contact/soacial-2.png';
import socialImg3 from '@/assets/img/inner-page/contact/soacial-3.png';

type FormData = {
  email: string;
  password: string;
};

const schema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const SignInForm = () => {
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
      <div className="row gx-30">
        <div className="col-md-12 mb-20">
          <div className="it-contact-input-box p-relative">
            <input type="email" placeholder="Email" {...register('email')} />
            <ErrorMsg msg={errors.email?.message || ''} />
          </div>
        </div>
        <div className="col-md-12 mb-20">
          <div className="it-contact-input-box p-relative">
            <input
              type="Password"
              placeholder="Password*"
              {...register('password')}
            />
            <ErrorMsg msg={errors.password?.message || ''} />
          </div>
        </div>
      </div>
      <div className="it-sign-up-forget-box d-flex align-items-center justify-content-between mb-30">
        <div className="it-sign-up-forget">
          <a href="#">Forgot Password?</a>
        </div>
        <div className="it-sign-up-remember">
          <input id="remember" type="checkbox" />
          <label htmlFor="remember">
            <span>Remember me</span>
          </label>
        </div>
      </div>
      <div className="it-sign-up-button-box d-sm-flex align-items-center justify-content-between mb-35">
        <button className="it-btn-primary" type="submit">
          <span>Sign In</span>
        </button>
        <div className="it-sign-up-social">
          <span>or sign in with</span>
          <a href="#">
            <Image src={socialImg1} alt="Social Img" width={35} height={35} />
          </a>
          <a href="#">
            <Image src={socialImg2} alt="Social Img" width={35} height={35} />
          </a>
          <a href="#">
            <Image src={socialImg3} alt="Social Img" width={35} height={35} />
          </a>
        </div>
      </div>
      <div className="it-sign-up-bottom">
        <span>
          Don't have an account? <Link href="/sign-up">Sign Up</Link>
        </span>
      </div>
    </form>
  );
};
export default SignInForm;
