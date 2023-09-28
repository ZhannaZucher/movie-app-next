import Header from "@/components/Header"
import "../styles/globals.scss"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import Providers from "./store/provider"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
config.autoAddCss = false

const montserrat = Montserrat({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Movies App",
  description: "Find your ideal movie to see",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={montserrat.className}>
        <Providers>
          <Header />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  )
}
