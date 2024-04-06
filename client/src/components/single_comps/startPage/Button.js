import * as React from "react";
const SVGComponent = ({ buttonClick }) => (
  <svg
    viewBox="0 0 229 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="transition hover:scale-105 w-[50%] lg:w-[15%] lg:h-[15%]"
    onClick={() => {
      buttonClick(5);
    }}
    style={{ cursor: "pointer" }}
  >
    <g filter="url(#filter0_d_19_289)">
      <path
        d="M0.1 10C0.1 4.53238 4.53238 0.1 10 0.1H210C215.468 0.1 219.9 4.53238 219.9 10V41C219.9 46.4676 215.468 50.9 210 50.9H10C4.53238 50.9 0.1 46.4676 0.1 41V10Z"
        fill="#6A9567"
        stroke="black"
        strokeWidth={0.2}
      />
      <path
        d="M29.489 34.168C29.153 34.168 28.881 34.104 28.673 33.976C28.465 33.848 28.297 33.64 28.169 33.352L27.065 30.856C26.729 30.104 26.353 29.56 25.937 29.224C25.521 28.872 24.905 28.696 24.089 28.696H22.697V34H21.281V17.944H22.697V27.52H23.969C24.785 27.52 25.401 27.352 25.817 27.016C26.233 26.664 26.577 26.168 26.849 25.528L28.145 22.624L29.537 23.152L28.265 26.008C28.009 26.552 27.721 26.984 27.401 27.304C27.097 27.608 26.665 27.848 26.105 28.024V28.168C26.697 28.344 27.145 28.584 27.449 28.888C27.753 29.176 28.041 29.608 28.313 30.184L29.609 33.088L30.545 33.256V34.024C30.193 34.12 29.841 34.168 29.489 34.168ZM36.6322 34.216C35.0802 34.216 33.9442 33.72 33.2242 32.728C32.5042 31.72 32.1442 30.312 32.1442 28.504C32.1442 26.616 32.5282 25.144 33.2962 24.088C34.0642 23.016 35.3602 22.48 37.1842 22.48C38.7202 22.48 39.8482 23 40.5682 24.04C41.3042 25.064 41.6722 26.488 41.6722 28.312C41.6722 30.184 41.2882 31.64 40.5202 32.68C39.7522 33.704 38.4562 34.216 36.6322 34.216ZM37.0402 32.944C38.0002 32.944 38.8162 32.776 39.4882 32.44C39.9842 31.56 40.2322 30.28 40.2322 28.6C40.2322 26.904 39.9762 25.68 39.4642 24.928C38.9682 24.16 38.0722 23.776 36.7762 23.776C35.7682 23.776 34.9522 23.944 34.3282 24.28C34.1042 24.696 33.9202 25.256 33.7762 25.96C33.6482 26.648 33.5842 27.408 33.5842 28.24C33.5842 29.36 33.6882 30.264 33.8962 30.952C34.1042 31.624 34.4562 32.128 34.9522 32.464C35.4642 32.784 36.1602 32.944 37.0402 32.944ZM44.9083 22.768H46.1323L46.2523 24.448H46.4203C47.6683 23.2 49.0523 22.576 50.5723 22.576C51.5803 22.576 52.3243 22.784 52.8043 23.2C53.3003 23.6 53.5483 24.272 53.5483 25.216V34H52.1083V24.16C51.6123 23.984 51.0123 23.896 50.3083 23.896C49.5083 23.896 48.7643 24.048 48.0763 24.352C47.4043 24.64 46.8283 25.04 46.3483 25.552V34H44.9083V22.768ZM61.1713 34.144C60.5793 34.144 60.0673 34.088 59.6353 33.976C58.5313 33.368 57.9793 32.624 57.9793 31.744V23.992H56.0113L56.2033 22.768H57.9793V19.696H59.3713V22.768H63.1153L62.9233 23.992H59.3713V31.432C59.3713 31.848 59.4433 32.248 59.5873 32.632C60.0353 32.776 60.4833 32.848 60.9313 32.848C61.2193 32.848 61.5473 32.808 61.9153 32.728C62.2993 32.632 62.6433 32.52 62.9473 32.392L63.3553 33.592C63.0833 33.736 62.7393 33.864 62.3233 33.976C61.9073 34.088 61.5233 34.144 61.1713 34.144ZM68.4483 34.216C67.4083 34.216 66.6083 33.968 66.0483 33.472C65.5043 32.96 65.2323 32.272 65.2323 31.408C65.2323 30.208 65.6723 29.312 66.5523 28.72C67.4323 28.112 68.6643 27.808 70.2483 27.808C70.7763 27.808 71.3923 27.84 72.0963 27.904V26.272C72.0963 25.312 71.9043 24.656 71.5203 24.304C71.1363 23.936 70.4643 23.752 69.5043 23.752C68.8323 23.752 68.2163 23.792 67.6563 23.872L67.4163 25.6H66.3363C66.1603 25.104 66.0723 24.616 66.0723 24.136V23.68C66.5843 23.392 67.2083 23.136 67.9443 22.912C68.6963 22.688 69.4083 22.576 70.0803 22.576C71.1843 22.576 72.0403 22.88 72.6483 23.488C73.2563 24.08 73.5603 24.936 73.5603 26.056V34H72.3123L72.2163 32.416H72.0243C71.6083 32.976 71.0883 33.416 70.4643 33.736C69.8563 34.056 69.1843 34.216 68.4483 34.216ZM68.6883 33.04C69.3923 33.04 70.0483 32.872 70.6563 32.536C71.2643 32.2 71.7683 31.736 72.1683 31.144V29.008C71.4483 28.88 70.6483 28.816 69.7683 28.816C68.7123 28.816 67.8883 28.904 67.2963 29.08C67.1043 29.448 66.9603 29.8 66.8643 30.136C66.7843 30.456 66.7443 30.808 66.7443 31.192C66.7443 31.88 66.9043 32.36 67.2243 32.632C67.5603 32.904 68.0483 33.04 68.6883 33.04ZM85.3406 34.168C85.0046 34.168 84.7326 34.104 84.5246 33.976C84.3166 33.848 84.1486 33.64 84.0206 33.352L82.9166 30.856C82.5806 30.104 82.2046 29.56 81.7886 29.224C81.3726 28.872 80.7566 28.696 79.9406 28.696H78.5486V34H77.1326V17.944H78.5486V27.52H79.8206C80.6366 27.52 81.2526 27.352 81.6686 27.016C82.0846 26.664 82.4286 26.168 82.7006 25.528L83.9966 22.624L85.3886 23.152L84.1166 26.008C83.8606 26.552 83.5726 26.984 83.2526 27.304C82.9486 27.608 82.5166 27.848 81.9566 28.024V28.168C82.5486 28.344 82.9966 28.584 83.3006 28.888C83.6046 29.176 83.8926 29.608 84.1646 30.184L85.4606 33.088L86.3966 33.256V34.024C86.0446 34.12 85.6926 34.168 85.3406 34.168ZM92.9291 34.144C92.3371 34.144 91.8251 34.088 91.3931 33.976C90.2891 33.368 89.7371 32.624 89.7371 31.744V23.992H87.7691L87.9611 22.768H89.7371V19.696H91.1291V22.768H94.8731L94.6811 23.992H91.1291V31.432C91.1291 31.848 91.2011 32.248 91.3451 32.632C91.7931 32.776 92.2411 32.848 92.6891 32.848C92.9771 32.848 93.3051 32.808 93.6731 32.728C94.0571 32.632 94.4011 32.52 94.7051 32.392L95.1131 33.592C94.8411 33.736 94.4971 33.864 94.0811 33.976C93.6651 34.088 93.2811 34.144 92.9291 34.144ZM97.8302 18.472H99.3422V20.704H97.8302V18.472ZM97.8542 22.792H99.2702V34H97.8542V22.792ZM107.398 34.216C104.166 34.216 102.55 32.296 102.55 28.456C102.55 26.616 102.958 25.176 103.774 24.136C104.606 23.096 105.814 22.576 107.398 22.576C108.71 22.576 109.718 22.968 110.422 23.752C111.126 24.536 111.478 25.624 111.478 27.016C111.478 27.176 111.462 27.432 111.43 27.784L110.206 29.008L103.966 28.96C103.998 30.288 104.294 31.288 104.854 31.96C105.43 32.616 106.302 32.944 107.47 32.944C108.174 32.944 108.774 32.872 109.27 32.728C109.766 32.568 110.278 32.328 110.806 32.008L111.286 33.136C110.694 33.488 110.102 33.76 109.51 33.952C108.934 34.128 108.23 34.216 107.398 34.216ZM109.99 27.784C110.086 27.4 110.134 27.016 110.134 26.632C110.134 25.768 109.894 25.088 109.414 24.592C108.934 24.096 108.23 23.848 107.302 23.848C106.118 23.848 105.278 24.176 104.782 24.832C104.286 25.488 104.006 26.504 103.942 27.88L109.99 27.784ZM114.541 22.816H115.717L115.837 24.976H116.053C116.421 24.272 116.933 23.712 117.589 23.296C118.261 22.88 118.973 22.672 119.725 22.672C119.837 22.672 119.973 22.736 120.133 22.864C120.309 22.976 120.429 23.088 120.493 23.2L120.325 24.328H119.341C118.525 24.328 117.821 24.512 117.229 24.88C116.653 25.248 116.237 25.768 115.981 26.44V34H114.541V22.816ZM127.438 34.216C124.206 34.216 122.59 32.296 122.59 28.456C122.59 26.616 122.998 25.176 123.814 24.136C124.646 23.096 125.854 22.576 127.438 22.576C128.75 22.576 129.758 22.968 130.462 23.752C131.166 24.536 131.518 25.624 131.518 27.016C131.518 27.176 131.502 27.432 131.47 27.784L130.246 29.008L124.006 28.96C124.038 30.288 124.334 31.288 124.894 31.96C125.47 32.616 126.342 32.944 127.51 32.944C128.214 32.944 128.814 32.872 129.31 32.728C129.806 32.568 130.318 32.328 130.846 32.008L131.326 33.136C130.734 33.488 130.142 33.76 129.55 33.952C128.974 34.128 128.27 34.216 127.438 34.216ZM130.03 27.784C130.126 27.4 130.174 27.016 130.174 26.632C130.174 25.768 129.934 25.088 129.454 24.592C128.974 24.096 128.27 23.848 127.342 23.848C126.158 23.848 125.318 24.176 124.822 24.832C124.326 25.488 124.046 26.504 123.982 27.88L130.03 27.784ZM144.631 34.216C143.623 34.216 142.871 34.016 142.375 33.616C141.895 33.2 141.655 32.528 141.655 31.6V22.768H143.095V32.656C143.671 32.832 144.263 32.92 144.871 32.92C145.671 32.92 146.399 32.768 147.055 32.464C147.727 32.144 148.295 31.72 148.759 31.192V22.768H150.199V34H148.975L148.879 32.272H148.687C148.095 32.912 147.479 33.4 146.839 33.736C146.199 34.056 145.463 34.216 144.631 34.216ZM154.033 22.768H155.257L155.377 24.448H155.545C156.793 23.2 158.177 22.576 159.697 22.576C160.705 22.576 161.449 22.784 161.929 23.2C162.425 23.6 162.673 24.272 162.673 25.216V34H161.233V24.16C160.737 23.984 160.137 23.896 159.433 23.896C158.633 23.896 157.889 24.048 157.201 24.352C156.529 24.64 155.953 25.04 155.473 25.552V34H154.033V22.768ZM169.36 34.216C167.968 34.216 166.736 33.944 165.664 33.4L166.12 32.224C167.176 32.736 168.312 32.992 169.528 32.992C170.36 32.992 171.072 32.896 171.664 32.704C171.856 32.24 171.952 31.728 171.952 31.168C171.952 30.704 171.888 30.352 171.76 30.112C171.632 29.856 171.4 29.648 171.064 29.488C170.744 29.328 170.248 29.176 169.576 29.032C168.296 28.744 167.336 28.368 166.696 27.904C166.072 27.44 165.76 26.744 165.76 25.816C165.76 24.904 166.088 24.136 166.744 23.512C167.416 22.888 168.424 22.576 169.768 22.576C170.968 22.576 171.992 22.808 172.84 23.272V23.872C172.84 24.368 172.744 24.88 172.552 25.408H171.592L171.424 23.872C170.896 23.792 170.312 23.752 169.672 23.752C168.76 23.752 168.112 23.896 167.728 24.184C167.344 24.456 167.152 24.912 167.152 25.552C167.152 25.968 167.232 26.304 167.392 26.56C167.552 26.816 167.824 27.04 168.208 27.232C168.608 27.408 169.176 27.584 169.912 27.76C170.744 27.952 171.4 28.168 171.88 28.408C172.376 28.648 172.744 28.968 172.984 29.368C173.224 29.752 173.344 30.264 173.344 30.904C173.344 31.832 173.024 32.616 172.384 33.256C171.76 33.896 170.752 34.216 169.36 34.216Z"
        fill="white"
      />
      <path
        d="M190.333 14L197.17 25.5L190.333 38"
        stroke="white"
        strokeWidth={1.5}
      />
      <path
        d="M193.751 14.5L200.588 26L193.751 38.5"
        stroke="white"
        strokeWidth={1.5}
      />
    </g>
    <defs>
      <filter
        id="filter0_d_19_289"
        x={0}
        y={0}
        width={229}
        height={60}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx={5} dy={5} />
        <feGaussianBlur stdDeviation={2} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_19_289"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_19_289"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default SVGComponent;
