import React from "react";

const SvgDropMenuBl = props => (
  <svg width={257} height={54} {...props}>
    <defs>
      <path
        d="M123 10l5-10 5 10h113c5.523 0 10 4.477 10 10v33H0V20c0-5.523 4.477-10 10-10h113z"
        id="drop_menu_bl_svg__a"
      />
    </defs>
    <g transform="translate(.5 .118)" fill="none" fillRule="evenodd">
      <mask id="drop_menu_bl_svg__b" fill="#fff">
        <use xlinkHref="#drop_menu_bl_svg__a" />
      </mask>
      <g mask="url(#drop_menu_bl_svg__b)" fill="#0C75B7" fillRule="nonzero">
        <path d="M0 0h256v54H0z" />
      </g>
    </g>
  </svg>
);

export default SvgDropMenuBl;
