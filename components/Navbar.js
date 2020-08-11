import Link from "next/link";

const Navbar = () => (
  <div>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/book">
          <a>Books</a>
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </li>
    </ul>

    <style jsx>{`
      ul {
        background: #d4d4d4;
        color: #fff;
        list-style: none;
        display: flex;
        justify-content: space-around;
      }

      ul li a {
        color: #111;
        font-size: 22px;
        text-decoration: none;
      }
    `}</style>
  </div>
);

export default Navbar;
