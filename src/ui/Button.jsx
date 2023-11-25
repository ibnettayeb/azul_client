/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function Button({ children, type, to }) {
  const base = "inline-block text-md py-2 px-4 rounded-full ";
  const styles = {
    primary: base + "bg-primary text-white",
    outline: base + "border border-grey text-textColor",
  };

  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }

  return <button className={styles[type]}>{children}</button>;
}

export default Button;
