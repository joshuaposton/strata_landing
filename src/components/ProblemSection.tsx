
import { Card, CardContent } from "@/components/ui/card";

export function ProblemSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            The Experience Gap Is Costing You
          </h2>
          <p className="text-lg text-gray-700">
            Today's businesses face critical challenges that directly impact their bottom line.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-t-4 border-t-blue-900">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3 text-blue-900">Revenue Leakage</h3>
              <p className="text-gray-700">
                Business owners feel like they're constantly leaking revenue through missed opportunities and customer churn.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-t-4 border-t-blue-900">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3 text-blue-900">Fragmented Experiences</h3>
              <p className="text-gray-700">
                Your customers experience disconnected journeys across different touchpoints, creating friction and frustration.
              </p>
            </CardContent>
          </Card>
          
          <Card className="border-t-4 border-t-blue-900">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-3 text-blue-900">Disconnected Systems</h3>
              <p className="text-gray-700">
                Operations and data silos prevent you from seeing the complete picture and making informed decisions.
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Discover how StrataXM helps you bridge these gaps with integrated systems that align your operations and elevate your customer experience.
          </p>
        </div>
      </div>
    </section>
  );
}
