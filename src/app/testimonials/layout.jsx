export async function generateMetadata(){
  // SEO Data fetch
  return{
    title:"Testimonial",
    keyword:"This is testimonial title"
  }
}


const layout = ({children}) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default layout