import { Badge } from "@/components/ui/badge";
import { Store } from "lucide-react";

export default function MerchantComponent() {
  return (
    <div className="container mx-auto px-4 lg:px-8 py-4 md:py-8 space-y-4 md:space-y-8">
      <div className="flex justify-center md:justify-start">
        <Badge className="bg-primary/10 hover:bg-primary/20 text-primary hover:text-primary/90 p-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 border border-primary/20 hover:border-primary/30">
          <Store className="w-5 h-5 mr-2" />
          <span className="font-medium text-sm">Merchant</span>
        </Badge>
      </div>
    </div>
  );
}
