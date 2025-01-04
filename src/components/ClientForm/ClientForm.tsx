"use client";
import { useEffect, useState } from "react";
import InnerHeader from "../InnerHeader/Index";
import Link from "next/link";

const ClientForm = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const item = { description: "", qty: "", rate: "" };
  const [mainData, setMainData] = useState({
    name: "",
    mobile: "",
    email: "",
    address: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/client/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(mainData),
      });

      const result = await response.json();
      if (!response.ok) {
        setError(result.message || "Something went wrong");
      } else {
        setMainData((prev) => ({ ...prev, _id: result.client._id }));
        console.log("Saved successful", result);
      }
    } catch (err) {
      setError("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };
  const handleFieldChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    console.log('nil44', e.target.name, e.target.value);
    setMainData(prev=> ({...prev, [e.target.name]: e.target.value}));
  }
  
  console.log("mainData---->", mainData);

  return (
    <>
      <InnerHeader>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link
              href={"/dashboard/clients/list"}
              className="px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="size-4"
              >
                <path
                  fillRule="evenodd"
                  d="M9.78 4.22a.75.75 0 0 1 0 1.06L7.06 8l2.72 2.72a.75.75 0 1 1-1.06 1.06L5.47 8.53a.75.75 0 0 1 0-1.06l3.25-3.25a.75.75 0 0 1 1.06 0Z"
                  clipRule="evenodd"
                />
              </svg>
              Client List
            </Link>
            <h2 className="ms-2 text-xl font-semibold text-black ">
              New Client
            </h2>
          </div>
          <div className="flex items-center">
          <button
              type="button"
              className="py-2.5 px-5 me-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              onClick={()=> setMainData({email: "", mobile: "", name: "", address: ""})}
            >
              Clear
            </button>
            <button
              disabled={loading}
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 focus:outline-none"
              onClick={handleSubmit}
            >
              Save
            </button>
          </div>
        </div>
      </InnerHeader>
      <main>
        <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
          <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
            <div className="col-span-12">
              <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-xl font-semibold text-black">New Client</h2>
              </div>
              <div className="relative overflow-x-auto">
                <form onSubmit={handleSubmit}>
                  <div className="rounded-sm border border-stroke bg-white shadow-default">
                    <div className="flex flex-col gap-5 p-6">
                      <div>
                        <label className="mb-3 block text-sm font-medium text-black ">
                          Name
                        </label>
                        <input
                          type="text"
                          placeholder="Client name/ Business name"
                          className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
                          onChange={handleFieldChange}
                          name="name"
                          value={mainData.name || ""}
                        />
                      </div>
                      <div>
                        <label className="mb-3 block text-sm font-medium text-black ">
                          Email
                        </label>
                        <input
                          type="text"
                          placeholder="Email"
                          className="w-full rounded-lg border-[1.5px] border-primary bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
                          onChange={handleFieldChange}
                          name="email"
                          value={mainData.email || ""}
                        />
                      </div>
                      <div>
                        <label className="mb-3 block text-sm font-medium text-black ">
                          Mobile
                        </label>
                        <input
                          type="text"
                          placeholder="Mobile"
                          className="w-full rounded-lg border-[1.5px] border-primary bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
                          onChange={handleFieldChange}
                          name="mobile"
                          value={mainData.mobile || ""}
                        />
                      </div>
                      <div>
                        <label className="mb-3 block text-sm font-medium text-black ">
                          Address
                        </label>
                        <textarea
                          placeholder="Address"
                          className="w-full rounded-lg border-[1.5px] border-primary bg-transparent px-5 py-3 font-normal text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter"
                          onChange={handleFieldChange}
                          name="address"
                          value={mainData.address || ""}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ClientForm;
