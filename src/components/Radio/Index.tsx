import { useId } from "react";

type Props = {
    onClick: () => void;
    title: String,
    checked: Boolean
}

const Radio = ({ title, checked, onClick }: Props) => {
  const uniqueId = useId();
  return (
    <label
      htmlFor={"radio-title-" + uniqueId}
      className="flex cursor-pointer select-none items-center"
      onClick={()=> {
        onClick();
      }}
    >
      <div className="relative">
        <div
          className={`mr-4 flex h-5 w-5 items-center justify-center rounded-full border ${
            checked ? "border-primary" : "false"
          }`}
        >
          <span
            className={`h-2.5 w-2.5 rounded-full bg-transparent ${
              checked ? "!bg-primary" : "false"
            }`}
          />
        </div>
      </div>
      {title}
    </label>
  );
};
export default Radio;
