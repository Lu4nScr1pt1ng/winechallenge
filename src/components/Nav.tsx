import Link from "next/link";

export function Nav() {
  return (
    <ul className="flex gap-6 items-center text-textostextos font-nav text-xs lg:text-[16px] lg:gap-12">
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
        <Link href="#produtores">
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
