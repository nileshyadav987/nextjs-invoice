"use client";
import Link from "next/link";
import { Client } from "@/types/client.types";
import { useEffect, useState } from "react";
import { fetchApi } from "@/library/utilities";
import PaymentList from "../PaymentList/PaymentList";

const PaymentListPage = () => {
  const [myData, setMyData] = useState<Client[]>([]);
  useEffect(() => {
    loadInitialData();
  }, []);
  const loadInitialData = async () => {
    try {
      const r = await fetchApi<{ data: Client[] }>("/api/payments");
      console.log("r---->", r.data);
      setMyData(r.data);
    } catch {
      console.error("Client list loading error:");
    }
  };
  return (
    <>
      <div className="">
        <div className="p-4 pb-0">
          <div className="flex items-center">
            <div className="flex items-center flex-1"></div>
            <div>
              <Link
                href={"/dashboard/payments/new"}
                className="inline-flex items-center justify-center rounded-md border border-primary py-4 px-10 text-center font-medium text-primary hover:bg-opacity-90 lg:px-8 xl:px-10"
              >
                Add New
              </Link>
            </div>
          </div>
        </div>

        <div className="relative overflow-x-auto mt-4">
          <PaymentList data={myData} />
        </div>
      </div>
    </>
  );
};
export default PaymentListPage;
