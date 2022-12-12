import { Notifi } from './Notification'
import { Navbar } from './Navbar'
import { Content } from './Content'
import { TextContent } from './TextContent'
import { Swiper1 } from './swiper';
import { Swipper2 } from './slider2'
import { Swipper3 } from './swiper3'
import { Footer } from './Footer.jsx'
import { Modals } from './Modal'
import { ContentCenter } from './ContentCenter';
import { Texts } from "./Text"
import {Faq} from './According'
import { Route,Routes } from 'react-router-dom';
import { Calculater } from './Calculater'; 
export const Home = () => {
    return(
    <>
<Notifi />

<Navbar />
<Content />
<TextContent />
<Swiper1 />
<Swipper2 />
<Texts/>
<Swipper3 />
<Routes>
  <Route path='/Calculater' element={<Calculater/>}/>
</Routes>
<Faq/>
<Footer />
<Modals/>
    </>
    )
}