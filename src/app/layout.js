import StyledComponentsRegistry from './lib/registry'
import Head from 'next/head'

export const metadata = {
  title: 'Fraser Macallum',
  description: 'Fraser Macallum\'s portfolio website',
  icons: {
    icon: '/favicon.png'
  }
}

export default function RootLayout({ children }) {
    return (
      <html>
        <body>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </body>
      </html>
    )
  }