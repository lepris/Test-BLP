import React from "react";

const SvgIncreaseRb = props => (
  <svg width={10} height={10} {...props}>
    <defs>
      <circle id="increase_rb_svg__a" cx={5} cy={5} r={5} />
      <path
        d="M5.453 4.553l1.629-.006a.417.417 0 1 1 .003.833l-1.632.007v1.696a.417.417 0 1 1-.833 0V5.39l-1.702.007a.417.417 0 1 1-.003-.833l1.705-.007v-1.64a.417.417 0 1 1 .833 0v1.636z"
        id="increase_rb_svg__c"
      />
      <path
        d="M5 10A5 5 0 1 1 5 0a5 5 0 0 1 0 10zm0-.27A4.73 4.73 0 1 0 5 .27a4.73 4.73 0 0 0 0 9.46z"
        id="increase_rb_svg__e"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="increase_rb_svg__b" fill="#fff">
        <use xlinkHref="#increase_rb_svg__a" />
      </mask>
      <g mask="url(#increase_rb_svg__b)" fill="#FFF">
        <path d="M0 0h10v10H0z" />
      </g>
      <g mask="url(#increase_rb_svg__b)">
        <mask id="increase_rb_svg__d" fill="#fff">
          <use xlinkHref="#increase_rb_svg__c" />
        </mask>
        <g mask="url(#increase_rb_svg__d)" fill="#0C75B7">
          <path d="M0 0h10v10H0z" />
        </g>
      </g>
      <mask id="increase_rb_svg__f" fill="#fff">
        <use xlinkHref="#increase_rb_svg__e" />
      </mask>
      <use fill="#979797" fillRule="nonzero" xlinkHref="#increase_rb_svg__e" />
      <g mask="url(#increase_rb_svg__f)" fill="#005285">
        <path d="M0 0h10v10H0z" />
      </g>
    </g>
  </svg>
);

export default SvgIncreaseRb;
