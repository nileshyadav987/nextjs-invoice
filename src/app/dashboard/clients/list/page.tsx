import ClientListPage from "@/components/ClientListPage";

export default function DashboardInvoiceList() {
  return (
    <>
      <div className="mx-auto w-full p-4 md:p-6 2xl:p-10">
        <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
          <div className="col-span-12">
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-xl font-semibold text-black dark:text-white">
                Invoices
              </h2>
            </div>
            <div className="rounded-sm border border-stroke bg-white p-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5">
              <ClientListPage />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
