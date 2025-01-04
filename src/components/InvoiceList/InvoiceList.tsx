"use client";
import { useEffect, useState } from "react";
import InnerHeader from "../InnerHeader/Index";
import Link from "next/link";
import InvoiceCard from "../InvoiceCard";
import { Invoice } from "@/types/invoice.types";

const InvoiceList = ({ data }: { data: Invoice[] }) => {
  return (
    <>
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
          {data.map((v: Invoice, i) => (
            <InvoiceCard data={v} key={i} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default InvoiceList;
