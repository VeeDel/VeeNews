import windowsSurface from "../assets/windowssurface.jpg";
import netflix from "../assets/netflix.jpg";
import students from "../assets/students.jpg";
import ipad from "../assets/ipad.jpg";
import dell from "../assets/dell.jpg";
import camera from "../assets/camera.jpg";
import goku from "../assets/goku.jpg";
import robot from "../assets/robot.jpg";
import server from "../assets/server.jpg";
import well from "../assets/well.jpg";
import gojo from "../assets/jujutsu-kaisen-satoru-gojo-hd-wallpaper-preview.jpg";
import facebook from "../assets/icons8-facebook.svg";
import twitter from "../assets/icons8-twitter.svg";
import youtube from "../assets/icons8-youtube.svg";
import iphone2 from "../assets/iphone2.jpg";
import appStore from "../assets/appStore.jpg";
import instagram from "../assets/instagram.jpg";
import ipadhand from "../assets/ipadinhand.jpg";
import googleHome from "../assets/googleHome.jpg";
import applewatch from "../assets/watch.jpg";
import edit from "../assets/Edit.jpg";
import cad from "../assets/cad.jpg";
import esco from "../assets/escalators.jpg";
import xboxRemote from "../assets/xboxRemote.jpg";
import pcgamer from "../assets/pcGamer.jpg";

export const allData = [
  {
    category: "Company",
    data: [
      { text: "About", link: "/" },
      { text: "Contact", link: "/" },
      { text: "Our Staff", link: "/" },
      { text: "Advertise", link: "/" },
    ],
  },
  {
    category: "TechNews",
    data: [
      { text: "Technology", link: "/" },
      { text: "Gadget", link: "/" },
      { text: "Software", link: "/" },
      { text: "Games", link: "/" },
    ],
  },
  {
    category: "Legal",
    data: [
      { text: "Privacy Policy", link: "/" },
      { text: "Terms Of Service", link: "/" },
      { text: "Extra Crunch Terms", link: "/" },
      { text: "Code of Conduct", link: "/" },
    ],
  },
];

export const games = [
  {
    image: xboxRemote,
    title: "There will Be some new features in upcoming XBox",
    description:
      "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet …",
  },
  {
    image: pcgamer,
    title: "This is a badnews For PC gamers. There will be no GTA6 for Pc",
    description:
      "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet …",
  },
];

export const gedgets = [
  {
    image: ipadhand,
    label: "How a Gadget Drives Human Creativity",
    author: "Goku",
    date: "09 oct 2020",
    description:
      "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet volutpat rutrum sociis quis velit, commodo enim aliquet. …",
  },
  {
    image: googleHome,
    label: "An IoT Failure Worst Nightmare",
    author: "Jerry",
    date: "09 sep 2020",
    description:
      "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet volutpat rutrum sociis quis velit, commodo enim aliquet. …",
  },
  {
    image: applewatch,
    label: "dogs Do thier duty For science",
    author: "krilin",
    date: "09 oct 2020",
    description:
      "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet volutpat rutrum sociis quis velit, commodo enim aliquet. …",
  },
];

export const software = [
  {
    image: edit,
    label: "Scientists Fear Climate Data Gap as Trump Aims at Satellites",
    author: "Goku",
    date: "09 oct 2020",
    description:
      "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet volutpat rutrum sociis quis velit, commodo enim aliquet. …",
  },
  {
    image: cad,
    label: "Life on CAD:get to know the Shortcut",
    author: "Jerry",
    date: "09 sep 2020",
    description:
      "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet volutpat rutrum sociis quis velit, commodo enim aliquet. …",
  },
  {
    image: esco,
    label: "Why you Shouldm't Walk on Escalators",
    author: "krilin",
    date: "09 oct 2020",
    description:
      "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet volutpat rutrum sociis quis velit, commodo enim aliquet. …",
  },
];
export const navlinks = [
  { href: "#technology", label: "technology" },
  { href: "#gadgets", label: "gadgets" },
  { href: "#software", label: "software" },
  { href: "#apps", label: "apps" },
  { href: "#games", label: "games" },
];

export const apps = [
  {
    topic: "Apps",
    desc: "Broke a Glass? Someday You Might 3-D-Print a New One",
  },
  {
    topic: "games",
    desc: "Broke a Glass? Someday You Might 3-D-Print a New One",
  },
  {
    topic: "Editors Pick",
    desc: "This Is a Giant Shipworm. You May Wish It Had Stayed In Its Tube.",
  },
];

export const editorsPick = [
  {
    topic: "Editors Pick",
    label: "For Families of Teens at Microsoft Surface",
    image: windowsSurface,
  },
  {
    topic: "editors pick",
    label: "Why Netflix Shares Are Down 10%",
    image: netflix,
  },
  {
    topic: "apps",
    image: students,
    label: "6 bots that Devliver Science and Serendipity on Twitter",
  },
];

