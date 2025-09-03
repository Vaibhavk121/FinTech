import Graph from '../../public/icons/Graph'
import Pc from '../../public/icons/Pc'
import Wallet from '../../public/icons/Wallet'
const Products = () => {
  return (
    <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              We've created a full suite of products
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-[#EFEFEF] rounded-2xl">
              <div className="p-2 w-15 rounded-xl bg-white">
                <Wallet/>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 pr-17 pt-2">
                Payment Feature Ultimate
              </h3>
              <p className="text-gray-600">
                Amet sint est proident fugiat voluptate dolor culpa in elit
                velit id laboris nostrud proident dolor.
              </p>
            </div>

            <div className="text-center p-8 bg-[#EFEFEF] rounded-2xl">
              <div className="p-2 w-15 rounded-xl bg-white">
              <Graph/>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 pr-38 pt-2">
                Finance Analytics
              </h3>
              <p className="text-gray-600">
                Amet sint est proident fugiat voluptate dolor culpa in elit
                velit id laboris nostrud proident dolor.
              </p>
            </div>

            <div className="text-center p-8 bg-[#EFEFEF] rounded-2xl">
              <div className="p-2 w-15 rounded-xl bg-white">
              <Pc/>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 pr-33 pt-2">
                Enterprise Software
              </h3>
              <p className="text-gray-600">
                Amet sint est proident fugiat voluptate dolor culpa in elit
                velit id laboris nostrud proident dolor.
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Products
