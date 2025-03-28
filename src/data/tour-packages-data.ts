import { IServiceDT } from "@/types/tour-packages-d-t";

import detailsImg from "@/assets/img/inner-page/discover/discover-1.jpg";
import detailsImg1 from "@/assets/img/inner-page/discover/discover-1.webp";
import detailsImg2 from "@/assets/img/inner-page/discover/discover-2.webp";
import detailsImg3 from "@/assets/img/inner-page/discover/discover-3.webp";
import detailsImg4 from "@/assets/img/inner-page/discover/discover-4.webp";
import detailsImg5 from "@/assets/img/inner-page/discover/discover-5.webp";
import detailsImg6 from "@/assets/img/inner-page/discover/discover-6.webp";
import detailsImg7 from "@/assets/img/inner-page/discover/discover-7.webp";
import detailsImg8 from "@/assets/img/inner-page/discover/discover-8.webp";
import packageImg2 from "@/assets/img/home-1/featured/img/img-2.jpg";
import packageImg3 from "@/assets/img/home-1/featured/img/img-3.jpg";
import packageImg4 from "@/assets/img/home-2/featured/thumb/f-2-1.jpg";
import packageImg5 from "@/assets/img/home-2/featured/thumb/f-2-2.webp";
import packageImg6 from "@/assets/img/home-2/featured/thumb/f-2-3.jpg";
import packageImg7 from "@/assets/img/home-2/featured/thumb/f-2-4.jpg";
import packageImg8 from "@/assets/img/home-4/destination/d-4-1.jpg";
import packageImg9 from "@/assets/img/home-4/destination/d-4-2.jpg";
import packageImg10 from "@/assets/img/home-4/destination/d-4-3.jpg";
import packageImg11 from "@/assets/img/home-4/destination/d-4-4.jpg";
import packageImg12 from "@/assets/img/home-4/destination/d-4-5.jpg";
import packageImg13 from "@/assets/img/home-4/destination/d-4-6.jpg";
import { title } from "process";

