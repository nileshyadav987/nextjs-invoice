"use client";
import { Client } from "@/types/client.types";
import { indianRupeeFormat } from "@/library/stringPlus";
import style from "./style.module.css";
import { useEffect, useState } from "react";
import { fetchApi } from "@/library/utilities";
import Radio from "../Radio/Index";
import Link from "next/link";

const PaymentRow = ({
  data,
  onRowChoose,
}: {
  data: Client;
  onRowChoose?: (selectedRow: Client) => void;
}) => {
  const handleRowChoose = (row: Client) => {
    if (onRowChoose) {
      onRowChoose(row);
    }
  };
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <td className="px-6 py-4">{data.name}</td>
      <td className="px-6 py-4">{data?.email}</td>
      <td className="px-6 py-4">{data?.mobile}</td>
      {onRowChoose && (
        <td className="px-6 py-4">
          <button
            type="button"
            className="py-2.5 px-5 me-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            onClick={() => handleRowChoose(data)}
          >
            Choose
          </button>
        </td>
      )}
    </tr>
  );
};
const PaymentList = ({
  data,
  onRowChoose,
}: {
  data: Client[];
  onRowChoose?: (selectedRow: Client) => void;
}) => {
  const handleRowChoose = (row: Client) => {
    if (onRowChoose) {
      onRowChoose(row);
    }
  };
  return (
    <>
      <div className="p-4">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Mobile
              </th>
              {onRowChoose && (
                <th scope="col" className="px-6 py-3">
                  &nbsp;
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {data.map((v: Client, i) => (
              <PaymentRow data={v} key={i} onRowChoose={onRowChoose} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PaymentList;
