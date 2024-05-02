import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"

const manrope = localFont({
  src: "./Manrope[wght].ttf",
})

export const metadata: Metadata = {
  title: "Endorsed.by",
  description: "Showcase all your affiliate links in one place",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>{children}</body>
    </html>
  )
}
