import React from "react";

const Products = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex gap-6 h-200 ">
        
        {/* First Image */}
        <div className="w-1/2 relative overflow-hidden group rounded-2xl">
          <img
            src="https://wearzane.com/cdn/shop/files/IMG_8318_dd8d54de-4392-418c-80ff-dff956a00c23_800x.png?v=1767179224"
            alt="Sale"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

       
        </div>

        {/* Right Side Images */}
        <div className="w-1/2 flex flex-col gap-6">
          
          {/* Men */}
          <div className="relative h-1/2 overflow-hidden group rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1520975916090-3105956dac38"
              alt="Men"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
              <div className="bg-white px-8 py-2">
                <h2 className="text-black text-xl font-semibold tracking-widest">
                  MEN
                </h2>
              </div>
            </div>
          </div>

          {/* Women */}
          <div className="relative h-1/2 overflow-hidden group rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
              alt="Women"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
              <div className="bg-white px-8 py-2">
                <h2 className="text-black text-xl font-semibold tracking-widest">
                  WOMEN
                </h2>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Products;