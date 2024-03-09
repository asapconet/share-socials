import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactEventHandler } from "react";

interface IProps {
  onClick?: ReactEventHandler;
  to?: string;
  passHref?: boolean;
  anchor?: boolean;
  children?: React.ReactNode;
  className?: string;
}

const SsLink = React.forwardRef(
  (
    { to = "#", passHref = false, children, className, ...rest }: IProps,
    ref: any
  ) => {
    const { pathname } = useRouter();
    const isActive = to.includes(pathname);
    const isExternalLink = to.includes("http") ? { target: "_blank" } : {};

    return (
      <Link passHref={passHref} href={to} {...rest} {...isExternalLink}>
        <div
          ref={ref}
          className={classNames(
            "hover:text-gray-500 underline relative group w-fit transition duration-200 text-gray-800",
            className,
            {
              "text-gray-900": isActive,
            }
          )}
        >
          {children}
        </div>
      </Link>
    );
  }
);

SsLink.displayName = "SsLink";
export default SsLink;