export const tourPackagesDataOne: IServiceDT[] = [
  {
    id: 1,
    image: packageImg2,
    title: "Cuba Sailing Adventure",
    price: 233,
    badgeTitle: "10%",
    address: "traford Park Lexington,40507",
    rating: "4.8",
    review: "1.6",
    duration: 5,
    travelerCount: 15,
    detailsImg: detailsImg,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in metus. Sem et tortor
                    consequat id porta. Et malesuada fames ac turpis egestas sed. Condimentum vitae sapien
                    pellentesque habitant morbi tristique senectus et. Cras semper auctor neque vitae. Turpis in eu
                    mi bibendum neque. Pellentesque habitant morbi tristique senectus et netus. Ut morbi tincidunt
                    augue interdum velit euismod. At in tellus integer feugiat scelerisque varius morbi. Ultrices
                    neque ornare aenean euismod. Imperdiet proin fermentum leo`,
    progresses: [
      { title: "Service", value: "98%" },
      { title: "Accommodation", value: "92%" },
      { title: "Location", value: "80%" },
      { title: "Price", value: "72%" },
    ],
    btnText: "Explore more",
  },
  {
    id: 2,
    image: packageImg2,
    title: "Tour in New York",
    price: 249,
    isFeature: true,
    address: "new your city, 22054",
    rating: "4.9",
    review: "2.4",
    duration: 7,
    travelerCount: 25,
    detailsImg: detailsImg,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in metus. Sem et tortor
                    consequat id porta. Et malesuada fames ac turpis egestas sed. Condimentum vitae sapien
                    pellentesque habitant morbi tristique senectus et. Cras semper auctor neque vitae. Turpis in eu
                    mi bibendum neque. Pellentesque habitant morbi tristique senectus et netus. Ut morbi tincidunt
                    augue interdum velit euismod. At in tellus integer feugiat scelerisque varius morbi. Ultrices
                    neque ornare aenean euismod. Imperdiet proin fermentum leo`,
    progresses: [
      { title: "Service", value: "90%" },
      { title: "Accommodation", value: "95%" },
      { title: "Location", value: "80%" },
      { title: "Price", value: "92%" },
    ],
    btnText: "Explore more",
  },
  {
    id: 3,
    image: packageImg3,
    title: "Museum of Modern Art",
    price: 299,
    badgeTitle: "12%",
    address: "Alfred avenue London,50607",
    rating: "4.6",
    review: "1.3",
    duration: 3,
    travelerCount: 20,
    detailsImg: detailsImg,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in metus. Sem et tortor
                    consequat id porta. Et malesuada fames ac turpis egestas sed. Condimentum vitae sapien
                    pellentesque habitant morbi tristique senectus et. Cras semper auctor neque vitae. Turpis in eu
                    mi bibendum neque. Pellentesque habitant morbi tristique senectus et netus. Ut morbi tincidunt
                    augue interdum velit euismod. At in tellus integer feugiat scelerisque varius morbi. Ultrices
                    neque ornare aenean euismod. Imperdiet proin fermentum leo`,
    progresses: [
      { title: "Service", value: "90%" },
      { title: "Accommodation", value: "95%" },
      { title: "Location", value: "80%" },
      { title: "Price", value: "92%" },
    ],
    btnText: "Explore more",
  },
];

export const ServicesTwo: IServiceDT[] = [
  {
    id: 4,
    image: detailsImg3,
    title: "Travel & Tour",
    price: 110,
    badgeTitle: "10%",
    isFeature: true,
    address: "traford Park Lexington,40507",
    rating: "4.8",
    shortDescription:
      "Custom travel packages, fully planned. Adventure starts here!",
    review: "1.6",
    duration: 5,
    travelerCount: 12,
    detailsImg: detailsImg3,
    serviceImage: [detailsImg3, detailsImg4],
    offerings: [
      {
        title: "Customized Travel Packages",
        description:
          "Tailor-made itineraries designed to suit your travel preferences, budget, and schedule.",
      },
      {
        title: "Group & Individual Tours",
        description:
          "Whether you prefer solo travel or group adventures, we provide guided and self-guided tour options.",
      },
      {
        title: "Exclusive Destinations",
        description:
          "Discover breathtaking locations across the Gulf Region, America, Europe, and beyond.",
      },
      {
        title: "Hassle-Free Travel Planning",
        description:
          "We handle flights, accommodations, transportation, and more, so you can focus on enjoying your trip.",
      },
      {
        title: "24/7 Travel Support",
        description:
          "Our dedicated team is available around the clock to assist you throughout your journey.",
      },
    ],
    whyUs: [
      {
        title: "Reliable & Experienced",
        description:
          "Years of expertise in planning seamless travel experiences for thousands of happy travelers.",
      },
      {
        title: "No Hidden Fees",
        description:
          "Transparent pricing with no unexpected costs or last-minute surprises.",
      },
      {
        title: "Fast & Convenient",
        description:
          "Effortless booking, smooth planning, and on-time arrangements for a stress-free trip.",
      },
      {
        title: "Personalized Service",
        description:
          "We prioritize your comfort, preferences, and satisfaction in every step of your journey.",
      },
    ],
    description: `Explore the world with our expertly curated travel and tour packages designed for adventure seekers, business travelers, and holidaymakers alike. We take care of everything—from flights and accommodations to guided tours—ensuring a seamless and memorable journey. Whether you're exploring vibrant cities, relaxing on pristine beaches, or embarking on thrilling adventures, we bring your travel dreams to life with ease and excellence.`,
    progresses: [
      { title: "Service", value: "80%" },
      { title: "Accommodation", value: "95%" },
      { title: "Location", value: "70%" },
      { title: "Price", value: "92%" },
    ],
    btnText: "Know more",
  },
  {
    id: 5,
    image: packageImg5,
    title: "Flight Ticketing",
    heading: "Seamless Flight Bookings for Your Travel Needs",
    overview:
      "Finding the right flight at the best price can be overwhelming, but we make it simple. Our worldwide flight ticketing service ensures you get the best deals on domestic and international flights with ease. Whether you’re traveling for business, leisure, or relocation, we provide a hassle-free booking experience tailored to your preferences.",
    price: 115,
    serviceImage: [detailsImg1, detailsImg2],
    offerings: [
      {
        title: "Global Flight Bookings",
        description:
          "Access flights to any destination worldwide at competitive prices.",
      },
      {
        title: "Flexible Options",
        description:
          "Choose from economy, business, or first-class tickets based on your comfort and budget.",
      },
      {
        title: "Best Price Guarantee",
        description:
          "We compare multiple airlines to offer the most cost-effective options.",
      },
      {
        title: "24/7 Customer Support",
        description:
          "Get assistance with booking, rescheduling, cancellations, and special requests.",
      },
      {
        title: "Group & Corporate Bookings",
        description: "Exclusive deals for group travel and business trips.",
      },
    ],
    badgeTitle: "15%",
    address: "new your city, 22054",
    rating: "4.9",
    review: "2.4",
    duration: 7,
    travelerCount: 15,
    shortDescription: "Affordable flights, fast booking. Travel made simple!",
    detailsImg: detailsImg,
    whyUs: [
      {
        title: "Reliable & Secure",
        description: "We prioritize safety and trust in all our services.",
      },
      {
        title: "No Hidden Fees",
        description: "Transparent pricing with no unexpected charges.",
      },
      {
        title: "Fast & Convenient",
        description: "Quick processing and hassle-free service experience.",
      },
    ],
    description: `Finding the right flight at the best price can be overwhelming, but we make it simple. Our worldwide flight ticketing service ensures you get the best deals on domestic and international flights with ease. Whether you’re traveling for business, leisure, or relocation, we provide a hassle-free booking experience tailored to your preferences.`,
    progresses: [
      { title: "Service", value: "90%" },
      { title: "Accommodation", value: "95%" },
      { title: "Location", value: "80%" },
      { title: "Price", value: "92%" },
    ],
    btnText: "Know more",
  },
  {
    id: 6,
    image: detailsImg5,
    title: "Recruitment & HR Solutions",
    isFeature: true,
    price: 99,
    address: "new your city, 22054",
    rating: "4.5",
    review: "2.4",
    duration: 3,
    travelerCount: 10,
    serviceImage: [detailsImg5, detailsImg6],
    offerings: [
      {
        title: "Global Recruitment Services ",
        description:
          "We connect businesses with the best candidates for various industries across the GCC, America, and Europe.",
      },
      {
        title: "HR Consulting",
        description:
          "Expert HR strategies, policies, and workforce management solutions for business growth.",
      },
      {
        title: "Work Visa & Documentation Support",
        description:
          "Assisting with legal requirements, work permits, and visa processing.",
      },
      {
        title: "Temporary & Permanent Staffing",
        description:
          "Flexible hiring solutions to meet your short-term and long-term workforce needs.",
      },
    ],
    whyUs: [
      {
        title: "Proven Track Record",
        description: "Over 50,000 successful job placements worldwide.",
      },
      {
        title: "Industry Expertise",
        description:
          "Years of experience in recruitment and HR solutions across multiple sectors.",
      },
      {
        title: "Fast & Efficient Hiring Process",
        description:
          "We streamline the recruitment process, saving time and effort for both employers and job seekers.",
      },
      {
        title: "Global Reach",
        description:
          "We source and place talent across international markets, ensuring access to the best opportunities.",
      },
    ],
    heading: "Your Trusted Recruitment Partner",
    shortDescription: "Top talent, tailored HR. Grow with us!",
    detailsImg: detailsImg,
    description: `Finding the right talent is crucial for business success, and we are here to bridge the gap between employers and job seekers. Our Recruitment & HR Solutions provide businesses with top-tier talent while helping individuals secure rewarding career opportunities worldwide. Whether you need skilled professionals, unskilled workers, or executive placements, we ensure a seamless hiring process tailored to your needs.`,
    progresses: [
      { title: "Service", value: "90%" },
      { title: "Accommodation", value: "95%" },
      { title: "Location", value: "80%" },
      { title: "Price", value: "92%" },
    ],
    btnText: "Know more",
  },
  {
    id: 7,
    image: detailsImg7,
    title: "General Contractor",
    heading: "Expert General Contractor Services",
    price: 101,
    badgeTitle: "12%",
    isFeature: true,
    address: "traford Park Lexington,40507",
    rating: "4.8",
    review: "1.6",
    duration: 5,
    travelerCount: 15,
    shortDescription: "Reliable builds, any project. Start today!",
    detailsImg: detailsImg,
    offerings: [
      {
        title: "Construction Management",
        description:
          "Overseeing projects from start to finish, ensuring timely and cost-effective delivery.",
      },
      {
        title: "Renovation & Remodeling ",
        description:
          "Transforming spaces with modern designs and high-quality craftsmanship.",
      },
      {
        title: "Workforce & Skilled Labor",
        description:
          "Providing experienced professionals for various construction and engineering needs.",
      },
      {
        title: "Compliance & Safety Assurance",
        description:
          "Ensuring all projects meet regulatory standards and safety guidelines.",
      },
    ],
    description: `We provide comprehensive general contracting services, offering end-to-end solutions for construction, renovation, and project management. From initial planning and design to execution and final delivery, we ensure precision, quality, and efficiency at every stage. Whether it's residential, commercial, or industrial projects, our team of experts is equipped to handle projects of any scale, meeting deadlines and budget requirements without compromising on excellence. With a strong commitment to safety, compliance, and innovation, we transform visions into reality, delivering durable and aesthetically superior structures that stand the test of time.`,
    serviceImage: [detailsImg7, detailsImg8],
    whyUs: [
      {
        title: "Experienced & Reliable",
        description:
          "Years of expertise in managing diverse construction projects.",
      },
      {
        title: "End-to-End Solutions",
        description:
          "From planning to execution, we handle all aspects of your project.",
      },
      {
        title: "Quality & Efficiency",
        description: "Delivering top-notch results within budget and on time.",
      },
      {
        title: "Customized Services",
        description:
          "Tailored solutions to meet specific project requirements.",
      },
      {
        title: "Strong Industry Network",
        description:
          "Access to skilled labor, premium materials, and trusted suppliers.",
      },
    ],
    progresses: [
      { title: "Service", value: "90%" },
      { title: "Accommodation", value: "95%" },
      { title: "Location", value: "80%" },
      { title: "Price", value: "92%" },
    ],
    btnText: "Know more",
  },
];

