import Header from '@/Components/Header/Header'
import './globals.css'

export const metadata = {
  title: 'Youtube Clone',
  description: 'Enjoy the videos and music that you love, upload original content and share it all with friends, family and the world on YouTube.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <Header /> */}
        {children}
      </body>
    </html>
  )
}
