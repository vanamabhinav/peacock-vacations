import HeroSection from "@/sections/packages/HeroSection";

export default async function Home() {
  return (
    <main role="main">
      <HeroSection
        packageImageUrl="https://images.pexels.com/photos/533769/pexels-photo-533769.jpeg"
        average_duration="5 - 7 days"
        basePrice={48921}
        userRating={{
          rating: 4.2,
          count: 7023,
        }}
      />
    </main>
  );
}
