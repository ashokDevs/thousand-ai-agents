import "./globals.css";
import { ReactNode } from "react";
import localFont from "next/font/local";
import Head from "next/head";
import Script from "next/script";
import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from "@vercel/analytics/react";



import { Toaster } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"



import { ThemeProvider } from "./providers";


export const fontSans = localFont({
  src: "../fonts/haskoy.ttf",
  variable: "--font-sans",
})

const defaultUrl = process.env.VERCEL_URL
  ? `https://www.thousandagents.com`
  : "http://localhost:3000"

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Thousand AI Agents - Discover Smart AI Solutions",
  description:
    "Explore a curated directory of AI agents designed to streamline tasks, enhance productivity, and transform workflows. Discover tools for automation, customer support, and more!",
  keywords:
    "AI Agents, Automation, Productivity, Task Management, AI Directory, Smart Tools, AI Solutions, Workflow Automation",
  structuredData: {
    "@context": "http://schema.org",
    "@type": "WebSite",
    name: "Thousand AI Agents",
    url: "https://www.nextjs.ai/",
    description:
      "A comprehensive directory of AI agents offering smart solutions for various tasks and industries. Streamline your workflow with ease!",
  },
  socialMediaTags: {
    "og:title": "Thousand AI Agents - Discover Smart AI Solutions",
    "og:description":
      "Explore a curated directory of AI agents designed to streamline tasks, enhance productivity, and transform workflows. Discover tools for automation, customer support, and more!",
    "twitter:card": "summary_large_image",
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${fontSans.variable} font-sans  `}>
      <Head>
       <GoogleAnalytics gaId="G-VYQRYL1JV2" />
      </Head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            <main className="bg-[#FAFAFA] dark:bg-background  text-foreground flex flex-col justify-center items-center w-full pt-13">
              <div className=" w-full ">{children}</div>
            </main>
          </TooltipProvider>
          <Toaster richColors />
        </ThemeProvider>
      </body>
    </html>
  )
}