export const servicesDataThree: IServiceDT[] = [
  {
    id: 8,
    image: packageImg8,
    title: "Cuba Sailing Adventure",
    price: 101,
    badgeTitle: "12%",
    isFeature: true,
    address: "traford Park Lexington,40507",
    rating: "4.8",
    review: "1.6",
    duration: 5,
    travelerCount: 15,
    detailsImg: detailsImg,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in metus. Sem et tortor
                    consequat id porta. Et malesuada fames ac turpis egestas sed. Condimentum vitae sapien
                    pellentesque habitant morbi tristique senectus et. Cras semper auctor neque vitae. Turpis in eu
                    mi bibendum neque. Pellentesque habitant morbi tristique senectus et netus. Ut morbi tincidunt
                    augue interdum velit euismod. At in tellus integer feugiat scelerisque varius morbi. Ultrices
                    neque ornare aenean euismod. Imperdiet proin fermentum leo`,
    progresses: [
      { title: "Service", value: "90%" },
      { title: "Accommodation", value: "95%" },
      { title: "Location", value: "80%" },
      { title: "Price", value: "92%" },
    ],
    btnText: "Explore more",
  },
  {
    id: 9,
    image: packageImg9,
    title: "Discovery island kayak..",
    price: 181,
    isFeature: true,
    address: "traford Park Lexington,40507",
    rating: "4.8",
    review: "1.6",
    duration: 2,
    travelerCount: 15,
    detailsImg: detailsImg,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in metus. Sem et tortor
                    consequat id porta. Et malesuada fames ac turpis egestas sed. Condimentum vitae sapien
                    pellentesque habitant morbi tristique senectus et. Cras semper auctor neque vitae. Turpis in eu
                    mi bibendum neque. Pellentesque habitant morbi tristique senectus et netus. Ut morbi tincidunt
                    augue interdum velit euismod. At in tellus integer feugiat scelerisque varius morbi. Ultrices
                    neque ornare aenean euismod. Imperdiet proin fermentum leo`,
    progresses: [
      { title: "Service", value: "90%" },
      { title: "Accommodation", value: "95%" },
      { title: "Location", value: "80%" },
      { title: "Price", value: "92%" },
    ],
    btnText: "Explore more",
  },
  {
    id: 10,
    image: packageImg10,
    title: "Beautiful parasailing",
    price: 171,
    badgeTitle: "15%",
    address: "traford Park Lexington,40507",
    rating: "4.8",
    review: "1.6",
    duration: 3,
    travelerCount: 15,
    detailsImg: detailsImg,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in metus. Sem et tortor
                    consequat id porta. Et malesuada fames ac turpis egestas sed. Condimentum vitae sapien
                    pellentesque habitant morbi tristique senectus et. Cras semper auctor neque vitae. Turpis in eu
                    mi bibendum neque. Pellentesque habitant morbi tristique senectus et netus. Ut morbi tincidunt
                    augue interdum velit euismod. At in tellus integer feugiat scelerisque varius morbi. Ultrices
                    neque ornare aenean euismod. Imperdiet proin fermentum leo`,
    progresses: [
      { title: "Service", value: "90%" },
      { title: "Accommodation", value: "95%" },
      { title: "Location", value: "80%" },
      { title: "Price", value: "92%" },
    ],
    btnText: "Explore more",
  },
  {
    id: 11,
    image: packageImg11,
    title: "Sight seeing & taj Mahal..",
    price: 171,
    isFeature: true,
    address: "traford Park Lexington,40507",
    rating: "4.5",
    review: "1.7",
    duration: 5,
    travelerCount: 15,
    detailsImg: detailsImg,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in metus. Sem et tortor
                    consequat id porta. Et malesuada fames ac turpis egestas sed. Condimentum vitae sapien
                    pellentesque habitant morbi tristique senectus et. Cras semper auctor neque vitae. Turpis in eu
                    mi bibendum neque. Pellentesque habitant morbi tristique senectus et netus. Ut morbi tincidunt
                    augue interdum velit euismod. At in tellus integer feugiat scelerisque varius morbi. Ultrices
                    neque ornare aenean euismod. Imperdiet proin fermentum leo`,
    progresses: [
      { title: "Service", value: "90%" },
      { title: "Accommodation", value: "95%" },
      { title: "Location", value: "80%" },
      { title: "Price", value: "92%" },
    ],
    btnText: "Explore more",
  },
  {
    id: 12,
    image: packageImg12,
    title: "Peninsula & Caribbean..",
    price: 151,
    badgeTitle: "12%",
    isFeature: true,
    address: "traford Park Lexington,40507",
    rating: "4.7",
    review: "1.2",
    duration: 4,
    travelerCount: 15,
    detailsImg: detailsImg,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in metus. Sem et tortor
                    consequat id porta. Et malesuada fames ac turpis egestas sed. Condimentum vitae sapien
                    pellentesque habitant morbi tristique senectus et. Cras semper auctor neque vitae. Turpis in eu
                    mi bibendum neque. Pellentesque habitant morbi tristique senectus et netus. Ut morbi tincidunt
                    augue interdum velit euismod. At in tellus integer feugiat scelerisque varius morbi. Ultrices
                    neque ornare aenean euismod. Imperdiet proin fermentum leo`,
    progresses: [
      { title: "Service", value: "90%" },
      { title: "Accommodation", value: "95%" },
      { title: "Location", value: "80%" },
      { title: "Price", value: "92%" },
    ],
    btnText: "Explore more",
  },
  {
    id: 13,
    image: packageImg13,
    title: "Boathouse Neighborhood",
    price: 151,
    badgeTitle: "12%",
    address: "traford Park Lexington,40507",
    rating: "4.7",
    review: "1.2",
    duration: 8,
    travelerCount: 17,
    detailsImg: detailsImg,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in metus. Sem et tortor
                    consequat id porta. Et malesuada fames ac turpis egestas sed. Condimentum vitae sapien
                    pellentesque habitant morbi tristique senectus et. Cras semper auctor neque vitae. Turpis in eu
                    mi bibendum neque. Pellentesque habitant morbi tristique senectus et netus. Ut morbi tincidunt
                    augue interdum velit euismod. At in tellus integer feugiat scelerisque varius morbi. Ultrices
                    neque ornare aenean euismod. Imperdiet proin fermentum leo`,
    progresses: [
      { title: "Service", value: "90%" },
      { title: "Accommodation", value: "95%" },
      { title: "Location", value: "80%" },
      { title: "Price", value: "92%" },
    ],
    btnText: "Explore more",
  },
  {
    id: 14,
    image: packageImg13,
    title: "Cuba Sailing Adventure",
    price: 101,
    badgeTitle: "12%",
    isFeature: true,
    address: "traford Park Lexington,40507",
    rating: "4.8",
    review: "1.6",
    duration: 5,
    travelerCount: 15,
    detailsImg: detailsImg,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in metus. Sem et tortor
                    consequat id porta. Et malesuada fames ac turpis egestas sed. Condimentum vitae sapien
                    pellentesque habitant morbi tristique senectus et. Cras semper auctor neque vitae. Turpis in eu
                    mi bibendum neque. Pellentesque habitant morbi tristique senectus et netus. Ut morbi tincidunt
                    augue interdum velit euismod. At in tellus integer feugiat scelerisque varius morbi. Ultrices
                    neque ornare aenean euismod. Imperdiet proin fermentum leo`,
    progresses: [
      { title: "Service", value: "90%" },
      { title: "Accommodation", value: "95%" },
      { title: "Location", value: "80%" },
      { title: "Price", value: "92%" },
    ],
    btnText: "Explore more",
  },
  {
    id: 15,
    image: packageImg12,
    title: "Discovery island kayak..",
    price: 181,
    isFeature: true,
    address: "traford Park Lexington,40507",
    rating: "4.8",
    review: "1.6",
    duration: 2,
    travelerCount: 15,
    detailsImg: detailsImg,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in metus. Sem et tortor
                    consequat id porta. Et malesuada fames ac turpis egestas sed. Condimentum vitae sapien
                    pellentesque habitant morbi tristique senectus et. Cras semper auctor neque vitae. Turpis in eu
                    mi bibendum neque. Pellentesque habitant morbi tristique senectus et netus. Ut morbi tincidunt
                    augue interdum velit euismod. At in tellus integer feugiat scelerisque varius morbi. Ultrices
                    neque ornare aenean euismod. Imperdiet proin fermentum leo`,
    progresses: [
      { title: "Service", value: "70%" },
      { title: "Accommodation", value: "85%" },
      { title: "Location", value: "90%" },
      { title: "Price", value: "82%" },
    ],
    btnText: "Explore more",
  },
  {
    id: 16,
    image: packageImg11,
    title: "Beautiful parasailing",
    price: 171,
    badgeTitle: "15%",
    address: "traford Park Lexington,40507",
    rating: "4.8",
    review: "1.6",
    duration: 3,
    travelerCount: 15,
    detailsImg: detailsImg,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in metus. Sem et tortor
                    consequat id porta. Et malesuada fames ac turpis egestas sed. Condimentum vitae sapien
                    pellentesque habitant morbi tristique senectus et. Cras semper auctor neque vitae. Turpis in eu
                    mi bibendum neque. Pellentesque habitant morbi tristique senectus et netus. Ut morbi tincidunt
                    augue interdum velit euismod. At in tellus integer feugiat scelerisque varius morbi. Ultrices
                    neque ornare aenean euismod. Imperdiet proin fermentum leo`,
    progresses: [
      { title: "Service", value: "90%" },
      { title: "Accommodation", value: "75%" },
      { title: "Location", value: "80%" },
      { title: "Price", value: "82%" },
    ],
    btnText: "Explore more",
  },
  {
    id: 17,
    image: packageImg10,
    title: "Sight seeing & taj Mahal..",
    price: 171,
    isFeature: true,
    address: "traford Park Lexington,40507",
    rating: "4.5",
    review: "1.7",
    duration: 5,
    travelerCount: 15,
    detailsImg: detailsImg,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in metus. Sem et tortor
                    consequat id porta. Et malesuada fames ac turpis egestas sed. Condimentum vitae sapien
                    pellentesque habitant morbi tristique senectus et. Cras semper auctor neque vitae. Turpis in eu
                    mi bibendum neque. Pellentesque habitant morbi tristique senectus et netus. Ut morbi tincidunt
                    augue interdum velit euismod. At in tellus integer feugiat scelerisque varius morbi. Ultrices
                    neque ornare aenean euismod. Imperdiet proin fermentum leo`,
    progresses: [
      { title: "Service", value: "90%" },
      { title: "Accommodation", value: "85%" },
      { title: "Location", value: "70%" },
      { title: "Price", value: "92%" },
    ],
    btnText: "Explore more",
  },
  {
    id: 18,
    image: packageImg9,
    title: "Peninsula & Caribbean..",
    price: 151,
    badgeTitle: "12%",
    isFeature: true,
    address: "traford Park Lexington,40507",
    rating: "4.7",
    review: "1.2",
    duration: 4,
    travelerCount: 15,
    detailsImg: detailsImg,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in metus. Sem et tortor
                    consequat id porta. Et malesuada fames ac turpis egestas sed. Condimentum vitae sapien
                    pellentesque habitant morbi tristique senectus et. Cras semper auctor neque vitae. Turpis in eu
                    mi bibendum neque. Pellentesque habitant morbi tristique senectus et netus. Ut morbi tincidunt
                    augue interdum velit euismod. At in tellus integer feugiat scelerisque varius morbi. Ultrices
                    neque ornare aenean euismod. Imperdiet proin fermentum leo`,
    progresses: [
      { title: "Service", value: "90%" },
      { title: "Accommodation", value: "95%" },
      { title: "Location", value: "80%" },
      { title: "Price", value: "92%" },
    ],
    btnText: "Explore more",
  },
  {
    id: 19,
    image: packageImg8,
    title: "Boathouse Neighborhood",
    price: 151,
    badgeTitle: "12%",
    address: "traford Park Lexington,40507",
    rating: "4.7",
    review: "1.2",
    duration: 8,
    travelerCount: 17,
    detailsImg: detailsImg,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in metus. Sem et tortor
                    consequat id porta. Et malesuada fames ac turpis egestas sed. Condimentum vitae sapien
                    pellentesque habitant morbi tristique senectus et. Cras semper auctor neque vitae. Turpis in eu
                    mi bibendum neque. Pellentesque habitant morbi tristique senectus et netus. Ut morbi tincidunt
                    augue interdum velit euismod. At in tellus integer feugiat scelerisque varius morbi. Ultrices
                    neque ornare aenean euismod. Imperdiet proin fermentum leo`,
    progresses: [
      { title: "Service", value: "80%" },
      { title: "Accommodation", value: "75%" },
      { title: "Location", value: "85%" },
      { title: "Price", value: "95%" },
    ],
    btnText: "Explore more",
  },
  {
    id: 20,
    image: packageImg10,
    title: "Cuba Sailing Adventure",
    price: 101,
    badgeTitle: "12%",
    isFeature: true,
    address: "traford Park Lexington,40507",
    rating: "4.8",
    review: "1.6",
    duration: 5,
    travelerCount: 15,
    detailsImg: detailsImg,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in metus. Sem et tortor
                    consequat id porta. Et malesuada fames ac turpis egestas sed. Condimentum vitae sapien
                    pellentesque habitant morbi tristique senectus et. Cras semper auctor neque vitae. Turpis in eu
                    mi bibendum neque. Pellentesque habitant morbi tristique senectus et netus. Ut morbi tincidunt
                    augue interdum velit euismod. At in tellus integer feugiat scelerisque varius morbi. Ultrices
                    neque ornare aenean euismod. Imperdiet proin fermentum leo`,
    progresses: [
      { title: "Service", value: "70%" },
      { title: "Accommodation", value: "85%" },
      { title: "Location", value: "80%" },
      { title: "Price", value: "92%" },
    ],
    btnText: "Explore more",
  },
  {
    id: 21,
    image: packageImg11,
    title: "Discovery island kayak..",
    price: 181,
    isFeature: true,
    address: "traford Park Lexington,40507",
    rating: "4.8",
    review: "1.6",
    duration: 2,
    travelerCount: 15,
    detailsImg: detailsImg,
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in metus. Sem et tortor
                    consequat id porta. Et malesuada fames ac turpis egestas sed. Condimentum vitae sapien
                    pellentesque habitant morbi tristique senectus et. Cras semper auctor neque vitae. Turpis in eu
                    mi bibendum neque. Pellentesque habitant morbi tristique senectus et netus. Ut morbi tincidunt
                    augue interdum velit euismod. At in tellus integer feugiat scelerisque varius morbi. Ultrices
                    neque ornare aenean euismod. Imperdiet proin fermentum leo`,
    progresses: [
      { title: "Service", value: "80%" },
      { title: "Accommodation", value: "95%" },
      { title: "Location", value: "90%" },
      { title: "Price", value: "82%" },
    ],
    btnText: "Explore more",
  },
  {
    id: 22,
    image: packageImg12,
    title: "Beautiful parasailing",
    price: 171,
    badgeTitle: "15%",
    address: "traford Park Lexington,40507",
    rating: "4.8",
    review: "1.6",
    duration: 3,
    travelerCount: 13,
    detailsImg: detailsImg,

    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. At volutpat diam ut venenatis tellus in metus. Sem et tortor
                    consequat id porta. Et malesuada fames ac turpis egestas sed. Condimentum vitae sapien
                    pellentesque habitant morbi tristique senectus et. Cras semper auctor neque vitae. Turpis in eu
                    mi bibendum neque. Pellentesque habitant morbi tristique senectus et netus. Ut morbi tincidunt
                    augue interdum velit euismod. At in tellus integer feugiat scelerisque varius morbi. Ultrices
                    neque ornare aenean euismod. Imperdiet proin fermentum leo`,
    progresses: [
      { title: "Service", value: "90%" },
      { title: "Accommodation", value: "95%" },
      { title: "Location", value: "80%" },
      { title: "Price", value: "92%" },
    ],
    btnText: "Explore more",
  },
];

export const ServicesData: IServiceDT[] = [
  ...tourPackagesDataOne,
  ...ServicesTwo,
  ...servicesDataThree,
];
