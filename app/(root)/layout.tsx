import MobileNav from "@/components/MobileNav";
import { Sidebar } from "lucide-react";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: 'Maria Fe', lastName: 'Fischer'};


  return (
    <main className="flex h-screen w-full font-enter">
        <Sidebar user={loggedIn}/>

        <div className="flex size-full flex-col">
          <div className="root-layout">
            <Image src="/icons/lgo.svg" width={30} height={30} alt='logo'/>
            <div>
              <MobileNav user={loggedIn}/>
            </div>

          </div>
          {children}
        </div>  
    </main>
  );
}
