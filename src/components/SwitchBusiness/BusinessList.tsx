"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Business {
  _id: string;
  name: string;
  address: string;
}

const BusinessList = () => {
  const router = useRouter();
  const [myBusinessList, setMyBusinessList] = useState<Business[]>([]);

  useEffect(() => {
    getMyList();
  }, []);
  const getMyList = async () => {
    try {
      const response = await fetch("/api/business/list", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        throw new Error("Failed to load business profiles");
      }
      const data = await response.json();
      if(data.list.length == 1) {
        switchAutomatic(data.list[0]);
      } else {
        setMyBusinessList(data.list);
      }
    } catch (err) {
      console.error("err34-------------->", err);
    }
  };

  const switchAutomatic = async (data: { _id: string; }) => {
    // Switch to the newly created business profile
    const response1 = await fetch("/api/business/switch", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ businessId: data._id }),
    });

    if (!response1.ok) {
      throw new Error("Failed to switch to new business");
    }

    const data1 = await response1.json();
    console.log(data1);

    // Redirect to the dashboard or a confirmation page
    router.push(`/dashboard`);
  }
  return (
    <>
      {myBusinessList.map((v) => (
        <div key={v._id}>
          <p>{v.name}</p>
          <p>{v.address}</p>
        </div>
      ))}
    </>
  );
};
export default BusinessList;
