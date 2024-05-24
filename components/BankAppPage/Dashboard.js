import React from "react";

export default function Dashboard() {
  return (
    <div>
      <div className="flex w-10/12 my-0 mx-auto justify-between">
        <div>
          <h1 className="text-2xl">Current Balance</h1>
          <p className="text-sm">
            as <span>15/05/2024, 09:38</span>
          </p>
        </div>

        <h1 className="text-6xl ">$5,500</h1>
      </div>

      <div className="rounded-md w-11/12 mx-auto grid grid-cols-3 grid-rows-4 gap-3 py-2 px-2">
        <div className="col-span-2 row-span-3">
          <h1>My Transaction</h1>
          <div className="col-span-2 row-span-3 border bg-white h-full rounded-md p-4">
            <div className="flex justify-between">
              <div className="text-black mx-3 inline-block ">
                <p className="aline-top text-sm">Jie Lin Yang</p>
                <p className="text-xs">2024/05/05</p>
              </div>

              <div className="first-letter:uppercase bg-red-500 inline-block py-1 px-4 rounded-xl text-xs h-6 ">
                send
              </div>
              <div className="text-black inline-block mx-2">$ 5,000</div>
            </div>
          </div>
        </div>
        <form className="rounded-3xl  py-5 text-center text-black bg-gradient-to-r from-yellow-500 to-yellow-300">
          <h1 className="flex-initial text-xl mb-3">Transfer Money</h1>
          <div className="w-1/3 mr-5 inline-block">
            <input
              type="text"
              className="w-full focus:outline-none border-none rounded-2xl px-2 py-2 mr-3 bg-white"
            />
            <p>Transfer to</p>
          </div>
          <div className="w-1/3 inline-block">
            <input
              type="text"
              className="w-full border-none focus:outline-none rounded-2xl px-2 py-2 bg-white"
            />
            <p>Amount</p>
          </div>

          <input
            className="bg-white py-2 px-4 rounded-xl align-top mx-3"
            type="button"
            value="→"
          />
        </form>
        <form className="rounded-3xl  py-5 text-center text-black bg-gradient-to-r from-green-500 to-green-300">
          <h1 className="flex-initial text-xl mb-3">Request Roan</h1>

          <div className="w-1/3 inline-block">
            <input
              type="text"
              className="w-full border-none focus:outline-none rounded-2xl px-2 py-2 bg-white"
            />
            <p>Amount</p>
          </div>

          <input
            className="bg-white py-2 px-4 rounded-xl align-top mx-3"
            type="button"
            value="→"
          />
        </form>
        <form className="rounded-3xl  py-5 text-center text-black bg-gradient-to-r from-red-500 to-red-300">
          <h1 className="flex-initial text-xl mb-3">Close Account</h1>
          <div className="w-1/3 mr-5 inline-block">
            <input
              type="text"
              className="w-full focus:outline-none border-none rounded-2xl px-2 py-2 mr-3 bg-white"
            />
            <p>Transfer to</p>
          </div>
          <div className="w-1/3 inline-block">
            <input
              type="text"
              className="w-full border-none focus:outline-none rounded-2xl px-2 py-2 bg-white"
            />
            <p>Amount</p>
          </div>

          <input
            className="bg-white py-2 px-4 rounded-xl align-top mx-3"
            type="button"
            value="→"
          />
        </form>
      </div>
    </div>
  );
}
