import Link from "next/link";
async function getData(){
  const res = await fetch(process.env.BASE_URL+"api/SocialLink");
  if(!res.ok){
      throw new Error("All project Calling Fail")
  }
  return  res.json();
}
const SiteFooter = async() => {
    const data = await getData();
    return (
        <section>
            <div className="skew skew-top mr-for-radius">
            </div>
            <div className="skew skew-top ml-for-radius">
                <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-900" viewBox="0 0 10 10" preserveAspectRatio="none">
                    <polygon fill="currentColor" points="0 10 10 0 10 10" />
                </svg>
            </div>
            <div className="py-20 bg-gray-900 radius-for-skewed">
                <div className="container mx-auto px-4">
                    <div className="pb-12 flex items-center justify-between border-b border-gray-800">
                        <h1 className="text-green-500 text-3xl">WEB LOGO</h1>
                        <div className="w-full lg:w-auto">
                            <ul className="flex flex-wrap lg:space-x-5 items-center">
                                <li className="w-full md:w-auto mb-2 md:mb-0">
                                    <Link className="lg:text-sm text-gray-400 hover:text-gray-300" href={"/"}>
                                        Home
                                    </Link>
                                </li>
                                <li className="hidden md:block">
                                    <svg className="mx-4 w-4 h-4 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"/>
                                    </svg>
                                </li>
                                <li className="w-full md:w-auto mb-2 md:mb-0">
                                    <Link className="lg:text-sm text-gray-400 hover:text-gray-300" href={"/team"}>
                                        Team
                                    </Link>
                                </li>
                                <li className="hidden md:block">
                                    <svg className="mx-4 w-4 h-4 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"/>
                                    </svg>
                                </li>
                                <li className="w-full md:w-auto mb-2 md:mb-0">
                                    <Link className="lg:text-sm text-gray-400 hover:text-gray-300" href={"/services"}>
                                        Services
                                    </Link>
                                </li>
                                <li className="hidden md:block">
                                    <svg className="mx-4 w-4 h-4 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"/>
                                    </svg>
                                </li>
                                <li className="w-full md:w-auto mb-2 md:mb-0">
                                    <Link className="lg:text-sm text-gray-400 hover:text-gray-300" href={"/projects"}>
                                        Projects
                                    </Link>
                                </li>
                                <li className="hidden md:block">
                                    <svg className="mx-4 w-4 h-4 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"/>
                                    </svg>
                                </li>
                                <li>
                                    <Link className="lg:text-sm text-gray-400 hover:text-gray-300" href={"/testimonials"}>
                                        Testimonials
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-8 flex flex-wrap justify-between items-center">
                        <p className="order-last text-sm text-gray-400">Copyright Design Agency 2022
                        </p>
                        <div className="mb-4 lg:mb-0 order-first lg:order-last">
                          
                            {
                                data.map((item, id)=>{
                                   return(
                                <a className="inline-block mr-2 p-2 bg-green-500 hover:bg-gray-700 rounded" href={item['link']}>
                                 <p>{item['name']}</p>
                               </a>
                                   )
                                }
                            )}
                          
                        </div>
                    </div>
                </div>
            </div>
            <div className="skew skew-bottom mr-for-radius">
                <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-900" viewBox="0 0 10 10" preserveAspectRatio="none">
                    <polygon fill="currentColor" points="0 0 10 0 0 10" />
                </svg>
            </div>
            <div className="skew skew-bottom ml-for-radius">
                <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-900" viewBox="0 0 10 10" preserveAspectRatio="none">
                    <polygon fill="currentColor" points="0 0 10 0 10 10" />
                </svg>
            </div>
        </section>
    );
};
export default SiteFooter;