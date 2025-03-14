import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { IntersectionProvider } from '@/contexts/intersectionContext'
import ScrollToTop from '@/components/common/scroll-to-up'
import { ThemeProvider } from '@/components/common/theme/theme-provider'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'LogiSync - Logistics Dashboard',
  description: 'A logistics management dashboard'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <IntersectionProvider>
          <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
            {children}
            <ScrollToTop />
          </ThemeProvider>
        </IntersectionProvider>
      </body>
    </html>
  )
}
