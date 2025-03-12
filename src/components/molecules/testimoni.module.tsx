"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { fetchData } from "@/lib/backendless";
import { Testimonial } from "@/types/types";

export default function TestimonialSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const testimonialReview = await fetchData<Testimonial>("testimonial");
        setTestimonials(testimonialReview);
      } catch (error) {
        console.error("Failed to fetch testimonials:", error);
      }
    };

    fetchTestimonials();
  }, []);

  useEffect(() => {
    if (testimonials.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 3) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials]);

  return (
    <section className="max-w-screen-xl mx-auto p-8 flex flex-col md:flex-row gap-8 items-center">
      <div className="md:w-1/3 text-center md:text-left">
        <h2 className="text-3xl font-bold text-gray-800">
          What Our Clients Say – Brewed to Perfection, Loved by Many ❤️
        </h2>
        <p className="mt-4 text-gray-600">
          At Brew Blissful Coffee, our passion for crafting the finest coffee is
          reflected in the experiences of our customers. From coffee enthusiasts
          to café owners, they love the rich flavors, fresh aroma, and
          consistent quality in every cup. Here’s what they have to say about
          our coffee!
        </p>
      </div>

      <div className="md:w-2/3 overflow-hidden">
        <div className="grid grid-cols-1 gap-4">
          {testimonials.length > 0 &&
            testimonials
              .slice(currentIndex, currentIndex + 3)
              .map((testimonial, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-white border-2 border-[#24AA6F] rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
                >
                  <Image
                    src={testimonial.image_url}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {testimonial.name}
                    </h3>
                    <span className="text-sm text-gray-500">
                      {testimonial.role}
                    </span>
                    <p className="text-gray-600">{testimonial.textreview}</p>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
}
