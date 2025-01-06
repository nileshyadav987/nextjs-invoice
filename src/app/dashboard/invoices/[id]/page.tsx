import InnerHeader from "@/components/InnerHeader/Index";
import AddNewForm from "@/components/Invoice/AddNewForm";
import Radio from "@/components/Radio/Index";

interface DashboardInvoiceViewProps {
  params: Promise<{
    id: string; // Making `id` optional for better flexibility
  }>;
};

export default async function DashboardInvoiceView({
  params,
}: DashboardInvoiceViewProps) {
  const { id } = await params;
  return <><AddNewForm id={id} /></>;
}
