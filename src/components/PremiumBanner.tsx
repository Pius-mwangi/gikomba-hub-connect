
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LockKeyhole, CheckCircle } from "lucide-react";
import { useApp } from "@/context/AppContext";

const PremiumBanner: React.FC = () => {
  const { user } = useApp();

  if (user?.hasPaidAccess) {
    return (
      <div className="px-4 py-3 mb-6 bg-gikomba-green/10 text-gikomba-green rounded-lg flex items-center">
        <CheckCircle className="w-5 h-5 mr-2 shrink-0" />
        <div className="flex-1">
          <p className="font-medium">Premium Access Unlocked</p>
          <p className="text-sm">You have full access to all premium features</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 mb-6 rounded-lg bg-gradient-to-r from-gikomba-blue to-gikomba-orange">
      <div className="flex items-start gap-3">
        <div className="p-2 bg-white/20 rounded-full shrink-0">
          <LockKeyhole className="w-5 h-5 text-white" />
        </div>
        <div className="text-white">
          <h3 className="mb-1 text-lg font-semibold">Unlock Premium Features</h3>
          <p className="mb-3 text-sm text-white/90">
            Get contact info, daily updates, and location maps for only Ksh 20 with M-Pesa
          </p>
          <Link to="/premium">
            <Button className="w-full bg-white hover:bg-gray-100 text-gikomba-blue">
              Upgrade to Premium
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PremiumBanner;
