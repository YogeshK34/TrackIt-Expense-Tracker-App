import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Managing my expenses has never been easier. This app helped me save more by showing exactly where my money was going.",
      name: "Walter White",
      designation: "Chemistry Teacher at Albuquerque High School",
      src: "https://th.bing.com/th/id/R.c37ec7b017b3ee60ca54cf3ed6d5bfd2?rik=4wFwAVhd9Se5fg&riu=http%3a%2f%2fbaltimorepostexaminer.com%2fwp-content%2fuploads%2fWalter-White_FB.jpg&ehk=8%2fCI5P6ZyQ1Zj0J1%2bGgH4zUu5H2oQztI6ixTMJ0mppg%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      quote:
        "The intuitive design made budgeting a breeze. I finally feel in control of my finances thanks to this app.",
      name: "Tyler Durden",
      designation: "CTO at Fig**Cl**",
      src: "https://wallpapercave.com/wp/wp2657416.jpg",
    },
    {
      quote:
        "Tracking expenses used to be a hassle. Now I can do it on the go, and it’s so simple to analyze my spending habits.",
      name: "Thomas Shelby",
      designation: "Owner of Garrison Pub",
      src: "https://wallpapercave.com/wp/wp4966941.jpg",
    },
    {
      quote:
        "The detailed reports and spending insights helped me cut down on unnecessary expenses. It's a game-changer for anyone serious about saving.",
      name: "Professor Snape",
      designation: "Teacher at Hogwarts",
      src: "https://wallpaperaccess.com/full/1585633.jpg",
    },
    {
      quote:
        "Finally, an expense tracker that delivers what it promises. The reminders and budget tools have been lifesavers for my financial goals.",
      name: "Bruce Wayne",
      designation: "Philanthropist and Entrepreneur",
      src: "https://images.hdqwalls.com/download/the-batman-robert-pattinson-4k-zt-2560x1600.jpg",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
