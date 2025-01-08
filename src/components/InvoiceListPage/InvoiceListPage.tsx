"use client";
import { useEffect, useState } from "react";
import InnerHeader from "../InnerHeader/Index";
import Link from "next/link";
import InvoiceList from "../InvoiceList/InvoiceList";
import { fetchApi } from "@/library/utilities";
import { Invoice } from "@/types/invoice.types";
import Radio from "../Radio/Index";

const InvoiceListPage = () => {
  const [selectedOption, setSelectedOption] = useState("All");
  const [myListData, setMyListData] = useState<Invoice[]>([]);
  useEffect(() => {
    loadInitialData();
  }, []);
  const loadInitialData = async () => {
    try {
      const r = await fetchApi<{ mylist: Invoice[] }>("/api/invoices");
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
            href={"/dashboard/invoices/new"}
            className="inline-flex items-center justify-center rounded-md border border-primary py-4 px-10 text-center font-medium text-primary hover:bg-opacity-90 lg:px-8 xl:px-10"
          >
            Add New
          </Link>
        </div>
      </div>
      <div className="relative overflow-x-auto mt-4">
        <InvoiceList data={myListData} />
      </div>
    </>
  );
};

export default InvoiceListPage;
