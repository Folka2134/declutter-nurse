import React from "react";

import Navbar from "components/Navbars/AuthNavbar.js";
import FooterAdmin from "components/Footers/FooterAdmin";

export default function Landing() {
  return (
    <>
      <Navbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: "url('/assets/img/declutter-bathroom.jpg')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="">
                  <h1 className="text-white font-semibold text-5xl">
                    Welcome to Declutter Nurse Specialists
                  </h1>
                  <p className="mt-4 text-lg text-blueGray-200">
                    There is nothing more calming than an organized home. At
                    Declutter Nurse, we specialize in transforming your living
                    space into a peaceful, efficient, and stress-free
                    environment.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-20 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-award"></i>
                    </div>
                    <h6 className="text-xl font-semibold">
                      Book Your Consultation Today
                    </h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Ready to start decluttering? Schedule a free consultation
                      with one of our specialists and take the first step toward
                      a more organized home.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                      <i className="fas fa-retweet"></i>
                    </div>
                    <h6 className="text-xl font-semibold">
                      Discover Our Services
                    </h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Explore our range of personalized decluttering and
                      organizing services designed to meet your unique needs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                      <i className="fas fa-fingerprint"></i>
                    </div>
                    <h6 className="text-xl font-semibold">
                      Free Home Assessment
                    </h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Let us help you assess your home’s potential for a fresh
                      start. Request a free assessment and find out how we can
                      assist you in creating a serene and functional space.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-user-friends text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Who we are
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                  We understand that clutter can feel overwhelming, but we
                  believe in a judgment-free approach to organizing. Whether
                  you’re struggling to maintain order or looking to minimize
                  unnecessary items, we offer tailored solutions that focus on
                  efficiency, reducing stress, and creating a space you love.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                  Our specialists provide personalized in-home visits, so you
                  can enjoy a clutter-free home without the hassle. We’re here
                  to support you every step of the way, making the process easy
                  and comfortable.
                </p>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                  <img
                    alt="..."
                    src="/assets/img/declutter-bedroom.jpg"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      {/* <polygon
                        points="-30,95 583,95 583,65"
                        className="text-lightBlue-500 fill-current"
                      ></polygon> */}
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      Top Notch Services
                    </h4>
                    {/* <p className="text-md font-light mt-2 text-white">
                      lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam, quidem lorem ipsum dolor sit amet consectetur
                      adipisicing elit.
                    </p> */}
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <div className="text-lightBlue-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-lightBlue-300">
                    <i className="fas fa-rocket text-xl"></i>
                  </div>
                  <h3 className="text-3xl font-semibold">A growing company</h3>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                    The extension comes with three pre-built pages to help you
                    get started faster. You can change the text and images and
                    you're good to go.
                  </p>
                  <ul className="list-none mt-6">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                            <i className="fas fa-fingerprint"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            Carefully crafted components
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                            <i className="fab fa-html5"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            Amazing page examples
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-lightBlue-600 bg-lightBlue-200 mr-3">
                            <i className="far fa-paper-plane"></i>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                            Dynamic components
                          </h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
 */}
        <section className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">Meet the team</h2>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="/assets/img/team-1-800x800.jpg"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Ryan Tompson</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Organizer
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="/assets/img/team-2-800x800.jpg"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Romina Hadid</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Declutter Specialist
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="/assets/img/team-3-800x800.jpg"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Alexa Smith</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Administrator
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
                <div className="px-6">
                  <img
                    alt="..."
                    src="/assets/img/team-4-470x470.png"
                    className="shadow-lg rounded-full mx-auto max-w-120-px"
                  />
                  <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">Jenna Kardi</h5>
                    <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
                      Cleaner
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 relative block bg-blueGray-800">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-800 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            {/* <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white">
                  Build something
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-400">
                  Put the potentially record low maximum sea ice extent tihs
                  year down to low ice. According to the National Oceanic and
                  Atmospheric Administration, Ted, Scambos.
                </p>
              </div>
            </div> */}
            <div className="flex flex-wrap pt-12 mb-12 justify-center">
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-medal text-xl"></i>
                </div>
                <h6 className="text-xl mt-5 font-semibold text-white">
                  Transform Your Own Space Today
                </h6>
                <p className="mt-2 mb-4 text-blueGray-400">
                  Start your journey toward a clutter-free home. Contact us to
                  see how we can bring calm and order to your living space.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-poll text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Start Your Decluttering Journey
                </h5>
                <p className="mt-2 mb-4 text-blueGray-400">
                  Take the first step towards a peaceful, organized home.
                  Connect with us and let’s create a space that truly reflects
                  your lifestyle.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-lightbulb text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Get Organized, Stay Organized
                </h5>
                <p className="mt-2 mb-4 text-blueGray-400">
                  Discover tips and resources for maintaining a tidy,
                  stress-free home. Join our community for exclusive insights
                  and organizing strategies.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="relative block py-24 lg:pt-0 bg-blueGray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold">Get in touch</h4>
                    <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
                      Complete this form and we will get back to you in 72
                      hours.
                    </p>
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Full Name"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Email"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        rows="4"
                        cols="80"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Type a message..."
                      />
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterAdmin />
    </>
  );
}
