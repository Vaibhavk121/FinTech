import Greentick from "../../public/icons/Greentick.tsx";
const FinetechRoles = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img src="../../public/role.svg" alt="" />
          </div>

          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              The role of Fintech in the payment system
            </h2>
            <p className="text-gray-600 mb-5">
              FinTech is able to replace the role of formal <br />financial institutions such as banks. In terms <br />of the payment system. 
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Greentick />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Become a tool for payments, settlements and clearing
                  </h3>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Greentick />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Become a tool for payments, settlements and clearing
                  </h3>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Greentick />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Become a tool for payments, settlements and clearing
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinetechRoles;
