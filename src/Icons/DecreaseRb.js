import React from "react";

const SvgDecreaseRb = props => (
  <svg width={10} height={10} {...props}>
    <defs>
      <path
        d="M5 2.517c.23 0 .417.186.417.416V7.1a.417.417 0 1 1-.834 0V2.933c0-.23.187-.416.417-.416z"
        id="decrease_rb_svg__a"
      />
      <path
        d="M5 10A5 5 0 1 1 5 0a5 5 0 0 1 0 10zm0-.27A4.73 4.73 0 1 0 5 .27a4.73 4.73 0 0 0 0 9.46z"
        id="decrease_rb_svg__b"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <use
        fill="#0C75B7"
        transform="rotate(90 5 5.017)"
        xlinkHref="#decrease_rb_svg__a"
      />
      <use fill="#005285" xlinkHref="#decrease_rb_svg__b" />
    </g>
  </svg>
);

export default SvgDecreaseRb;
