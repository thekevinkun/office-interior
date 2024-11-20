import {
  kitchenRoom,
  meetingRoom,
  recreationRoom,
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

const sells = [
  {
    category: "living room",
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
    category: "kitchen",
    items: [
      {
        title: "",
        price: "",
        img: "",
      },
      {
        title: "",
        price: "",
        img: "",
      },
      {
        title: "",
        price: "",
        img: "",
      },
    ],
  },
  {
    category: "desk",
    items: [
      {
        title: "",
        price: "",
        img: "",
      },
      {
        title: "",
        price: "",
        img: "",
      },
      {
        title: "",
        price: "",
        img: "",
      },
    ],
  },
  {
    category: "chairs",
    items: [
      {
        title: "",
        price: "",
        img: "",
      },
      {
        title: "",
        price: "",
        img: "",
      },
      {
        title: "",
        price: "",
        img: "",
      },
    ],
  },
];

export { blog, sells };
