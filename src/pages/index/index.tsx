import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as NativeSwiper, Navigation, SwiperOptions } from "swiper";
import { NavigationOptions } from "swiper/types/components/navigation";
import { ReactComponent as HeroImage } from "./hero.svg";
import "./index.scss";
import "swiper/swiper.scss";
import { ServicesPage } from "../services/services";
import { Brif } from "../../components/brif/brif";

NativeSwiper.use([Navigation]);

export class IndexPage extends React.Component {
  breakpoints: {
    [key: number]: SwiperOptions;
  } = {
    590: {
      slidesPerView: 1.2,
      spaceBetween: 10,
      centeredSlides: false,
    },
    710: {
      slidesPerView: 1.5,
      spaceBetween: 20,
      centeredSlides: false,
    },
    980: {
      slidesPerView: 2,
      centeredSlides: false,
    },
    1140: {
      slidesPerView: 2.4,
      spaceBetween: 20,
    },
    1450: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1550: {
      slidesPerView: 3.3,
      spaceBetween: 36,
    },
    1920: {
      slidesPerView: 3.8,
      spaceBetween: 36,
    },
  };
  navigation: NavigationOptions = {
    nextEl: ".btn-next",
    prevEl: ".btn-prev",
  };
  render() {
    return (
      <main>
        <div className="container">
          <div className="hero">
            <div className="hero__text">
              <p>Digital — агенство</p>
              <h1>
                Дизайн, разработка, и продвижение вашего <span>продукта</span>{" "}
                <span className="blink">_</span>
              </h1>
              <p>Давайте создадим что-то вместе</p>
            </div>
            <HeroImage className="img" />
          </div>
          <div className="social">
            <svg
              width="50"
              height="31"
              viewBox="0 0 50 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.5705 13.9814C21.6081 13.4678 22.3925 12.8956 22.9301 12.2774C23.8864 11.1639 24.3583 9.68754 24.3583 7.85742C24.3583 6.0765 23.8864 4.55396 22.9426 3.27749C21.3675 1.19822 18.7016 0.133978 14.9325 0.0786133H0V30.0773H13.9231C15.492 30.0773 16.9452 29.945 18.2891 29.6744C19.6329 29.4006 20.7955 28.8993 21.78 28.1672C22.6551 27.5305 23.3864 26.74 23.9677 25.808C24.8865 24.3993 25.3459 22.8029 25.3459 21.0251C25.3459 19.3026 24.9428 17.8354 24.1427 16.6297C23.3332 15.424 22.1456 14.5412 20.5705 13.9814ZM6.1599 5.28909H12.8855C14.3637 5.28909 15.5826 5.44596 16.5389 5.75662C17.6453 6.20877 18.1984 7.12844 18.1984 8.53103C18.1984 9.78905 17.7765 10.6687 16.9421 11.1639C16.1014 11.6592 15.0107 11.9083 13.673 11.9083H6.1599V5.28909ZM16.7952 24.3439C16.0514 24.6976 15.0044 24.873 13.6637 24.873H6.1599V16.8727H13.7668C15.0919 16.8819 16.1233 17.0542 16.8608 17.3771C18.1734 17.9616 18.8266 19.0319 18.8266 20.5976C18.8266 22.4431 18.1516 23.6857 16.7952 24.3439Z"
                fill="#1C1C1C"
              />
              <path
                d="M45.1946 1.47784H31.9529V5.21181H45.1946V1.47784Z"
                fill="#1C1C1C"
              />
              <path
                d="M49.7947 16.2144C49.5196 14.4766 48.9133 12.948 47.9695 11.6285C46.935 10.1338 45.6224 9.03882 44.0254 8.34679C42.4347 7.65169 40.6439 7.30413 38.65 7.30721C35.3028 7.30721 32.5838 8.33756 30.4805 10.3829C28.3834 12.4344 27.3334 15.3839 27.3334 19.2285C27.3334 23.3284 28.4928 26.2903 30.8243 28.108C33.1464 29.9288 35.8278 30.8361 38.8718 30.8361C42.5565 30.8361 45.4224 29.7566 47.4695 27.6036C48.7789 26.2441 49.5196 24.9062 49.6822 23.5929H43.5816C43.2285 24.2419 42.8191 24.7494 42.3503 25.1184C41.5002 25.7951 40.3939 26.1334 39.0375 26.1334C37.7468 26.1334 36.6529 25.8535 35.7403 25.2968C34.234 24.4049 33.4464 22.8424 33.3464 20.6187H49.9947C50.0197 18.7026 49.9572 17.2293 49.7947 16.2144ZM33.4964 16.7895C33.7152 15.347 34.2465 14.2029 35.0903 13.3571C35.9341 12.5143 37.128 12.0899 38.6562 12.0868C40.0657 12.0868 41.2439 12.4836 42.2034 13.2802C43.1503 14.0829 43.6848 15.2486 43.7941 16.7895H33.4964Z"
                fill="#1C1C1C"
              />
            </svg>
            <svg
              width="31"
              height="32"
              viewBox="0 0 31 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask id="path-1-inside-1" fill="white">
                <path d="M15.5051 7.54077C11.1096 7.54077 7.55104 11.1032 7.55104 15.4949C7.55104 19.8904 11.1135 23.4489 15.5051 23.4489C19.9007 23.4489 23.4592 19.8865 23.4592 15.4949C23.4592 11.0993 19.8968 7.54077 15.5051 7.54077ZM15.5051 20.6576C12.6518 20.6576 10.3423 18.3469 10.3423 15.4949C10.3423 12.6429 12.6531 10.3321 15.5051 10.3321C18.3571 10.3321 20.6679 12.6429 20.6679 15.4949C20.6692 18.3469 18.3584 20.6576 15.5051 20.6576Z" />
              </mask>
              <path
                d="M15.5051 7.54077C11.1096 7.54077 7.55104 11.1032 7.55104 15.4949C7.55104 19.8904 11.1135 23.4489 15.5051 23.4489C19.9007 23.4489 23.4592 19.8865 23.4592 15.4949C23.4592 11.0993 19.8968 7.54077 15.5051 7.54077ZM15.5051 20.6576C12.6518 20.6576 10.3423 18.3469 10.3423 15.4949C10.3423 12.6429 12.6531 10.3321 15.5051 10.3321C18.3571 10.3321 20.6679 12.6429 20.6679 15.4949C20.6692 18.3469 18.3584 20.6576 15.5051 20.6576Z"
                fill="#1C1C1C"
              />
              <path
                d="M20.6679 15.4949H-0.665424L-0.66542 15.5045L20.6679 15.4949ZM15.5051 -13.7926C-0.67927 -13.7926 -13.7823 -0.672111 -13.7823 15.4949H28.8844C28.8844 22.8785 22.8984 28.8741 15.5051 28.8741V-13.7926ZM-13.7823 15.4949C-13.7823 31.6792 -0.661853 44.7823 15.5051 44.7823V2.11561C22.8888 2.11561 28.8844 8.10156 28.8844 15.4949H-13.7823ZM15.5051 44.7823C31.6895 44.7823 44.7925 31.6618 44.7925 15.4949H2.12587C2.12587 8.11121 8.11182 2.11561 15.5051 2.11561V44.7823ZM44.7925 15.4949C44.7925 -0.689528 31.6721 -13.7926 15.5051 -13.7926V28.8741C8.12148 28.8741 2.12587 22.8882 2.12587 15.4949H44.7925ZM15.5051 -0.675686C24.4374 -0.675686 31.6757 6.56826 31.6757 15.4949H-10.991C-10.991 30.1254 0.866272 41.991 15.5051 41.991V-0.675686ZM31.6757 15.4949C31.6757 24.4249 24.4352 31.6654 15.5051 31.6654V-11.0013C0.871041 -11.0013 -10.991 0.860786 -10.991 15.4949H31.6757ZM15.5051 31.6654C6.57504 31.6654 -0.665422 24.4249 -0.665422 15.4949H42.0012C42.0012 0.860789 30.1392 -11.0013 15.5051 -11.0013V31.6654ZM-0.66542 15.5045C-0.66947 6.56157 6.58167 -0.675686 15.5051 -0.675686V41.991C30.1352 41.991 42.0079 30.1321 42.0012 15.4852L-0.66542 15.5045Z"
                fill="black"
                mask="url(#path-1-inside-1)"
              />
              <mask id="path-3-inside-2" fill="white">
                <path d="M21.8911 0.0985341C19.0391 -0.0345076 11.9749 -0.0280492 9.12036 0.0985341C6.61194 0.216076 4.39932 0.821867 2.61553 2.60566C-0.365641 5.58683 0.0154006 9.60391 0.0154006 15.4952C0.0154006 21.5247 -0.320433 25.4488 2.61553 28.3847C5.60832 31.3762 9.68353 30.9849 15.5051 30.9849C21.4777 30.9849 23.5392 30.9887 25.6511 30.1711C28.5225 29.0564 30.6899 26.4899 30.9017 21.8799C31.0361 19.0266 31.0283 11.9638 30.9017 9.1092C30.646 3.66741 27.7255 0.367201 21.8911 0.0985341ZM26.4054 26.4124C24.4512 28.3667 21.7399 28.1923 15.4676 28.1923C9.00928 28.1923 6.41948 28.2879 4.52978 26.393C2.35332 24.2269 2.74728 20.7484 2.74728 15.4745C2.74728 8.33808 2.0149 3.19853 9.17719 2.8317C10.8228 2.77358 11.3072 2.7542 15.4495 2.7542L15.5076 2.79295C22.3909 2.79295 27.7914 2.0722 28.1156 9.2332C28.1892 10.8672 28.206 11.358 28.206 15.4939C28.2047 21.8773 28.3262 24.4826 26.4054 26.4124Z" />
              </mask>
              <path
                d="M21.8911 0.0985341C19.0391 -0.0345076 11.9749 -0.0280492 9.12036 0.0985341C6.61194 0.216076 4.39932 0.821867 2.61553 2.60566C-0.365641 5.58683 0.0154006 9.60391 0.0154006 15.4952C0.0154006 21.5247 -0.320433 25.4488 2.61553 28.3847C5.60832 31.3762 9.68353 30.9849 15.5051 30.9849C21.4777 30.9849 23.5392 30.9887 25.6511 30.1711C28.5225 29.0564 30.6899 26.4899 30.9017 21.8799C31.0361 19.0266 31.0283 11.9638 30.9017 9.1092C30.646 3.66741 27.7255 0.367201 21.8911 0.0985341ZM26.4054 26.4124C24.4512 28.3667 21.7399 28.1923 15.4676 28.1923C9.00928 28.1923 6.41948 28.2879 4.52978 26.393C2.35332 24.2269 2.74728 20.7484 2.74728 15.4745C2.74728 8.33808 2.0149 3.19853 9.17719 2.8317C10.8228 2.77358 11.3072 2.7542 15.4495 2.7542L15.5076 2.79295C22.3909 2.79295 27.7914 2.0722 28.1156 9.2332C28.1892 10.8672 28.206 11.358 28.206 15.4939C28.2047 21.8773 28.3262 24.4826 26.4054 26.4124Z"
                fill="#1C1C1C"
              />
              <path
                d="M9.12036 0.0985341L8.17528 -21.2139L8.14854 -21.2127L8.1218 -21.2114L9.12036 0.0985341ZM2.61553 28.3847L-12.4694 43.4697L-12.4662 43.4729L2.61553 28.3847ZM25.6511 30.1711L33.3533 50.0655L33.3625 50.062L33.3716 50.0584L25.6511 30.1711ZM30.9017 21.8799L9.592 20.8766L9.59144 20.8886L9.59089 20.9006L30.9017 21.8799ZM30.9017 9.1092L52.2141 8.16413L52.2129 8.13591L52.2115 8.1077L30.9017 9.1092ZM4.52978 26.393L19.6353 11.3287L19.6071 11.3004L19.5788 11.2722L4.52978 26.393ZM9.17719 2.8317L8.42413 -18.4883L8.255 -18.4824L8.08599 -18.4737L9.17719 2.8317ZM15.4495 2.7542L27.2833 -14.9961L21.9088 -18.5791H15.4495V2.7542ZM15.5076 2.79295L3.67389 20.5433L9.04834 24.1263H15.5076V2.79295ZM28.1156 9.2332L49.4273 8.27291L49.4271 8.26834L28.1156 9.2332ZM28.206 15.4939L49.5394 15.4982V15.4939H28.206ZM22.8852 -21.2116C19.3458 -21.3767 11.6333 -21.3672 8.17528 -21.2139L10.0654 21.4109C12.3166 21.3111 18.7323 21.3077 20.897 21.4087L22.8852 -21.2116ZM8.1218 -21.2114C2.74325 -20.9594 -5.50211 -19.4466 -12.4694 -12.4793L17.7005 17.6906C16.203 19.1881 14.4413 20.2214 12.7704 20.8181C11.2645 21.3558 10.2111 21.4042 10.1189 21.4085L8.1218 -21.2114ZM-12.4694 -12.4793C-18.2703 -6.67839 -20.2763 0.0163559 -20.9544 5.18284C-21.4715 9.12282 -21.3179 13.9311 -21.3179 15.4952H21.3487C21.3487 14.6662 21.342 13.8606 21.3377 13.2279C21.3331 12.5515 21.3311 12.0453 21.335 11.6001C21.3432 10.6496 21.3788 10.5119 21.3494 10.7354C21.3114 11.0249 21.1473 12.093 20.5361 13.5081C19.8763 15.0357 18.9036 16.4875 17.7005 17.6906L-12.4694 -12.4793ZM-21.3179 15.4952C-21.3179 17.2246 -21.4618 21.9834 -20.928 25.9473C-20.2296 31.133 -18.1995 37.7396 -12.4694 43.4697L17.7005 13.2998C18.8841 14.4834 19.8585 15.9222 20.5269 17.4557C21.1466 18.8774 21.3167 19.9542 21.357 20.2528C21.3881 20.4839 21.3516 20.348 21.3407 19.3967C21.3357 18.9529 21.3364 18.4421 21.3398 17.7664C21.3429 17.1381 21.3487 16.3198 21.3487 15.4952H-21.3179ZM-12.4662 43.4729C-6.62952 49.3071 0.111617 51.293 5.24523 51.9614C9.18012 52.4737 13.994 52.3182 15.5051 52.3182V9.65154C14.6798 9.65154 13.879 9.65852 13.2489 9.66306C12.5753 9.66792 12.0721 9.67022 11.6279 9.66664C10.681 9.65901 10.5385 9.6238 10.7538 9.65183C11.0321 9.68807 12.0884 9.84807 13.4937 10.4518C15.0122 11.1041 16.475 12.0748 17.6972 13.2965L-12.4662 43.4729ZM15.5051 52.3182C19.6073 52.3182 26.6082 52.6769 33.3533 50.0655L17.9489 10.2767C18.5874 10.0295 19.2642 9.83532 19.9034 9.70979C20.4683 9.59883 20.7762 9.58728 20.6137 9.59806C20.4216 9.6108 19.9849 9.6301 19.0648 9.64081C18.1506 9.65145 17.0432 9.65154 15.5051 9.65154V52.3182ZM33.3716 50.0584C38.3893 48.1105 43.282 44.6496 46.8886 39.3707C50.4514 34.1559 51.9605 28.3447 52.2126 22.8592L9.59089 20.9006C9.63112 20.025 9.95064 17.8021 11.6589 15.3017C13.411 12.7373 15.7843 11.1171 17.9306 10.2838L33.3716 50.0584ZM52.2115 22.8832C52.3787 19.3318 52.3672 11.6169 52.2141 8.16413L9.58934 10.0543C9.6894 12.3106 9.69347 18.7214 9.592 20.8766L52.2115 22.8832ZM52.2115 8.1077C51.9199 1.90233 49.9498 -5.84541 43.8078 -12.1829C37.5632 -18.6262 29.6412 -20.9005 22.8724 -21.2122L20.9097 21.4093C19.9754 21.3663 16.4308 20.8764 13.169 17.5108C10.0099 14.251 9.62781 10.8743 9.59192 10.1107L52.2115 8.1077ZM11.3205 11.3274C12.8264 9.82156 14.6555 8.60301 16.6233 7.79177C18.3911 7.06302 19.7376 6.88628 20.0635 6.84793C20.3421 6.81517 20.2469 6.84559 19.2886 6.85724C18.2901 6.86938 17.293 6.85895 15.4676 6.85895V49.5256C17.5925 49.5256 21.7219 49.6137 25.0481 49.2224C29.5621 48.6914 35.9507 47.037 41.4904 41.4973L11.3205 11.3274ZM15.4676 6.85895C13.6896 6.85895 12.6086 6.86391 11.6727 6.84754C10.7333 6.83111 10.6496 6.79911 10.9512 6.83709C11.3009 6.88113 12.659 7.07366 14.431 7.82234C16.4009 8.65471 18.1866 9.87599 19.6353 11.3287L-10.5757 41.4573C-5.18257 46.8653 1.03379 48.5918 5.61974 49.1693C9.01178 49.5965 13.0969 49.5256 15.4676 49.5256V6.85895ZM19.5788 11.2722C21.4153 13.1 22.6011 15.1507 23.2923 16.9822C23.915 18.6321 24.037 19.8418 24.0572 20.0511C24.0752 20.2381 24.0505 20.0997 24.053 19.1575C24.0542 18.7159 24.0597 18.2477 24.0667 17.5993C24.0733 16.9882 24.0806 16.2579 24.0806 15.4745H-18.5861C-18.5861 16.5897 -18.7172 20.9875 -18.4124 24.1472C-18.0235 28.1795 -16.669 35.3932 -10.5192 41.5138L19.5788 11.2722ZM24.0806 15.4745C24.0806 12.8087 24.0363 12.29 24.0691 11.1585C24.0963 10.22 24.171 11.318 23.5924 13.1238C22.8463 15.4523 21.0183 18.9394 17.2328 21.5407C13.831 23.8783 10.8414 24.1078 10.2684 24.1371L8.08599 -18.4737C3.93186 -18.2609 -1.65209 -17.2514 -6.93096 -13.624C-12.5936 -9.73291 -15.5814 -4.44608 -17.0396 0.105183C-18.3304 4.1338 -18.5203 7.87767 -18.5796 9.92146C-18.6333 11.7722 -18.5861 14.5721 -18.5861 15.4745H24.0806ZM9.93025 24.1517C10.7561 24.1226 11.0866 24.1108 11.6829 24.1023C12.3581 24.0926 13.3771 24.0875 15.4495 24.0875V-18.5791C11.1593 -18.5791 10.4061 -18.5583 8.42413 -18.4883L9.93025 24.1517ZM3.61577 20.5045L3.67389 20.5433L27.3414 -14.9574L27.2833 -14.9961L3.61577 20.5045ZM15.5076 24.1263C18.1055 24.1263 18.5959 24.083 19.6971 24.116C20.5995 24.143 19.5554 24.2134 17.8137 23.6602C15.6076 22.9595 12.1464 21.21 9.5158 17.4625C7.10012 14.0211 6.83759 10.9376 6.8041 10.1981L49.4271 8.26834C49.2315 3.94833 48.1724 -1.73044 44.4378 -7.05075C40.4884 -12.6772 35.186 -15.5892 30.7289 -17.0048C26.7361 -18.2729 23.031 -18.4699 20.9748 -18.5315C19.1174 -18.5872 16.3514 -18.5404 15.5076 -18.5404V24.1263ZM6.8039 10.1935C6.83815 10.9537 6.84941 11.237 6.85778 11.764C6.86809 12.4134 6.87269 13.4063 6.87269 15.4939H49.5394C49.5394 11.2544 49.5226 10.3876 49.4273 8.27291L6.8039 10.1935ZM6.87269 15.4896C6.87233 17.2769 6.87886 18.3318 6.86365 19.2792C6.84857 20.2189 6.81712 20.2977 6.85475 19.9946C6.89888 19.6392 7.08937 18.2855 7.83122 16.5212C8.65395 14.5644 9.85892 12.7958 11.2851 11.3629L41.5258 41.4618C46.9018 36.0605 48.6244 29.858 49.1963 25.2519C49.6154 21.8762 49.5389 17.7774 49.5394 15.4982L6.87269 15.4896Z"
                fill="black"
                mask="url(#path-3-inside-2)"
              />
              <path
                d="M23.7744 9.08558C24.8009 9.08558 25.6331 8.25341 25.6331 7.22687C25.6331 6.20034 24.8009 5.36816 23.7744 5.36816C22.7479 5.36816 21.9157 6.20034 21.9157 7.22687C21.9157 8.25341 22.7479 9.08558 23.7744 9.08558Z"
                fill="#1C1C1C"
                stroke="black"
                strokeWidth="21.3333"
              />
            </svg>

            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15 0C6.7191 0 0 6.7191 0 15C0 23.2809 6.7191 30 15 30C23.2646 30 30 23.2809 30 15C30 6.7191 23.2646 0 15 0ZM24.9078 6.91431C26.6974 9.09435 27.7712 11.8764 27.8037 14.8861C27.3807 14.8048 23.1508 13.9425 18.8883 14.4794C18.7907 14.2679 18.7093 14.0401 18.6117 13.8124C18.3514 13.1941 18.0586 12.5597 17.7657 11.9577C22.4837 10.038 24.6312 7.27224 24.9078 6.91431ZM15 2.21258C18.2538 2.21258 21.231 3.43275 23.4924 5.43384C23.2646 5.75922 21.3286 8.346 16.7733 10.0542C14.6746 6.19848 12.3482 3.0423 11.9902 2.55423C12.9501 2.32646 13.9588 2.21258 15 2.21258ZM9.5499 3.41649C9.89154 3.87201 12.1692 7.04448 14.3004 10.8189C8.31345 12.4132 3.02604 12.3807 2.45662 12.3807C3.28632 8.41107 5.97072 5.10846 9.5499 3.41649ZM2.18004 15.0163C2.18004 14.8861 2.18004 14.756 2.18004 14.6258C2.73319 14.6421 8.94795 14.7234 15.3416 12.8037C15.7158 13.5195 16.0575 14.2516 16.3829 14.9837C16.2202 15.0326 16.0412 15.0814 15.8785 15.1301C9.27333 17.2614 5.75922 23.0857 5.46639 23.5738C3.43275 21.3124 2.18004 18.3026 2.18004 15.0163ZM15 27.82C12.0391 27.82 9.30585 26.8113 7.14207 25.1193C7.36986 24.6475 9.9729 19.6367 17.1963 17.115C17.2289 17.0987 17.2451 17.0987 17.2777 17.0824C19.0835 21.7516 19.8156 25.6724 20.0108 26.795C18.4653 27.462 16.7733 27.82 15 27.82ZM22.1421 25.6237C22.0119 24.8427 21.3287 21.1009 19.6529 16.4968C23.6714 15.8623 27.1855 16.9035 27.6247 17.0499C27.0716 20.6128 25.0217 23.6876 22.1421 25.6237Z"
                fill="black"
              />
            </svg>
          </div>

          <span className="adequate_cost">
            У нас нет скидок, у нас адекватные цены
            <span className="blink">_</span>
          </span>
        </div>
        <div className="slider">
          <div>
            <Swiper
              loop={true}
              centeredSlides={true}
              autoplay={true}
              breakpoints={this.breakpoints}
              navigation={this.navigation}
            >
              <SwiperSlide>
                <img src="image2.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="image4.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="image6.jpg" alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="navigation">
            <div className="navigation-buttons">
              <button className="btn-prev">
                <svg
                  width="157"
                  height="8"
                  viewBox="0 0 157 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.646454 3.64646C0.451187 3.84172 0.451187 4.1583 0.646454 4.35357L3.82843 7.53555C4.0237 7.73081 4.34027 7.73081 4.53554 7.53555C4.73079 7.34029 4.73079 7.0237 4.53554 6.82844L1.70711 4.00001L4.53554 1.17159C4.73079 0.976324 4.73079 0.659742 4.53554 0.464479C4.34027 0.269217 4.0237 0.269217 3.82843 0.464479L0.646454 3.64646ZM157 3.5L1 3.50001L1 4.50001L157 4.5L157 3.5Z"
                    fill="black"
                  />
                </svg>
              </button>
              <button className="btn-next">
                <svg
                  width="157"
                  height="8"
                  viewBox="0 0 157 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M156.354 4.35358C156.549 4.15832 156.549 3.84174 156.354 3.64647L153.172 0.464493C152.976 0.269231 152.66 0.269231 152.464 0.464493C152.269 0.659755 152.269 0.976337 152.464 1.1716L155.293 4.00003L152.464 6.82845C152.269 7.02372 152.269 7.3403 152.464 7.53556C152.66 7.73082 152.976 7.73082 153.172 7.53556L156.354 4.35358ZM-8.74228e-08 4.5L156 4.50003L156 3.50003L8.74228e-08 3.5L-8.74228e-08 4.5Z"
                    fill="black"
                  />
                </svg>
              </button>
              <button>
                Смотреть все проекты
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.0001 18.9999C9.7664 19.0004 9.53996 18.919 9.36005 18.7699C9.25879 18.686 9.17509 18.5829 9.11374 18.4665C9.05239 18.3502 9.01459 18.2229 9.00251 18.0919C8.99044 17.9609 9.00432 17.8289 9.04337 17.7033C9.08241 17.5777 9.14585 17.461 9.23005 17.3599L13.7101 11.9999L9.39005 6.62994C9.30699 6.52765 9.24495 6.40996 9.20752 6.28362C9.17009 6.15728 9.158 6.02479 9.17194 5.89376C9.18587 5.76273 9.22557 5.63575 9.28875 5.52011C9.35192 5.40447 9.43732 5.30246 9.54005 5.21994C9.64352 5.1289 9.76468 5.06024 9.89595 5.01825C10.0272 4.97626 10.1657 4.96185 10.3028 4.97594C10.4399 4.99002 10.5726 5.03229 10.6926 5.1001C10.8126 5.1679 10.9173 5.25977 11.0001 5.36994L15.8301 11.3699C15.9771 11.5489 16.0575 11.7733 16.0575 12.0049C16.0575 12.2366 15.9771 12.461 15.8301 12.6399L10.8301 18.6399C10.7297 18.761 10.6023 18.8566 10.4581 18.9192C10.3139 18.9817 10.157 19.0094 10.0001 18.9999Z"
                    fill="#333333"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <ServicesPage />
        <div className="divider"></div>
        <Brif />
      </main>
    );
  }
}
