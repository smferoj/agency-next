export async function generateMetadata(){
  // SEO Data fetch
  return{
    title:"Project",
    keyword:"This is project title"
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