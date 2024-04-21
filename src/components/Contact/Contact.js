import {
  BsFillTelephoneFill,
  BsFacebook,
  BsLinkedin,
  BsTwitter,
} from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { ImLocation } from 'react-icons/im';

import splash from '../../assets/splash.png';
import { useRef, useState } from 'react';
import ReactModal from 'react-modal';
import Loader from '../Animation/Loader';
import emailjs from '@emailjs/browser';

import './Loader.css';
import { toast } from 'react-toastify';

const style = {
  inputBlock: 'flex flex-col',
  input:
    'px-3 py-2 border border-[#6db2c7fd] rounded-md focus:outline-[#6db2c7fd]',
  link: 'block rounded-full shadow-sm hover:shadow-md transition duration-150 p-2 hover:bg-[#7fc6dbfd]',
};

const Contact = ({ refs }) => {
  const form = useRef(null);
  const [loading, setLoading] = useState(false);

  const onClick = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        'service_e881k66',
        'template_m1sx30e',
        form.current,
        '0_jnJPrBMQvt3fMaw'
      )
      .then(
        (result) => {
          //console.log(result.text);
          setLoading(false);
          toast.success('Email sent successfully.', {
            icon: '✔',
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          });
        },
        (error) => {
          //console.log(error.text);
          setLoading(false);
          toast.error('Could not send, please try again later!', {
            icon: '❌',
            position: 'top-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          });
        }
      );
    e.target.reset();
  };

  return (
    <>
      <div
        ref={refs}
        className="bg-gray-100 gruppo flex flex-col items-center justify-center pb-14"
      >
        <div className="text-center p-10">
          <h1 className="text-2xl font-bold">Contact Me</h1>
          <h4>Any questions? Just email me!</h4>
        </div>

        <div className="flex md:flex-row flex-col w-[80%] shadow-lg rounded-md bg-white">
          <div className="text-white relative md:w-[30%] rounded-md shadow-lg bg-[#6db2c7fd] p-5 flex flex-col">
            <div>
              <h1 className="text-xl py-3">Contact Information</h1>
              <div className="flex items-center space-x-3 mb-2">
                <BsFillTelephoneFill />
                <span>+880&nbsp;1875609450</span>
              </div>
              <div className="flex items-center space-x-3 mb-2">
                <MdEmail />
                <span>almonaemkhan@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <ImLocation />
                <span>
                  533/4, North Ibrahimpur
                  <br />
                  Kafrul, Mirpur-14
                </span>
              </div>
            </div>
            <div className="flex mt-auto space-x-3 md:mb-10 pt-10 md:p-5">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className={style.link}
                href="https://facebook.com/almonaemkhan"
              >
                <BsFacebook className="w-6 h-6" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className={style.link}
                href="https://www.linkedin.com/in/al-monaem-khan-4713b01ab/"
              >
                <BsLinkedin className="w-6 h-6" />
              </a>
              {/* <a
                target="_blank"
                rel="noopener noreferrer"
                className={style.link}
                href="https://twitter.com/__AbyssWalker"
              >
                <BsTwitter className="w-6 h-6" />
              </a> */}
            </div>
            <div className="absolute bottom-0 right-0">
              <img src={splash} alt="" className="w-36 h-36 md:w-44 md:h-44" />
            </div>
          </div>
          <div className="md:w-[70%] p-10">
            <form
              ref={form}
              className="flex flex-col"
              onSubmit={(e) => onClick(e)}
            >
              <div className="mb-5 text-xl text-center flex items-center justify-center space-x-3">
                <span>
                  <MdEmail />
                </span>
                <span>Send an Email</span>
              </div>
              <div className="flex space-y-2 flex-col">
                <div className={style.inputBlock}>
                  <label className="text-lg">Email</label>
                  <input
                    className={style.input}
                    placeholder="Enter your email"
                    name="email"
                    type="email"
                    required
                  />
                </div>
                <div className={style.inputBlock}>
                  <label className="text-lg">Subject</label>
                  <input
                    className={style.input}
                    placeholder="Enter subject"
                    name="subject"
                    type="text"
                    required
                  />
                </div>
                <div className={style.inputBlock}>
                  <label className="text-lg">Message</label>
                  <textarea
                    className={`${style.input} h-[200px] resize-none`}
                    name="message"
                    placeholder="Enter message"
                    required
                  />
                </div>
              </div>
              <div className="py-4 ml-auto font-bold">
                <button
                  type="submit"
                  className="border-2 transition shadow-md duration-100 px-5 py-2 rounded border-[#6db2c7fd] bg-[#6db2c7fd] hover:bg-[#7abed3fd] hover:text-white"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ReactModal isOpen={loading}>
        <Loader />
      </ReactModal>
    </>
  );
};

export default Contact;
