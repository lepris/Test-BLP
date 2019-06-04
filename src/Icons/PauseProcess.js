import React from "react";

const SvgPauseProcess = props => (
  <svg width={37} height={36} {...props}>
    <defs>
      <circle id="pause_process_svg__a" cx={18} cy={18} r={18} />
      <circle id="pause_process_svg__c" cx={18} cy={18} r={18} />
      <path
        d="M2.16.8h1.76a2 2 0 0 1 2 2v10.4a2 2 0 0 1-2 2H2.16a2 2 0 0 1-2-2V2.8a2 2 0 0 1 2-2zm7.92 0h1.76a2 2 0 0 1 2 2v10.4a2 2 0 0 1-2 2h-1.76a2 2 0 0 1-2-2V2.8a2 2 0 0 1 2-2z"
        id="pause_process_svg__e"
      />
      <path
        d="M18 36C8.059 36 0 27.941 0 18S8.059 0 18 0s18 8.059 18 18-8.059 18-18 18zm0-.973c9.404 0 17.027-7.623 17.027-17.027S27.404.973 18 .973.973 8.596.973 18 8.596 35.027 18 35.027z"
        id="pause_process_svg__g"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <g transform="translate(.5)">
        <mask id="pause_process_svg__b" fill="#fff">
          <use xlinkHref="#pause_process_svg__a" />
        </mask>
        <g mask="url(#pause_process_svg__b)" fill="#FFF" fillRule="nonzero">
          <path d="M0 0h36v36H0z" />
        </g>
      </g>
      <g transform="translate(.5)">
        <mask id="pause_process_svg__d" fill="#fff">
          <use xlinkHref="#pause_process_svg__c" />
        </mask>
        <g mask="url(#pause_process_svg__d)">
          <path
            d="M13.16 10.8h1.76a2 2 0 0 1 2 2v10.4a2 2 0 0 1-2 2h-1.76a2 2 0 0 1-2-2V12.8a2 2 0 0 1 2-2zm7.92 0h1.76a2 2 0 0 1 2 2v10.4a2 2 0 0 1-2 2h-1.76a2 2 0 0 1-2-2V12.8a2 2 0 0 1 2-2z"
            fill="#D8D8D8"
          />
          <g transform="translate(11 10)">
            <mask id="pause_process_svg__f" fill="#fff">
              <use xlinkHref="#pause_process_svg__e" />
            </mask>
            <g mask="url(#pause_process_svg__f)" fill="#0C75B7">
              <path d="M-11-10h36v36h-36z" />
            </g>
          </g>
        </g>
      </g>
      <path
        d="M18.5 36c-9.941 0-18-8.059-18-18s8.059-18 18-18 18 8.059 18 18-8.059 18-18 18zm0-.973c9.404 0 17.027-7.623 17.027-17.027S27.904.973 18.5.973 1.473 8.596 1.473 18 9.096 35.027 18.5 35.027z"
        fill="#979797"
        fillRule="nonzero"
      />
      <g transform="translate(.5)">
        <mask id="pause_process_svg__h" fill="#fff">
          <use xlinkHref="#pause_process_svg__g" />
        </mask>
        <g mask="url(#pause_process_svg__h)" fill="#005285" fillRule="nonzero">
          <path d="M0 0h36v36H0z" />
        </g>
      </g>
    </g>
  </svg>
);

export default SvgPauseProcess;
