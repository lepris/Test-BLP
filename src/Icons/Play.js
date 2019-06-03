import React from "react";

const SvgPlay = props => (
  <svg width={37} height={36} {...props}>
    <defs>
      <circle id="play_svg__a" cx={18} cy={18} r={18} />
      <circle id="play_svg__c" cx={18} cy={18} r={18} />
      <path id="play_svg__e" d="M8.18.52l7.38 12.96H.8z" />
      <path
        d="M18 36C8.059 36 0 27.941 0 18S8.059 0 18 0s18 8.059 18 18-8.059 18-18 18zm0-.973c9.404 0 17.027-7.623 17.027-17.027S27.404.973 18 .973.973 8.596.973 18 8.596 35.027 18 35.027z"
        id="play_svg__g"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <g transform="rotate(90 18.25 18.25)">
        <mask id="play_svg__b" fill="#fff">
          <use xlinkHref="#play_svg__a" />
        </mask>
        <g mask="url(#play_svg__b)" fill="#FFF">
          <path d="M0 0h36v36H0z" />
        </g>
      </g>
      <g transform="rotate(90 18.25 18.25)">
        <mask id="play_svg__d" fill="#fff">
          <use xlinkHref="#play_svg__c" />
        </mask>
        <g mask="url(#play_svg__d)">
          <g transform="translate(10 11)">
            <mask id="play_svg__f" fill="#fff">
              <use xlinkHref="#play_svg__e" />
            </mask>
            <g mask="url(#play_svg__f)" fill="#434A50">
              <path d="M-10-11h36v36h-36z" />
            </g>
          </g>
        </g>
      </g>
      <path
        d="M.5 18c0-9.941 8.059-18 18-18s18 8.059 18 18-8.059 18-18 18-18-8.059-18-18zm.973 0c0 9.404 7.623 17.027 17.027 17.027S35.527 27.404 35.527 18 27.904.973 18.5.973 1.473 8.596 1.473 18z"
        fill="#979797"
        fillRule="nonzero"
      />
      <g transform="rotate(90 18.25 18.25)">
        <mask id="play_svg__h" fill="#fff">
          <use xlinkHref="#play_svg__g" />
        </mask>
        <g mask="url(#play_svg__h)" fill="#434A50">
          <path d="M0 0h36v36H0z" />
        </g>
      </g>
    </g>
  </svg>
);

export default SvgPlay;
