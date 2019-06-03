import React from "react";

const SvgPlay = props => (
  <svg width={37} height={36} {...props}>
    <defs>
      <circle id="play_svg__a" cx={18.5} cy={18} r={18} />
      <path id="play_svg__c" d="M8.18.52l7.38 12.96H.8z" />
      <path
        d="M18.5 36c-9.941 0-18-8.059-18-18s8.059-18 18-18 18 8.059 18 18-8.059 18-18 18zm0-.973c9.404 0 17.027-7.623 17.027-17.027S27.904.973 18.5.973 1.473 8.596 1.473 18 9.096 35.027 18.5 35.027z"
        id="play_svg__e"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="play_svg__b" fill="#fff">
        <use xlinkHref="#play_svg__a" />
      </mask>
      <g mask="url(#play_svg__b)">
        <g transform="rotate(90 7.75 17.75)">
          <mask id="play_svg__d" fill="#fff">
            <use xlinkHref="#play_svg__c" />
          </mask>
          <g mask="url(#play_svg__d)" fill="#434A50">
            <path d="M-10-11h36v36h-36z" />
          </g>
        </g>
      </g>
      <mask id="play_svg__f" fill="#fff">
        <use xlinkHref="#play_svg__e" />
      </mask>
      <g mask="url(#play_svg__f)" fill="#434A50">
        <path d="M36.5 0v36H.5V0z" />
      </g>
    </g>
  </svg>
);

export default SvgPlay;
