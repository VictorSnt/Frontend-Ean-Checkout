import { Header } from "./Header.style"
import { Footer } from "./Footer.style"


export const Layout = ({children}: any) => {
    
    return(

        <> 
        <Header />
        {children}
        <Footer />
        </>
        
    );

}