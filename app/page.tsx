"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MainNav } from "@/components/main-nav";
import { HeroCarousel } from "@/components/hero-carousel";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <main className="min-h-screen overflow-hidden">
      <div className="md:pr-[100px]">
        
        <MainNav />
        <HeroCarousel />

        {/* Mission Statement Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto">
            <h2
              className="text-3xl font-bold text-center mb-12"
              data-aos="fade-up"
            >
              Mission Statement
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div
                className="text-center"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary text-2xl">🎯</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  <span className="text-highlight">Our</span> Mission
                </h3>
                <p className="text-gray-600">
                  Make disciples of Jesus Christ who live as His loving
                  witnesses and proclaim to all people the everlasting gospel of
                  the Three Angels{"'"} Messages in preparation for His soon
                  return
                </p>
              </div>
              <div
                className="text-center"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary text-2xl">👁️</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  <span className="text-highlight">Our</span> Vision
                </h3>
                <p className="text-gray-600">
                  In harmony with Bible revelation, Seventh-day Adventists see
                  as the climax of God{"'"}s plan the restoration of all His
                  creation to full harmony with His perfect will and
                  righteousness.
                </p>
              </div>
              <div
                className="text-center"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary text-2xl">📚</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  <span className="text-highlight">Our</span> Method
                </h3>
                <p className="text-gray-600">
                  Guided by the Bible and the Holy Spirit, Seventh-day
                  Adventists pursue this mission through Christ-like living,
                  communicating, discipling, teaching, healing, and serving.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div data-aos="fade-right">
                <h2 className="text-4xl font-bold mb-4">
                  About{" "}
                  <span className="text-highlight">SDAC-BUGEMA UNIVERSITY</span>
                </h2>
                <p className="text-gray-600 mb-6">
                  We are called to eat, drink, speak, think and work to the
                  glory of God. We worship God by remembering the gospel through
                  preaching, teaching, singing, praying and celebrating baptism
                  and communion.
                </p>
                <Link href="/about">
                  <Button className="bg-[#2F557F] hover:bg-[#3a6699] text-white">
                    About Us
                  </Button>
                </Link>
              </div>
              <div className="relative h-[400px]" data-aos="fade-left">
                <Image
                  src="/ABOUT SDAC.JPG"
                  alt="Church activities"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Weekly Sermons Section */}
        <section className="relative py-24">
          <Image
            src="/WEELKLY SERMON BG.jpg"
            alt="Prayer background"
            fill
            className="object-cover brightness-50"
          />
          <div className="relative container mx-auto">
            <div className="max-w-lg" data-aos="fade-up">
              <div className="inline-block bg-white/10 px-4 py-2 rounded-full text-white mb-4">
                A Word From God
              </div>
              <h2 className="text-4xl font-bold text-white mb-4">
                Weekly <span className="text-highlight">Sermons</span>
              </h2>
              <p className="text-white mb-6">
                We worship God by remembering the gospel through preaching,
                teaching, singing, praying and celebrating baptism and
                communion.
              </p>
              <Button className="bg-[#2F557F] hover:bg-[#3a6699]">
                All Sermons
              </Button>
            </div>
          </div>
        </section>

        {/* News & Events Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto">
            <div
              className="flex flex-col sm:flex-row justify-between items-center mb-12"
              data-aos="fade-up"
            >
              <h2 className="text-3xl font-bold">News & Events</h2>
              <Link href="/news">
                <Button className="bg-[#2F557F] hover:bg-[#3a6699]">All News</Button>   
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card data-aos="fade-up" data-aos-delay="200">
                <CardContent className="p-4">
                  <div className="relative h-48 mb-4">
                    <Image
                      src="/news 1.JPG"
                      alt="New Year Statement"
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                  <h3 className="font-bold mb-2">
                    Ten days of Prayerled by Pastor Mayambala
                  </h3>
                  <p className="text-gray-500 text-sm">January 2, 2025</p>
                </CardContent>
              </Card>
              <Card data-aos="fade-up" data-aos-delay="400">
                <CardContent className="p-4">
                  <div className="relative h-48 mb-4">
                    <Image
                      src="/news 3.png"
                      alt=""
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                  <h3 className="font-bold mb-2">
                    It was a colorful Pathfinder and Adventures{"'"} induction
                  </h3>
                  <p className="text-gray-500 text-sm">Feb 2nd, 2025</p>
                </CardContent>
              </Card>
              <Card data-aos="fade-up" data-aos-delay="600">
                <CardContent className="p-4">
                  <div className="relative h-48 mb-4">
                    <Image
                      src="/news 3.png"
                      alt=""
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                  <h3 className="font-bold mb-2">
                    Donot miss the Music Sabbath{" "}
                  </h3>
                  <p className="text-gray-500 text-sm">April 12th, 2025</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
      </div>
    </main>
  );
}