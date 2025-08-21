import Image from "next/image";
import Link from "next/link"; // Link component for navigation between pages

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-3">
      <div className="col-span-1">
        <div className="p-2 flex items-center">
          <div className="ml-4">
            <div className="uppercase tracking-wide text-lg font-semibold">
              <Link
                href="http://www.kbbb.be"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="w-32 md:w-32 lg:w-48"
                  src="/KBBB_Logo.png"
                  alt="KBBB Logo"
                />
              </Link>
              AA01 - De Nieuwe Lantaarn
            </div>
            <p className="uppercase mt-2 text-gray-600 text-md font-semibold">
              Reeks A
            </p>
            <p className="mt-2 text-gray-500">7947 - BORREMANS Joannes</p>
            <p className="mt-2 text-gray-500">1253 - VAN LOO Eddy</p>
            <p className="mt-2 text-gray-500">1032 - VAN OUYTSEL Wilfried</p>
            <p className="mt-2 text-gray-500">9683 - LEMAIRE Alex</p>
            <p className="mt-2 text-gray-500">9617 - VERSTRAETEN Mark</p>
            <p className="mt-2 text-gray-500">6389 - HOREMANS Louis</p>
            <p className="mt-2 text-gray-500">8344 - BORREMANS Johan</p>
            <p className="mt-2 text-gray-500">4088 - SARRA Jose</p>
          </div>
        </div>
      </div>
      <div className="col-span-1">
        <div className="p-2 flex items-center">
          <div className="ml-4">
            <div className="uppercase tracking-wide text-lg font-semibold">
              <Link
                href="http://www.adl2000.be"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="w-32 md:w-32 lg:w-48"
                  src="/ADL_Logo.png"
                  alt="ADL Logo"
                />
              </Link>
              MDC De Nieuwe Lantaarn 1
            </div>
            <p className="uppercase mt-2 text-gray-600 text-md font-semibold">
              Afdeling A
            </p>
            <p className="mt-2 text-gray-500">Louis Horemans</p>
            <p className="mt-2 text-gray-500">Mark Verstraeten</p>
            <p className="mt-2 text-gray-500">Willy Schoeters</p>
            <p className="mt-2 text-gray-500">Ronny Goolenaers</p>
            <p className="mt-2 text-gray-500">Alex Lemaire - K</p>
            <p className="mt-2 text-gray-500">Gerry Blancquaert</p>
            <p className="mt-2 text-gray-500">Dimitri Van Handenhoven</p>
          </div>
        </div>
      </div>
      <div className="col-span-1">
        <div className="p-2 flex items-center">
          <div className="ml-4">
            <div className="uppercase tracking-wide text-lg font-semibold">
              <Link
                href="http://www.adl2000.be"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="w-32 md:w-32 lg:w-48"
                  src="/ADL_Logo.png"
                  alt="ADL Logo"
                />
              </Link>
              De Krabbers
            </div>
            <p className="uppercase mt-2 text-gray-600 text-md font-semibold">
              Afdeling C
            </p>
            <p className="mt-2 text-gray-500">Johan Borkhuis</p>
            <p className="mt-2 text-gray-500">Jose Sarra - N</p>
            <p className="mt-2 text-gray-500">Eddy Van Loo</p>
            <p className="mt-2 text-gray-500">Steve Coveliers</p>
            <p className="mt-2 text-gray-500">Albert Van Der Elst</p>
            <p className="mt-2 text-gray-500">Mark Verresen - K</p>
            <p className="mt-2 text-gray-500">Jozef Baelemans</p>
          </div>
        </div>
      </div>
    </div>
  );
}
