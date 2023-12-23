import '@/styles/globals.css'; 
import { Analytics } from '@vercel/analytics/react';

export const metadata= ()=> ({
  title: 'Portfolio',
  description: "Welcome to the showreel..."
}) 
const RootLayout = ({children}) => {
  return ( 
   
      <html lang="en">
        <body> 
          {children} 
          <Analytics />
        </body>
      </html>
    
  )
}

export default RootLayout;