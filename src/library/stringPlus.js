export const indianRupeeFormat = (v) => {
  let a = v.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR"
  });
  a = a.split("₹");
  return <><span>₹</span><span>{a[1]}</span></>
};