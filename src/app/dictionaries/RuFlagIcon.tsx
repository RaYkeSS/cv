import { SvgIcon } from "@mui/material";

export default function RuFlagIcon() {
  return (
    <SvgIcon>
      <svg
        width="800px"
        height="800px"
        viewBox="0 -4 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_503_2726)">
          <rect
            x="0.25"
            y="0.25"
            width="27.5"
            height="19.5"
            rx="1.75"
            fill="white"
            stroke="#F5F5F5"
            strokeWidth="0.5"
          />
          <mask
            id="mask0_503_2726"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="28"
            height="20"
          >
            <rect
              x="0.25"
              y="0.25"
              width="27.5"
              height="19.5"
              rx="1.75"
              fill="white"
              stroke="white"
              strokeWidth="0.5"
            />
          </mask>
          <g mask="url(#mask0_503_2726)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 13.3333H28V6.66667H0V13.3333Z"
              fill="#0C47B7"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 20H28V13.3333H0V20Z"
              fill="#E53B35"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_503_2726">
            <rect width="28" height="20" rx="2" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  );
}
