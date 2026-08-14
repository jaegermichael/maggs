import type { AnchorHTMLAttributes, ReactNode } from "react";
import { Link as RouterLink } from "react-router-dom";

type LinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
  children: ReactNode;
};

export function Link({ href, children, ...props }: LinkProps) {
  return (
    <RouterLink to={href} {...props}>
      {children}
    </RouterLink>
  );
}
