import { Outfit } from 'next/font/google'
import './globals.css'

const font = Outfit({ subsets: ['latin'] })

export const metadata = {
  title: 'Blockify • Start Learning Blockchain',
  description: 'A blockchain learning dynamic landing page create by Faiz using NextJS and ShadCN UI Library with Tailwind CSS.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
