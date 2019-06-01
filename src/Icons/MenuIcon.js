import React from "react";

const SvgMenuIcon = props => (
  <svg width={36} height={36} {...props}>
    <defs>
      <circle id="menu_icon_svg__a" cx={18} cy={18} r={18} />
      <path
        d="M1.553 7.593h13.254a1.473 1.473 0 0 1 0 2.945H1.553a1.473 1.473 0 1 1 0-2.945zm0-6.873h13.254a1.473 1.473 0 0 1 0 2.945H1.553a1.473 1.473 0 0 1 0-2.945zm0 13.745h13.254a1.473 1.473 0 0 1 0 2.946H1.553a1.473 1.473 0 0 1 0-2.946z"
        id="menu_icon_svg__c"
      />
      <path
        d="M18 36C8.059 36 0 27.941 0 18S8.059 0 18 0s18 8.059 18 18-8.059 18-18 18zm0-.973c9.404 0 17.027-7.623 17.027-17.027S27.404.973 18 .973.973 8.596.973 18 8.596 35.027 18 35.027z"
        id="menu_icon_svg__e"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="menu_icon_svg__b" fill="#fff">
        <use xlinkHref="#menu_icon_svg__a" />
      </mask>
      <g mask="url(#menu_icon_svg__b)" fill="#FFF">
        <path d="M0 0h36v36H0z" />
      </g>
      <g mask="url(#menu_icon_svg__b)">
        <g transform="translate(10 9)">
          <mask id="menu_icon_svg__d" fill="#fff">
            <use xlinkHref="#menu_icon_svg__c" />
          </mask>
          <use fill="#D8D8D8" xlinkHref="#menu_icon_svg__c" />
          <g mask="url(#menu_icon_svg__d)">
            <path d="M-10-9h36v36h-36z" fill="#0C75B7" />
          </g>
        </g>
      </g>
      <mask id="menu_icon_svg__f" fill="#fff">
        <use xlinkHref="#menu_icon_svg__e" />
      </mask>
      <use fill="#979797" fillRule="nonzero" xlinkHref="#menu_icon_svg__e" />
      <g mask="url(#menu_icon_svg__f)" fill="#005285">
        <path d="M0 0h36v36H0z" />
      </g>
    </g>
  </svg>
);

export default SvgMenuIcon;
