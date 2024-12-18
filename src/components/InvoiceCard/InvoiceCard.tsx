import { Invoice } from "@/app/types/invoice.types";
import { indianRupeeFormat } from "@/library/stringPlus";

const InvoiceCard = ({ data }: { data: Invoice }) => {
  console.log("esd", data);
  return (
    <>
      <div className="p-2.5 xl:p-5">
        <p className="hidden text-black dark:text-white sm:block">
          Customer name
        </p>
        <p>{data?._id}</p>
      </div>
      <div className="flex items-center justify-center p-2.5 xl:p-5">
        <p className="text-black dark:text-white">
          {indianRupeeFormat(data?.total)}
        </p>
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
    </>
  );
};

export default InvoiceCard;
