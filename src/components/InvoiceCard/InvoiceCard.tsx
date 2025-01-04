import { Invoice } from "@/types/invoice.types";
import { indianRupeeFormat } from "@/library/stringPlus";
import style from "./style.module.css";

const InvoiceCard = ({ data }: { data: Invoice }) => {
  // console.log("esd", data);

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <td className="px-6 py-4">
        <span
          className={`${
            style["iv-status-" + data?.status]
          } capitalize text-xs font-medium me-2 px-3 py-1 rounded`}
        >
          {data?.status}
        </span>
      </td>
      <td className="px-6 py-4"
      >
        inv-01
      </td>
      <td className="px-6 py-4">Client Name</td>
      <td className="px-6 py-4">{indianRupeeFormat(data?.total)}</td>
      <td className="px-6 py-4">{indianRupeeFormat((data.total || 0) - (data.totalPaid || 0))}</td>
      <td className="px-6 py-4">{data.createdAt}</td>
      <td className="px-6 py-4">{data.dueAt}</td>
      <td className="px-6 py-4">$2999</td>
    </tr>
  );
};

export default InvoiceCard;
