import React from 'react'

const Signup = () => {
  return (
    <>
      <div className="w-full h-screen">
        <img
          className=" sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/51e53f54-0d9f-40ec-9e05-c030def06ac9/c411f56b-3983-47fc-aa53-96be61f9c068/UA-en-20230515-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="/"
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold ">Sign Up</h1>
              <form action="" className="w-full flex flex-col py-4">
                <input
                  className="p-3 bg-gray-600 my-2"
                  type="email"
                  name="Email"
                  placeholder="Email"
                />
                <input
                  className="p-3 bg-gray-600 my-2"
                  type="password"
                  name="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />
                <button className="bg-red-600 my-6 py-3 rounded font-bold cursor-pointer">Sign Up</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup