import Image from "next/image";
import Link from "next/link"; // Link component for navigation between pages

const KBBB_CAL = [
  {
    day: "25",
    month: "Augustus",
    year: "2025",
    time: "19u15",
    hometeam: "T.B.A. Biljartpalace 1",
    awayteam: "DNL 1",
    location: "Merodecenter, De merodelei 1, 2300 Turnhout",
    players: ["Mark", "Louis", "Alex"],
  },
  {
    day: "29",
    month: "Augustus",
    year: "2025",
    time: "19u15",
    hometeam: "DNL 1",
    awayteam: "BC De Ploeg 1",
    location: "",
    players: ["Eddy", "Louis", "Alex"],
  },
  {
    day: "3",
    month: "September",
    year: "2025",
    time: "19u15",
    hometeam: "BC Lugo 1",
    awayteam: "DNL 1",
    location: "",
    players: ["Mark", "Johhny", "Johan"],
  },
  {
    day: "8",
    month: "September",
    year: "2025",
    time: "19u15",
    hometeam: "DNL 1",
    awayteam: "Mister 100 Lier 1",
    location: "",
    players: ["Mark", "Eddy", "Louis"],
  },
  {
    day: "15",
    month: "September",
    year: "2025",
    time: "19u15",
    hometeam: "DNL 1",
    awayteam: "Biljart-World 3 ",
    location: "",
    players: [],
  },
  {
    day: "22",
    month: "September",
    year: "2025",
    time: "19u15",
    hometeam: "DNL 1",
    awayteam: "B.C. De Kern 1",
    location: "",
    players: [],
  },
  {
    day: "29",
    month: "September",
    year: "2025",
    time: "19u15",
    hometeam: "DBC Figuur2600 1 ",
    awayteam: "DNL 1",
    location: "",
    players: [],
  },
  {
    day: "20",
    month: "Oktober",
    year: "2025",
    time: "19u15",
    hometeam: "DNL 1",
    awayteam: "BC Op De Meir 2 ",
    location: "",
    players: [],
  },
  {
    day: "6",
    month: "November",
    year: "2025",
    time: "19u15",
    hometeam: "Billiard Promotion Team 1 ",
    awayteam: "DNL 1",
    location: "",
    players: [],
  },
  {
    day: "27",
    month: "November",
    year: "2025",
    time: "19u15",
    hometeam: "BC Mollenhof 1 ",
    awayteam: "DNL 1",
    location: "",
    players: [],
  },
  {
    day: "1",
    month: "December",
    year: "2025",
    time: "19u15",
    hometeam: "DNL 1",
    awayteam: "Biljart Express 2 ",
    location: "",
    players: [],
  },
  {
    day: "18",
    month: "December",
    year: "2025",
    time: "19u15",
    hometeam: "Grobbendonkse BC 1 ",
    awayteam: "DNL 1",
    location: "",
    players: [],
  },
];

