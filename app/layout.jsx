import '@/styles/globals.css'; 


export const metadata= ()=> ({
  title: 'Portfolio'
})
import { DataContextProvider } from '@/Context/dataContext';

const RootLayout = ({children}) => {
  return ( 
   
      <html lang="en">
        <body>
        <DataContextProvider>
          {children}
        </DataContextProvider>
        </body>
      </html>
    
  )
}

export default RootLayout;