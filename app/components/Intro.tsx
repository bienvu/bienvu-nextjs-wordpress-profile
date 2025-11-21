"use client";
import Image from "next/image";
import Avarta from "../assets/avarta.png";
import Link from "next/link";
import Social from "./Social";
import ProfileData from "./ProfileData";

export default function Intro() {
  return (
    <>
      <div className='grid grid-cols-1 lg:gap-x-20 gap-0 lg:grid-cols-5 lg:grid-rows-[auto_1fr] w-full'>
        <div className='max-w-2xl lg:col-span-3 mb-10'>
          <h1 className='page-title text-left'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500'>
              Hello 👋
            </span>
          </h1>
          <div className='mt-6 text-normal'>
            <p className='mb-3'>
              {`I am a highly experienced Full-Stack Developer with over 12 years of delivering end-to-end web solutions across diverse industries. I have strong expertise in JavaScript, Node.js, TypeScript, PHP, HTML5, CSS/SCSS, and modern front-end frameworks such as React.js and Vue.js, building scalable and maintainable architectures. My back-end experience includes designing APIs, implementing server-side logic, and working with databases like MySQL, MongoDB, and GraphQL.`}
            </p>
            <p className='mb-3'>
              {`I am proficient in integrating, customizing, and extending CMS platforms including Drupal, WordPress, Shopify, and headless CMS solutions. I have hands-on experience deploying and managing applications on Linux servers, Google Cloud, Pantheon, and Acquia, as well as setting up CI/CD pipelines to streamline development workflows.`}
            </p>
            <p className='mb-3'>
              {`Over the past five years, I have led technical execution, sprint planning, task allocation, and mentoring junior developers within Agile/Scrum teams. Proactive and adaptable, I embrace new technologies and modern development methodologies to consistently deliver high-quality, scalable digital solutions.`}
            </p>
            <hr className='mt-6 mb-6' />
            <p className='mb-8'>
              {`Let me know if this aligns with your vision or if there are any
              other changes you'd like. Thank you!`}
            </p>
            <Link className='button-gradient' target="_blank" href='https://drive.google.com/file/d/1ij8mCQmEVv48DI0qsfO7MqtSVipOxFIp/view?usp=drive_link'>
              My Resume
            </Link>
            <Link className='button-gradient' target="_blank" href='https://drive.google.com/drive/folders/1v1d8RVt7BCArXTZ800gx5JnsSsjO_jpx?usp=sharing'>
              Certifications
            </Link>
          </div>
        </div>
        <div className='col-span-2 mb-10 mt-20'>
          <ProfileData />
          <blockquote className='text-center pt-5 font-bold dark:text-zinc-200'>
            “The only way to do great work is to love what you do.” <br />
            <br />
            <b>Steve Jobs</b>
          </blockquote>
        </div>
      </div>
    </>
  );
}
