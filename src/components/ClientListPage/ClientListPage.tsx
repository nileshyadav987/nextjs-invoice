"use client";
import Link from "next/link";
import ClientList from "../ClientList";
import { Client } from "@/types/client.types";
import { useEffect, useState } from "react";
import { fetchApi } from "@/library/utilities";

const ClientListPage = () => {
  const [myClients, setMyClients] = useState<Client[]>([]);
  useEffect(() => {
    loadInitialData();
  }, []);
  const loadInitialData = async () => {
    try {
      const r = await fetchApi<{ clients: Client[] }>("/api/client/list");
      console.log("r---->", r.clients);
      setMyClients(r.clients);
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
                href={"/dashboard/clients/new"}
                className="inline-flex items-center justify-center rounded-md border border-primary py-4 px-10 text-center font-medium text-primary hover:bg-opacity-90 lg:px-8 xl:px-10"
              >
                Add New
              </Link>
            </div>
          </div>
        </div>

        <div className="relative overflow-x-auto mt-4">
          <ClientList data={myClients} />
        </div>
      </div>
    </>
  );
};
export default ClientListPage;
