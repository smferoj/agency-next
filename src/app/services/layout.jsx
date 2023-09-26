export async function generateMetadata(){
  // SEO Data fetch
  return{
    title:"Service",
    keyword:"This is Service title"
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