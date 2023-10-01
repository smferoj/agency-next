async function getData(){
  const res = await fetch(process.env.BASE_URL+"api/WorkList");
  if(!res.ok){
      throw new Error("All project Calling Fail")
  }
  return  res.json();
}

import {BsArrowRight} from 'react-icons/bs';

const HowWorks = async() => {
const data = await getData();
    return (
        <div>
            <section  className="flex justify-center items-center w-full">
            <div className=" bg-gray-50">
           <div className="container ">
            <div className="mb-16 ">
              <span className="text-green-600 font-bold pb-5">
               WORKS LIST
              </span>
              <h2 className="text-5xl md:text-4xl font-bold w-1/2">
              We provide the Perfect Solution to your business growth
              </h2>
            </div>

            <div className="flex">
              {data.map((item, id)=>{
                return(
                  <div className="mb-12 pl-[50px]">
                  <span className="mb-4 md:mb-6 inline-block bg-green-100 text-green-500 rounded">
                    <svg
                      className="w-8 h-8"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg>
                  </span>
                  <h4 className="mb-4 text-2xl font-bold font-heading">
                    {item['title']}
                  </h4>
                  <p className="text-dark leading-loose">
                   {item['des']}
                  </p>
                   <p className="text-green-500"> Step:{item['step']}</p>
                   <p>Ceated at: {item['created_at']}</p>
                   <p>Ceated at: {item['updated_at']}</p>
                  <div className="flex gap-2">
                  <p>Learn More </p>
                  <span className="mt-2"><BsArrowRight/></span>
                  </div>
                </div>
                )
              })}
             
             
            </div>
          </div>
        </div>
            </section>
        </div>
    );
};
export default HowWorks;