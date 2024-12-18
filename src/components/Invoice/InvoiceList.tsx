"use client";
import { indianRupeeFormat } from "@/library/stringPlus";
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
      <div className="flex flex-col ">
        {myListData.map((v: any, i) => (
          <div
            key={i}
            id={"ititi-" + i}
            className={`grid grid-cols-3 sm:grid-cols-5 ${
              i < 3 && "border-b border-stroke dark:border-strokedark"
            }`}
          ><InvoiceCard data={v} /></div>
        ))}
      </div>
    </>
  );
};

export default InvoiceList;
