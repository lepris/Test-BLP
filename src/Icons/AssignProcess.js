import React from "react";

const SvgAssignProcess = props => (
  <svg width={20} height={20} {...props}>
    <defs>
      <circle id="assign_process_svg__a" cx={10} cy={10} r={10} />
      <path
        d="M5.516 7.782l-.39-.39a1.6 1.6 0 1 1 2.27-2.258l.382.385c.2-.1.407-.185.62-.258V4.6a1.6 1.6 0 1 1 3.2 0v.661c.257.087.504.194.74.32l.455-.453a1.6 1.6 0 0 1 2.256 2.27l-.51.506c.082.177.153.359.214.546l.659.002a1.6 1.6 0 1 1-.014 3.2l-.678-.002a4.97 4.97 0 0 1-.251.592l.544.548a1.6 1.6 0 1 1-2.268 2.257l-.55-.554a4.968 4.968 0 0 1-.597.246v.661a1.6 1.6 0 0 1-3.2 0v-.661c-.179-.061-.354-.131-.523-.211l-.486.483a1.6 1.6 0 0 1-2.256-2.27l.431-.428a4.97 4.97 0 0 1-.301-.703l-.665-.003a1.6 1.6 0 1 1 .014-3.2l.645.002c.072-.216.159-.425.259-.627zM10 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
        id="assign_process_svg__c"
      />
      <path
        d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm0-.54A9.46 9.46 0 1 0 10 .54a9.46 9.46 0 0 0 0 18.92z"
        id="assign_process_svg__e"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="assign_process_svg__b" fill="#fff">
        <use xlinkHref="#assign_process_svg__a" />
      </mask>
      <g mask="url(#assign_process_svg__b)">
        <mask id="assign_process_svg__d" fill="#fff">
          <use xlinkHref="#assign_process_svg__c" />
        </mask>
        <use fill="#D8D8D8" xlinkHref="#assign_process_svg__c" />
        <g mask="url(#assign_process_svg__d)" fill="#FFF">
          <path d="M0 0h20v20H0z" />
        </g>
      </g>
      <mask id="assign_process_svg__f" fill="#fff">
        <use xlinkHref="#assign_process_svg__e" />
      </mask>
      <use
        fill="#979797"
        fillRule="nonzero"
        xlinkHref="#assign_process_svg__e"
      />
      <g mask="url(#assign_process_svg__f)" fill="#FFF">
        <path d="M0 0h20v20H0z" />
      </g>
    </g>
  </svg>
);

export default SvgAssignProcess;
