import React from "react";

const SvgDecreseRb = props => (
  <svg width={10} height={10} {...props}>
    <defs>
      <circle id="decrese_rb_svg__a" cx={5} cy={5} r={5} />
      <path
        d="M5.017 2.5c.23 0 .416.187.416.417v4.166a.417.417 0 1 1-.833 0V2.917c0-.23.187-.417.417-.417z"
        id="decrese_rb_svg__c"
      />
      <path
        d="M5 10A5 5 0 1 1 5 0a5 5 0 0 1 0 10zm0-.27A4.73 4.73 0 1 0 5 .27a4.73 4.73 0 0 0 0 9.46z"
        id="decrese_rb_svg__e"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="decrese_rb_svg__b" fill="#fff">
        <use xlinkHref="#decrese_rb_svg__a" />
      </mask>
      <g mask="url(#decrese_rb_svg__b)" fill="#FFF">
        <path d="M0 0h10v10H0z" />
      </g>
      <g mask="url(#decrese_rb_svg__b)">
        <mask id="decrese_rb_svg__d" fill="#fff">
          <use xlinkHref="#decrese_rb_svg__c" />
        </mask>
        <g mask="url(#decrese_rb_svg__d)" fill="#0C75B7">
          <path d="M0 0h10v10H0z" />
        </g>
      </g>
      <mask id="decrese_rb_svg__f" fill="#fff">
        <use xlinkHref="#decrese_rb_svg__e" />
      </mask>
      <use fill="#979797" fillRule="nonzero" xlinkHref="#decrese_rb_svg__e" />
      <g mask="url(#decrese_rb_svg__f)" fill="#005285">
        <path d="M0 0h10v10H0z" />
      </g>
    </g>
  </svg>
);

export default SvgDecreseRb;
