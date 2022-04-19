import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link className="nav-link" href="/">
          <a>Home</a>
        </Link>
        <Link className="nav-link" href="/contact">
          Contact
        </Link>
        <Link className="nav-link" href="/login">
          Login
        </Link>
      </nav>

      <div className="container">{children}</div>
    </>
  );
}
