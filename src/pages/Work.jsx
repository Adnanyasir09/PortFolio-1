const Work = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-200 to-teal-100 p-6 pt-20">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">💼 My Work</h1>

      {/* Work Section in Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">

        {/* Internship Offer Letter - FIRST */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center col-span-1 md:col-span-2">
          <h2 className="text-xl font-semibold text-gray-800">
            📄 Internship Offer Letter - Proxenix
          </h2>
          <p className="text-gray-600">
            Official internship offer letter confirming my selection as a Web Development Intern at Proxenix.
          </p>
          {/* Embedded PDF */}
<div className="mt-4">
  <embed
    src="offerlet.pdf" // path to your uploaded PDF in public folder
    type="application/pdf"
    width="100%"
    height="600px"
    className="rounded-lg shadow-md"
  />
</div>

          <a
            href="offerletter.pdf" // Replace with your PDF file path or link
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            View Offer Letter (PDF)
          </a>
        </div>

        {/* SRCS Doon Blog */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold text-gray-800">📝 SRCS Doon Blog</h2>
          <p className="text-gray-600">
            A blog I created for SRCS Doon, covering various topics with engaging content.
          </p>
          <div className="mt-4">
            <img
              src="scsc.jpeg"
              alt="SRCS Doon Blog"
              className="w-full rounded-lg shadow-md"
            />
          </div>
          <a
            href="blog.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            View Full Blog (PDF)
          </a>
        </div>

        {/* Canva Design for The Alpyne Labs */}
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold text-gray-800">🎨 Canva Design - The Alpyne Labs</h2>
          <p className="text-gray-600">
            A creative Canva design post created for The Alpyne Labs.
          </p>
          <div className="mt-4">
            <img
              src="canv.jpeg"
              alt="Alpyne Labs Canva Design"
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Work;
