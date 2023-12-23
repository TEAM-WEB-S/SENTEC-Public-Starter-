import { ThemeProvider } from "next-themes"
import type { AppProps } from "next/app"
import "@/styles/globals.css"
import "@/styles/navbar.css"
import "@/styles/banner.css"
import "@/styles/about.css"
import "@/styles/domain.css"
import "@/styles/excom.css"
import { Toaster } from "react-hot-toast"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider defaultTheme="system" enableSystem>
        <Component {...pageProps} />
      </ThemeProvider>

      <Toaster
        toastOptions={{
          className: "!rounded-none",
        }}
      />
    </>
  )
}
