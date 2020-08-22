import React, { FunctionComponent } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as NativeSwiper, Navigation, SwiperOptions } from "swiper";
import { NavigationOptions } from "swiper/types/components/navigation";
import { Chip } from "../../components/chip/chip";
import "./index.scss";
import "swiper/swiper.scss";

NativeSwiper.use([Navigation]);

export const IndexPage: FunctionComponent = () => {
  const breakpoints: {
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
  const navigation: NavigationOptions = {
    nextEl: ".btn-next",
    prevEl: ".btn-prev",
  };
  return (
    <div>
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
          <svg
            width="561"
            height="545"
            viewBox="0 0 561 545"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M185.737 363L186 272.296L93.2958 272L93.0001 362.672L185.737 363Z"
              fill="url(#paint0_linear)"
            />
            <path
              d="M186.46 452.975L186.755 362.393L93.7555 452.679L186.46 452.975Z"
              fill="url(#paint1_linear)"
            />
            <path
              d="M278.869 543.884L279.164 453.303L186.46 452.975L278.869 543.884Z"
              fill="url(#paint2_linear)"
            />
            <path
              d="M467.43 91.566L467.726 0.95145L375.021 0.656181L467.43 91.566Z"
              fill="url(#paint3_linear)"
            />
            <path
              d="M463.982 544.213L464.245 453.598L371.573 453.303L371.277 543.884L463.982 544.213Z"
              fill="url(#paint4_linear)"
            />
            <path
              d="M93.7045 362.91L93.9672 272.295L1.29569 272L1.00012 362.582L93.7045 362.91Z"
              fill="url(#paint5_linear)"
            />
            <path
              d="M279.165 453.303L279.46 362.688L186.756 362.393C186.592 412.424 226.458 453.139 275.815 453.303H279.165Z"
              fill="url(#paint6_linear)"
            />
            <path
              d="M97.9922 452.417L93.756 456.715L93.7231 460.192L101.44 452.417H97.9922Z"
              fill="url(#paint7_linear)"
            />
            <path
              d="M113.459 452.45L93.6903 472.397V475.874L116.907 452.483L113.459 452.45Z"
              fill="url(#paint8_linear)"
            />
            <path
              d="M128.927 452.516L93.6248 488.079V491.557L132.375 452.516H128.927Z"
              fill="url(#paint9_linear)"
            />
            <path
              d="M144.394 452.549L93.5919 503.761V507.239L147.842 452.581L144.394 452.549Z"
              fill="url(#paint10_linear)"
            />
            <path
              d="M159.861 452.614L93.5259 519.41V522.921L163.309 452.614H159.861Z"
              fill="url(#paint11_linear)"
            />
            <path
              d="M175.328 452.679L93.4931 535.092V538.603L178.776 452.679H175.328Z"
              fill="url(#paint12_linear)"
            />
            <path
              d="M186.428 457.108L101.145 543.032H104.593L186.428 460.586V457.108Z"
              fill="url(#paint13_linear)"
            />
            <path
              d="M186.395 472.791L116.612 543.064L120.06 543.097L186.395 476.268V472.791Z"
              fill="url(#paint14_linear)"
            />
            <path
              d="M186.329 488.472L132.079 543.13H135.527L186.329 491.95V488.472Z"
              fill="url(#paint15_linear)"
            />
            <path
              d="M186.296 504.155L147.546 543.196H150.994L186.263 507.632L186.296 504.155Z"
              fill="url(#paint16_linear)"
            />
            <path
              d="M186.23 519.804L163.013 543.228H166.461L186.23 523.314V519.804Z"
              fill="url(#paint17_linear)"
            />
            <path
              d="M186.197 535.486L178.48 543.294H181.928L186.164 538.996L186.197 535.486Z"
              fill="url(#paint18_linear)"
            />
            <path
              d="M466.806 182.476L467.102 91.8614H465.099C415.019 91.6973 374.266 132.116 374.102 182.181L466.806 182.476Z"
              fill="url(#paint19_linear)"
            />
            <path
              d="M186.704 181.615L187 91.0005H184.997C134.917 90.8365 94.1643 131.255 94.0001 181.32L186.704 181.615Z"
              fill="url(#paint20_linear)"
            />
            <path
              d="M371.376 362.885L371.672 272.27L278.967 271.942L278.672 362.557L371.376 362.885Z"
              fill="url(#paint21_linear)"
            />
            <path
              d="M464.376 272.566L464.639 181.951L371.967 181.656L371.672 272.27L464.376 272.566Z"
              fill="url(#paint22_linear)"
            />
            <path
              d="M557.081 272.861L557.343 182.279L464.639 181.951L464.376 272.566L557.081 272.861Z"
              fill="url(#paint23_linear)"
            />
            <path
              d="M556.785 363.476L557.08 272.861H553.731C504.374 272.697 464.245 313.116 464.08 363.18L556.785 363.476Z"
              fill="url(#paint24_linear)"
            />
            <path
              d="M371.081 453.467L371.376 362.885L278.672 362.557L278.376 453.171L371.081 453.467Z"
              fill="url(#paint25_linear)"
            />
            <path
              d="M463.785 453.795L464.081 363.18L371.376 362.885C371.212 412.917 411.079 453.631 460.436 453.795H463.785Z"
              fill="url(#paint26_linear)"
            />
            <path
              d="M92.4093 545L92.7049 454.385L0.000505375 454.09C-0.163689 504.122 39.7028 544.836 89.0598 545H92.4093Z"
              fill="url(#paint27_linear)"
            />
            <path
              d="M556.49 454.09L556.785 363.476L464.081 363.18L463.785 453.795L556.49 454.09Z"
              fill="url(#paint28_linear)"
            />
            <path
              d="M559.872 90.9099L560.168 0.295268L467.463 0L467.168 90.6146L559.872 90.9099Z"
              fill="url(#paint29_linear)"
            />
            <path
              d="M283.5 181.361L279.23 185.658V189.169L286.948 181.361H283.5Z"
              fill="url(#paint30_linear)"
            />
            <path
              d="M298.967 181.426L279.197 201.34L279.165 204.851L302.415 181.426H298.967Z"
              fill="url(#paint31_linear)"
            />
            <path
              d="M314.433 181.458L279.131 217.022V220.532L317.881 181.491L314.433 181.458Z"
              fill="url(#paint32_linear)"
            />
            <path
              d="M329.9 181.524L279.098 232.703L279.066 236.214L333.348 181.524H329.9Z"
              fill="url(#paint33_linear)"
            />
            <path
              d="M345.368 181.557L279.033 248.386V251.897L348.816 181.59L345.368 181.557Z"
              fill="url(#paint34_linear)"
            />
            <path
              d="M360.835 181.623L279 264.069L278.968 267.546L364.283 181.623H360.835Z"
              fill="url(#paint35_linear)"
            />
            <path
              d="M371.935 186.052L286.652 271.975L290.1 272.008L371.935 189.562V186.052Z"
              fill="url(#paint36_linear)"
            />
            <path
              d="M371.902 201.734L302.119 272.041H305.567L371.869 205.244L371.902 201.734Z"
              fill="url(#paint37_linear)"
            />
            <path
              d="M371.836 217.416L317.553 272.074L321.034 272.106L371.836 220.926V217.416Z"
              fill="url(#paint38_linear)"
            />
            <path
              d="M371.803 233.098L333.02 272.139H336.501L371.77 236.609L371.803 233.098Z"
              fill="url(#paint39_linear)"
            />
            <path
              d="M371.737 248.78L348.487 272.172L351.935 272.205L371.737 252.291V248.78Z"
              fill="url(#paint40_linear)"
            />
            <path
              d="M371.672 264.462L363.955 272.238H367.403L371.672 267.973V264.462Z"
              fill="url(#paint41_linear)"
            />
            <path
              d="M471.009 90.5489L466.74 94.8139V98.3243L474.458 90.5489H471.009Z"
              fill="url(#paint42_linear)"
            />
            <path
              d="M486.477 90.5818L466.708 110.496L466.675 114.006L489.925 90.5818H486.477Z"
              fill="url(#paint43_linear)"
            />
            <path
              d="M501.943 90.6469L466.641 126.178V129.688L505.391 90.6469H501.943Z"
              fill="url(#paint44_linear)"
            />
            <path
              d="M517.411 90.6804L466.609 141.86L466.576 145.371L520.859 90.7132L517.411 90.6804Z"
              fill="url(#paint45_linear)"
            />
            <path
              d="M532.878 90.7458L466.543 157.542V161.052L536.326 90.7458H532.878Z"
              fill="url(#paint46_linear)"
            />
            <path
              d="M548.345 90.7786L466.51 173.224L466.478 176.735L551.793 90.8114L548.345 90.7786Z"
              fill="url(#paint47_linear)"
            />
            <path
              d="M559.445 95.2076L474.162 181.164H477.61L559.445 98.718V95.2076Z"
              fill="url(#paint48_linear)"
            />
            <path
              d="M559.412 110.89L489.629 181.196L493.077 181.229L559.379 114.4L559.412 110.89Z"
              fill="url(#paint49_linear)"
            />
            <path
              d="M559.346 126.572L505.096 181.262H508.544L559.346 130.082V126.572Z"
              fill="url(#paint50_linear)"
            />
            <path
              d="M559.313 142.254L520.53 181.295L524.011 181.328L559.28 145.764L559.313 142.254Z"
              fill="url(#paint51_linear)"
            />
            <path
              d="M559.247 157.936L535.997 181.36H539.478L559.247 161.446V157.936Z"
              fill="url(#paint52_linear)"
            />
            <path
              d="M559.215 173.618L551.465 181.393L554.946 181.426L559.182 177.128L559.215 173.618Z"
              fill="url(#paint53_linear)"
            />
            <path
              d="M98.532 181L94.263 185.265V188.775L101.98 181H98.532Z"
              fill="url(#paint54_linear)"
            />
            <path
              d="M113.999 181.033L94.23 200.947L94.1972 204.457L117.447 181.033H113.999Z"
              fill="url(#paint55_linear)"
            />
            <path
              d="M129.465 181.098L94.1635 216.629V220.139L132.913 181.098H129.465Z"
              fill="url(#paint56_linear)"
            />
            <path
              d="M144.933 181.131L94.1315 232.311L94.0986 235.822L148.381 181.164L144.933 181.131Z"
              fill="url(#paint57_linear)"
            />
            <path
              d="M160.401 181.197L94.0659 247.993V251.504L163.849 181.197H160.401Z"
              fill="url(#paint58_linear)"
            />
            <path
              d="M175.868 181.23L94.0329 263.675L94.0001 267.186L179.316 181.262L175.868 181.23Z"
              fill="url(#paint59_linear)"
            />
            <path
              d="M186.967 185.659L101.685 271.615H105.133L186.967 189.169V185.659Z"
              fill="url(#paint60_linear)"
            />
            <path
              d="M186.935 201.341L117.152 271.647L120.6 271.68L186.902 204.851L186.935 201.341Z"
              fill="url(#paint61_linear)"
            />
            <path
              d="M186.869 217.023L132.619 271.713H136.067L186.869 220.533V217.023Z"
              fill="url(#paint62_linear)"
            />
            <path
              d="M186.836 232.705L148.053 271.746L151.534 271.779L186.803 236.215L186.836 232.705Z"
              fill="url(#paint63_linear)"
            />
            <path
              d="M186.77 248.387L163.52 271.811H167.001L186.77 251.897V248.387Z"
              fill="url(#paint64_linear)"
            />
            <path
              d="M186.737 264.069L178.987 271.844L182.468 271.877L186.704 267.579L186.737 264.069Z"
              fill="url(#paint65_linear)"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="94.111"
                y1="271.055"
                x2="186.2"
                y2="362.412"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#B2F2F6" />
                <stop offset="0.8963" stopColor="#30ACCE" />
              </linearGradient>
              <linearGradient
                id="paint1_linear"
                x1="139.405"
                y1="406.591"
                x2="186.249"
                y2="453.092"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.0842" stopColor="#E86A8C" />
                <stop offset="0.8676" stopColor="#E82A8C" />
              </linearGradient>
              <linearGradient
                id="paint2_linear"
                x1="209.695"
                y1="429.474"
                x2="301.693"
                y2="520.799"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.2046" stopColor="#F34E29" />
                <stop offset="0.8634" stopColor="#F1961C" />
              </linearGradient>
              <linearGradient
                id="paint3_linear"
                x1="398.259"
                y1="-22.8445"
                x2="490.257"
                y2="68.4805"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#B2F2F6" />
                <stop offset="0.8963" stopColor="#30ACCE" />
              </linearGradient>
              <linearGradient
                id="paint4_linear"
                x1="372.386"
                y1="452.357"
                x2="464.385"
                y2="543.682"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.1109" stopColor="#FAED7D" />
                <stop offset="0.8378" stopColor="#F0B018" />
              </linearGradient>
              <linearGradient
                id="paint5_linear"
                x1="2.10903"
                y1="271.055"
                x2="94.1076"
                y2="362.38"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.1109" stopColor="#FAED7D" />
                <stop offset="0.8378" stopColor="#F0B018" />
              </linearGradient>
              <linearGradient
                id="paint6_linear"
                x1="200.702"
                y1="348.223"
                x2="292.7"
                y2="439.548"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.1037" stopColor="#3098CE" />
                <stop offset="1" stopColor="#3200AA" />
              </linearGradient>
              <linearGradient
                id="paint7_linear"
                x1="93.1686"
                y1="459.636"
                x2="101"
                y2="451.963"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.0842" stopColor="#E86A8C" />
                <stop offset="0.8676" stopColor="#E82A8C" />
              </linearGradient>
              <linearGradient
                id="paint8_linear"
                x1="93.1179"
                y1="475.316"
                x2="116.678"
                y2="452.232"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.0842" stopColor="#E86A8C" />
                <stop offset="0.8676" stopColor="#E82A8C" />
              </linearGradient>
              <linearGradient
                id="paint9_linear"
                x1="93.0677"
                y1="490.997"
                x2="132.357"
                y2="452.501"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.0842" stopColor="#E86A8C" />
                <stop offset="0.8676" stopColor="#E82A8C" />
              </linearGradient>
              <linearGradient
                id="paint10_linear"
                x1="93.0163"
                y1="506.677"
                x2="148.034"
                y2="452.77"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.0842" stopColor="#E86A8C" />
                <stop offset="0.8676" stopColor="#E82A8C" />
              </linearGradient>
              <linearGradient
                id="paint11_linear"
                x1="92.9655"
                y1="522.358"
                x2="163.713"
                y2="453.039"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.0842" stopColor="#E86A8C" />
                <stop offset="0.8676" stopColor="#E82A8C" />
              </linearGradient>
              <linearGradient
                id="paint12_linear"
                x1="92.9155"
                y1="538.038"
                x2="179.392"
                y2="453.308"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.0842" stopColor="#E86A8C" />
                <stop offset="0.8676" stopColor="#E82A8C" />
              </linearGradient>
              <linearGradient
                id="paint13_linear"
                x1="102.3"
                y1="544.214"
                x2="188.777"
                y2="459.484"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.0842" stopColor="#E86A8C" />
                <stop offset="0.8676" stopColor="#E82A8C" />
              </linearGradient>
              <linearGradient
                id="paint14_linear"
                x1="117.765"
                y1="544.266"
                x2="188.512"
                y2="474.948"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.0842" stopColor="#E86A8C" />
                <stop offset="0.8676" stopColor="#E82A8C" />
              </linearGradient>
              <linearGradient
                id="paint15_linear"
                x1="133.231"
                y1="544.318"
                x2="188.248"
                y2="490.412"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.0842" stopColor="#E86A8C" />
                <stop offset="0.8676" stopColor="#E82A8C" />
              </linearGradient>
              <linearGradient
                id="paint16_linear"
                x1="148.695"
                y1="544.369"
                x2="187.985"
                y2="505.873"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.0842" stopColor="#E86A8C" />
                <stop offset="0.8676" stopColor="#E82A8C" />
              </linearGradient>
              <linearGradient
                id="paint17_linear"
                x1="164.161"
                y1="544.422"
                x2="187.721"
                y2="521.337"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.0842" stopColor="#E86A8C" />
                <stop offset="0.8676" stopColor="#E82A8C" />
              </linearGradient>
              <linearGradient
                id="paint18_linear"
                x1="179.627"
                y1="544.473"
                x2="187.457"
                y2="536.801"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.0842" stopColor="#E86A8C" />
                <stop offset="0.8676" stopColor="#E82A8C" />
              </linearGradient>
              <linearGradient
                id="paint19_linear"
                x1="401.504"
                y1="117.47"
                x2="466.855"
                y2="182.343"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.2046" stopColor="#F34E29" />
                <stop offset="0.8634" stopColor="#F1961C" />
              </linearGradient>
              <linearGradient
                id="paint20_linear"
                x1="121.402"
                y1="116.609"
                x2="186.754"
                y2="181.482"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.2046" stopColor="#F34E29" />
                <stop offset="0.8634" stopColor="#F1961C" />
              </linearGradient>
              <linearGradient
                id="paint21_linear"
                x1="279.789"
                y1="271.029"
                x2="371.787"
                y2="362.354"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.0842" stopColor="#E86A8C" />
                <stop offset="0.8676" stopColor="#E82A8C" />
              </linearGradient>
              <linearGradient
                id="paint22_linear"
                x1="372.78"
                y1="180.732"
                x2="464.778"
                y2="272.057"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.1109" stopColor="#FAED7D" />
                <stop offset="0.8378" stopColor="#F0B018" />
              </linearGradient>
              <linearGradient
                id="paint23_linear"
                x1="465.481"
                y1="181.038"
                x2="557.479"
                y2="272.363"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.1037" stopColor="#3098CE" />
                <stop offset="1" stopColor="#3200AA" />
              </linearGradient>
              <linearGradient
                id="paint24_linear"
                x1="478.266"
                y1="377.667"
                x2="570.85"
                y2="286.952"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#B2F2F6" />
                <stop offset="0.8963" stopColor="#30ACCE" />
              </linearGradient>
              <linearGradient
                id="paint25_linear"
                x1="279.499"
                y1="361.632"
                x2="371.497"
                y2="452.956"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9A00E9" />
                <stop offset="0.058" stopColor="#8E00DC" />
                <stop offset="0.2411" stopColor="#6C01B9" />
                <stop offset="0.427" stopColor="#51019E" />
                <stop offset="0.6144" stopColor="#3E028B" />
                <stop offset="0.8041" stopColor="#33027F" />
                <stop offset="1" stopColor="#2F027B" />
              </linearGradient>
              <linearGradient
                id="paint26_linear"
                x1="385.329"
                y1="348.712"
                x2="477.328"
                y2="440.037"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.0842" stopColor="#E86A8C" />
                <stop offset="0.8676" stopColor="#E82A8C" />
              </linearGradient>
              <linearGradient
                id="paint27_linear"
                x1="13.9601"
                y1="439.939"
                x2="105.958"
                y2="531.265"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9A00E9" />
                <stop offset="0.058" stopColor="#8E00DC" />
                <stop offset="0.2411" stopColor="#6C01B9" />
                <stop offset="0.427" stopColor="#51019E" />
                <stop offset="0.6144" stopColor="#3E028B" />
                <stop offset="0.8041" stopColor="#33027F" />
                <stop offset="1" stopColor="#2F027B" />
              </linearGradient>
              <linearGradient
                id="paint28_linear"
                x1="464.902"
                y1="362.244"
                x2="556.9"
                y2="453.569"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9A00E9" />
                <stop offset="0.058" stopColor="#8E00DC" />
                <stop offset="0.2411" stopColor="#6C01B9" />
                <stop offset="0.427" stopColor="#51019E" />
                <stop offset="0.6144" stopColor="#3E028B" />
                <stop offset="0.8041" stopColor="#33027F" />
                <stop offset="1" stopColor="#2F027B" />
              </linearGradient>
              <linearGradient
                id="paint29_linear"
                x1="468.294"
                y1="-0.917764"
                x2="560.292"
                y2="90.4073"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.1109" stopColor="#FAED7D" />
                <stop offset="0.8378" stopColor="#F0B018" />
              </linearGradient>
              <linearGradient
                id="paint30_linear"
                x1="278.68"
                y1="188.604"
                x2="286.511"
                y2="180.931"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.2046" stopColor="#F34E29" />
                <stop offset="0.8634" stopColor="#F1961C" />
              </linearGradient>
              <linearGradient
                id="paint31_linear"
                x1="278.629"
                y1="204.285"
                x2="302.19"
                y2="181.201"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.2046" stopColor="#F34E29" />
                <stop offset="0.8634" stopColor="#F1961C" />
              </linearGradient>
              <linearGradient
                id="paint32_linear"
                x1="278.578"
                y1="219.965"
                x2="317.868"
                y2="181.469"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.2046" stopColor="#F34E29" />
                <stop offset="0.8634" stopColor="#F1961C" />
              </linearGradient>
              <linearGradient
                id="paint33_linear"
                x1="278.527"
                y1="235.646"
                x2="333.545"
                y2="181.738"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.2046" stopColor="#F34E29" />
                <stop offset="0.8634" stopColor="#F1961C" />
              </linearGradient>
              <linearGradient
                id="paint34_linear"
                x1="278.477"
                y1="251.327"
                x2="349.225"
                y2="182.008"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.2046" stopColor="#F34E29" />
                <stop offset="0.8634" stopColor="#F1961C" />
              </linearGradient>
              <linearGradient
                id="paint35_linear"
                x1="278.427"
                y1="267.007"
                x2="364.904"
                y2="182.277"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.2046" stopColor="#F34E29" />
                <stop offset="0.8634" stopColor="#F1961C" />
              </linearGradient>
              <linearGradient
                id="paint36_linear"
                x1="287.812"
                y1="273.183"
                x2="374.288"
                y2="188.453"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.2046" stopColor="#F34E29" />
                <stop offset="0.8634" stopColor="#F1961C" />
              </linearGradient>
              <linearGradient
                id="paint37_linear"
                x1="303.277"
                y1="273.235"
                x2="374.024"
                y2="203.917"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.2046" stopColor="#F34E29" />
                <stop offset="0.8634" stopColor="#F1961C" />
              </linearGradient>
              <linearGradient
                id="paint38_linear"
                x1="318.742"
                y1="273.287"
                x2="373.76"
                y2="219.381"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.2046" stopColor="#F34E29" />
                <stop offset="0.8634" stopColor="#F1961C" />
              </linearGradient>
              <linearGradient
                id="paint39_linear"
                x1="334.207"
                y1="273.339"
                x2="373.496"
                y2="234.843"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.2046" stopColor="#F34E29" />
                <stop offset="0.8634" stopColor="#F1961C" />
              </linearGradient>
              <linearGradient
                id="paint40_linear"
                x1="349.672"
                y1="273.391"
                x2="373.232"
                y2="250.307"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.2046" stopColor="#F34E29" />
                <stop offset="0.8634" stopColor="#F1961C" />
              </linearGradient>
              <linearGradient
                id="paint41_linear"
                x1="365.139"
                y1="273.442"
                x2="372.97"
                y2="265.77"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.2046" stopColor="#F34E29" />
                <stop offset="0.8634" stopColor="#F1961C" />
              </linearGradient>
              <linearGradient
                id="paint42_linear"
                x1="466.203"
                y1="97.7851"
                x2="474.034"
                y2="90.112"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9A00E9" />
                <stop offset="0.058" stopColor="#8E00DC" />
                <stop offset="0.2411" stopColor="#6C01B9" />
                <stop offset="0.427" stopColor="#51019E" />
                <stop offset="0.6144" stopColor="#3E028B" />
                <stop offset="0.8041" stopColor="#33027F" />
                <stop offset="1" stopColor="#2F027B" />
              </linearGradient>
              <linearGradient
                id="paint43_linear"
                x1="466.152"
                y1="113.466"
                x2="489.712"
                y2="90.3814"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9A00E9" />
                <stop offset="0.058" stopColor="#8E00DC" />
                <stop offset="0.2411" stopColor="#6C01B9" />
                <stop offset="0.427" stopColor="#51019E" />
                <stop offset="0.6144" stopColor="#3E028B" />
                <stop offset="0.8041" stopColor="#33027F" />
                <stop offset="1" stopColor="#2F027B" />
              </linearGradient>
              <linearGradient
                id="paint44_linear"
                x1="466.1"
                y1="129.146"
                x2="505.39"
                y2="90.6494"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9A00E9" />
                <stop offset="0.058" stopColor="#8E00DC" />
                <stop offset="0.2411" stopColor="#6C01B9" />
                <stop offset="0.427" stopColor="#51019E" />
                <stop offset="0.6144" stopColor="#3E028B" />
                <stop offset="0.8041" stopColor="#33027F" />
                <stop offset="1" stopColor="#2F027B" />
              </linearGradient>
              <linearGradient
                id="paint45_linear"
                x1="466.05"
                y1="144.826"
                x2="521.068"
                y2="90.9196"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9A00E9" />
                <stop offset="0.058" stopColor="#8E00DC" />
                <stop offset="0.2411" stopColor="#6C01B9" />
                <stop offset="0.427" stopColor="#51019E" />
                <stop offset="0.6144" stopColor="#3E028B" />
                <stop offset="0.8041" stopColor="#33027F" />
                <stop offset="1" stopColor="#2F027B" />
              </linearGradient>
              <linearGradient
                id="paint46_linear"
                x1="466"
                y1="160.508"
                x2="536.747"
                y2="91.1884"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9A00E9" />
                <stop offset="0.058" stopColor="#8E00DC" />
                <stop offset="0.2411" stopColor="#6C01B9" />
                <stop offset="0.427" stopColor="#51019E" />
                <stop offset="0.6144" stopColor="#3E028B" />
                <stop offset="0.8041" stopColor="#33027F" />
                <stop offset="1" stopColor="#2F027B" />
              </linearGradient>
              <linearGradient
                id="paint47_linear"
                x1="465.95"
                y1="176.188"
                x2="552.426"
                y2="91.4571"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9A00E9" />
                <stop offset="0.058" stopColor="#8E00DC" />
                <stop offset="0.2411" stopColor="#6C01B9" />
                <stop offset="0.427" stopColor="#51019E" />
                <stop offset="0.6144" stopColor="#3E028B" />
                <stop offset="0.8041" stopColor="#33027F" />
                <stop offset="1" stopColor="#2F027B" />
              </linearGradient>
              <linearGradient
                id="paint48_linear"
                x1="475.334"
                y1="182.364"
                x2="561.811"
                y2="97.6333"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9A00E9" />
                <stop offset="0.058" stopColor="#8E00DC" />
                <stop offset="0.2411" stopColor="#6C01B9" />
                <stop offset="0.427" stopColor="#51019E" />
                <stop offset="0.6144" stopColor="#3E028B" />
                <stop offset="0.8041" stopColor="#33027F" />
                <stop offset="1" stopColor="#2F027B" />
              </linearGradient>
              <linearGradient
                id="paint49_linear"
                x1="490.799"
                y1="182.416"
                x2="561.546"
                y2="113.097"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9A00E9" />
                <stop offset="0.058" stopColor="#8E00DC" />
                <stop offset="0.2411" stopColor="#6C01B9" />
                <stop offset="0.427" stopColor="#51019E" />
                <stop offset="0.6144" stopColor="#3E028B" />
                <stop offset="0.8041" stopColor="#33027F" />
                <stop offset="1" stopColor="#2F027B" />
              </linearGradient>
              <linearGradient
                id="paint50_linear"
                x1="506.264"
                y1="182.468"
                x2="561.282"
                y2="128.561"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9A00E9" />
                <stop offset="0.058" stopColor="#8E00DC" />
                <stop offset="0.2411" stopColor="#6C01B9" />
                <stop offset="0.427" stopColor="#51019E" />
                <stop offset="0.6144" stopColor="#3E028B" />
                <stop offset="0.8041" stopColor="#33027F" />
                <stop offset="1" stopColor="#2F027B" />
              </linearGradient>
              <linearGradient
                id="paint51_linear"
                x1="521.729"
                y1="182.519"
                x2="561.019"
                y2="144.022"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9A00E9" />
                <stop offset="0.058" stopColor="#8E00DC" />
                <stop offset="0.2411" stopColor="#6C01B9" />
                <stop offset="0.427" stopColor="#51019E" />
                <stop offset="0.6144" stopColor="#3E028B" />
                <stop offset="0.8041" stopColor="#33027F" />
                <stop offset="1" stopColor="#2F027B" />
              </linearGradient>
              <linearGradient
                id="paint52_linear"
                x1="537.195"
                y1="182.57"
                x2="560.755"
                y2="159.486"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9A00E9" />
                <stop offset="0.058" stopColor="#8E00DC" />
                <stop offset="0.2411" stopColor="#6C01B9" />
                <stop offset="0.427" stopColor="#51019E" />
                <stop offset="0.6144" stopColor="#3E028B" />
                <stop offset="0.8041" stopColor="#33027F" />
                <stop offset="1" stopColor="#2F027B" />
              </linearGradient>
              <linearGradient
                id="paint53_linear"
                x1="552.661"
                y1="182.623"
                x2="560.491"
                y2="174.95"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9A00E9" />
                <stop offset="0.058" stopColor="#8E00DC" />
                <stop offset="0.2411" stopColor="#6C01B9" />
                <stop offset="0.427" stopColor="#51019E" />
                <stop offset="0.6144" stopColor="#3E028B" />
                <stop offset="0.8041" stopColor="#33027F" />
                <stop offset="1" stopColor="#2F027B" />
              </linearGradient>
              <linearGradient
                id="paint54_linear"
                x1="93.7251"
                y1="188.236"
                x2="101.556"
                y2="180.563"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9A00E9" />
                <stop offset="0.058" stopColor="#8E00DC" />
                <stop offset="0.2411" stopColor="#6C01B9" />
                <stop offset="0.427" stopColor="#51019E" />
                <stop offset="0.6144" stopColor="#3E028B" />
                <stop offset="0.8041" stopColor="#33027F" />
                <stop offset="1" stopColor="#2F027B" />
              </linearGradient>
              <linearGradient
                id="paint55_linear"
                x1="93.6746"
                y1="203.917"
                x2="117.235"
                y2="180.832"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9A00E9" />
                <stop offset="0.058" stopColor="#8E00DC" />
                <stop offset="0.2411" stopColor="#6C01B9" />
                <stop offset="0.427" stopColor="#51019E" />
                <stop offset="0.6144" stopColor="#3E028B" />
                <stop offset="0.8041" stopColor="#33027F" />
                <stop offset="1" stopColor="#2F027B" />
              </linearGradient>
              <linearGradient
                id="paint56_linear"
                x1="93.6228"
                y1="219.597"
                x2="132.912"
                y2="181.1"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9A00E9" />
                <stop offset="0.058" stopColor="#8E00DC" />
                <stop offset="0.2411" stopColor="#6C01B9" />
                <stop offset="0.427" stopColor="#51019E" />
                <stop offset="0.6144" stopColor="#3E028B" />
                <stop offset="0.8041" stopColor="#33027F" />
                <stop offset="1" stopColor="#2F027B" />
              </linearGradient>
              <linearGradient
                id="paint57_linear"
                x1="93.5729"
                y1="235.277"
                x2="148.591"
                y2="181.371"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9A00E9" />
                <stop offset="0.058" stopColor="#8E00DC" />
                <stop offset="0.2411" stopColor="#6C01B9" />
                <stop offset="0.427" stopColor="#51019E" />
                <stop offset="0.6144" stopColor="#3E028B" />
                <stop offset="0.8041" stopColor="#33027F" />
                <stop offset="1" stopColor="#2F027B" />
              </linearGradient>
              <linearGradient
                id="paint58_linear"
                x1="93.5222"
                y1="250.959"
                x2="164.27"
                y2="181.639"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9A00E9" />
                <stop offset="0.058" stopColor="#8E00DC" />
                <stop offset="0.2411" stopColor="#6C01B9" />
                <stop offset="0.427" stopColor="#51019E" />
                <stop offset="0.6144" stopColor="#3E028B" />
                <stop offset="0.8041" stopColor="#33027F" />
                <stop offset="1" stopColor="#2F027B" />
              </linearGradient>
              <linearGradient
                id="paint59_linear"
                x1="93.4721"
                y1="266.639"
                x2="179.949"
                y2="181.908"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9A00E9" />
                <stop offset="0.058" stopColor="#8E00DC" />
                <stop offset="0.2411" stopColor="#6C01B9" />
                <stop offset="0.427" stopColor="#51019E" />
                <stop offset="0.6144" stopColor="#3E028B" />
                <stop offset="0.8041" stopColor="#33027F" />
                <stop offset="1" stopColor="#2F027B" />
              </linearGradient>
              <linearGradient
                id="paint60_linear"
                x1="102.857"
                y1="272.815"
                x2="189.333"
                y2="188.084"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9A00E9" />
                <stop offset="0.058" stopColor="#8E00DC" />
                <stop offset="0.2411" stopColor="#6C01B9" />
                <stop offset="0.427" stopColor="#51019E" />
                <stop offset="0.6144" stopColor="#3E028B" />
                <stop offset="0.8041" stopColor="#33027F" />
                <stop offset="1" stopColor="#2F027B" />
              </linearGradient>
              <linearGradient
                id="paint61_linear"
                x1="118.322"
                y1="272.867"
                x2="189.069"
                y2="203.548"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9A00E9" />
                <stop offset="0.058" stopColor="#8E00DC" />
                <stop offset="0.2411" stopColor="#6C01B9" />
                <stop offset="0.427" stopColor="#51019E" />
                <stop offset="0.6144" stopColor="#3E028B" />
                <stop offset="0.8041" stopColor="#33027F" />
                <stop offset="1" stopColor="#2F027B" />
              </linearGradient>
              <linearGradient
                id="paint62_linear"
                x1="133.787"
                y1="272.919"
                x2="188.805"
                y2="219.012"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9A00E9" />
                <stop offset="0.058" stopColor="#8E00DC" />
                <stop offset="0.2411" stopColor="#6C01B9" />
                <stop offset="0.427" stopColor="#51019E" />
                <stop offset="0.6144" stopColor="#3E028B" />
                <stop offset="0.8041" stopColor="#33027F" />
                <stop offset="1" stopColor="#2F027B" />
              </linearGradient>
              <linearGradient
                id="paint63_linear"
                x1="149.252"
                y1="272.97"
                x2="188.542"
                y2="234.473"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9A00E9" />
                <stop offset="0.058" stopColor="#8E00DC" />
                <stop offset="0.2411" stopColor="#6C01B9" />
                <stop offset="0.427" stopColor="#51019E" />
                <stop offset="0.6144" stopColor="#3E028B" />
                <stop offset="0.8041" stopColor="#33027F" />
                <stop offset="1" stopColor="#2F027B" />
              </linearGradient>
              <linearGradient
                id="paint64_linear"
                x1="164.718"
                y1="273.021"
                x2="188.278"
                y2="249.937"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9A00E9" />
                <stop offset="0.058" stopColor="#8E00DC" />
                <stop offset="0.2411" stopColor="#6C01B9" />
                <stop offset="0.427" stopColor="#51019E" />
                <stop offset="0.6144" stopColor="#3E028B" />
                <stop offset="0.8041" stopColor="#33027F" />
                <stop offset="1" stopColor="#2F027B" />
              </linearGradient>
              <linearGradient
                id="paint65_linear"
                x1="180.183"
                y1="273.074"
                x2="188.014"
                y2="265.401"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9A00E9" />
                <stop offset="0.058" stopColor="#8E00DC" />
                <stop offset="0.2411" stopColor="#6C01B9" />
                <stop offset="0.427" stopColor="#51019E" />
                <stop offset="0.6144" stopColor="#3E028B" />
                <stop offset="0.8041" stopColor="#33027F" />
                <stop offset="1" stopColor="#2F027B" />
              </linearGradient>
            </defs>
          </svg>
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
            breakpoints={breakpoints}
            direction={"horizontal"}
            navigation={navigation}
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
      <div className="container">
        <div className="our-service">
          <span className="our-service__subtitle">Наши услуги</span>
          <span className="our-service__title">
            Возьмем на себя заботы о вашем бизнесе
            <span className="blink">_</span>
          </span>
          <span className="out-service__subtext">
            Colorite поможет визуализировать даже самые сумасшедшие идеи,
            превратив их в колоритный дизайн с уникальными <br /> особенностями.
            Поможем привлечь клиентов из интернета и повысить узнаваемость
            вашего бренда.
          </span>
          <div className="service">
            <div className="service__card">
              <svg
                width="77"
                height="67"
                viewBox="0 0 77 67"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.3292 14.084C9.33625 14.084 7.71985 12.4621 7.71985 10.4624C7.71985 8.46206 9.33625 6.84082 11.3292 6.84082C13.3228 6.84082 14.9386 8.46206 14.9386 10.4624C14.9386 12.4621 13.3228 14.084 11.3292 14.084ZM22.1573 14.084C20.1644 14.084 18.548 12.4621 18.548 10.4624C18.548 8.46206 20.1644 6.84082 22.1573 6.84082C24.1509 6.84082 25.7667 8.46206 25.7667 10.4624C25.7667 12.4621 24.1509 14.084 22.1573 14.084ZM32.9855 14.084C30.9925 14.084 29.3761 12.4621 29.3761 10.4624C29.3761 8.46206 30.9925 6.84082 32.9855 6.84082C34.979 6.84082 36.5948 8.46206 36.5948 10.4624C36.5948 12.4621 34.979 14.084 32.9855 14.084ZM0 0H77V57.9453H73.3906V3.62109H3.60938V54.3242H26.4688V23.5405H69.7812V67H26.4688V57.9453H0V0ZM34.8906 39.8374H61.3594V36.2158H34.8906V39.8374ZM34.8906 47.0806H61.3594V43.4595H34.8906V47.0806ZM34.8906 54.3242H61.3594V50.7026H34.8906V54.3242Z"
                  fill="#EE6C0E"
                />
              </svg>
              <span>Создание сайтов</span>

              <ul>
                <li>Разработаем сайт для бизнеса</li>
                <li>Оптимизируем для поисковиков (SEO)</li>
                <li>Поможем с поддержкой и развитием</li>
              </ul>
            </div>
            <div className="service__card">
              <svg
                width="50"
                height="64"
                viewBox="0 0 50 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M33.9286 48.3018C36.5583 48.3018 38.6905 50.4644 38.6905 53.1318C38.6905 55.7993 36.5583 57.9624 33.9286 57.9624C31.2988 57.9624 29.1667 55.7993 29.1667 53.1318C29.1667 50.4644 31.2988 48.3018 33.9286 48.3018ZM50 38.6416H46.4286V15.0942H35.119V3.62256H3.57144V54.3398H17.8571V42.2642H50V64H17.8571V57.9624H3.57144H0V3.62256V0H3.57144H35.119L50 15.0942V38.6416ZM21.4286 13.2832C21.4286 15.9507 19.2964 18.1133 16.6667 18.1133C14.0369 18.1133 11.9048 15.9507 11.9048 13.2832C11.9048 10.6157 14.0369 8.45264 16.6667 8.45264C19.2964 8.45264 21.4286 10.6157 21.4286 13.2832ZM11.9048 31.396V27.7734H38.0952V31.396H11.9048ZM11.9048 38.6416V35.019H38.0952V38.6416H11.9048Z"
                  fill="#EE6C0E"
                />
              </svg>
              <span>Разработка дизайна</span>

              <ul>
                <li>Фирменный стиль</li>
                <li>Создание бренда</li>
                <li>Маркетинговые материалы</li>
              </ul>
            </div>
            <div className="service__card">
              <svg
                width="58"
                height="58"
                viewBox="0 0 58 58"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.431396 57.3774V0.622681H57.5686V57.3774H0.431396ZM4.00308 53.8296H53.997V4.17045H4.00308V53.8296ZM43.2843 21.9057L29 50.2831V36.0944H14.7157L29 7.71702V21.9057H43.2843Z"
                  fill="#EE6C0E"
                />
              </svg>

              <span>Продвижение бизнеса</span>

              <ul>
                <li>Таргетированная реклама</li>
                <li>Маркетинг в социальных сетях</li>
                <li>Контекстная реклама</li>
              </ul>
            </div>
          </div>
          <button>
            Смотреть все услуги
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.99999 18.9999C9.76634 19.0004 9.5399 18.919 9.35999 18.7699C9.25873 18.686 9.17503 18.5829 9.11368 18.4665C9.05233 18.3502 9.01453 18.2229 9.00245 18.0919C8.99038 17.9609 9.00426 17.8289 9.0433 17.7033C9.08235 17.5777 9.14579 17.461 9.22999 17.3599L13.71 11.9999L9.38999 6.62994C9.30692 6.52765 9.24489 6.40996 9.20746 6.28362C9.17003 6.15728 9.15794 6.02479 9.17187 5.89376C9.18581 5.76273 9.22551 5.63575 9.28868 5.52011C9.35186 5.40447 9.43726 5.30246 9.53999 5.21994C9.64346 5.1289 9.76462 5.06024 9.89588 5.01825C10.0271 4.97626 10.1657 4.96185 10.3028 4.97594C10.4399 4.99002 10.5726 5.03229 10.6925 5.1001C10.8125 5.1679 10.9172 5.25977 11 5.36994L15.83 11.3699C15.9771 11.5489 16.0575 11.7733 16.0575 12.0049C16.0575 12.2366 15.9771 12.461 15.83 12.6399L10.83 18.6399C10.7297 18.761 10.6022 18.8566 10.458 18.9192C10.3138 18.9817 10.1569 19.0094 9.99999 18.9999Z"
                fill="#333333"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="divider"></div>
      <div className="container">
        <div className="brif">
          <div className="header">
            <div className="wrapper">
              <span className="collab">Сотрудничество</span>
              <span className="write">Заполнить бриф</span>
              <span className="need">Что вам нужно</span>
            </div>
            <div className="wrapper">
              <span className="title">Контакты</span>
              <div className="contacts">
                <a className="contacts__data">+7 (771) 132 44 49</a>
                <a className="contacts__data">colorite-dev@mail.ru</a>
              </div>
            </div>
          </div>
          <div className="chips">
            <div className="what-need">
              <Chip>Создание сайта</Chip>
              <Chip>Разработка дизайна</Chip>
              <Chip>Продвижение бизнеса</Chip>
              <Chip>Другое</Chip>
            </div>
            <span className="cost__title">Ваш бюджет</span>
            <div className="cost">
              <Chip>Менее 400 USD</Chip>
              <Chip>400 — 600 USD</Chip>
              <Chip>600 — 1400 USD</Chip>
              <Chip>Более 1400 USD</Chip>
            </div>
          </div>
          <form>
            <div className="inputs">
              <div className="input">
                <input type="text" placeholder="Имя" />
              </div>
              <div className="input">
                <input type="phone" placeholder="Телефон" />
              </div>
              <div className="input">
                <input type="email" placeholder="Email" />
              </div>
            </div>
            <div className="input">
              <textarea placeholder="Опишите вашу задачу"></textarea>
            </div>
            <button type="submit">
              Отправить<span className="blink">_</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
