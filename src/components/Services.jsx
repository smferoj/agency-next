
async function getData(){
    const res = await fetch(process.env.BASE_URL+"api/AllService");
    if(!res.ok){
        throw new Error("All project Calling Fail")
    }
    return  res.json();
  }

const Services = async() => {
 const data = await getData();
  return (
      <div>
          <section>
              <div className="py-20 bg-gray-50 radius-for-skewed">
                  <div className="container mx-auto px-4">

                     {data.map((item, id)=>{
                        return(
                            <div className="flex flex-wrap items-center -mx-4">
                            <div className="mb-12 lg:mb-0 w-full lg:w-1/2 flex px-4">
                                <div className="max-w-md">
                                    <span className="text-green-600 font-bold">{item['tag']}</span>
                                    <h2 className="mb-6 text-4xl lg:text-5xl font-bold font-heading">
                                        {item['title']}
                                    </h2>
                                    <div className="mb-6 max-w-sm">
                                        <p className="text-gray-500 leading-loose">
                                            {item['des']}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2">
                                <div className="mb-4 flex flex-wrap items-end">
                                    <div className="mb-4 lg:mb-0 w-full lg:w-2/3 px-3">
                                        <img className="w-full h-32 lg:h-48 object-cover rounded" src={item['image1']}/>
                                    </div>
                                    <div className="w-full lg:w-1/3 px-3">
                                        <img className="w-full h-32 object-cover rounded" src={item['image2']}/>
                                    </div>
                                </div>
                                <div className="flex flex-wrap items-start">
                                    <div className="mb-4 lg:mb-0 w-full lg:w-1/3 px-3">
                                        <img className="w-full h-32 object-cover rounded" src={item['image3']}/>
                                    </div>
                                    <div className="w-full lg:w-2/3 px-3">
                                        <img className="w-full h-32 lg:h-48 object-cover rounded" src={item['image4']}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                     })}

                     
                  </div>
              </div>

            
          </section>
      </div>
  );
};

export default Services;