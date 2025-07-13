Hero Section Data (HeroSlide[]):

- An array of video slides.
- Each slide contains:
  - \_id (object reference id)
  - videoUrl: string
  - title: string
  - description: string
  - ctaText: string
  - ctaLink: string

Popular Destinations Section :
Destinations Data:

- Key: Month or Region (e.g., "January", "North India")
- Value (DestinationContent):
  - destinations: Destination[]
  - ctaCard: CtaCard

Destination (type):

- title: string
- subtitle: string
- image: string
- url: string

ctaCard (type):

- title: string
- subtitle: string
- lowertext: string
- url: string

Travel Packages Section:

- sectionTitle: string
- sectionSubtitle: string
- packages: TravelPackage[]

TravelPackage (type):

- location: { icon: string[such as northIndia, southIndia etc], name: string }
- image: string
- title: string
- description: string
- url: string
- pricing: { original: string, discounted: string }
- includes: { icon: string[for icon showing], text: string }[]
