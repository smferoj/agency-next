export async function generateMetadata(){
  // SEO Data fetch
  return{
    title:"Team",
    keyword:"This is team title"
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