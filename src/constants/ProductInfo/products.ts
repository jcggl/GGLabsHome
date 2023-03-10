import { CarouselCardType } from "@/components/Product/CarouselCard/CarouselCard.types";
import { beergangImageList } from "@/constants/Images/beergang-image-list";
import { kikitownImageList } from "@/constants/Images/kikitown-image-list";
import { marionetteImageList } from "@/constants/Images/marionette-image-list";
import kikitown from "../../assets/videos/kiki_video.mp4";
import marionette from "@/assets/videos/marionette_video.mp4";
import beergang from "@/assets/videos/beergang_video.mp4";

export const products: CarouselCardType[] = [
  {
    imageList: kikitownImageList,
    videoSrc: "http://d3n7wfb7g7ygbc.cloudfront.net/kiki_video.mp4",
    iosVideoSrc: kikitown,
    href: "https://www.kiki.town/",
    title: "Kiki Town",
    subTitle: "Off with your video, On with your avatar!",
    description:
      "A place where you feel comfortable and private, no matter how you look and what you're talking about.",
  },
  {
    imageList: marionetteImageList,
    videoSrc: "http://d3n7wfb7g7ygbc.cloudfront.net/marionette_video.mp4",
    iosVideoSrc: marionette,
    href: "#",
    title: "Marionette API",
    subTitle: "Make your avatar alive with your face and voice.",
    description:
      "Our cloud-based real-time avatar motion API lets developers quickly and easily apply our product, which allows users to animate their avatars only with webcam, audio, or text input.",
  },
  {
    imageList: beergangImageList,
    videoSrc: "http://d3n7wfb7g7ygbc.cloudfront.net/beergang_video.mp4",
    iosVideoSrc: beergang,
    href: "https://www.beergang.xyz/",
    title: "Beergang NFT",
    subTitle: "The world’s first emotionally interactive full-body 3D avatar.",
    description:
      "Beergang is a collection avatars built on the Homebrew Algorithm and stored on blockchain network and IPFS. Using beer and pub culture as a motif.",
  },
];