import React from "react";
import "@/assets/styles/globals.css";

export const metadata = {
  title: "Property Pulse | Find The Perfect Rental",
  description: "Find Your Dream Rental Property",
  keywords: "rentel, find rentals, find property",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
