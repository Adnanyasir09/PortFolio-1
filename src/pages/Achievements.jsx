const Achievements = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-emerald-100 to-blue-200 p-6 pt-20">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">🏆 Achievements</h1>

      <ul className="space-y-6 w-full max-w-6xl">
        {/* JEE Mains Achievement */}
        <li className="bg-white shadow-lg rounded-lg p-6 text-center">
          <p className="text-lg text-gray-700 mb-2">
            <strong>✅ JEE Mains Percentile:</strong> 87.45
          </p>
        </li>

        {/* First Row - Astrophotography & Aptitude */}
        <li className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Astrophotography Achievement */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <p className="text-lg text-gray-700">
              <strong>🌌 Winner</strong> of the{" "}
              <strong>Astrophotography Competition (2025)</strong> organised by{" "}
              <strong>IIT Jammu </strong>
            </p>
            <div className="mt-4">
              <img
                src="jam.jpg"
                alt="Astrophotography Competition Certificate"
                className="w-full max-w-md mx-auto rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Aptitude Competition Achievement */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <p className="text-lg text-gray-700">
              <strong>🥇 Winner </strong> of inter-college <strong>Aptitude Competition </strong>
               organised by Kiet Group Of Institutions{" "}
              
            </p>
            <div className="mt-4">
              <img
                src="cert1.jpeg"
                alt="Aptitude Competition Certificate"
                className="w-full max-w-md mx-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </li>

        {/* Second Row - Legal Eagle */}
        <li className="bg-white shadow-lg rounded-lg p-6 text-center">
          <p className="text-lg text-gray-700">
            <strong>🏆 Runner-up</strong> in the <strong>Legal Eagle Event</strong> at the{" "}
            <strong>8th National XL-IR Summit</strong> by Xavier School of Management (XLRI)
          </p>
          <div className="mt-4">
            <img
              src="cert2.jpg"
              alt="Legal Eagle Certificate"
              className="w-full max-w-md mx-auto rounded-lg shadow-md"
            />
          </div>
        </li>

        {/* Photography Competition Achievement */}
        <li className="bg-white shadow-lg rounded-lg p-6 text-center">
          <p className="text-lg text-gray-700">
            <strong>📸 Runner-up</strong> in a <strong>Photography Competition</strong>
          </p>
          <div className="mt-4">
            <img
              src="cert3.jpg"
              alt="Photography Competition Certificate"
              className="w-full max-w-md mx-auto rounded-lg shadow-md"
            />
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Achievements;
