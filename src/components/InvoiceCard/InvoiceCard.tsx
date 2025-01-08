import { Invoice } from "@/types/invoice.types";
import { indianRupeeFormat } from "@/library/stringPlus";
import style from "./style.module.css";
import Link from "next/link";

const InvoiceCard = ({
  data,
  onRowChoose,
}: {
  data: Invoice;
  onRowChoose?: (selectedRow: Invoice) => void;
}) => {
  // console.log("esd", data);

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      {!onRowChoose && (
        <td className="px-6 py-4">
          <span
            className={`${
              style["iv-status-" + data?.status]
            } capitalize text-xs font-medium me-2 px-3 py-1 rounded`}
          >
            {data?.status}
          </span>
        </td>
      )}
      <td className="px-6 py-4">
        {onRowChoose ? (
          <>
            <p>
              inv-
              {data?.autoNumber
                ? data.autoNumber < 10
                  ? `0${data.autoNumber}`
                  : data.autoNumber
                : "N/A"}
            </p>
            <p>
              <span
                className={`${
                  style["iv-status-" + data?.status]
                } capitalize text-xs font-medium me-2 px-3 py-1 rounded`}
              >
                {data?.status}
              </span>
            </p>
          </>
        ) : (
          <Link href={"/dashboard/invoices/" + data._id}>
            inv-
            {data?.autoNumber
              ? data.autoNumber < 10
                ? `0${data.autoNumber}`
                : data.autoNumber
              : "N/A"}
          </Link>
        )}
      </td>
      <td className="px-6 py-4">Client Name</td>
      <td className="px-6 py-4">{indianRupeeFormat(data?.total)}</td>
      <td className="px-6 py-4">
        {indianRupeeFormat((data.total || 0) - (data.totalPaid || 0))}
      </td>
      <td className="px-6 py-4">{data.createdAt}</td>
      <td className="px-6 py-4">{data.dueAt}</td>
      {onRowChoose && (
        <td className="px-6 py-4">
          <input
            type="checkbox"
            defaultValue=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            onClick={()=> {
              onRowChoose(data)
            }}
          />
        </td>
      )}
    </tr>
  );
};

export default InvoiceCard;
