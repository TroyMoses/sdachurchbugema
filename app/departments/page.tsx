"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { MainNav } from "@/components/main-nav";
import AOS from "aos";
import "aos/dist/aos.css";

type Leader = {
  name: string;
  title: string;
  tab: string;
  img?: string;
};

const allLeaders: Leader[] = [
  /* elders */
  {
    name: "Eld.Oloo Steven",
    title: "Head Elder",
    tab: "ELDERS",
    img: "",
  },
  {
    name: "Eld Busuulwa Joshua",
    title: "Second Elder",
    tab: "ELDERS",
    img: "",
  },
  {
    name: "Dr.Halerimana Joshua",
    title: "Head Elder",
    tab: "ELDERS",
    img: "",
  },
  {
    name: "Pr.James Gumikiriza",
    title: "Elder",
    tab: "ELDERS",
    img: "/IMG_1754.jpg",
  },
  {
    name: "Pr.Isingoma Edward",
    title: "Elder",
    tab: "ELDERS",
    img: "/IMG_1750.jpg",
  },
  {
    name: "Eld.Nyanzi Geofrey",
    title: "Elder",
    tab: "ELDERS",
    img: "",
  },
  {
    name: "Eld.Muhumuza Moses",
    title: "Elder",
    tab: "ELDERS",
    img: "/MUHUMUZA MOSES-EDUC.jpg",
  },
  {
    name: "Eld.Francis Niyomugabo",
    title: "Elder",
    tab: "ELDERS",
    img: "",
  },
  {
    name: "Pr.Biddawo Edward",
    title: "Elder",
    tab: "ELDERS",
    img: "",
  },
  {
    name: "Eld.Bwambale Brian",
    title: "Elder",
    tab: "ELDERS",
    img: "",
  },
  {
    name: "Eld.Mkama Benson",
    title: "Elder",
    tab: "ELDERS",
    img: "/Mkama.jpg",
  },
  {
    name: "Eld.John Baleeta",
    title: "Elder",
    tab: "ELDERS",
    img: "",
  },
  {
    name: "Eld.Hafashimana Samuel",
    title: "Head Elder",
    tab: "ELDERS",
    img: "/HAFASHIMANA SAMUEL-HOD EDUC ARTS.jpg",
  },
  {
    name: "Eld.Tibenda Keith",
    title: "Elder",
    tab: "ELDERS",
    img: "/KEITH TIBENDA-SOCIAL SCIENCES.jpg",
  },
  {
    name: "Eld.Katamba Enoch",
    title: "Elder",
    tab: "ELDERS",
    img: "/KATAMBA ENOCK-SOCIAL WORK (1).jpg",
  },
  {
    name: "Eld.John Geng Geng",
    title: "Elder",
    tab: "ELDERS",
    img: "",
  },
  {
    name: "Eld.Desengimana Stephen",
    title: "Elder",
    tab: "ELDERS",
    img: "/Dusengimana.jpg",
  },
  {
    name: "Eld.Amoah John",
    title: "Elder",
    tab: "ELDERS",
    img: "",
  },
  {
    name: "Eld.Tenywa Livingston",
    title: "Elder",
    tab: "ELDERS",
    img: "/TENYWA LIVINGSTONE-SOCIAL SCIENCES.jpg",
  },
  {
    name: "Eld.Male Daniel",
    title: "Elder",
    tab: "ELDERS",
    img: "/MALE DANIEL-EXAMINATIONS OFFICER.jpg",
  },
  {
    name: "Eld.Mugisha Mark",
    title: "Elder",
    tab: "ELDERS",
    img: "",
  },
  {
    name: "Eld.Kahwa Bright",
    title: "Elder",
    tab: "ELDERS",
    img: "",
  },
  {
    name: "Eld.Okoth Ronald",
    title: "Elder",
    tab: "ELDERS",
    img: "/RONALD OTIENO OKOTH-QUALITY ASSURANCE_.jpg",
  },
  {
    name: "Eld.Achiga Anothony",
    title: "Head Elder",
    tab: "ELDERS",
    img: "",
  },
  {
    name: "Eld.Kirabo Jacob",
    title: "Elder",
    tab: "ELDERS",
    img: "/KIRABO JACOB .E.-QUALITY ASSURANCE.jpg",
  },
  {
    name: "Eld.Musisi Peter",
    title: "Elder",
    tab: "ELDERS",
    img: "",
  },
  {
    name: "Eld.Khamis Emmanuel",
    title: "Elder",
    tab: "ELDERS",
    img: "",
  },
  {
    name: "Pr.Turyomurugyendo Aaron",
    title: "Elder",
    tab: "ELDERS",
    img: "",
  },
  {
    name: "Pr.Aliddeki Christian",
    title: "Elder",
    tab: "ELDERS",
    img: "",
  },
  {
    name: "Eld.Mugulu Daniel",
    title: "Elder",
    tab: "ELDERS",
    img: "/MUGALU DANIEL-SCH BUSINESS.jpg",
  },
  {
    name: "Eld.Joel Musasizi",
    title: "Elder",
    tab: "ELDERS",
    img: "",
  },

  /* deaconary */
  { name: "Mr.Sunday Jackson", title: "Head Deacon", tab: "DEACONARY" },
  { name: "Kyosaba Godfery", title: "Deacon", tab: "DEACONARY" },
  { name: "Nathan Bazungu", title: "Deacon", tab: "DEACONARY" },
  { name: "Nzanzu Daniel", title: "Deacon", tab: "DEACONARY" },
  { name: "Kevin Keptengech", title: "Deacon", tab: "DEACONARY" },
  { name: "Kagame Douglas", title: "Deacon", tab: "DEACONARY" },
  { name: "Iruva Gad", title: "Deacon", tab: "DEACONARY" },
  { name: "Meshack Nsengiyunva", title: "Deacon", tab: "DEACONARY" },
  { name: "Jonathan Jimmy", title: "Deacon", tab: "DEACONARY" },
  { name: "Bro.Lamech Geoffrey", title: "Deacon", tab: "DEACONARY" },
  { name: "Ssendiga Geoffrey", title: "Deacon", tab: "DEACONARY" },
  { name: "Kikubira Micheal", title: "Deacon", tab: "DEACONARY" },
  { name: "Okao Kaleb Joshua", title: "Deacon", tab: "DEACONARY", img:"/OKAO KALEB JOSHUA .jpg" },
  { name: "Bulime Richard", title: "Deacon", tab: "DEACONARY" },
  { name: "Moses Mugisha", title: "Deacon", tab: "DEACONARY" },
  { name: "Mr Lumu Marvin", title: "Deacon", tab: "DEACONARY" },
  { name: "Mrs. Stella Amoah", title: "Head Deaconeness", tab: "DEACONARY" },
  { name: "Nyiraneza Wilmer", title: "Deacon", tab: "DEACONARY" },
  { name: "Angwech Agnes", title: "Deacon", tab: "DEACONARY" },
  { name: "Mrs.Priscilla Herelimana", title: "Deacon", tab: "DEACONARY" },
  { name: "Mrs.Harriet Katamba", title: "Deacon", tab: "DEACONARY" },
  { name: "Anatazsha", title: "Deacon", tab: "DEACONARY" },
  { name: "Nabumba Susan", title: "Deacon", tab: "DEACONARY" },
  { name: "Ms.Tamar", title: "Deacon", tab: "DEACONARY" },
  { name: "Thokozani Mkwezalamba", title: "Deacon", tab: "DEACONARY" },
  { name: "Fanta Lintale", title: "Deacon", tab: "DEACONARY" },
  { name: "Olivia Namanya", title: "Deacon", tab: "DEACONARY" },
  { name: "Esther Bwamiki", title: "Deacon", tab: "DEACONARY" },
  { name: "Mrs.Valleria Nsanzabaganwa", title: "Deacon", tab: "DEACONARY" },
  { name: "Neeza Shalom", title: "Deacon", tab: "DEACONARY" },
  { name: "Nanteza Doreen", title: "Deacon", tab: "DEACONARY" },
  { name: "Namata Ruth", title: "Deacon", tab: "DEACONARY" },
  { name: "Sarafina Sifa", title: "Deacon", tab: "DEACONARY" },
  { name: "Mukaye Esther", title: "Deacon", tab: "DEACONARY" },
  { name: "Natama Jemimah", title: "Deacon", tab: "DEACONARY" },
  { name: "Tusuubira Loy", title: "Deacon", tab: "DEACONARY" },
  { name: "Nambaziira Latifah", title: "Deacon", tab: "DEACONARY" },
  { name: "Babirye Diana", title: "Deacon", tab: "DEACONARY" },

  /* clerks */
  {
    name: "Mr. Hafashimana Samuel",
    title: "Head Clerk",
    tab: "CLERKS",
    img: "/HAFASHIMANA SAMUEL-HOD EDUC ARTS.jpg",
  },
  {
    name: "Eld. Moses Muhumuza",
    title: "Incharge of MemberShip",
    tab: "CLERKS",
    img: "/MUHUMUZA MOSES-EDUC.jpg",
  },
  {
    name: "Mrs. Betty Tenywa",
    title: "Incharge of Records",
    tab: "CLERKS",
    img: "",
  },

  /* treasury */
  {
    name: "Mr.Atuha Sanctus",
    title: "Treasurer",
    tab: "TREASURY",
    img: "/CPA. SANCTUS ATUHA-SCH BUSINESS.jpg",
  },
  {
    name: "Mr.steven Dusengimana",
    title: "Treasurer",
    tab: "TREASURY",
    img: "/Dusengimana.jpg",
  },

  /* interest cordinator */
  {
    name: "Mr.Keith Tibenda",
    title: "Interest Cordinator",
    tab: "INTEREST CORDINATOR",
    img: "/KEITH TIBENDA-SOCIAL SCIENCES.jpg",
  },
  {
    name: "Mrs.Edith Migadde",
    title: "Interest Cordinator",
    tab: "INTEREST CORDINATOR",
    img: "",
  },

  /* sabbath school */
  {
    name: "Mrs.Nassanga Deborah",
    title: "Sabbath School Superintendent ",
    tab: "SABBATH SCHOOL",
    img: "",
  },
  {
    name: "Pr.Mayambala Stanley",
    title: "Asst Sabbath School Superintendent ",
    tab: "SABBATH SCHOOL",
    img: "",
  },

  /* personal ministries */
  {
    name: "Pr.Nsangabaganwa Theogene",
    title: "Head Personal Ministry ",
    tab: "PERSONAL MINISTRY",
    img: "",
  },
  {
    name: "Mr.George Mushana",
    title: "Asst Personal Ministry ",
    tab: "PERSONAL MINISTRY",
    img: "",
  },

  /* adventist men */
  {
    name: "Mr.Kanyerezi Richard",
    title: "Head Adventist Men",
    tab: "ADVENTIST MEN",
    img: "",
  },
  {
    name: "Mr.Kagame Douglas",
    title: "Asst Adventist Men",
    tab: "ADVENTIST MEN",
    img: "",
  },

  /* YOUTH MINISTRIES */
  {
    name: "Mr.Nsengiyunva Meshack",
    title: "Young Adults Leader",
    tab: "YOUTH MINISTRY",
    img: "",
  },
  {
    name: "Eld.Niyomugabo Francis",
    title: "PCM Leader ",
    tab: "YOUTH MINISTRY",
    img: "",
  },
  {
    name: "Mr.Barraka Tungaraza",
    title: "Ambassador-Director",
    tab: "YOUTH MINISTRY",
    img: "",
  },
  {
    name: "Mrs.Stella Adong",
    title: "Pathfinder-Director ",
    tab: "YOUTH MINISTRY",
    img: "",
  },
  {
    name: "Mr.Samuel Wakwatekwa",
    title: "Adventurer-Director",
    tab: "YOUTH MINISTRY",
    img: "",
  },

  /* children */
  { name: "Mrs.Edrine Muhumuza", title: "Director", tab: "CHILDREN MINISTRY" },
  {
    name: "Mrs.Doreen Kaweesi",
    title: "Asst Director ",
    tab: "CHILDREN MINISTRY",
    img: "",
  },
  {
    name: "Mrs Charity Hafashimana",
    title: "Kindergarten",
    tab: "CHILDREN MINISTRY",
    img: "",
  },
  {
    name: "Nyiraneza Wilmer",
    title: "Primary",
    tab: "CHILDREN MINISTRY",
    img: "",
  },
  {
    name: "Mrs Juliet",
    title: "PowerPoint",
    tab: "CHILDREN MINISTRY",
    img: "",
  },
  {
    name: "Tr. Salim",
    title: "Real Time",
    tab: "CHILDREN MINISTRY",
    img: "",
  },
  {
    name: "Nathan Bazungu",
    title: "Cornerstone",
    tab: "CHILDREN MINISTRY",
    img: "",
  },

  /* women */
  {
    name: "Mrs. Valleria Nsaszabaganwa",
    title: "Director",
    tab: "WOMEN MINISTRY",
    img: "",
  },
  {
    name: "Gertude Mukyala",
    title: "Asst Director ",
    tab: "WOMEN MINISTRY",
    img: "",
  },

  /* COMMUNICATION */
  {
    name: "Mr.Seth Tibenda",
    title: "Director",
    tab: "COMMUNICATION",
    img: "/TIBENDA SEITH -IT.jpg",
  },

  /* education */
  { name: "Mrs.Marget Baleeta", title: "", tab: "EDUCATION", img: "" },
  {
    name: "Eld.Okoth Ronald",
    title: "",
    tab: "EDUCATION",
    img: "/RONALD OTIENO OKOTH-QUALITY ASSURANCE_.jpg",
  },

  /* FAMILY LIFE */
  { name: "Eld.Amoah John", title: "Director", tab: "FAMILY LIFE", img: "" },

  /* HEALTH */
  {
    name: "Ms.Cate Kafeero",
    title: "Director",
    tab: "HEALTH MINISTRY",
    img: "",
  },
  {
    name: "Mrs.Joan Kabuye",
    title: "Asst Director ",
    tab: "HEALTH MINISTRY",
    img: "",
  },

  /* MUSIC */
  {
    name: "Eld.Kirabo Jacob",
    title: "",
    tab: "MUSIC",
    img: "/KIRABO JACOB .E.-QUALITY ASSURANCE.jpg",
  },
  { name: "Mrs.Busuulwa Eline", title: "", tab: "MUSIC", img: "" },

  /* CHURCH CHOIR*/
  {
    name: "Mrs.Musisi",
    title: "",
    tab: "CHURCH CHOIR",
    img: "/RUTH KUTEESA MUSISI-ADMIN ASS.jpg",
  },

  /* PRISON MINISTRY */
  {
    name: "Eld.Katamba Enock",
    title: "",
    tab: "PRISON MINISTRY",
    img: "/KATAMBA ENOCK-SOCIAL WORK (1).jpg",
  },
  {
    name: "Ms.Collins Basemera",
    title: "Asst Director ",
    tab: "PRISON MINISTRY",
    img: "",
  },

  /* PUBLIC AFFAIRS AND RELIGIOUS LIBERTY */
  {
    name: "Pr.Aliddeki Christain",
    title: "",
    tab: "PUBLIC AFFAIRS AND RELIGIOUS LIBERTY",
    img: "",
  },
  {
    name: "Pr.Achiga Anthony",
    title: "",
    tab: "PUBLIC AFFAIRS AND RELIGIOUS LIBERTY",
    img: "",
  },

  /* SOCIAL AND WELFARE */
  { name: "Ms.Sarah Lwokyaza", title: "", tab: "SOCIAL AND WELFARE", img: "" },
  {
    name: "Mrs.Harriet Katamba",
    title: "",
    tab: "SOCIAL AND WELFARE",
    img: "",
  },

  /* CUSTODIAN */
  { name: "Mr.Lumu Marvin", title: "", tab: "CUSTODIAN" },
  { name: "Mr.Birumi Timothy", title: "", tab: "CUSTODIAN", img: "" },

  /* STERWARDSHIP AND DEVELOPMENT */
  {
    name: "Mrs.Tibenda Vicky",
    title: "",
    tab: "STERWARDSHIP AND DEVELOPMENT",
    img: "",
  },
  {
    name: "Mrs.Grace Birungi",
    title: "",
    tab: "STERWARDSHIP AND DEVELOPMENT",
    img: "",
  },

  /* SHEPHERDESS */
  { name: "Mrs.Ellen Kyoma", title: "", tab: "SHEPHERDESS", img: "" },

  /* POSSIBILITY MINISTRY */
  {
    name: "Eld.Moses Muhumuza",
    title: "",
    tab: "POSSIBILITY MINISTRY",
    img: "/MUHUMUZA MOSES-EDUC.jpg",
  },
  {
    name: "Mugge Lillian Florence",
    title: " ",
    tab: "POSSIBILITY MINISTRY",
    img: "",
  },

  /* PIANISTS */
  { name: "Hafasha Arthur", title: "", tab: "PIANISTS", img: "" },
  { name: "Wasswa Edson", title: "", tab: "PIANISTS", img: "" },
  { name: "Kato Elvis", title: "", tab: "PIANISTS", img: "" },

  /* COMPANY LEADERS */
  {
    name: "Eld.Dan Magalu",
    title: "Kampala Campus",
    tab: "COMPANY LEADERS",
    img: "/MUGALU DANIEL-SCH BUSINESS.jpg",
  },
  {
    name: "Akok Akok Ngor",
    title: "Forest View",
    tab: "COMPANY LEADERS",
    img: "",
  },
  {
    name: "Sabbato Mbanza",
    title: "Seattle",
    tab: "COMPANY LEADERS",
    img: "",
  },

  /* PUBLISHING MINISTRY */
  {
    name: "Niyobitegeka Joshua",
    title: "",
    tab: "PUBLISHING MINISTRY",
    img: "",
  },
  {
    name: "Eld.Paul Mukasa",
    title: "",
    tab: "PUBLISHING MINISTRY",
    img: "",
  },
];

const tabs = [
  "ELDERS",
  "DEACONARY",
  "CLERKS",
  "TREASURY",
  "INTEREST CORDINATOR",
  "SABBATH SCHOOL",
  "PERSONAL MINISTRY",
  "ADVENTIST MEN",
  "YOUTH MINISTRY",
  "CHILDREN MINISTRY",
  "WOMEN MINISTRY",
  "COMMUNICATION",
  "EDUCATION",
  "FAMILY LIFE",
  "HEALTH MINISTRY",
  "MUSIC",
  "CHURCH CHOIR",
  "PRISON MINISTRY",
  "PUBLIC AFFAIRS AND RELIGIOUS LIBERTY",
  "SOCIAL AND WELFARE",
  "CUSTODIAN",
  "STERWARDSHIP AND DEVELOPMENT",
  "SHEPHERDESS",
  "POSSIBILITY MINISTRY",
  "PIANISTS",
  "COMPANY LEADERS",
  "PUBLISHING MINISTRY",
];

export default function DepartmentsPage() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const filteredLeaders = allLeaders.filter(
    (leader) => leader.tab === activeTab
  );

  return (
    <main className="min-h-screen overflow-hidden pr-5 md:pr-20 bg-white text-gray-900">
      <MainNav />

      <div className="text-center my-6 pt-24">
        <div className="text-center my-10 pt-13">
          <div className="w-64 mx-auto aspect-rectangle overflow-hidden rounded-lg shadow-md bg-cyan-900 ">
            <img
              src="MBABALI CALEB-CHAPLAIN.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-4xl md:text-2xl font-bold text-white-900 mb-0">
            PASTOR CALEB MBABALI
          </h2>
          <h2 className="text-4xl md:text-2xl font-bold text-white-900 mb-6">
            CHAPLAIN
          </h2>
        </div>
        <h2 className="text-4xl md:text-6xl font-bold text-cyan-900 mb-6">
          CHURCH LEADERSHIP
        </h2>

        {/* Tabs */}
        <div className="flex justify-center flex-wrap gap-4 mt-6 border-b pb-3 bg-cyan-900 p-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-sm font-medium transition duration-200 px-3 py-1 rounded-md ${
                tab === activeTab
                  ? "border-b-2 border-white text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10 px-4">
          {filteredLeaders.map((leader, index) => (
            <div
              key={index}
              className="text-center bg-gray-50 rounded-lg shadow-md p-4"
              data-aos="fade-up"
            >
              <div className="w-full aspect-square bg-gray-200 rounded-lg overflow-hidden">
                {leader.img ? (
                  <Image
                    src={leader.img}
                    alt={leader.name}
                    width={300}
                    height={300}
                    className="w-full h-half object-fit"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                    No Image
                  </div>
                )}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{leader.name}</h3>
              <p className="text-sm text-gray-600">{leader.title}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
