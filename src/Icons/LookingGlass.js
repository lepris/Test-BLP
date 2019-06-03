import React from "react";

const SvgLookingGlass = props => (
  <svg width={20} height={20} {...props}>
    <defs>
      <path
        d="M12.286 9.953l.004.004 7.058 6.943a1.65 1.65 0 1 1-2.314 2.352L9.976 12.31a1.682 1.682 0 0 1-.023-.024 6.6 6.6 0 1 1 2.333-2.333zM6.6 11a4.4 4.4 0 1 0 0-8.8 4.4 4.4 0 0 0 0 8.8z"
        id="looking_glass_svg__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <path
        d="M12.286 9.953l.004.004 7.058 6.943a1.65 1.65 0 1 1-2.314 2.352L9.976 12.31a1.682 1.682 0 0 1-.023-.024 6.6 6.6 0 1 1 2.333-2.333zM6.6 11a4.4 4.4 0 1 0 0-8.8 4.4 4.4 0 0 0 0 8.8z"
        fill="#D8D8D8"
      />
      <g>
        <mask id="looking_glass_svg__b" fill="#fff">
          <use xlinkHref="#looking_glass_svg__a" />
        </mask>
        <g mask="url(#looking_glass_svg__b)" fill="#005285">
          <path d="M-10-10h40v40h-40z" />
        </g>
      </g>
    </g>
  </svg>
);

export default SvgLookingGlass;
