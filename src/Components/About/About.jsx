import React from "react";

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto py-6 text-gray-600 md:px-12 xl:px-16">
        <div className="space-y-6 mb-20 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
              alt="image"
            />
          </div>
          <div className="md:7/12 lg:w-6/12 ">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              About Our Tech Blog
            </h2>
            <p className="mt-6 text-gray-600 mb-10">
              Welcome to Beyond, your go-to destination for the latest in
              technology trends, insightful articles, and in-depth analysis. We
              are a passionate team of tech enthusiasts dedicated to bringing
              you quality content that explores the ever-evolving world of
              technology.
            </p>
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              Our Mission
            </h2>
            <p className="mt-6 text-gray-600 mb-10">
              At Beyond, our mission is to demystify complex tech topics,
              inspire curiosity, and foster a community of tech enthusiasts. We
              believe in making technology accessible to everyone by breaking
              down intricate concepts into engaging and digestible articles.
            </p>
          </div>
        </div>
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:7/12 lg:w-6/12 ">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              What We Cover
            </h2>
            <p className="m-6 pb-3 text-gray-600 mb-10">
              Explore a wide range of topics, including:
              <br />
              <br />- <b>Latest Tech Trends:</b>
              <br /> Stay updated on the hottest trends and innovations in the
              tech industry.
              <br />
              <br />- <b>In-Depth Guides:</b>
              <br /> Dive deep into tutorials, guides, and how-to articles to
              enhance your tech skills.
              <br />
              <br />- <b>Product Reviews:</b>
              <br /> Get honest and unbiased reviews of the latest gadgets,
              software, and tech products.
              <br />
              <br />- <b>Thoughtful Analysis:</b>
              <br /> Read thought-provoking analyses and opinions on the impact
              of technology on society and the future.
              <br />
            </p>
          </div>
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
              alt="image"
            />
          </div>
        </div>
      </div>
      <div className="py-4 px-24 bg-black text-center">
        <h2 className="text-2xl text-gray-300 font-bold md:text-4xl">
          Meet Our Team
        </h2>
        <p className="mt-3 text-gray-400 mb-2">
          We are a diverse team of tech enthusiasts, developers, designers, and
          writers who are passionate about sharing our knowledge and experiences
          with the world. Meet the faces behind Beyond and learn about our
          unique perspectives and expertise.
        </p>
        <div className="inline-block">
          <div className="h-40 w-40 inline-block rounded-full border-8 border-black border-solid">
            <img
            className="object-cover w-full h-full inline-block rounded-full border-8 border-black border-solid"
              src="people1.jpg"
            ></img>
          </div>

          <div className="h-40 w-40 inline-block rounded-full border-8 border-black border-solid">
            <img
              className="object-cover w-full h-full inline-block rounded-full border-8 border-black border-solid"
              src="people2.jpg"
            ></img>
          </div>

          <div className="h-40 w-40 inline-block rounded-full border-8 border-black border-solid">
            <img
              className="object-cover w-full h-full inline-block rounded-full border-8 border-black border-solid"
              src="people3.jpg"
            ></img>
          </div>

          <div className="h-40 w-40 inline-block rounded-full border-8 border-black border-solid">
            <img
              className="object-cover w-full h-full inline-block rounded-full border-8 border-black border-solid"
              src="people4.jpg"
            ></img>
          </div>
        </div>
      </div>
      <div className="md:7/12 lg:w-full p-16 text-center">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              Connect with the Team
            </h2>
            <p className="mt-6 text-gray-600 mb-10">
            We would love to connect with you! Follow us on <a href="#" className="cursor-pointer text-pink-600 text-2xl font-bold">instagram</a>, <a href="#" className="text-black cursor-pointer font-bold text-2xl">X</a>, <a href="#" className="cursor-pointer text-blue-600 text-2xl font-bold">linkedIn</a>, and reach out via <b>beyond@example.com</b> . Your thoughts and feedback are invaluable to us, and we look forward to building a vibrant community together.<br/><br/>Thank you for being part of the <b>@Beyond</b> community. We hope you enjoy exploring the diverse perspectives our team brings to the table.

            </p>
            <h3 className="text-gray-900 font-bold md:text-2xl">
                Happy reading!
            </h3>
          </div>
    </div>
  );
}
