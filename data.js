import facebookIcon from "./src/assets/images/icon-facebook.svg";
import twitterIcon from "./src/assets/images/icon-twitter.svg";
import instagramIcon from "./src/assets/images/icon-instagram.svg";
import youtubeIcon from "./src/assets/images/icon-youtube.svg";

const dashboard = [
  {
    id: 1,
    icon : facebookIcon,
    number: 1987,
    type: "followers",
    change: 12,
    borderTop : "border-facebook"
  },
  {
    id:2,
    icon: twitterIcon,
    number: 1044,
    type: "followers",
    change: 99,
    borderTop: "border-twitter",
  },
  {
    id:3,
    icon: instagramIcon,
    number: "11k",
    type: "followers",
    change: 1099,
    borderTop: "border-insta",
  }, {
    id: 4,
    icon: youtubeIcon,
    number: 8239,
    type: "subscribers",
    change: -144,
    borderTop: "border-youtube",
  }
]

const overview = [
  {
    id :1,
    type: "Page Views",
    icon: facebookIcon,
    number: 87,
    change: 3,
  },
  {
    id:2,
    type: "Likes",
    icon: facebookIcon,
    number: 52,
    change: -2,
  },
  {
    id:3,
    type: "Likes",
    icon: instagramIcon,
    number: 5462,
    change: 2257,
  },
  {
    id:4,
    type: "Profile Views",
    icon: instagramIcon,
    number: "52k",
    change: 1375,
  },
  {
    id: 5,
    type: "Retweets",
    icon: twitterIcon,
    number: 117,
    change: 303
  },
  {
    id: 6,
    type: "Likes",
    icon: twitterIcon,
    number: 507,
    change: 553,
  },
  {
    id: 7,
    type: "Likes",
    icon: youtubeIcon,
    number: 107,
    change: -19,
  },
  {
    id: 8,
    type: "Total Views",
    icon: youtubeIcon,
    number: 1407,
    change: -12,
  }
]

export {dashboard, overview}