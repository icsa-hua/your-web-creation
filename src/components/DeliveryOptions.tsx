import pickupQr from "@/assets/pickup-qr.png";
import deliveryHome from "@/assets/delivery-home.png";
import { Card, CardContent } from "@/components/ui/card";

const DeliveryOptions = () => {
  return (
    <section className="py-12 px-6 bg-muted">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Store Pickup */}
        <Card className="bg-card shadow-card rounded-2xl overflow-hidden border-0 hover:shadow-lg transition-shadow">
          <CardContent className="p-0 flex items-center gap-4">
            <img 
              src={pickupQr} 
              alt="QR Code παραλαβή" 
              className="w-32 h-32 object-contain p-4"
            />
            <div className="p-4">
              <h3 className="font-display font-bold text-lg text-foreground mb-2">
                Παραλαβή από το πλησιέστερο κατάστημα
              </h3>
              <p className="text-muted-foreground text-sm">
                μέσω <span className="font-semibold">QR Code</span>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Home Delivery */}
        <Card className="bg-card shadow-card rounded-2xl overflow-hidden border-0 hover:shadow-lg transition-shadow">
          <CardContent className="p-0 flex items-center gap-4">
            <img 
              src={deliveryHome} 
              alt="Παράδοση στο σπίτι" 
              className="w-32 h-32 object-contain p-4"
            />
            <div className="p-4">
              <h3 className="font-display font-bold text-lg text-foreground mb-2">
                Παράδοση στο σπίτι
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Ιδανικό για όλους και ιδιαίτερα για ηλικιωμένους, άτομα με κινητικά 
                προβλήματα, προβλήματα όρασης
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default DeliveryOptions;
