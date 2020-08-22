import Link from 'next/link';
const Nav = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>Blaa</li>
        <li>Blah</li>
      </ul>
    </div>
  );
};

export default Nav;
