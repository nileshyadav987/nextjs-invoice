export const indianRupeeFormat = (v: number): string => {
  const formattedValue = v.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
  });
  const parts = formattedValue.split("₹");
  return `₹${parts[1]}`;
};
