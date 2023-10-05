"use client";
import { useState } from "react";
import Radio from "@/components/Radio/Index";
import {indianRupeeFormat} from "../../../../library/stringPlus";

export default function DashboardInvoiceList() {
  const [selectedOption, setSelectedOption] = useState("All");
  return (
    <>
      <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
        <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
          <div className="col-span-12">
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-xl font-semibold text-black dark:text-white">
                Invoices
              </h2>
            </div>
            <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
              <div className="flex items-center">
                <div className="flex items-center flex-1">
                  <div className="mr-4">
                    <Radio
                      title="All"
                      checked={selectedOption === "All"}
                      onClick={() => {
                        setSelectedOption("All");
                      }}
                    />
                  </div>
                  <div className="mr-4">
                    <Radio
                      title="Paid"
                      checked={selectedOption === "Paid"}
                      onClick={() => {
                        setSelectedOption("Paid");
                      }}
                    />
                  </div>
                  <div className="mr-4">
                    <Radio
                      title="Unpaid"
                      checked={selectedOption === "Unpaid"}
                      onClick={() => {
                        setSelectedOption("Unpaid");
                      }}
                    />
                  </div>
                </div>
                <div>
                  <a className="inline-flex items-center justify-center rounded-md border border-primary py-4 px-10 text-center font-medium text-primary hover:bg-opacity-90 lg:px-8 xl:px-10">
                    Add New
                  </a>
                </div>
              </div>
              <div className="flex flex-col ">
                {[0, 1, 2, 3].map(({}: any, i) => (
                  <div key={i} id={'ititi-' + i} className={`grid grid-cols-3 sm:grid-cols-5 ${i < 3 && "border-b border-stroke dark:border-strokedark"}`}>
                    <div className="p-2.5 xl:p-5">
                      <p className="hidden text-black dark:text-white sm:block">Customer name</p>
                      <p>Invoice id</p>
                    </div>
                    <div className="flex items-center justify-center p-2.5 xl:p-5">
                      <p className="text-black dark:text-white">{indianRupeeFormat(5000)}</p>
                    </div>
                    <div className="flex items-center justify-center p-2.5 xl:p-5">
                      <p className="text-meta-3">$5,768</p>
                    </div>
                    <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                      <p className="text-black dark:text-white">590</p>
                    </div>
                    <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                      <p className="text-meta-5">4.8%</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
