import Image from "next/image";

export default function Home() {
  return (
    <div className="flex-1 px-2 sm:px-0 bg-[url(/carom-balls.jpg)] bg-no-repeat bg-cover">
      <br />
      <br />
      <div className="flex justify-center">
        <h1 className="text-5xl font-extralight text-black/50">
          Welkom bij de Merksemse Drieband Club
        </h1>
      </div>
      <br />
      <br />
      <div className="flex justify-center">
        <h3 className="text-3xl font-extralight text-black/50">
          Met dank aan onze sponsers
        </h3>
      </div>
      <div className="mb-10 sm:mb-0 mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div className="relative group py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer">
          <img
            className="object-cover object-center"
            src="/DeNieuweLantaarn_OLD.png"
            alt="De Nieuwe Lantaarn"
          />
        </div>
        <div className="relative group py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer">
          <img
            className="object-cover object-center"
            src="/dirk-stoop-transformed.webp"
            alt="Dirk Stoop"
          />
        </div>
        <div className="relative group py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer">
          <img
            className="object-cover object-center"
            src="/hyperscorelogo.png"
            alt="Hyperscore"
          />
        </div>
        <div className="relative group py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer">
          <img
            className="object-cover object-center"
            src="/Verhoeven-Biljarts.webp"
            alt="Verhoeven"
          />
        </div>
      </div>
    </div>
  );
}
