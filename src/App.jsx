import React from "react";
import { Badge } from "./ui/badge";
export default function LandingPage() {
  return (
    <main
      key="1"
      className="flex flex-col items-center justify-center w-full min-h-screen py-20 bg-gradient-to-r from-green-400 to-blue-500 dark:from-gray-800 dark:to-gray-900">
      <div className="w-full max-w-3xl">
        <header className="flex flex-col items-center justify-center w-full mb-10">
          <img
            src="/profile.jpg"
            alt="Description of your Image"
            className="rounded-full"
            height={150}
            style={{
              aspectRatio: "150/150",
              objectFit: "cover",
            }}
            width={150}
          />
          <h1 className="mt-4 text-4xl font-bold text-white">
            Kalemeera Collins
          </h1>
          <p className="mt-2 text-lg text-white">Frontend Developer</p>
          <div className="flex mt-4 space-x-4">
            <a
              className="text-white hover:text-gray-300"
              href="mailto:kalemeeracollins@outlook.com">
              <MailIcon className="w-6 h-6" />
            </a>
            <a
              className="text-white hover:text-gray-300"
              href="tel:+256750900962">
              <PhoneIcon className="w-6 h-6" />
            </a>
            <a
              className="text-white hover:text-gray-300"
              href="https://github.com/Kalemeeracollins">
              <GithubIcon className="w-6 h-6" />
            </a>
            <a
              className="text-white hover:text-gray-300"
              href="https://www.aedin.com/in/kalemeeracollins">
              <aedinIcon className="w-6 h-6" />
            </a>
          </div>
        </header>
        <section className="w-full p-4 bg-white rounded-lg shadow-md dark:bg-gray-800 hover:shadow-lg transition-all duration-200">
          <h2 className="text-2xl font-bold">About Me</h2>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Am a frontend developer with over 3 years of experience in building
            high-quality web applications. I specialize in JavaScript and have
            professional experience working with React and Node.js. I also have
            hands-on experience with video editting.
          </p>
        </section>
        <section className="w-full mt-10 p-4 bg-white rounded-lg shadow-md dark:bg-gray-800 hover:shadow-lg transition-all duration-200">
          <h2 className="text-2xl font-bold">Projects</h2>
          <div className="flex flex-wrap justify-between gap-2 mt-4">
            <div className="w-full md:w-1/2 lg:w-1/4 hover:shadow-lg transition-all duration-200">
              <span>
                <h1>Project 1</h1>
              </span>
              <div>
                <img
                  className="object-cover w-full h-40 md:h-64 lg:h-40 rounded-lg"
                  src="/netflix.png"
                  alt="Project 1"
                  height={200}
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width={300}
                />
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  A netflix like cloned app using react.js and an IMDB API .
                </p>
              </div>
              <div>
                <a
                  className="text-blue-500 hover:text-blue-700"
                  href="https://ckcollins-netflix-app.netlify.app/">
                  View Project
                </a>
              </div>
            </div>

            <div className="w-full md:w-1/2 lg:w-1/4 hover:shadow-lg transition-all duration-200">
              <span>
                <h1>Project 2</h1>
              </span>
              <div>
                <img
                  className="object-cover w-full h-40 md:h-64 lg:h-40 rounded-lg"
                  src="/crown-wave.png"
                  alt="crown-wave"
                  height={200}
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width={300}
                />
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  An affiliate app built using react.js and an IMDB API .
                </p>
              </div>
              <div>
                <a
                  className="text-blue-500 hover:text-blue-700"
                  href="https://crown-wave.netlify.app/home">
                  View Project
                </a>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/4 hover:shadow-lg transition-all duration-200">
              <span>
                <h1>Project 3</h1>
              </span>
              <div>
                <img
                  className="object-cover w-full h-40 md:h-64 lg:h-40 rounded-lg"
                  src="/netflix.png"
                  alt="Project 1"
                  height={200}
                  style={{
                    aspectRatio: "200/200",
                    objectFit: "cover",
                  }}
                  width={300}
                />
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  A netflix like cloned app using react.js and an IMDB API .
                </p>
              </div>
              <div>
                <a
                  className="text-blue-500 hover:text-blue-700"
                  href="https://ckcollins-netflix-app.netlify.app/">
                  View Project
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full mt-10 p-4 bg-white rounded-lg shadow-md dark:bg-gray-800 hover:shadow-lg transition-all duration-200">
          <h2 className="text-2xl font-bold">Skills</h2>
          <div className="flex flex-wrap mt-2">
            <Badge className="m-1 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200">
              JavaScript
            </Badge>
            <Badge className="m-1 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200">
              React
            </Badge>
            <Badge className="m-1 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200">
              Vedio Editting
            </Badge>
            <Badge className="m-1 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200">
              HTML
            </Badge>
            <Badge className="m-1 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200">
              SCSS
            </Badge>
            <Badge className="m-1 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200">
              Firebase
            </Badge>
            <Badge className="m-1 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200">
              Docker
            </Badge>
          </div>
        </section>
        <section className="w-full mt-10 p-4 bg-white rounded-lg shadow-md dark:bg-gray-800 hover:shadow-lg transition-all duration-200">
          <h2 className="text-2xl font-bold">Experience</h2>
          <div className="mt-2">
            <h3 className="text-lg font-semibold">
              Software Engineer, OpenMrs
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Jan 2022 - Present
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-500 dark:text-gray-400">
              <li>
                Developed and maintained web applications using React and
                Node.js.
              </li>
              <li>Managed infrastructure using Google Cloud and Docker.</li>
            </ul>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Junior Developer</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Jun 2021 - Dec 2022
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-500 dark:text-gray-400">
              <li>
                Worked on a team to develop a web application using React.js.
              </li>
              <li>Assisted in managing infrastructure .</li>
            </ul>
          </div>
        </section>
        <section className="w-full mt-10 p-4 bg-white rounded-lg shadow-md dark:bg-gray-800 hover:shadow-lg transition-all duration-200">
          <h2 className="text-2xl font-bold">Education</h2>
          <div className="mt-2">
            <h3 className="text-lg font-semibold">Self taught</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Self taught, 2020 - 2022
            </p>
          </div>
        </section>
        <section className="w-full mt-10 p-4 bg-white rounded-lg shadow-md dark:bg-gray-800 hover:shadow-lg transition-all duration-200">
          <h2 className="text-2xl font-bold">Testimonials</h2>
          <div className="mt-4">
            <blockquote className="text-gray-500 dark:text-gray-400">
              "Collins is a highly skilled developer with a keen eye for detail.
              He can always be trusted to deliver high-quality code on time."
            </blockquote>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
              - Jane Smith, Google
            </p>
          </div>
        </section>
        <section className="w-full mt-10 p-4 bg-white rounded-lg shadow-md dark:bg-gray-800 hover:shadow-lg transition-all duration-200">
          <h2 className="text-2xl font-bold">Contact</h2>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            If you have any questions or would like to discuss a project, feel
            free to reach out to me at
            <a
              className="text-blue-500 hover:text-blue-700"
              href="mailto:kalemeeracollins@outlook.com">
              {" "}
              kalemeeracollins@outlook.com
            </a>
            .
          </p>
        </section>
        <footer className="w-full mt-10 p-4 bg-white rounded-lg shadow-md dark:bg-gray-800 hover:shadow-lg transition-all duration-200">
          <div className="flex justify-center space-x-4">
            <a
              className="text-gray-500 hover:text-gray-700"
              href="mailto:kalemeeracollins@outlook.com">
              <MailIcon className="w-6 h-6" />
            </a>
            <a
              className="text-gray-500 hover:text-gray-700"
              href="tel:+256750900962">
              <PhoneIcon className="w-6 h-6" />
            </a>
            <a
              className="text-gray-500 hover:text-gray-700"
              href="https://github.com/Kalemeeracollins">
              <GithubIcon className="w-6 h-6" />
            </a>
            <a
              className="text-gray-500 hover:text-gray-700"
              href="https://www.aedin.com/in/kalemeeracollins">
              <aedinIcon className="w-6 h-6" />
            </a>
          </div>
          <div className="mt-4 text-center text-gray-500 dark:text-gray-400">
            © 2024 Kalemeera Collins. All rights reserved.
          </div>
        </footer>
      </div>
    </main>
  );
}

function GithubIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function aedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
