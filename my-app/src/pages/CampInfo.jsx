const CampInfo = () => {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
          <h1 className="text-3xl font-bold text-center mb-6 text-black-700">Training Camp Information</h1>
          <p className="text-base text-gray-700 mb-6 leading-relaxed">
            The training camp aims to equip participants with the knowledge and skills needed to build and design web applications
            and websites using JavaScript and frameworks like React and Express. JavaScript is a versatile and powerful programming
            language that runs in the browser and on the server, making it an essential tool for building dynamic and interactive
            websites. During this camp, participants will not only learn JavaScript but also delve into its advanced features such as:
          </p>
          <ul className="list-disc list-inside text-left text-gray-700 mb-6">
            <li>Asynchronous programming and promises</li>
            <li>Manipulating the DOM to create dynamic user interfaces</li>
            <li>Using ES6+ features for cleaner and more efficient code</li>
            <li>Building RESTful APIs using Express.js</li>
            <li>State management and component-based architecture with React</li>
          </ul>
          <p className="text-base text-gray-700 mb-6">
            This comprehensive program also covers up-to-date technical topics that will help participants create advanced, user-friendly
            applications, making it easier to enter the job market as a web developer and improve the user experience.
          </p>
  
          <div className="flex flex-col md:flex-row justify-between bg-gray-100 p-4 rounded-lg">
            <div className="text-center mb-4 md:mb-0">
              <h2 className="text-lg font-medium text-black-700">Start Date</h2>
              <p className="text-gray-600">2024-08-25</p>
            </div>
            <div className="text-center">
              <h2 className="text-lg font-medium text-black-700">End Date</h2>
              <p className="text-gray-600">2024-10-31</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default CampInfo;
  