const ADL_A_CAL = [
  {
    day: "1",
    month: "September",
    year: "2025",
    time: "19u15",
    hometeam: "MDC DNL 1",
    awayteam: "De Willy's",
    location: "",
    players: ["Louis", "Willy", "Alex", "Gerry"],
  },
  {
    day: "9",
    month: "September",
    year: "2025",
    time: "19u15",
    hometeam: "KBC Kot Goor",
    awayteam: "MDC DNL 1",
    location: "",
    players: ["Mark","Willy","Gerry","Dimitri"],
  },
  {
    day: "20",
    month: "September",
    year: "2025",
    time: "19u15",
    hometeam: "Garage Vandoninck",
    awayteam: "MDC DNL 1",
    location: "",
    players: ["Louis","Willy","Alex","Gerry"],
  },
  {
    day: "25",
    month: "September",
    year: "2025",
    time: "19u15",
    hometeam: "De Plezante Hoek 1",
    awayteam: "MDC DNL 1",
    location: "",
    players: ["Mark","Alex","Gerry",""],
  },
  {
    day: "29",
    month: "September",
    year: "2025",
    time: "19u15",
    hometeam: "MDC DNL 1",
    awayteam: "Haarteam Solana",
    location: "",
    players: ["Louis","Willy","",""],
  },
  {
    day: "6",
    month: "Oktober",
    year: "2025",
    time: "19u15",
    hometeam: "MDC DNL 1",
    awayteam: "Den Dremmel",
    location: "",
    players: ["","","",""],
  },
  {
    day: "16",
    month: "Oktober",
    year: "2025",
    time: "19u15",
    hometeam: "Starrenhof 1",
    awayteam: "MDC DNL 1",
    location: "",
    players: ["","","",""],
  },
  {
    day: "20",
    month: "Oktober",
    year: "2025",
    time: "19u15",
    hometeam: "MDC DNL 1",
    awayteam: "Joe Pilers",
    location: "",
    players: ["","","",""],
  },
  {
    day: "30",
    month: "Oktober",
    year: "2025",
    time: "19u15",
    hometeam: "Euro Enterprises",
    awayteam: "MDC DNL 1",
    location: "",
    players: ["","","",""],
  },
  {
    day: "3",
    month: "November",
    year: "2025",
    time: "19u15",
    hometeam: "MDC DNL 1",
    awayteam: "Den Bonten Os 2014",
    location: "",
    players: ["","","",""],
  },
   {
    day: "12",
    month: "November",
    year: "2025",
    time: "19u15",
    hometeam: "Electro Jacobs",
    awayteam: "MDC DNL 1",
    location: "",
    players: ["","","",""],
  },
  {
    day: "17",
    month: "November",
    year: "2025",
    time: "19u15",
    hometeam: "MDC DNL 1",
    awayteam: "BC 't Zandhof 1",
    location: "",
    players: ["","","",""],
  },
];

const ADL_C_CAL = [
   {
    day: "",
    month: "",
    year: "",
    time: "19u15",
    hometeam: "",
    awayteam: "",
    location: "",
    players: ["","","",""],
  },
];

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
            <br />
            {KBBB_CAL.map(({ day, month, year, time, hometeam, awayteam, location, players }) => (
              <div className="p-1 flex items-left">
                <div className="pr-4 bg-white p-2 rounded-lg text-center">
                  <p className="text-4xl font-bold text-black">{day}</p>
                  <p className="text-sm text-black">{month}, {year}</p>
                  <br />
                  <p className="text-sm text-black">{time}</p>
                </div>
                <div className="ml-4">
                  <div className="uppercase tracking-wide text-sm font-semibold">
                    {hometeam} - {awayteam}
                  </div>
                  <p className="mt-2 text-gray-500">
                    {location}
                  </p>
                  <p className="mt-2 text-gray-500">
                    {players.join(", ")}
                  </p>
                </div>
              </div>
            ))}
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
            <br />
            {ADL_A_CAL.map(({ day, month, year, time, hometeam, awayteam, location, players }) => (
              <div className="p-1 flex items-left">
                <div className="pr-4 bg-white p-2 rounded-lg text-center">
                  <p className="text-4xl font-bold text-black">{day}</p>
                  <p className="text-sm text-black">{month}, {year}</p>
                  <br />
                  <p className="text-sm text-black">{time}</p>
                </div>
                <div className="ml-4">
                  <div className="uppercase tracking-wide text-sm font-semibold">
                    {hometeam} - {awayteam}
                  </div>
                  <p className="mt-2 text-gray-500">
                    {location}
                  </p>
                  <p className="mt-2 text-gray-500">
                    {players.join(", ")}
                  </p>
                </div>
              </div>
            ))}
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
            <br />
            {ADL_C_CAL.map(({ day, month, year, time, hometeam, awayteam, location, players }) => (
              <div className="p-1 flex items-left">
                <div className="pr-4 bg-white p-2 rounded-lg text-center">
                  <p className="text-4xl font-bold text-black">{day}</p>
                  <p className="text-sm text-black">{month}, {year}</p>
                  <br />
                  <p className="text-sm text-black">{time}</p>
                </div>
                <div className="ml-4">
                  <div className="uppercase tracking-wide text-sm font-semibold">
                    {hometeam} - {awayteam}
                  </div>
                  <p className="mt-2 text-gray-500">
                    {location}
                  </p>
                  <p className="mt-2 text-gray-500">
                    {players.join(", ")}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
