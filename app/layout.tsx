import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { pageConstants } from "@/data/constants";
import ReactQueryProvider from "@/providers/react-query-provider";
import { Toaster } from "react-hot-toast";
import GoogleAnalytics from "@/components/google-analytics";

const mazda = localFont({
  src: [
    {
      path: "../assets/fonts/mazdatypeviet-regular.woff",
      weight: "400",
      style: "regular",
    },
    {
      path: "../assets/fonts/mazdatypeviet-medium.woff",
      weight: "500",
      style: "medium",
    },
    {
      path: "../assets/fonts/mazdatypeviet-bold.woff",
      weight: "700",
      style: "bold",
    },
  ],
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${pageConstants.siteTitle}`,
    default: pageConstants.siteTitle,
  },
  description: pageConstants.siteDescription,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="vi">
        <body className={mazda.className}>
          <ReactQueryProvider>{children}</ReactQueryProvider>
          <Toaster position="bottom-center" reverseOrder={false} />
        </body>
        <GoogleAnalytics />
      </html>
    </>
  );
}
