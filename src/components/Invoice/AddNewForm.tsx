"use client";
import { useEffect, useState } from "react";
import InnerHeader from "../InnerHeader/Index";
import Link from "next/link";
import Modal from "../Modal";
import ClientList from "../ClientList";
import { Client } from "@/types/client.types";
import { fetchApi } from "@/library/utilities";
import { Invoice } from "@/types/invoice.types";
import { Dropdown } from "flowbite-react";

interface DashboardInvoiceViewProps {
  id?: string;
}

const AddNewForm = ({ id }: DashboardInvoiceViewProps) => {
  const [myClients, setMyClients] = useState<Client[]>([]);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const item = { description: "", qty: 0, rate: 0 }; // Removed price from the item template
  const [mainData, setMainData] = useState<Invoice>({
    _id: "",
    total: 0,
    totalPaid: 0,
    paid: false,
    status: "",
    items: [{ description: "", qty: 0, rate: 0 }],
    client: null,
    subtotal: 0,
  });

  useEffect(() => {
    loadInitialData();
  }, []);

  const loadInitialData = async () => {
    try {
      const r1 = await fetchApi<{
        invoice: Invoice;
      }>("/api/invoice/view?id=" + id);
      console.log("r1---", r1);
      const invoiceData = r1.invoice ?? {
        subtotal: 0,
        total: 0,
        items: [],
        client: null,
      };

      setMainData(invoiceData);

      const r = await fetchApi<{ clients: Client[] }>("/api/client/list");
      console.log("r---->", r.clients);
      setMyClients(r.clients);
    } catch {
      console.error("Client list loading error:");
    }
  };

  const addNewRow = () => {
    setMainData((prev) => ({
      ...prev,
      items: [...prev.items, item],
    }));
  };

  const removeItem = (index: number) => {
    setMainData((prev) => ({
      ...prev,
      items: prev.items.filter((_, i) => i !== index),
    }));
  };

  const handleFieldChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    const { name, value } = e.target;

    const updatedItems = [...mainData.items];
    updatedItems[index] = {
      ...updatedItems[index],
      [name]: value,
    };

    // Recalculate the total amount dynamically
    const totalAmount = updatedItems.reduce((sum, item) => {
      const qty = Number(item.qty || 0);
      const rate = Number(item.rate || 0);
      return sum + qty * rate;
    }, 0);

    setMainData((prev) => ({
      ...prev,
      items: updatedItems,
      subtotal: totalAmount,
      total: totalAmount,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/invoice/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(mainData),
      });

      const result = await response.json();
      if (!response.ok) {
        setError(result.message || "Something went wrong");
      } else {
        setMainData((prev) => ({ ...prev, _id: result.invoice._id }));
        console.log("Saved successful", result);
      }
    } catch (err) {
      setError("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };
  console.log("mainData---->", mainData);

  return (
    <>
      <InnerHeader>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link
              href={"/dashboard/invoice/list"}
              className="px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="size-4"
              >
                <path
                  fillRule="evenodd"
                  d="M9.78 4.22a.75.75 0 0 1 0 1.06L7.06 8l2.72 2.72a.75.75 0 1 1-1.06 1.06L5.47 8.53a.75.75 0 0 1 0-1.06l3.25-3.25a.75.75 0 0 1 1.06 0Z"
                  clipRule="evenodd"
                />
              </svg>
              Invoices
            </Link>
            <h2 className="ms-2 text-xl font-semibold text-black dark:text-white">
            {id || "New Invoice"}
            </h2>
          </div>
          <div className="flex items-center">
            <button
              type="button"
              className="py-2.5 px-5 me-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              onClick={handleSubmit}
            >
              Save Draft
            </button>

            <Dropdown label="Options" dismissOnClick={true}>
              <Dropdown.Item
                onClick={() => {
                  console.log("www1", "Hello world");
                }}
              >
                Send
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  console.log("www1", "Hello world");
                }}
              >
                Mark as sent
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  console.log("www1", "Hello world");
                }}
              >
                Download
              </Dropdown.Item>
            </Dropdown>
          </div>
        </div>
      </InnerHeader>
      <main>
        <Modal open={open}>
          <ClientList
            data={myClients}
            onRowChoose={(v) => {
              console.log("v-->", v);
              setMainData((prev) => ({ ...prev, client: v }));
              setOpen(false);
            }}
          />
        </Modal>
        <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
          <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
            <div className="col-span-12">
              <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <h2 className="text-xl font-semibold text-black dark:text-white">
                  Invoices
                </h2>
              </div>
              <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
                {/*  */}

                <div className="relative overflow-x-auto">
                  <>
                    <div className="mb-4">
                      {mainData?.client ? (
                        <>
                          <p>{mainData.client.name}</p>
                          <p>{mainData.client.address}</p>
                          <p>
                            <Link
                              onClick={(e) => {
                                e.preventDefault();
                                setMainData((prev) => ({
                                  ...prev,
                                  client: null,
                                }));
                              }}
                              href="#"
                              className="text-xs text-sky-400"
                            >
                              Remove
                            </Link>
                          </p>
                        </>
                      ) : (
                        <>
                          <button
                            type="button"
                            className="text-gray-700 hover:text-white border border-gray-700 hover:bg-gray-800 font-medium rounded-lg text-sm px-5 py-2.5"
                            onClick={() => setOpen(true)}
                          >
                            Add Client
                          </button>
                        </>
                      )}
                    </div>
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                          <th scope="col" className="px-6 py-3">
                            &nbsp;
                          </th>
                          <th scope="col" className="px-6 py-3 w-2/5">
                            Description
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Quantity
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Rate
                          </th>
                          <th scope="col" className="px-6 py-3">
                            Price
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {mainData.items.map((v, index) => {
                          const qty = Number(v.qty || 0);
                          const rate = Number(v.rate || 0);
                          const price = qty * rate; // Calculate price dynamically

                          return (
                            <tr
                              key={`h-${index}`}
                              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                            >
                              <td>
                                {index > 0 && (
                                  <button
                                    onClick={() => removeItem(index)}
                                    type="button"
                                    className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500"
                                  >
                                    <span>Delete</span>
                                  </button>
                                )}
                              </td>
                              <td>
                                <textarea
                                  value={v.description}
                                  onChange={(e) => handleFieldChange(e, index)}
                                  name="description"
                                  rows={2}
                                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                                  placeholder="Item Name & Description"
                                ></textarea>
                              </td>
                              <td>
                                <input
                                  value={v.qty}
                                  type="text"
                                  name="qty"
                                  className="bg-gray-50 border border-gray-300 text-sm rounded-lg p-2.5"
                                  placeholder="Qty"
                                  onChange={(e) => handleFieldChange(e, index)}
                                />
                              </td>
                              <td>
                                <input
                                  value={v.rate}
                                  type="text"
                                  name="rate"
                                  className="bg-gray-50 border border-gray-300 text-sm rounded-lg p-2.5"
                                  placeholder="Rate"
                                  onChange={(e) => handleFieldChange(e, index)}
                                />
                              </td>
                              <td>{price.toFixed(2)}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                    <div className="mt-2">
                      <button
                        type="button"
                        className="text-gray-700 hover:text-white border border-gray-700 hover:bg-gray-800 font-medium rounded-lg text-sm px-5 py-2.5"
                        onClick={addNewRow}
                      >
                        Add Row
                      </button>
                    </div>
                    <div>
                      <ul>
                        <li className="flex ">
                          <div className="w-1/2">Sub Total</div>
                          <p className="w-1/2 text-right">
                            {mainData.subtotal}
                          </p>
                        </li>
                        <li className="flex ">
                          <div className="w-1/2">Total (INR)</div>
                          <p className="w-1/2 text-right">{mainData.total}</p>
                        </li>
                      </ul>
                    </div>
                  </>
                </div>

                {/*  */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AddNewForm;
