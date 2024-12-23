"use client";
import Radio from "../Radio/Index";
import { useEffect, useState } from "react";
import Link from "next/link";
import { fetchApi } from "@/library/utilities";
import InvoiceCard from "@/components/InvoiceCard";
import { Invoice } from "@/app/types/invoice.types";

const InvoiceList = () => {
  const [selectedOption, setSelectedOption] = useState("All");
  const [myListData, setMyListData] = useState<Invoice[]>([]);

  useEffect(() => {
    loadInitialData();
  }, []);
  const loadInitialData = async () => {
    try {
      const r = await fetchApi<{ mylist: Invoice[] }>("/api/invoice/list");
      console.log("r---->", r);
      setMyListData(r?.mylist);
    } catch {}
  };

  return (
    <>
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
          <Link
            href={"/dashboard/invoice/new"}
            className="inline-flex items-center justify-center rounded-md border border-primary py-4 px-10 text-center font-medium text-primary hover:bg-opacity-90 lg:px-8 xl:px-10"
          >
            Add New
          </Link>
        </div>
      </div>
      <div className="relative overflow-x-auto mt-4">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Number
              </th>
              <th scope="col" className="px-6 py-3">
                Client
              </th>
              <th scope="col" className="px-6 py-3">
                Amount
              </th>
              <th scope="col" className="px-6 py-3">
                Balance
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Due Date
              </th>
              <th scope="col" className="px-6 py-3">
                &nbsp;
              </th>
            </tr>
          </thead>
          <tbody>
            {myListData.map((v: Invoice, i) => (
                <InvoiceCard data={v} key={i} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default InvoiceList;
