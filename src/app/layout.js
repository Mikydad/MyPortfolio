import Navbar from '@/components/navbar/Navbar'
import './globals.css'
import Footer from '@/components/footer/Footer'
import { ThemeProvider } from '@/context/ThemeContext'


export const metadata = {
  title: 'Next.js BLog post',
  description: 'My Blog with next js.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <ThemeProvider>
      <div className='container'>
      <Navbar />
      {children}
      <Footer />
      </div>
      </ThemeProvider>
      </body>
    </html>
  )
}
