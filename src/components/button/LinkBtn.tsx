import clsx from "clsx";
import Link from "next/link";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

interface LinkBtnProps {
    children?: React.ReactNode;
    variant?: "titles" | "background2" | "transparent";
    className?: string;
    arrow?: boolean;
    href: string;
  }
  export const LinkBtn = ({
    children,
    variant,
    className,
    arrow,
    href,
  }: LinkBtnProps) => {
    return (
      <Link
        href={href}
        className={clsx(
          `px-6 py-2 flex group text-white rounded-md justify-center items-center min-w-10 min-h-8 transition-all ease-in-out duration-200 text-center text-lg md:text-base bg-${variant} border hover:shadow`,
          className
        )}
      >
        {children}{" "}
        {arrow && (
          <MdOutlineKeyboardDoubleArrowRight className="text-2xl xs:text-xl opacity-0 translate-x-[500%] transition-all ease-linear duration-200 group-hover:translate-x-[20%] group-hover:opacity-100 text-secondary" />
        )}
      </Link>
    );
  };
  