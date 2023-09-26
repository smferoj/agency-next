import SiteNavbar from '@/components/SiteNavBar'
import './globals.css'
import NextTopLoader from 'nextjs-toploader'
import SiteFooter from '@/components/SiteFooter'
export async function generateMetadata(){
  // SEO Data fetch
  return{
    title:"Home",
    keyword:""
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NextTopLoader color="#269669" height={3} speed={200} shadow="0 0 10px #2299DD,0 0 5px #2299DD"/>
        <SiteNavbar/>
        {children}
        <SiteFooter/>
        </body>
    </html>
  )
}
