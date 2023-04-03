import { Player } from '@lottiefiles/react-lottie-player';

function Contact() {

  return (
    <div className="flex flex-col md:flex-row items-center justify-between py-6 px-4 lg:gap-32 lg:ml-40 ">
      <div className="max-w-4xl mx-auto p-8 text-left md:text-left md:pr-8 lg:w-1/2 lg:text-left">
        <h1 className=" font-bold font-Urbanist tracking-wider cursor-pointer relative" style={{ maxWidth: '60vw', fontSize: 'clamp(2rem, 4vw, 4rem)' }}>
          <span className="text-gradient bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Contact Me:
          </span>
          <br />
          <span className="text-gradient bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent md:text-7xl font-bold tracking-wide mt-4" style={{ fontSize: '40px' }}>
            Let's Work Together
          </span>
        </h1>

        <div className="flex flex-col space-y-6 mt-4 font-Urbanist">
          <div className="flex flex-row items-center cursor-pointer">
            <i className="fas fa-envelope text-gray-500 text-2xl mr-4"></i>
            <div>
              <h3 className="text-lg font-semibold text-gradient bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Email</h3>
              <p className="text-gray-500">your.email@example.com</p>
            </div>
          </div>
          <div className="flex flex-row items-center cursor-pointer">
            <i className="fas fa-phone text-gray-500 text-2xl mr-4"></i>
            <div>
              <h3 className="text-lg font-semibold text-gradient bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Phone</h3>
              <p className="text-gray-500">(123) 456-7890</p>
            </div>
          </div>
          <div className="flex flex-row items-center cursor-pointer">
            <i className="fas fa-phone text-gray-500 text-2xl mr-4"></i>
            <div>
              <h3 className="text-lg font-semibold text-gradient bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">LinkedIn</h3>
              <p className="text-gray-500">(123) 456-7890</p>
            </div>
          </div>
          <div className="flex flex-row items-center cursor-pointer">
            <i className="fas fa-phone text-gray-500 text-2xl mr-4"></i>
            <div>
              <h3 className="text-lg font-semibold text-gradient bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Github</h3>
              <p className="text-gray-500">(123) 456-7890</p>
            </div>
          </div>
          <div className="flex flex-row items-center cursor-pointer">
            <i className="fas fa-phone text-gray-500 text-2xl mr-4"></i>
            <div>
              <h3 className="text-lg font-semibold text-gradient bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Instagram</h3>
              <p className="text-gray-500">(123) 456-7890</p>
            </div>
          </div>
          <div className="flex flex-row items-center cursor-pointer">
            <i className="fas fa-map-marker-alt text-gray-500 text-2xl mr-4"></i>
            <div>
              <h3 className="text-lg font-semibold text-gradient bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Address</h3>
              <p className="text-gray-500">123 Main St, City, State, Zip Code</p>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:w-1/2 lg:mr-32">
        <Player
          autoplay
          loop
          src="https://assets2.lottiefiles.com/packages/lf20_in4cufsz.json"
          style={{ maxWidth: '50vw', fontSize: 'clamp(1rem, 3vw, 3rem)' }}
        >
        </Player>
      </div>

    </div>
  );
}

export default Contact;
