
import { Card, CardContent } from "@/components/ui/card";
import { Settings, Database, BarChart3 } from "lucide-react";

export function ServicesSection() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-700">
            We provide end-to-end solutions that connect your systems, data, and customer touchpoints.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Settings className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">Experience Management System Integration</h3>
              <p className="text-gray-700">
                We connect and optimize your customer experience platforms, creating a unified system that works seamlessly across all touchpoints.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Database className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">CRM and API Connectors</h3>
              <p className="text-gray-700">
                Our custom connectors ensure your customer data flows smoothly between systems, giving you a complete view of every interaction.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <BarChart3 className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-blue-900">CX Analytics Dashboards</h3>
              <p className="text-gray-700">
                Transform complex data into actionable insights with our intuitive dashboards, helping you make informed decisions that drive growth.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
