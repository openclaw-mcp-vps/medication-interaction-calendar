import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MedCal – Track Medication Timing & Interactions",
  description: "Personal medication scheduler that warns about drug interactions, food conflicts, and optimal timing based on your specific medication list."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="fd3f4963-3623-4de1-b300-053054fef42d"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
