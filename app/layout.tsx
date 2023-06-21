import Head from 'next/head'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hemkörning från restaurang | Hungriga',
  description: 'Hungriga är ett företag som vill skapa möjligheten för alla, små- som stora att kunna beställa hem sin mat',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel='icon' href='/favicon-1.jpg' sizes='32x32' />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
