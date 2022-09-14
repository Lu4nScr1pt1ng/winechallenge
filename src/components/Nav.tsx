export function Nav() {
  return (
    <ul className="flex gap-6 items-center text-textostextos font-nav text-xs lg:text-[16px] lg:gap-12">
      <li>
        <a className="hover:text-black" href="#home">
          Clube
        </a>
      </li>
      <li>
        <a className="hover:text-black" href="#benefit">
          Loja
        </a>
      </li>
      <li>
        <a className="hover:text-black" href="#tutorial">
          Produtores
        </a>
      </li>
      <li>
        <a className="hover:text-black" href="#explore">
          Ofertas
        </a>
      </li>
      <li>
        <a className="hover:text-black" href="#testimonial">
          Eventos
        </a>
      </li>
    </ul>
  );
}
