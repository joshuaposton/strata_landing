
import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              About StrataXM
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              At StrataXM, we combine deep practical experience with a passion for creating seamless customer experiences that drive business growth.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              We understand the unique challenges facing small and medium businesses. That's why we build custom-tailored, scalable solutions that grow with you.
            </p>
            <p className="text-lg text-gray-700">
              Our approach integrates strategy, technology, and customer insights to create experience management systems that deliver real results. We're not just consultants – we're partners in your success.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-blue-900 opacity-10"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Approach</h3>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-blue-900 font-bold text-xl">1</span>
                    </div>
                    <p className="font-medium text-blue-900">Strategy</p>
                  </div>
                  <div>
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-blue-900 font-bold text-xl">2</span>
                    </div>
                    <p className="font-medium text-blue-900">Integration</p>
                  </div>
                  <div>
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-blue-900 font-bold text-xl">3</span>
                    </div>
                    <p className="font-medium text-blue-900">Insights</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
