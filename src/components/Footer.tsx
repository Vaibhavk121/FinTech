const Footer = () => {
   return (
    <footer className="bg-[#1a1a1a] text-white px-8 py-12">
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 pb-12 border-b border-gray-700">
        <h2 className="text-2xl font-semibold">
          Subscribe to Our Newsletter
        </h2>

        <div className="flex bg-white rounded-full px-20 h-15 justify-between overflow-hidden w-full md:w-auto">
          <input
            type="email"
            placeholder="Your Email Address"
            className="px-4 py-3 text-gray-700 outline-none flex-1"
          />
          <button className=" bg-orange-500 px-6 py-3 m-2 rounded-4xl text-white font-medium">
            Get Started
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 py-12 text-gray-300">
        <div>
          <h3 className="text-white font-bold mb-4">Soudemy</h3>
          <p>Platform help your money to be better</p>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4">Features</h3>
          <ul className="space-y-2">
            <li>Saving goal</li>
            <li>Cash back Reward</li>
            <li>Early payday</li>
            <li>Financial Freedom</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4">Support</h3>
          <ul className="space-y-2">
            <li>Saving goal</li>
            <li>Cash back Reward</li>
            <li>Early payday</li>
            <li>Financial Freedom</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4">Company</h3>
          <ul className="space-y-2">
            <li>Saving goal</li>
            <li>Cash back Reward</li>
            <li>Early payday</li>
            <li>Financial Freedom</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li>Saving goal</li>
            <li>Cash back Reward</li>
            <li>Early payday</li>
            <li>Financial Freedom</li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm text-gray-400 border-t border-gray-700 pt-6">
        Copyright: ©2023 Soudemy Team Design All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer
