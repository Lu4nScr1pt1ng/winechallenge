import Link from "next/link";

export function NavMobile() {
  return (
    <ul className="flex flex-col py-5 justify-center items-center text-textostextos gap-y-5">
      <li>
        <Link href="#home">
          <a className="hover:text-black" href="#home">
            Clube
          </a>
        </Link>
      </li>
      <li>
        <Link href="/">
          <a className="hover:text-black" href="#home">
            Loja
          </a>
        </Link>
      </li>
      <li>
        <Link href="#produtoes">
          <a className="hover:text-black" href="#home">
            Produtores
          </a>
        </Link>
      </li>
      <li>
        <Link href="#oferta">
          <a className="hover:text-black" href="#home">
            Ofertas
          </a>
        </Link>
      </li>
      <li>
        <Link href="#events">
          <a className="hover:text-black" href="#home">
            Eventos
          </a>
        </Link>
      </li>
    </ul>
  );
}
