
import React, { useState } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check, Lock, Phone, MapPin, Bell, Calendar } from "lucide-react";
import { useApp } from "@/context/AppContext";
import { useToast } from "@/hooks/use-toast";

const Premium = () => {
  const { user, purchasePremium } = useApp();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!phoneNumber.trim()) {
      toast({
        title: "Phone number required",
        description: "Please enter your M-Pesa phone number",
        variant: "destructive",
      });
      return;
    }
    
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      purchasePremium();
      toast({
        title: "Payment Successful",
        description: "You now have access to all premium features!",
      });
    }, 2000);
  };

  if (user?.hasPaidAccess) {
    return (
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-1 py-8">
          <div className="container px-4 mx-auto md:px-6">
            <h1 className="mb-2 text-3xl font-bold">Premium Access</h1>
            <p className="mb-8 text-muted-foreground">
              You already have premium access to all features
            </p>

            <div className="p-8 text-center bg-gikomba-green/10 rounded-lg">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-gikomba-green/20 text-gikomba-green">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gikomba-green">
                Premium Access Activated
              </h3>
              <p className="mt-2 mb-4 text-gray-600">
                You have full access to all premium features including contact information, location maps, and price alerts
              </p>
              <Button
                className="bg-gikomba-green hover:bg-green-600"
                onClick={() => window.history.back()}
              >
                Continue Browsing
              </Button>
            </div>

            <div className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-4">
              {premiumFeatures.map((feature, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center justify-center w-12 h-12 mb-2 rounded-full bg-gikomba-blue/10 text-gikomba-blue">
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1 py-8">
        <div className="container px-4 mx-auto md:px-6">
          <h1 className="mb-2 text-3xl font-bold">Upgrade to Premium</h1>
          <p className="mb-8 text-muted-foreground">
            Get unlimited access to all premium features for only Ksh 20
          </p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Features List */}
            <div>
              <h2 className="mb-4 text-xl font-semibold">Premium Benefits</h2>
              <ul className="space-y-3">
                {premiumBenefits.map((benefit, index) => (
                  <li key={index} className="flex">
                    <div className="flex items-center justify-center w-6 h-6 mt-0.5 mr-3 rounded-full bg-gikomba-green/20 text-gikomba-green shrink-0">
                      <Check className="w-3 h-3" />
                    </div>
                    <div>
                      <p className="font-medium">{benefit.title}</p>
                      <p className="text-sm text-gray-600">{benefit.description}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="grid grid-cols-1 gap-4 mt-6 sm:grid-cols-2">
                {premiumFeatures.map((feature, index) => (
                  <Card key={index}>
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-center w-10 h-10 mb-2 rounded-full bg-gikomba-blue/10 text-gikomba-blue">
                        <feature.icon className="w-5 h-5" />
                      </div>
                      <CardTitle className="text-base">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Payment Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Pay with M-Pesa</CardTitle>
                  <CardDescription>
                    One-time payment of Ksh 20 for premium access
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handlePayment}>
                    <div className="mb-4">
                      <Label htmlFor="phone">M-Pesa Phone Number</Label>
                      <Input
                        id="phone"
                        placeholder="e.g. 07XX XXX XXX"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>

                    <div className="p-3 mb-4 text-sm rounded-md bg-gikomba-blue/10 text-gikomba-blue">
                      <p className="flex items-center">
                        <Lock className="w-4 h-4 mr-2" />
                        Your payment is secure and processed via M-Pesa
                      </p>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gikomba-orange hover:bg-orange-600"
                      disabled={isProcessing}
                    >
                      {isProcessing ? "Processing..." : "Pay Ksh 20 with M-Pesa"}
                    </Button>
                  </form>
                </CardContent>
                <CardFooter className="flex-col items-start text-xs text-gray-500">
                  <p>
                    By completing this purchase, you agree to our terms of service. Premium access
                    is non-refundable and valid for 30 days.
                  </p>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

const premiumBenefits = [
  {
    title: "Direct Wholesaler Contact Information",
    description: "Get phone numbers, WhatsApp contacts, and email addresses",
  },
  {
    title: "Detailed Location Information",
    description: "Precise stall locations with landmarks and directions",
  },
  {
    title: "Daily Price Updates",
    description: "Receive notifications about price changes and deals",
  },
  {
    title: "Premium Verified Suppliers",
    description: "Access to top-tier wholesalers with bulk discounts",
  },
  {
    title: "Early Stock Notifications",
    description: "Be the first to know when new stock arrives",
  },
];

const premiumFeatures = [
  {
    icon: Phone,
    title: "Direct Contact",
    description: "Access phone numbers and WhatsApp contacts for all wholesalers",
  },
  {
    icon: MapPin,
    title: "Location Maps",
    description: "Navigate easily with precise stall locations and directions",
  },
  {
    icon: Bell,
    title: "Price Alerts",
    description: "Get notified when prices drop or special deals are available",
  },
  {
    icon: Calendar,
    title: "Stock Updates",
    description: "Receive alerts when new merchandise arrives in the market",
  },
];

export default Premium;
