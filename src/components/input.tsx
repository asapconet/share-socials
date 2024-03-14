import classNames from "classnames";
import React from "react";
import { BsSearch } from "react-icons/bs";

interface IProps {
  size?: "lg" | "md" | "sm";
  textarea?: boolean;
  errors?: string;
  label?: string;
  rightIcon?: string;

  name?: string;
  type?: string;
  placeholder?: string;
  className?: string;
}

const SsInput = ({
  size = "lg",
  textarea,
  errors,
  label,
  className,
  ...rest
}: IProps) => {
  const icons: any = {
    search: <BsSearch />,
  };

  if (textarea) {
    return (
      <div className="w-full text-left">
        {label && (
          <label
            htmlFor={rest?.name}
            className=" text-[.9rem] font-[500] text-gray-700"
          >
            {label}
          </label>
        )}
        <div className="relative w-full py-2">
          <textarea
            id={rest.name || ""}
            className={classNames(
              "outline-none rounded-md min-h-[2.8rem] w-full px-4 py-2 placeholder:text-[.83rem] border-[1px] border-gray-300",
              className
            )}
            {...rest}
          />
          {errors && (
            <span className="block mt-2 paragraph-1 text-err-500">
              {errors}
            </span>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full text-left">
      {label && (
        <label
          htmlFor={rest?.name}
          className="text-[.9rem] font-[500] text-gray-700"
        >
          {label}
        </label>
      )}
      <div className="relative w-full my-2">
        <input
          id={rest.name || ""}
          className={classNames(
            "outline-none rounded-md h-[2.5rem] w-full px-4 py-2 placeholder:text-[.83rem] border-[1px] border-gray-300",
            className
          )}
          {...rest}
        />
      </div>
      {errors && (
        <span className="block mt-2 paragraph-1 text-err-500">{errors}</span>
      )}
    </div>
  );
};

export default SsInput;
