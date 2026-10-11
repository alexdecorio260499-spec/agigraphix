import { Suspense } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Suspense fallback={<div className="h-[88px] bg-agigraphix-black fixed top-0 left-0 right-0 z-50" />}>
        <Navbar />
      </Suspense>
      <main className="flex-grow pt-[88px]">{children}</main>
      <Footer />
    </>
  );
}
