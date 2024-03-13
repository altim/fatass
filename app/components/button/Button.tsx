import styles from "./Button.module.scss";
import Link from "next/link";
import classNames from "classnames";

type ButtonProps = {
  onClick?: () => void;
  id: string;
  name: string;
  href?: string;
  target?: string;
  className?: string;
  ariaLabel?: string;
};

export default function Button({
  name,
  onClick,
  href,
  target = "_self",
  className,
  ariaLabel = name,
  ...restProps
}: ButtonProps) {
  return href ? (
    <Link
      href={href}
      target={target}
      className={classNames(styles.link, className)}
    >
      <button
        onClick={onClick}
        className={styles.button}
        aria-label={ariaLabel}
        {...restProps}
      >
        {name}
      </button>
    </Link>
  ) : (
    <button onClick={onClick} className={classNames(styles.button, className)}>
      {name}
    </button>
  );
}
