<main className="flex-grow">
<div className="mx-auto max-w-7xl w-full pt-16 pb-20 px-4 sm:px-6 lg:px-8">
  <div className="text-center">
    <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
      <span className="block xl:inline">Welcome to my</span>{' '}
      <span className="block text-indigo-600 xl:inline">Portfolio Website</span>
    </h1>
    <p className="mt-3 max-w-md mx-auto text-base sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis ipsum eu risus imperdiet, vel bibendum magna gravida.
    </p>
    <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
      <div className="rounded-md shadow">
        <a
          href="#"
          className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
        >
          Get started
        </a>
      </div>
      <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
        <a
          href="#"
          className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
        >
          Live demo
        </a>
      </div>
    </div>
  </div>
</div>
</main>


<button
                className="bg-gradient-to-br from-pink-400 to-purple-400 text-white font-bold text-4xl w-24 h-24 m-1 rounded-lg focus:outline-none focus:shadow-outline transform transition-all duration-200 hover:opacity-75"
                onClick={() => handleClick(i)}
            >
                {squares[i]}
            </button>
