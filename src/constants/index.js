import {
  kitchenRoom,
  meetingRoom,
  recreationRoom,
  lounge1,
  lounge2,
  lounge3,
  desk1,
  desk2,
  desk3,
  chair1,
  chair2,
  chair3,
  blog1,
  blog2,
  blog3,
} from "../assets";

const blog = [
  {
    title: "Top 10 office design we recommend",
    tagline: "Crafting",
    img: blog1,
  },
  {
    title: "Crafting Greatness",
    tagline: "We create your dream",
    img: blog2,
  },
  {
    title: "Get advice of your current office",
    tagline: "Fully consultation",
    img: blog3,
  },
];

const crafts = [
  {
    id: "spaces",
    category: "work spaces",
    items: [
      {
        title: "Modern kitchen furniture",
        price: "$2.100",
        img: kitchenRoom,
      },
      {
        title: "Meeting room",
        price: "$5.000",
        img: meetingRoom,
      },
      {
        title: "Recreation room",
        price: "$3.000",
        img: recreationRoom,
      },
    ],
  },
  {
    id: "lounges",
    category: "lounges",
    items: [
      {
        title: "corgan offices - chicago",
        price: "$10.000",
        img: lounge1,
      },
      {
        title: "tabaco offices - london",
        price: "$11.000",
        img: lounge2,
      },
      {
        title: "generali offices - warsaw",
        price: "$12.000",
        img: lounge3,
      },
    ],
  },
  {
    id: "desk",
    category: "desk",
    items: [
      {
        title: "antenna workspaces",
        price: "$1.000",
        img: desk1,
      },
      {
        title: "saranac",
        price: "$500",
        img: desk2,
      },
      {
        title: "upside",
        price: "$100",
        img: desk3,
      },
    ],
  },
  {
    id: "chairs",
    category: "chairs",
    items: [
      {
        title: "medinah",
        price: "$100",
        img: chair1,
      },
      {
        title: "kuvi work",
        price: "$80",
        img: chair2,
      },
      {
        title: "island",
        price: "$50",
        img: chair3,
      },
    ],
  },
];

export { blog, crafts };
