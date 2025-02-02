import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/Logo-full.svg";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "@/components/ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import {
  Home,
  Network,
  Briefcase,
  MessageSquare,
  Bell,
  ChevronDown,
  LogOut,
  Settings,
} from "lucide-react";

const Topbar = async () => {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const isUserAuthenticated = await isAuthenticated();
  const user = await getUser();

  return (
    <header className="sticky top-0 z-50 bg-background border-b">
      <div className="container flex items-center justify-between h-14 px-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <Link href="/" className="font-semibold text-xl text-primary">
            <Image src={Logo} alt="PollVerse" height={40} />
          </Link>
          <div className="relative max-w-md hidden md:block">
            <Input
              type="search"
              placeholder="Search..."
              className="w-[300px]"
            />
          </div>
        </div>

        {!isUserAuthenticated ? (
          <div className="flex gap-4">
            <Button variant="secondary">
              <RegisterLink>Register</RegisterLink>
            </Button>
            <Button>
              <LoginLink>Sign In</LoginLink>
            </Button>
          </div>
        ) : (
          <nav className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Home className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Network className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Briefcase className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <MessageSquare className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                  <span className="hidden md:inline">Hey, {user.given_name}</span>
                  <ChevronDown className="h-4 w-4" />
                </div>
                <Avatar className="h-8 w-8">
                  <AvatarImage src={user.picture || ""} />
                  <AvatarFallback>PV</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-36">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Settings className="h-4 w-4 mr-2" />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LogOut className="h-4 w-4 mr-2" />
                  <LogoutLink>Logout</LogoutLink>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Topbar;