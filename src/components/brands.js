import React from "react";

const Brand = ({ logo, children }) => {
  return (
    <div className="inline-grid justify-center xl:inline-flex items-center xl:justify-between">
      {logo && <div>{logo}</div>}
      {children}
    </div>
  );
};

const Brands = () => {
  return (
    <section className="bg-white py-20 border-t border-accents-7">
      <div className="container mx-auto grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 row-gap-16 xl:flex items-center justify-between max-w-screen-xl px-8">
        {/* Tesla */}
        <Brand>
          <div className="mr-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              className="text-accents-5 fill-current h-12 w-12"
            >
              <path
                fillRule="evenodd"
                d="M5.271 10.155c4.896-1.983 12.974-2.241 16.483-2.109L24 10.93l2.247-2.884c3.509-.132 11.587.125 16.482 2.109-.676 1.284-3.617 3.11-5.233 3.516-.092-2.523-3.658-3.049-7.079-3.049L23.999 45.04l-6.417-34.419c-3.425 0-6.991.526-7.083 3.049-1.614-.405-4.553-2.231-5.228-3.515z"
                clipRule="evenodd"
              />
              <path
                fillRule="evenodd"
                d="M3 6.734l1.253 1.839c4.753-1.668 10.394-2.47 16.347-2.65 2.253-.069 4.547-.069 6.798 0 5.953.179 11.595.981 16.348 2.65L45 6.734c-5.613-1.902-11.577-2.536-17.532-2.69-2.307-.059-4.63-.059-6.933 0-5.96.154-11.921.788-17.535 2.69z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div>
            <svg
              className="text-accents-5 fill-current w-24"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid Meet"
              viewBox="0 0 342 35"
            >
              <path d="M0 .1a9.7 9.7 0 007 6.93h10.93l.56.22v27.58h6.82V7.29l.62-.22h10.94a9.82 9.82 0 007-6.93V.07H0V.1zM238.61.06h-6.8v34.85h31.14a9.68 9.68 0 005.94-6.86h-30.3l.02-27.99zm-52.33 6.86c3.62-1 6.66-3.82 7.39-6.88l-38.1.06v20.55h31.17v7.23h-24.46a13.6 13.6 0 00-8.71 7h39.89V13.81H162.3V6.92h23.98zm116.17 27.97h6.76V20.87h24.58v14.02h6.75V13.87l-38.09-.04zM85.35 7h26a9.57 9.57 0 007.05-7H78.3a9.61 9.61 0 007.05 7zm0 13.77h26a9.59 9.59 0 007.05-7H78.3a9.63 9.63 0 007.05 7zm0 14.14h26a9.59 9.59 0 007.05-7H78.3a9.62 9.62 0 007.05 7zM308.46 7.02h26a9.58 9.58 0 007.06-7h-40.11a9.59 9.59 0 007.05 7z" />
            </svg>
          </div>
        </Brand>
        {/* Suzuki */}
        <Brand
          logo={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 500 336.43"
              className="text-accents-5 fill-current w-20"
            >
              <path d="M359.823 155.169s-20.605 5.954-60.462 30.446c-35.731 21.995-49.743 36.772-49.743 36.772l-110.234-76.183s46.376-34.103 85.125-7.983l51.98 35.657 6.34-4.17L139.407 69.226s20.612-5.961 60.447-30.439C235.607 16.785 249.618 2 249.618 2l110.228 76.183s-46.369 34.104-85.126 7.983l-51.98-35.664-6.34 4.162L359.822 155.17z" />
              <path d="M274.45 259.096H190.55v18.657h40.526l-41.953 39.166v15.632h85.17v-18.732h-42.377l42.533-39.069v-15.654zM141.153 334.43c33.553 0 42.146-8.57 42.146-27.466v-47.87h-26.581v45.008c0 7.56-6.467 12.064-15.565 12.064-9.463 0-15.55-4.526-15.55-12.183v-44.889H99.02v47.87c0 18.895 8.593 27.466 42.132 27.466M323.157 334.43c33.554 0 42.147-8.57 42.147-27.466v-47.87h-26.589v45.008c0 7.56-6.474 12.064-15.558 12.064-9.462 0-15.572-4.526-15.572-12.183v-44.889H281.01v47.87c0 18.895 8.593 27.466 42.146 27.466M498 259.096h-27.718v73.455H498v-73.455zM466.059 259.096H429.59l-29.51 25.347v-25.347h-27.725v73.455h27.726v-26.054l27.406 26.054h37.24l-40.533-37.687 41.864-35.768zM33.502 279.392c0-5.679 8.414-5.865 11.254-5.865 2.847 0 9.262 1.138 13.625 8.296h31.346c0-13.84-13.12-24.85-44.874-24.85-35.271 0-41.277 15.476-41.277 24.367 0 16.39 12.696 21.192 40.303 24.135 2.364.245 16.724-.43 16.724 6.475 0 5.114-8.072 5.456-11.045 5.456-2.951 0-8.474-.484-13.038-8.608H2c0 16.13 10.875 25.451 47.506 25.451 33.74 0 42.696-13.774 42.696-24.247 0-10.169-6.98-20.516-35.746-24.195-11.997-1.554-22.954-2.208-22.954-6.415" />
            </svg>
          }
        ></Brand>
        {/* Honda */}
        <Brand
          logo={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 275.3 174.5"
              className="text-accents-5 fill-current w-20"
            >
              <path d="M31.778 146.25l4.2.5c1.9.2 2.1 1.8 2.1 2.8v4.9h-19.3v-4.9c0-1 .2-2.6 2.1-2.8l4.2-.5v-4.2h-25v4.2l4.2.5c1.9.2 2.1 1.8 2.1 2.8v16.2c0 1-.2 2.6-2.1 2.8l-4.2.5v4.2h25v-4.2l-4.2-.5c-1.9-.2-2.1-1.8-2.1-2.8v-4.9h19.2v4.9c0 1-.2 2.6-2.1 2.8l-4.2.5v4.2h25v-4.2l-4.2-.5c-1.9-.2-2.1-1.8-2.1-2.8v-16.2c0-1 .2-2.6 2.1-2.8l4.2-.5v-4.2h-25v4.2h.1zM198.278 142.05h-30.8v4.2l3.7.4c1.3.2 2.2.7 2.2 2.5v16.5c0 1-.2 2.6-2.1 2.8l-4.2.5v4.2h31.2c11.2 0 20.4-4.5 20.4-15.6s-9.2-15.5-20.4-15.5m-2.3 25.2h-10.5v-19.2h10.5c6.2 0 8.3 2.9 8.3 9.6 0 6.6-2.1 9.6-8.3 9.6" />
              <path d="M271.078 168.55c-2-.2-2.6-1.5-3.2-2.4l-14.4-22c-1-1.6-1.8-2.1-3.3-2.1h-23.6v4.2l5.7.6c.8.1 1.9 1.2 1 2.6l-10.7 17.3c-.4.7-1 1.5-2.2 1.7l-4.2.5v4.2h19.9v-4.2l-3.4-.3c-1.5-.2-2.3-1.2-1.5-2.4l1.6-2.6h19.2l1.4 2.1c1.3 1.9-.3 2.7-1.7 2.8l-3.5.4v4.2h27v-4.2l-4.1-.4zm-35-10.4l5.9-9.6 6.3 9.6h-12.2zM145.178 146.25l4.2.5c1.9.2 2.1 1.8 2.1 2.8v15.6l-16.5-21.8c-.7-1-1.4-1.3-3.2-1.3h-21.4v4.2l4.2.5c1.9.2 2.1 1.8 2.1 2.8v16.2c0 1-.2 2.6-2.1 2.8l-4.2.5v4.2h20v-4.2l-4.2-.5c-1.9-.2-2.1-1.8-2.1-2.8v-15.6l16.5 21.7c.8 1 1.4 1.3 3.2 1.3h15.2v-23.7c0-1 .2-2.6 2.1-2.8l4.2-.5v-4.2h-19.9l-.2 4.3zM83.478 140.95c-20.3 0-25.5 8.9-25.5 16.6s5.2 16.7 25.5 16.7 25.5-8.9 25.5-16.6c0-7.8-5.2-16.7-25.5-16.7m0 27.4c-7.9 0-11.1-3.3-11.1-10.7 0-7.4 3.3-10.7 11.1-10.7 7.9 0 11.1 3.3 11.1 10.7 0 7.4-3.2 10.7-11.1 10.7M172.178 10.55c-3.4 15.3-4.8 22.4-7.6 33.4-2.7 10.6-4.8 20.5-8.4 25.3-3.6 4.9-8.5 5.9-11.8 6.3-1.7.2-3 .3-6.7.3s-5-.1-6.7-.3c-3.3-.4-8.2-1.4-11.8-6.3-3.6-4.8-5.7-14.7-8.3-25.3-2.8-11.1-4.2-18.1-7.6-33.4 0 0-3.4.1-4.9.2-2.1.1-3.7.3-5.4.5 0 0 2 31.5 2.9 44.9.9 14 2.6 37.7 4.1 55.6 0 0 2.9.5 7.7.7 5 .3 7.3.3 7.3.3 2.1-7.9 4.6-18.8 7.5-23.5 2.4-3.8 6-4.2 8.1-4.5 3.2-.4 6-.5 7.2-.5 1.3 0 4 0 7.2.5 2.1.3 5.7.7 8.1 4.5 2.9 4.7 5.5 15.6 7.5 23.5 0 0 2.2 0 7.2-.3 4.8-.3 7.7-.7 7.7-.7 1.5-17.9 3.2-41.5 4.1-55.6.9-13.3 2.9-44.9 2.9-44.9-1.7-.2-3.4-.4-5.4-.5-1.5-.1-4.9-.2-4.9-.2" />
              <path d="M211.878 29.15c-2-20-15.4-24.2-27.1-26.2-5.9-1-16.4-1.8-23.1-2.1-5.9-.4-19.7-.6-23.9-.6s-18 .2-23.9.6c-6.7.3-17.2 1.1-23.1 2.1-11.7 2-25.1 6.2-27.1 26.2-.6 5.5-.7 12.6-.6 20.2.2 12.7 1.3 21.2 1.9 27.2.4 4.1 2.1 16.3 4.3 22.6 3 8.7 5.7 11.2 8.9 13.8 5.8 4.7 15.4 6.2 17.4 6.6 10.8 1.9 32.6 2.3 42.3 2.3 9.6 0 31.5-.3 42.3-2.3 2-.4 11.6-1.8 17.4-6.6 3.2-2.6 5.9-5.1 8.9-13.8 2.2-6.3 3.9-18.6 4.3-22.6.6-5.9 1.7-14.5 1.9-27.2-.1-7.7-.3-14.8-.8-20.2m-7.4 33.6c-1.2 16-2.6 25.6-4.6 32.5-1.8 6.1-4 10.1-7.2 13-5.4 4.9-12.8 5.9-17.2 6.6-9.4 1.4-25.3 1.9-37.7 1.9-12.5 0-28.3-.5-37.7-1.9-4.4-.7-11.8-1.7-17.2-6.6-3.2-2.9-5.4-7-7.2-13-2-6.9-3.5-16.5-4.6-32.5-.7-9.6-.6-25.2.5-33.6 1.5-12.6 7.7-18.9 21-21.2 6.2-1.1 14.6-1.9 22.5-2.3 6.4-.4 16.8-.6 22.7-.6 5.8-.1 16.3.2 22.6.6 7.9.4 16.3 1.2 22.5 2.3 13.3 2.4 19.5 8.7 21.1 21.2 1.1 8.3 1.2 23.9.5 33.6" />
            </svg>
          }
        ></Brand>
        {/* Subaru */}
        <Brand
          logo={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 14791.1 2000"
              className="text-accents-5 fill-current w-40"
            >
              <path d="M5794.8 343.1h384.3v923.2c0 84.9 48.8 119.2 131.1 119.2h654.6c82.2 0 131.1-34.3 131.1-119.2V343.1H7480v983.8c0 208.8-179 367-384.2 367H6179c-204.3 0-384.3-159.1-384.3-367V343.1zM3972.9 1277.2h382.4c6.3 76.9 51.5 108.4 127.5 108.4h702.6c65.1 0 101.2-55.9 101.2-116.6 0-81.3-59.6-123.9-136.5-123.9h-765.9c-252.3 0-424.1-123-424.1-388.8 0-138.3 54.3-284.8 177.3-359 76.8-47.1 170.8-54.3 259.5-54.3h902.3c195.4 0 352.6 138.3 350.8 337.2v71.4h-395c-3.6-61.5-39.8-101.2-104.8-101.2h-666.4c-67.8 0-124.8 34.3-124.8 109.4 0 74.2 57.9 102.2 123.9 102.2h816.5c264 0 400.6 176.4 400.6 433.2 0 245.9-114 398.6-369 398.6h-975.6c-222.5 0-379.8-89.4-381.6-326.3l-.9-90.3zM13067.9 343.1h385.2v923.2c0 84.9 48.9 119.2 131.1 119.2h654.5c82.2 0 131.1-34.3 131.1-119.2V343.1h384.2v983.8c0 207.8-179.9 367-384.2 367h-916.9c-205.2 0-385.2-158.2-385.2-367l.2-983.8zM9826.4 1427.2l-151 266.6h-426.7L9982 343.1h501.8l733.4 1350.7h-426.9l-151-266.6h-812.9zm406-742.3l-242.3 450.3h485.6l-243.3-450.3zM7626.7 343.1h1184.5c254 0 442.1 88.6 442.1 373.4 0 123-48.7 230.6-157.2 291.2 119.2 63.3 187.1 180.7 187.1 316.3 0 190.8-122.2 369.8-327.3 369.8H7626.7V343.1zM8020 1385.5h730.6c71.3 0 137.4-38.8 137.4-116.6 0-76.9-66.9-116.6-137.4-116.6H8020v233.2zm0-512.5h730.6c65.9 0 107.6-46.1 107.6-110.3s-40.7-112-107.6-112H8020V873zM11290.3 343.1h1287.5c256.9 0 380.8 209.8 380.8 444 0 151.8-55.1 293.8-194.4 366.3 135.7 65.9 198 169.9 198 321.9V1694h-384.4v-218.6c0-128.4-71.3-174.5-195.3-174.5h-696V1694h-396.1l-.1-1350.9zm396.1 650.1h720.6c93 0 155.5-83.2 155.5-170.9 0-112.1-83.2-171.8-190.8-171.8h-685.3v342.7zM1738.7 5c425.9 0 882.5 86.8 1245.9 317.4 236 151 455.7 379.8 455.7 678 0 348.2-297.4 601.4-582.3 749.6-339 175.5-739.6 245-1119.4 245-425.8 0-881.5-85.8-1245-317.3-236-151-456.6-379.8-456.6-677.3C37 650.6 333.6 398.3 619.3 250 959.3 74.6 1359 5 1738.7 5zm-3.6 105.8c-396 0-822.8 74.1-1166.4 281.1C352.6 521.2 139.2 724.7 139.2 995c0 317.5 289.3 539.7 547.9 667.3 320.1 156.3 694.4 217.1 1048 217.1 396.8 0 823.7-74.3 1167.3-281.3 215.2-130.2 429.5-332.7 429.5-603 0-318.2-288.5-540.7-547.9-667.2-320.2-156.6-694.5-217.1-1048.9-217.1zM240.5 775.3l651.9-111.2 196.2-425.9L1284 664.1l651.8 111.2L1284 887.5l-195.4 426.8-196.2-426.8-651.9-112.2zm1433.1 324.5l287.5-50.5 85.9-192.6 85.9 192.6 287.6 50.5-287.6 49.7-85.9 192.7-85.9-192.7-287.5-49.7zm595-513.5l287.5-49.7 85.9-193.4 85.9 193.4 287.5 49.7-287.5 50.6-85.9 192.7-86-192.7-287.4-50.6zm-307.5 911.5l286.6-49.7 85.9-193.5 86.8 193.5 287.5 49.7-287.5 50.6-86.8 192.7-85.9-192.7-286.6-50.6zm-883.3 69.6l287.5-49.7 86.8-193.7 85.8 193.7 287.6 49.7-287.6 50.6-85.8 192.7-86.8-192.7-287.5-50.6zm1445.8-475.5l286.6-50.7 85.9-192.6 86.8 192.6 287.5 50.7-287.5 49.7L2896 1334l-85.9-192.5-286.5-49.6z" />
            </svg>
          }
        ></Brand>
        {/* Jeep */}
        <Brand
          logo={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1000 403.21"
              className="text-accents-5 fill-current w-20"
            >
              <path d="M833.993 215.25c-.813 44.86 8.875 68.62 45.855 68.62 36.919 0 42.217-40.475 42.217-71.276 0-30.82-7.006-60.74-45.794-60.74-23.795 0-41.364 18.49-42.278 63.396zM759.18 402.71V99.054h75.727v12.317c0 16.43 6.627 9.655 11.966 3.252.894-1.07 17.771-21.728 55.78-21.728 37.895 0 96.847 26.397 96.847 119.7 0 72.17-35.17 124.97-95.911 124.97-33.47 0-52.82-13.178-57.245-18.496-4.431-5.245-10.583-6.16-10.583 0v83.64H759.18M173.874.5h81.859v214.75c0 36.94-15.861 114.415-129.382 114.415C12.817 329.665.5 257.454.5 216.998v-39.601h79.217v38.707c0 23.761 15.847 45.754 45.754 45.754 29.92 0 48.403-16.715 48.403-44.86V.5M426.925 182.675c0-22.027-12.297-43.146-40.462-43.146-27.284 0-36.973 19.344-36.973 43.146h77.435zm-48.356-92.422c64.285 0 120.588 24.635 120.588 138.175H346.908c0 36.086 14.947 51.052 41.35 51.052 26.41 0 35.205-21.139 35.205-21.139h74.833c0 32.576-44.893 76.582-112.68 75.708-77.429 0-115.282-57.211-115.282-116.183 0-58.993 33.422-127.613 108.235-127.613M670.315 182.675c0-22.027-12.311-43.146-40.476-43.146-27.27 0-36.98 19.344-36.98 43.146h77.456zm-48.356-92.422c64.278 0 120.567 24.635 120.567 138.175H590.284c0 36.086 14.96 51.052 41.384 51.052 26.383 0 35.191-21.139 35.191-21.139h74.833c0 32.576-44.9 76.582-112.666 75.708-77.47 0-115.323-57.211-115.323-116.183 0-58.993 33.463-127.613 108.256-127.613M949.376 366.306c0-12.026 9.79-21.796 21.857-21.796 12.027 0 21.797 9.77 21.797 21.796 0 12.006-9.77 21.837-21.797 21.837-12.066 0-21.857-9.831-21.857-21.837zm-2.52 0c0 13.456 10.895 24.378 24.377 24.378 13.395 0 24.35-10.922 24.35-24.378s-10.955-24.378-24.35-24.378c-13.482 0-24.377 10.922-24.377 24.378" />
              <path d="M980.997 378.773l-5.062-11.952c1.606-.556 2.141-.949 2.995-1.863 1.111-1.193 1.81-3.076 1.81-4.784 0-4.309-3.314-7.242-8.118-7.242H962.46v25.84h3.015V367.58h7.345l4.824 11.193h3.354zm-15.604-13.815v-9.215h7.168c2.995 0 4.899 1.708 4.899 4.35 0 3.002-2.02 4.865-5.319 4.865h-6.748" />
            </svg>
          }
        ></Brand>
        {/* Volkswagen */}
        <Brand
          logo={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 56 56"
              className="text-accents-5 fill-current w-10"
            >
              <path d="M28 52.7C14.5 52.7 3.4 41.5 3.4 28c0-2.8.5-5.5 1.4-8.1l14.4 28c.2.4.4.7.9.7s.7-.3.9-.7L27.7 33c.1-.2.2-.3.3-.3.2 0 .2.2.3.3l6.8 14.9c.2.4.4.7.9.7s.7-.3.9-.7l14.4-28c.9 2.5 1.4 5.2 1.4 8.1-.1 13.5-11.2 24.7-24.7 24.7zm0-31.1c-.2 0-.2-.2-.3-.3L20 4.7c2.5-.9 5.2-1.4 8-1.4s5.5.5 8 1.4l-7.7 16.6c-.1.1-.1.3-.3.3zm-8.1 18c-.2 0-.2-.2-.3-.3L7 15.1c2.2-3.6 5.4-6.6 9.1-8.7L25 25.6c.2.4.4.5.7.5h4.6c.3 0 .5-.1.7-.5l8.8-19.2c3.7 2.1 6.9 5.1 9.1 8.7L36.4 39.3c-.1.2-.2.3-.3.3-.2 0-.2-.2-.3-.3L31 28.7c-.2-.4-.4-.5-.7-.5h-4.6c-.3 0-.5.1-.7.5l-4.8 10.6c-.1.1-.1.3-.3.3zM28 56c15.5 0 28-12.5 28-28S43.5 0 28 0 0 12.5 0 28s12.5 28 28 28z" />
            </svg>
          }
        ></Brand>
        {/* Toyota */}
        <Brand
          logo={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-1 -1 191 33"
              className="text-accents-5 fill-current w-40"
            >
              <path d="M22.477 29.654c-2.515-1.575-4.367-7.011-4.367-13.469 0-.237.001-.471.007-.704l.003.003c-6.994-1.099-12.048-4.111-12.177-7.672l-.021.041C4.21 9.98 3.233 12.439 3.233 15.059c0 7.71 8.463 14.027 19.198 14.586l.046.009zM0 15.622C0 6.995 10.736 0 23.98 0s23.98 6.995 23.98 15.622-10.736 15.622-23.98 15.622S0 24.249 0 15.622zM23.98 2.254c2.557 0 4.731 3.878 5.537 9.29l.003-.008c4.974-.774 8.457-2.561 8.457-4.639 0-2.79-6.267-5.048-13.997-5.048-7.73 0-13.997 2.259-13.997 5.048 0 2.078 3.482 3.864 8.457 4.639l.003.008c.806-5.411 2.981-9.29 5.537-9.29zm1.548 27.391c10.735-.559 19.199-6.876 19.199-14.586 0-2.62-.978-5.079-2.689-7.206l-.021-.041c-.129 3.561-5.182 6.573-12.177 7.672l.003-.003c.005.233.007.467.007.704 0 6.458-1.854 11.894-4.367 13.469l.045-.009zM23.98 11.946c1.146 0 2.259-.049 3.324-.143l-.001.001c-.53-3.469-1.818-5.917-3.323-5.917s-2.792 2.448-3.323 5.917l-.001-.001c1.065.094 2.178.143 3.324.143zm0 12.846c1.925 0 3.495-4.006 3.579-9.03l.01.003a39.115 39.115 0 01-7.178 0l.011-.003c.083 5.025 1.653 9.03 3.578 9.03zM122.362 15.622c0-6.594 5.346-11.939 11.939-11.939 6.596 0 11.941 5.346 11.941 11.939 0 6.595-5.346 11.939-11.941 11.939-6.593 0-11.939-5.345-11.939-11.939zm11.939 7.561c3.683 0 6.668-3.386 6.668-7.562 0-4.175-2.985-7.562-6.668-7.562-3.681 0-6.665 3.386-6.665 7.562s2.985 7.562 6.665 7.562zM159.79 8.657v18.362h-5.03V8.657h.017-7.035V4.505h19.066v4.151h-7.018zM172.893 21.954l-.005.005-1.93 5.061h-5.875l9.288-22.514h6.261l9.289 22.514h-5.876l-1.93-5.061-.005-.005h-9.217zm4.61-3.8h3.165l-.002.001-3.142-8.24h-.044l-3.144 8.24-.001-.001h3.168zM67.057 8.657v18.362h-5.031V8.657h.017-7.036V4.505h19.067v4.151h-7.017zM75.362 15.622c0-6.594 5.346-11.939 11.941-11.939 6.594 0 11.94 5.346 11.94 11.939 0 6.595-5.346 11.939-11.94 11.939-6.595 0-11.941-5.345-11.941-11.939zm11.941 7.561c3.681 0 6.667-3.386 6.667-7.562 0-4.175-2.985-7.562-6.667-7.562s-6.667 3.386-6.667 7.562 2.985 7.562 6.667 7.562zM110.802 27.019h2.551V18.47l8.776-13.965h-5.874l-5.453 9.463-5.452-9.463h-5.876l8.777 13.965v8.548h2.551z" />
            </svg>
          }
        ></Brand>
      </div>
    </section>
  );
};

export default Brands;
