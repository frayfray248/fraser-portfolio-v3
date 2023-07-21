import StyledComponentsRegistry from './lib/registry'

export const metadata = {
  title: 'Fraser Macallum',
  description: 'Fraser Macallum\'s portfolio website',
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