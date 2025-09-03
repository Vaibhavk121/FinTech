import Greentick from '../../public/icons/Greentick.tsx';
import Google from "../../public/Fintech-Google-Play.svg"
import Apple from '../../public/Fintech-App-Store.svg'
import CTA from '/Ctaimage.svg'
const Cta = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Facilitate Accessible Financial Services
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              It involves how fintech financial companies develop innovative
              products to better serve customers and increase financial
              inclusion.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                    <Greentick/>
                <span className="text-gray-700">
                  Financial transaction become easier
                </span>
              </div>
              <div className="flex items-center gap-3">
                    <Greentick/>
                <span className="text-gray-700">
                  Budgeting tracking become easier
                </span>
              </div>
              <div className="flex items-center gap-3">
                    <Greentick/>
                <span className="text-gray-700">
                  Saving money become easier
                </span>
              </div>
            </div>

            <div className="flex gap-4">
              <img
                src={Google}
                className="h-12"
              />
              <img
                src={Apple}
                className="h-12"
              />
            </div>
          </div>

          <div className="relative">
            <img src={CTA}/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
