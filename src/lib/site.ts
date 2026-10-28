export const site = {
  name: "Trail Bottle Depot",
  sisterName: "Trail Waste Disposal",
  sisterHref: "https://trailwastedisposal.ca",
  url: "https://trailbottledepot.ca",
  description:
    "See which beverage containers Trail Bottle Depot accepts for a refund in Calgary, and which items we don’t take.",
  phone: "403-253-2155",
  phoneHref: "tel:+14032532155",
  email: "trailbot@telus.net",
  emailHref: "mailto:trailbot@telus.net",
  address: "8499 Horton Rd. SW, Calgary, AB T2V 5J3",
  addressLines: ["8499 Horton Rd. SW", "Calgary, AB T2V 5J3"],
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=8499+Horton+Rd+SW,+Calgary,+AB+T2V+5J3",
  hours: [
    { days: "Monday to Saturday", time: "8:30 AM – 5:30 PM" },
    { days: "Sunday", time: "9:00 AM – 5:00 PM" },
  ],
  holidayNote: "Holiday hours are 9:00 AM – 5:00 PM. Closed Christmas Day and New Year’s Day.",
} as const;
