const About = () => {
  return (
    <div className="bg-gray-200 min-h-screen flex flex-col items-center py-16">
      
      {/* Title Section */}
      <div className="text-center">
        <h1 className="text-sm uppercase text-gray-400 tracking-widest">About Us</h1>
        <h2 className="text-4xl font-bold mt-2">WHO AM I?</h2>
      </div>

      {/* Description */}
      <p className="mt-6 text-gray-600 leading-relaxed text-lg max-w-3xl text-center">
        <strong>Hello everyone! I'm Jackson Ford,</strong> a dedicated professional deeply passionate about the world of programming, I possess a relentless curiosity for solving complex problems and a drive to learn new concepts and techniques. Aspiring Frontend Developer with a strong focus on web development technologies. Passionate about building responsive and user-friendly web applications. Looking to leverage my skills in HTML, CSS, JavaScript and React to contribute to innovative projects. I enjoy networking with tech enthusiasts and leveraging technology for positive societal impact. Let's embark on a journey of growth and innovation together! 
      </p>

      {/* Services Section */}
      <div className="mt-10 flex justify-center gap-6 flex-wrap">
        
        {/* Service Card 1 */}
        <div className="bg-white p-6 rounded-xl shadow-lg border-b-4 border-blue-500 text-center w-52">
          <span className="text-3xl text-blue-500">⚙️</span>
          <p className="text-xl mt-2 font-semibold">Web Development</p>
        </div>

        {/* Service Card 2 */}
        <div className="bg-white p-6 rounded-xl shadow-lg border-b-4 border-yellow-500 text-center w-52">
          <span className="text-3xl text-yellow-500">🚀</span>
          <p className="text-xl mt-2 font-semibold">Performance Optimization</p>
        </div>

        {/* Service Card 3 */}
        <div className="bg-white p-6 rounded-xl shadow-lg border-b-4 border-red-500 text-center w-52">
          <span className="text-3xl text-red-500">🎨</span>
          <p className="text-xl mt-2 font-semibold">UI-UX Web Design</p>
        </div>


        {/* Service Card 4 */}
        <div className="bg-white p-6 rounded-xl shadow-lg border-b-4 border-purple-500 text-center w-52">
          <span className="text-3xl text-purple-500">📱</span>
          <p className="text-xl mt-2 font-semibold">Responsive Designs</p>
        </div>

      </div>
    </div>
  );
};

export default About;
