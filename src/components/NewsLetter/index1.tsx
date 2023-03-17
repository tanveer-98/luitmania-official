import React, { useState, useEffect , useMemo } from "react";

const NewsLetter = () => {
  
  const [email, setEmail] = useState("");
  const handleChange = (event: any) => {
    event.preventDefault();
    setEmail(event.target.value);
  };
  const onHandleSubmit = (event :  React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
  }

  return (
    <section id="newsletter" className="newsletter relative bg-bgcolormain w-full ">

   
      {/* <div className="max-w-lg mx-auto py-24 mt-20">
        <p
          className="mb-6 text-lg tracking-widest text-center
          text-white uppercase
          "
        >
          35,000 + Already Joined
        </p>
      </div> */}
      <h2 className="px-3 mb-6 text-3xl font-semibold text-center text-white md:text-4xl">
          Stay up-to-date with what we're doing
        </h2>
        {/* Form */}
        <form
          
          className="flex flex-col items-start
           justify-center max-w-2xl mx-auto space-y-6 text-base
            px-6 md:flex-row md:space-y-0 md:space-x-4 md:px-0"
          onSubmit={(e)=>onHandleSubmit(e)}
        >
          {/* Input & Button Container */}
          <div
            className="newsletter flex flex-row justify-between items-center
              mx-auto md:flex-row md:mx-0"
          >
            {/* <FormInput
              label="Enter Email"
              inputOptions={{
                name: "email",
                value: email,
                type: "email",
                onChange: handleChange,
              }}
            /> */}

            <label htmlFor="email"> Enter Email </label>
            <input type="email" value={email} name="email" onChange = {handleChange}/>

            {/* <input
                type="text"
                className=" flex-1 px-6 pt-3 pb-2 mb-4 rounded-lg border-1
                 border-white focus:outline-none md:mr-3 md:mb-0"
              /> */}

            <input
              type="submit"
              className="inline-flex px-6 py-3 font-semibold text-center text-white duration-200 transform rounded-lg cursor-pointer focus:outline-none bg-softRed hover:opacity-90"
            />
          </div>
        </form>
    </section>
  );
};

export default NewsLetter;
