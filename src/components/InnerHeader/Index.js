
const InnerHeader = ({children}) => {
  return (
    <header className="sticky top-0 z-999 w-full bg-white shadow">
      <div className="px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        {children}
      </div>
    </header>
  );
};
export default InnerHeader;
