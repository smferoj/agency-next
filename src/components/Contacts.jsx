'use client';

async function getData() {
  const res = await fetch(process.env.BASE_URL + "api/CreateContact");
  if (!res.ok) {
    throw new Error("Failed to fetch testimonials");
  }
  return res.json();
}

const Contacts = async () => {

    return (
      <section className="py-20 bg-gray-50">
        <div className="py-20 bg-gray-50 radius-for-skewed">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto text-center">
              <h4 className="text-green-500">SUBSCRIBE</h4>
              <h2 className="mb-2 text-4xl lg:text-5xl font-bold font-heading">
                Subscribe to get the latest news about us
              </h2>
              <p className="mb-8 text-gray-400 leading-loose">
                Please drop your email below to get daily updates about what we do
              </p>

             
              <form className="mx-auto" action="">
                <div className="max-w-md mx-auto flex flex-wrap items-center">
                  <input
                    className="flex-grow py-3 px-4 mr-4 text-xs rounded leading-loose"
                    type="email"
                    placeholder="Enter your Email Address"
                  />
                  <button className="w-auto py-2 px-6 border rounded bg-red-400 hover:bg-red-500 text-gray-50 font-bold leading-loose transition duration-200">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );

};

export default Contacts;
