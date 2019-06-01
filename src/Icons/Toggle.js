import React from "react";

const SvgToggle = props => (
  <svg width={36} height={36} {...props}>
    <defs>
      <circle id="toggle_svg__a" cx={18} cy={18} r={18} />
      <path
        d="M18 23.4c-3.314 0-6.314-1.8-9-5.4 2.686-3.6 5.686-5.4 9-5.4s6.314 1.8 9 5.4c-2.686 3.6-5.686 5.4-9 5.4zm0-3.6a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6z"
        id="toggle_svg__c"
      />
      <path
        d="M18 36C8.059 36 0 27.941 0 18S8.059 0 18 0s18 8.059 18 18-8.059 18-18 18zm0-.973c9.404 0 17.027-7.623 17.027-17.027S27.404.973 18 .973.973 8.596.973 18 8.596 35.027 18 35.027z"
        id="toggle_svg__e"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="toggle_svg__b" fill="#fff">
        <use xlinkHref="#toggle_svg__a" />
      </mask>
      <g mask="url(#toggle_svg__b)" fill="#FFF">
        <path d="M0 0h36v36H0z" />
      </g>
      <g mask="url(#toggle_svg__b)">
        <mask id="toggle_svg__d" fill="#fff">
          <use xlinkHref="#toggle_svg__c" />
        </mask>
        <use fill="#D8D8D8" xlinkHref="#toggle_svg__c" />
        <g mask="url(#toggle_svg__d)" fill="#0C75B7">
          <path d="M0 0h36v36H0z" />
        </g>
      </g>
      <mask id="toggle_svg__f" fill="#fff">
        <use xlinkHref="#toggle_svg__e" />
      </mask>
      <use fill="#979797" fillRule="nonzero" xlinkHref="#toggle_svg__e" />
      <g mask="url(#toggle_svg__f)" fill="#005285">
        <path d="M0 0h36v36H0z" />
      </g>
    </g>
  </svg>
);

export default SvgToggle;
