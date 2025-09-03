import Tick from '../../public/icons/tick.tsx'
// import Heroimage from '../../public/heroimage.svg'
const Hero = () => {
    
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="lg:pr-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight mb-6">
              Soudemy can maximize your money flow.
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our innovative spending tracker helps you get on top of your finances so you can start making moves toward your financial goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-orange-500 text-white px-8 py-4 rounded-full hover:bg-orange-600 font-medium">
                Get Started
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:border-gray-400 font-medium">
                Learn more
              </button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-3">
                <Tick/>
                <span className="text-gray-700">Easy Access To Any Data</span>
              </div>
              <div className="flex items-center gap-3">
                <Tick/>
                <span className="text-gray-700">Simple Security To Any Data</span>
              </div>
              <div className="flex items-center gap-3">
                <Tick/>
                <span className="text-gray-700">Easy Access To Any Data</span>
              </div>
              <div className="flex items-center gap-3">
                <Tick/>
                <span className="text-gray-700">Simple Security To Any Data</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img src="../../public/heroimage.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero
