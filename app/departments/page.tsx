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
  { name: "PASTOR CALEB MBABALI", title: "Chaplain", tab: "Executive" },
  {
    name: "Marius Tirca",
    title: "Co-Founder & Chief Technology Officer",
    tab: "Executive",
  },
  { name: "Ashim Gupta", title: "Chief Financial Officer", tab: "Executive" },
  { name: "Bobby Patrick", title: "Chief Marketing Officer", tab: "Executive" },

  { name: "Jane Doe", title: "Global Strategy Lead", tab: "Global" },
  { name: "John Global", title: "Director of Global Outreach", tab: "Global" },

  {
    name: "Carlos Ramirez",
    title: "Regional Director - Americas",
    tab: "Americas",
  },
  {
    name: "Maria Lopez",
    title: "Program Coordinator - Americas",
    tab: "Americas",
  },

  { name: "Kofi Mensah", title: "Regional Pastor - EMEA", tab: "EMEA" },
  { name: "Fatima Zahra", title: "Youth Director - EMEA", tab: "EMEA" },

  { name: "Kenji Tanaka", title: "APAC Ministry Lead", tab: "APAC" },
  { name: "Siti Nur", title: "Community Organizer - APAC", tab: "APAC" },
];

const tabs = ["Executive", "Global", "Americas", "EMEA", "APAC"];

export default function DepartmentsPage() {
  const [activeTab, setActiveTab] = useState("Executive");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const filteredLeaders = allLeaders.filter(
    (leader) => leader.tab === activeTab
  );

  return (
    <main className="min-h-screen overflow-hidden pr-16">
      <MainNav />
      <div className="text-center my-10 pt-24">
        <h2 className="text-6xl font-bold text-cyan-900">CHURCH LEADERSHIP </h2>

        {/* Tabs */}
        <div className="flex justify-center space-x-8 mt-6 border-b  bg-cyan-900">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 text-sm font-medium transition duration-200 ${
                tab === activeTab
                  ? "border-b-2 border-white-500 text-white"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 mr-12 ml-12">
          {filteredLeaders.map((leader, index) => (
            <div key={index} className="text-left" data-aos="fade-up">
              <div className="w-full h-64 bg-gray-300 rounded-lg flex items-center justify-center text-gray-400 text-lg">
                {/* Placeholder or future image */}
                {leader.img ? (
                  <Image
                    src={leader.img}
                    alt={leader.name}
                    width={50}
                    height={100}
                    className="rounded-lg object-cover"
                  />
                ) : (
                  "No Image"
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
