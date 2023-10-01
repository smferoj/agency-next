async function getData(){
    const res = await fetch(process.env.BASE_URL+"api/FeaturedProject");
    if(!res.ok){
        throw new Error("All project Calling Fail")
    }
    return  res.json();
}


const FeaturedProduct =async() => {
    const data = await getData();
  return (
      <section>
          <div className="skew skew-top mr-for-radius">
              <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none">
                  <polygon fill="currentColor" points="0 0 10 10 0 10" />
              </svg>
          </div>
          <div className="skew skew-top ml-for-radius">
              <svg className="h-8 md:h-12 lg:h-20 w-full text-gray-50" viewBox="0 0 10 10" preserveAspectRatio="none">
                  <polygon fill="currentColor" points="0 10 10 0 10 10" />
              </svg>
          </div>
          <div className="py-20 bg-gray-50 radius-for-skewed">
              <div className="container px-4 mx-auto">
                  <div className="mb-16 flex flex-wrap justify-center md:justify-between items-center">
                      <div className="text-center lg:text-left">
                          <span className="text-green-600 font-bold">
                          FEATURED PRODUCT
                          </span>
                          <h5 className="text-xl font-bold font-heading">
                          We provide the Perfect Solution to your business growth
                          </h5>
                      </div>
                      <a className="hidden md:inline-block py-2 px-6 bg-green-600  rounded hover:bg-green-700 text-gray-50 font-bold leading-loose transition duration-200" href="#">
                          View More Projects
                      </a>
                  </div>
                  <div className="flex flex-wrap -mx-4 mb-4">
                  {
                        data.map((item, id)=>{
                            return(
                                <div key={id} className="w-full md:w-1/2 lg:w-1/3 mb-8 px-4">
                                <a target="_blank" href={item['live']}>
                                    <img className="h-80 w-full mx-auto object-cover rounded" src={item['image']} alt=""/>
                                </a>
                                  <p>{item['title']}</p>
                                  <p>{item['remark']}</p>

                                  <div> 
                                    <p> Created: {item['created_at']}</p>
                                    <p> Updated: {item['updated_at']}</p>
                                  </div>


                            </div> 
                            )
                        })
                    }
                      
                  </div>
                
              </div>
          </div>
       
        
      </section>
  );
};

export default FeaturedProduct;