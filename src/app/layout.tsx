import type { Metadata } from 'next'
import { Exo_2 } from 'next/font/google'
import './globals.css'
import Header from '../../components/Header'

const inter = Exo_2({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Adil Mustafa Yılmaz',
  icons: {
    icon: "./terminal-solid.svg"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='bg-[#52575D] text-[#CABFAB]'>
      <body className={`${inter.className} flex justify-center items-center flex-col`} >
        <Header />
        {children}
      </body>
    </html>
  )
}
