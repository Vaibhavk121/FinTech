import Hand1 from '/testimonial/hand1.svg?url'
import Hand2 from '/testimonial/hand2.svg?url'
import Profile from '/testimonial/profile.svg?url'

const Testimonial = () => {
  return (
    <section className="relative bg-gray-50 py-16 h-[514px] overflow-hidden">

      <img
        src={Hand1}
        alt="left hand"
        className="absolute left-0 bottom-50 w-48 md:w-64"
      />

      <img
        src={Hand2}
        alt="right hand"
        className="absolute right-0 bottom-35 w-[295px] md:w-64"
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        

        <div className="flex items-center ml-30 mt-30 gap-3 mb-6">
          <img
            src={Profile}
            alt="Sara Workman"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="text-left">
            <h4 className="font-bold text-gray-800">Sara Workman</h4>
            <p className="text-sm text-gray-500">CEO at Valid</p>
          </div>
        </div>

        <blockquote className="text-lg italic text-gray-700 max-w-2xl mx-auto">
          “Since I started using this fintech app, managing my finances has become
          so much easier. I can track my spending, set savings goals, and even
          invest all in one place.”
        </blockquote>

        <div className="flex justify-center gap-3 mt-6">
          <span className="w-12 h-[2px] bg-gray-400"></span>
          <span className="w-12 h-[2px] bg-gray-400"></span>
          <span className="w-12 h-[2px] bg-gray-400"></span>
        </div>
      </div>
    </section>
  );
}

export default Testimonial