export const techReview = [
  {
    topic: "gadget",
    label: "iPad Pro M1 Chip: Bringing The MacBook Pro Power",
    description: `The New iPad Pro is Apple's most powerful tablet yet—and it comes with an M1 chip for lightning`,
    image: ipad,
    author: "jin Khazama",
    date: "july 7 2023",
  },
  {
    topic: "gadget",
    label: "Dell XPS 13 2021: The best Windows laptop now with OLED",
    description: `TExperience peak computing with the latest Dell laptop. This sleek powerhouse combines top-notch performance with a stylish design, offering a seamless blend of productivity and entertainment innovation.`,
    image: dell,
    author: "Honey Singh",
    date: "july 7 2023",
  },
  {
    topic: "Review",
    label: "Watching Their Dust: Photographing Players in Pollination",
    description:
      "Capture lifes essence with this compact yet powerful camera, delivering exceptional image quality and intuitive controls. Its your ideal companion for unforgettable moments.",
    image: camera,
    author: "John Cena",
    date: "july 7 2023",
  },
];

export const socialMedias = [
  {
    logo: facebook,
    title: "TechWire News",
    followers: "2M+ Followers",
  },
  {
    logo: twitter,
    title: "@techwirenews",
    followers: "1.4M+ Followers",
  },
  {
    logo: youtube,
    title: "@techWirenews",
    followers: "4M+ Subscriber",
  },
];

export const animeNews = [
  {
    title: "New Season of Dragon Ball Super is Coming This Year",
    description:
      "Although the most recent entry into the Dragon Ball Super series was just last year, with the film Dragon Ball Super: Super Hero, fans have been desperate since the series ended in 2018 to hear whether a season 2 was on the cards, or if Toei Animation are going in a feature adaptation direction from hereon out.",
    image: goku,
  },
  {
    title:
      "Can Gojo Beat Sukuna in his full power..? fans are waiting for this fight.",
    description:
      "For Gojo, this was the ultimate test and one that he was very excited to take. It is safe to say that he succeeded in defeating Sukuna and got his name engraved in history itself. Gojo is, by far, the stronger of the two sorcerers in nearly every single aspect of battle.",
    image: gojo,
  },
];
export const technology = [
  {
    label: "A Lesson From the Henrietta Lacks Story: Science Needs Your Cells",
    author: "Big Show",
    description:
      "The Henrietta Lacks story underscores the ethical complexities in scientific research. Henrietta Lacks' cells were used without her knowledge, contributing to numerous medical breakthroughs. This narrative highlights the importance of informed consent and ethical practices in scientific endeavors, urging a thoughtful approach to the use of human cells in research.",
    date: "27 july 2021",
    image: robot,
  },
  {
    label: "What Moves Gravel-Size Gypsum Crystals Around the Desert?",
    author: "Bobby Deol",
    description:
      "Gravel-sized gypsum crystals in the desert are moved by a phenomenon known as gypsum dune migration. Wind, combined with the unique properties of gypsum, causes these crystals to be transported across the desert floor, creating mesmerizing patterns and contributing to the dynamic landscape of arid regions.",
    date: "22 aug 2021",
    image: server,
  },
  {
    label: "Scientists, Feeling Under Siege, March Against Trump Policies",
    author: "Papita-Man",
    description:
      "Scientists, feeling the impact of Trump policies, marched to advocate for evidence-based decision-making and the preservation of scientific integrity. The protest emphasized the crucial role of science in informing policies and addressed concerns about potential threats to research funding and climate initiatives, showcasing a commitment to safeguarding the scientific community's autonomy.",
    date: "30 july 2021",
    image: well,
  },
];

export const AnotherApps = [
  {
    label: "Antarctic Ice Reveals Earth’s Accelerating Plant Growth",
    author: "Batista",
    date: "10 Oct 2020",
    description:
      "Analysis of Antarctic ice cores unveils a compelling story of Earth's accelerating plant growth over time. These findings provide valuable insights into the planet's ecological dynamics and contribute to our understanding of climate change impacts on vegetation.",
    image: iphone2,
  },
  {
    label: "Antarctic Ice Reveals Earth’s Accelerating Plant Growth",
    author: "Pangiya",
    date: "22 Oct 2021",
    description:
      "Recent studies on Antarctic ice cores shed light on Earth's increasing plant growth rates. This revelation has profound implications for ecological balance and global environmental changes, highlighting the intricate relationship between climate and vegetation.",
    image: appStore,
  },
  {
    label: "Antarctic Ice Reveals Earth’s Accelerating Plant Growth",
    author: "Cartoon",
    date: "14 Nov 2022",
    description:
      "Discoveries in Antarctic ice core samples unveil the remarkable phenomenon of Earth's accelerating plant growth. The research not only deepens our comprehension of planetary ecology but also emphasizes the intricate interplay between climate shifts and the flourishing of vegetation.",
    image: instagram,
  },
];
