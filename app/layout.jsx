import '@/styles/globals.css'; 


export const metadata= ()=> ({
  title: 'Portfolio',
  description: "Welcome to the showreel..."
}) 
const RootLayout = ({children}) => {
  return ( 
   
      <html lang="en">
        <body> 
          {children} 
        </body>
      </html>
    
  )
}

export default RootLayout;