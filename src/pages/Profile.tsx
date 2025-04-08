
import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Check, LogOut, Settings, User } from "lucide-react";
import { useApp } from "@/context/AppContext";

const Profile = () => {
  const { user, logout, isAuthenticated } = useApp();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  if (!isAuthenticated || !user) {
    return null;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1 py-8">
        <div className="container px-4 mx-auto max-w-4xl">
          <h1 className="mb-2 text-3xl font-bold">Profile</h1>
          <p className="mb-8 text-muted-foreground">
            Manage your account and preferences
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="md:col-span-1">
              <Card className="mb-6">
                <CardHeader>
                  <div className="flex justify-center">
                    <Avatar className="h-24 w-24">
                      <AvatarFallback className="text-xl font-medium bg-gikomba-orange text-white">
                        {user.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <CardTitle className="text-center mt-2">{user.name}</CardTitle>
                  <CardDescription className="text-center">{user.email}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={logout}
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Membership</CardTitle>
                </CardHeader>
                <CardContent>
                  {user.hasPaidAccess ? (
                    <div className="flex items-start space-x-3">
                      <div className="bg-gikomba-green/10 p-1.5 rounded-full text-gikomba-green">
                        <Check className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-medium">Premium Access</p>
                        <p className="text-sm text-muted-foreground">
                          Full access to all premium features
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <p className="mb-3">Free Account</p>
                      <Button
                        className="w-full bg-gikomba-orange hover:bg-orange-600"
                        onClick={() => navigate("/premium")}
                      >
                        Upgrade to Premium
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            <div className="md:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <User className="w-5 h-5 mr-2" />
                    Account Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Full Name</p>
                    <p className="font-medium">{user.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email Address</p>
                    <p className="font-medium">{user.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Account Type</p>
                    <p className="font-medium">
                      {user.hasPaidAccess ? "Premium" : "Free"}
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    <Settings className="w-4 h-4 mr-2" />
                    Edit Profile
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Saved Wholesalers</CardTitle>
                  <CardDescription>
                    You have {user.favorites.length} wholesalers in your favorites
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {user.favorites.length === 0 ? (
                    <div className="p-4 text-center bg-gray-50 rounded-lg">
                      <p className="text-muted-foreground">
                        You haven't added any wholesalers to your favorites yet
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <Button
                        onClick={() => navigate("/favorites")}
                        variant="outline"
                        className="w-full"
                      >
                        View Favorites
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
