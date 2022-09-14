export function NavMobile() {
  return (
    <ul className="flex flex-col py-5 justify-center items-center text-textostextos gap-y-5">
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
