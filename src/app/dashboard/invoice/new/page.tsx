import InnerHeader from "@/components/InnerHeader/Index";
import AddNewForm from "@/components/Invoice/AddNewForm";
import Radio from "@/components/Radio/Index";

export default function DashboardInvoiceNew() {
  const handleDataFromComponent = (data: any) => {
    console.log("Data received from component:", data);
    // Perform actions with the data, e.g., save to state or send to an API
  };

  return (
    <>
      <AddNewForm />
    </>
  );
}
