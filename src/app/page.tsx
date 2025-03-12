import { fetchData } from "@/lib/backendless";

import Banner from "@/components/molecules/banner.module";
import Partners from "@/components/molecules/partner.module";
import Landing from "@/components/molecules/landing.module";
import OurStory from "@/components/molecules/our-story.module";
import OurProducts from "@/components/molecules/our-products.module";
import OurProcess from "@/components/molecules/our-process.module";
import TestimonialSection from "@/components/molecules/testimoni.module";

export default async function Home() {
  return (
    <>
      <Landing />
      <OurStory />
      <Partners />
      <OurProcess />
      <OurProducts />
      <TestimonialSection />
      <Banner />
    </>
  );
}
