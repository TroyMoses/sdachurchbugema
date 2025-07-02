"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MainNav } from "@/components/main-nav";
import { NewsCard } from "@/components/news-card";
import { VideoCard } from "@/components/video-card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

import { EventsCard } from "@/components/events";
import YouTubeVideos from "@/components/YouTubeVideos";

export default function NewsPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <main className="min-h-screen overflow-hidden md:pr-16">
      <MainNav />

      {/* Featured News */}
      <section className="pt-20">
        <div className="container mx-auto px-4">
          <div className="w-full">
            <div className="relative h-[400px] lg:h-[500px]">
              <Image
                src="/_MG_7809.JPG"
                alt="Southern California Conference Mobilizes"
                fill
                className="object-cover rounded-lg"
                priority
              />
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute inset-0 container mx-auto px-4 flex flex-col items-center justify-center text-center">
                <h1
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white/70 mb-6 md:ml-10"
                  data-aos="fade-up"
                >
                  News & Events
                </h1>
                <p
                  className="text-base md:text-xl lg:text-2xl text-white/70 mb-6 md:ml-10"
                  data-aos="fade-up"
                >
                  Explore all the latest news and events of our church
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="p-5 mb-10 flex flex-col md:flex-row gap-10 md:gap-5 justify-center items-center">
          <div className="flex flex-col justify-start">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm text-gray-500">March 13, 2025</span>
              <span className="text-sm text-primary">CRISIS</span>
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">
              North Buganda Conference Moves Quickly to Mobilize Outreach as
              Wildfires Descend
            </h1>
            <p className="text-gray-600 mb-6">
              The Southern California Conference has been serving as a central
              hub for providing aid to impacted communities.
            </p>
            <Link href="/news/north-buganda">
              <Button className="w-fit">Read More</Button>
            </Link>
          </div>
          <div className="flex flex-col justify-start">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm text-gray-500">January 29, 2025</span>
              <span className="text-sm text-primary">CRISIS</span>
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">
              Southern California Conference Moves Quickly to Mobilize Outreach
              as Wildfires Descend
            </h1>
            <p className="text-gray-600 mb-6">
              The Southern California Conference has been serving as a central
              hub for providing aid to impacted communities.
            </p>
            <Link href="/news/southern-california">
              <Button className="w-fit">Read More</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Videos */}
      <section className="py-8 md:px-8 bg-[#2F557F]">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-white">Latest videos</h2>
            <a
              href="https://www.youtube.com/@SDACHURCHBUGEMAUNIVERSITY"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white flex items-center gap-2 hover:text-gray-300"
            >
              Watch more videos <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div>
            <YouTubeVideos />
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-10 md:px-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Upcoming Events</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-6">Healthcare</h3>
              <EventsCard
                title="Belém Adventist Hospital Celebrates Renewal of Qmentum Diamond Seal"
                image="/_MG_7809.JPG"
                date="January 29, 2025"
                category="HEALTHCARE"
                description="Awarded for Excellence in Safety and Humanized Care, the hospital remains committed to providing quality patient care, leaders say."
              />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Humanitarian</h3>
              <EventsCard
                title="Southern California Conference Moves Quickly to Mobilize Outreach."
                image="/ABOUT SDAC.JPG"
                date="January 29, 2025"
                category="CRISIS"
                description="Awarded for Excellence in Safety and Humanized Care, the hospital remains committed to providing quality patient care, leaders say."
              />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Mission</h3>
              <EventsCard
                title="Adventist Organizations Offers Free Medical and Dental Care in Philippine City"
                image="/_MG_7809.JPG"
                date="January 28, 2025"
                category="MISSION"
                description="Awarded for Excellence in Safety and Humanized Care, the hospital remains committed to providing quality patient care, leaders say."
              />
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-10 md:px-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Latest News</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <NewsCard
              title="Belém Adventist Hospital Celebrates Renewal of Qmentum Diamond Seal"
              image="/ABOUT SDAC.JPG"
              date="January 29, 2025"
              category="HEALTHCARE"
              description="Awarded for Excellence in Safety and Humanized Care, the hospital remains committed to providing quality patient care, leaders say."
            />
            <NewsCard
              title="ADRA Steps Up Relief Efforts Amid Severe Flooding in Brazil"
              image="/_MG_7809.JPG"
              date="January 28, 2025"
              category="HUMANITARIAN"
              description="Awarded for Excellence in Safety and Humanized Care, the hospital remains committed to providing quality patient care, leaders say."
            />
            <NewsCard
              title="Loma Linda University Medical Center Empowers New Mothers"
              image="/ABOUT SDAC.JPG"
              date="January 27, 2025"
              category="HEALTHCARE"
              description="Awarded for Excellence in Safety and Humanized Care, the hospital remains committed to providing quality patient care, leaders say."
            />
          </div>
        </div>
      </section>
    </main>
  );
}
