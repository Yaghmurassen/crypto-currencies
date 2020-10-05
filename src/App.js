import React, { useState } from "react";
import Table from "./Components/Table";
import Fade from "react-reveal/Fade";
import {
  Title,
  Bannier,
  Header,
  Application,
  EthSvg,
} from "./StyledComponents/App.Style";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./StyledComponents/Global.Style";
import { lightTheme, darkTheme } from "./StyledComponents/Themes.style";
import logoLight from "./Assets/Pictures/cryptocurrency_logo.jpg";
import logoDark from "./Assets/Pictures/cryptocurrency.jpg";

import ethSvg from "./Assets/Pictures/eth-volant.svg";

import "./App.css";

const App = () => {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <>
        <GlobalStyles />
        <Fade>
          <Application>
            <Header>
              <Bannier logo={theme === "light" ? logoLight : logoDark}>
                <Title>Crypto Currencies</Title>
              </Bannier>
            </Header>
            <div className="wrapper">
              <input
                onClick={themeToggler}
                type="checkbox"
                name="checkbox"
                className="switch"
              />
            </div>
            <Table />
            <svg
              width="682"
              height="730"
              viewBox="0 0 682 730"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="btc-svg"
            >
              <g id="btc-work" clipPath="url(#clip0)">
                <g id="btc">
                  <path
                    id="Vector"
                    d="M671.79 470.52C626.24 653.2 441.2 764.39 258.48 718.83C75.76 673.27 -35.36 488.22 10.22 305.52C55.8 122.82 240.79 11.62 423.45 57.17C606.11 102.72 717.34 287.79 671.79 470.52Z"
                    fill="#F7931A"
                  />
                  <path
                    id="Vector_2"
                    d="M491.36 339.42C498.15 294.04 463.6 269.65 416.36 253.42L431.69 191.95L394.27 182.62L379.34 242.42C369.5 239.97 359.4 237.66 349.34 235.36L364.34 175.11L327 165.8L311.66 227.25C303.52 225.4 295.52 223.56 287.77 221.63V221.44L236.2 208.52L226.2 248.52C226.2 248.52 253.96 254.88 253.38 255.28C268.53 259.06 271.27 269.09 270.82 277.04L253.36 347.04C254.683 347.371 255.982 347.788 257.25 348.29C256 347.98 254.67 347.64 253.25 347.29L228.78 445.39C226.93 449.99 222.23 456.9 211.63 454.28C212 454.82 184.43 447.49 184.43 447.49L166 490.37L214.64 502.52C223.7 504.79 232.58 507.17 241.32 509.4L225.84 571.52L263.22 580.85L278.56 519.34C288.77 522.11 298.68 524.67 308.38 527.08L293.1 588.31L330.52 597.64L346 535.61C409.81 547.68 457.79 542.81 478 485.1C494.27 438.63 477.19 411.83 443.62 394.35C468 388.72 486.45 372.64 491.36 339.42ZM405.87 459.3C394.31 505.77 316.07 480.65 290.71 474.3L311.26 391.93C336.62 398.31 418 410.84 405.87 459.3ZM417.44 338.74C406.89 381.01 341.77 359.53 320.65 354.27L339.28 279.52C360.41 284.83 428.43 294.66 417.44 338.74V338.74Z"
                    fill="white"
                  />
                </g>
                <g id="Bras">
                  <path
                    id="Vector_3"
                    d="M633.25 539.11C635.581 539.11 637.47 537.221 637.47 534.89C637.47 532.559 635.581 530.67 633.25 530.67C630.919 530.67 629.03 532.559 629.03 534.89C629.03 537.221 630.919 539.11 633.25 539.11Z"
                    fill="#FDB797"
                  />
                  <path
                    id="Vector_4"
                    d="M595.47 580.14C595.47 580.14 616 568.62 628.65 534.89L634.78 538.72C634.78 538.72 624.62 581.72 599.13 591.62L595.47 580.14Z"
                    fill="#3861E5"
                  />
                  <path
                    id="Vector_5"
                    d="M538.95 539.11C541.281 539.11 543.17 537.221 543.17 534.89C543.17 532.559 541.281 530.67 538.95 530.67C536.619 530.67 534.73 532.559 534.73 534.89C534.73 537.221 536.619 539.11 538.95 539.11Z"
                    fill="#FDB797"
                  />
                  <path
                    id="Vector_6"
                    d="M576.73 580.14C576.73 580.14 556.2 568.62 543.55 534.89L537.42 538.72C537.42 538.72 547.58 581.72 573.07 591.62L576.73 580.14Z"
                    fill="#3861E5"
                  />
                </g>
                <g id="full">
                  <path
                    id="Vector_7"
                    d="M128.15 116.08L139.19 111.82L142.09 118.13L143.43 133.21L140.96 135L128.15 116.08Z"
                    fill="black"
                  />
                  <path
                    id="Vector_8"
                    d="M181.79 145.78L169.18 153.07L182.43 172.61L185.52 170.36L187.44 154.85L181.79 145.78Z"
                    fill="black"
                  />
                  <g id="Group" opacity="0.05">
                    <path
                      id="Vector_9"
                      opacity="0.05"
                      d="M208.24 54.75C205.7 58.59 203.33 62.75 202.6 65.67L204.6 64.29C204.35 62.12 206 58.52 208.24 54.75Z"
                      fill="black"
                    />
                    <path
                      id="Vector_10"
                      opacity="0.05"
                      d="M219.61 107.01L221 77.78C190 97.45 144.64 115.4 144.64 115.4L142.45 118.87C142.45 118.87 187.86 100.92 218.81 81.25L217.51 108.78L219.61 107.01Z"
                      fill="black"
                    />
                  </g>
                  <g id="Group_2" opacity="0.5">
                    <path
                      id="Vector_11"
                      opacity="0.5"
                      d="M138.46 136.42L141 134.57L139.63 119.04L136.64 112.55L125.27 116.94L138.46 136.42Z"
                      fill="url(#paint0_linear)"
                    />
                    <path
                      id="Vector_12"
                      opacity="0.5"
                      d="M311.58 1.88005C304.67 -1.43995 299.5 0.120055 295.88 2.88005C292.648 5.31361 290.125 8.5655 288.57 12.3001L287.57 14.9501L282.89 18.3501L281.37 15.1001C281.37 15.1001 264.8 -14.3399 215.92 43.1501L215.7 42.9701C215.7 42.9701 211.54 48.0601 207.75 53.7701L207.21 54.5901L206.97 54.9601L206.63 55.4901L206.38 55.89L206 56.5201L205.67 57.06L205.32 57.6501L205.07 58.0801L204.81 58.53L204.56 58.9801L204.3 59.4601L203.92 60.1801L203.71 60.5801L203.48 61.0501L203.31 61.4101L203.09 61.8801L202.95 62.1901C202.83 62.4701 202.717 62.7434 202.61 63.0101L202.49 63.3201L202.33 63.7601L202.23 64.0601C202.157 64.2867 202.09 64.5101 202.03 64.7301C202.03 64.8501 201.96 64.9601 201.94 65.0701C201.744 65.7722 201.67 66.5028 201.72 67.2301L136.64 112.52L139.98 119.78C139.98 119.78 186.75 101.3 218.63 81.0301L217.29 109.38L217.21 111.13C217.21 111.13 188.09 135.24 180.51 147.52L167.51 155.03L181.16 175.15L184.34 172.84L186.34 156.84L239.77 114.13C239.77 114.13 249.9 95.6201 250.08 80.1301L252.27 88.5801C252.27 88.5801 256.93 101.67 260.22 102.19C263.51 102.71 263.52 92.0401 261.22 88.8701C258.92 85.7001 260 64.5201 260 64.5201L260.6 60.2101L268.96 54.1301L269.27 53.8401L269.71 56.5L271.39 56.6501V56.7701L271.47 57.5401L272.55 77.7301L278.47 100.57C278.47 100.57 283.13 113.66 286.42 114.18C289.71 114.7 289.72 104.03 287.42 100.86C285.12 97.6901 286.21 76.5201 286.21 76.5201L288.65 58.89V58.5501L288.7 58.1601L293.51 58.5801C293.51 58.5801 298.51 41.3901 290.14 33.9001L288.62 30.6501L291.74 28.3901L292.37 27.9401C295.014 30.5267 298.566 31.9751 302.265 31.9751C305.964 31.9751 309.516 30.5267 312.16 27.9401C314.499 28.1576 316.84 27.5336 318.76 26.1801L319.97 25.3101C321.272 24.4835 322.447 23.473 323.46 22.3101C324.31 20.7301 322.28 7.01005 311.58 1.88005Z"
                      fill="url(#paint1_linear)"
                    />
                  </g>
                  <path
                    id="Vector_13"
                    d="M216 44.27C216 44.27 201.77 61.67 202.44 67.77L139.2 111.82L142.44 118.87C142.44 118.87 187.85 100.92 218.8 81.25L217.42 110.52C217.42 110.52 189.15 133.89 181.8 145.82L187.45 154.89L239.33 113.42C239.33 113.42 254.72 85.3 247.33 69.96L216 44.27Z"
                    fill="#535461"
                  />
                  <path
                    id="Vector_14"
                    d="M267.58 52.3899L268.41 57.3899L291.55 59.3899C291.55 59.3899 296.39 42.6999 288.27 35.3899L267.58 52.3899Z"
                    fill="#F55F44"
                  />
                  <path
                    id="Vector_15"
                    d="M288.27 35.46L279.72 17.21C279.72 17.21 263.57 -11.48 215.87 44.7999L247.33 69.9199L267.69 55.12L288.27 35.46Z"
                    fill="#F55F44"
                  />
                  <path
                    id="Vector_16"
                    d="M295.009 10.3418L302.617 20.8092L286.01 32.8793C284.851 33.7213 283.406 34.0686 281.991 33.8448C280.576 33.621 279.309 32.8445 278.467 31.686L277.214 29.963C276.372 28.8045 276.025 27.359 276.249 25.9444C276.473 24.5298 277.249 23.262 278.408 22.42L295.015 10.3499L295.009 10.3418Z"
                    fill="#FDA57D"
                  />
                  <path
                    id="Vector_17"
                    opacity="0.05"
                    d="M286.18 16.7599C285.529 19.1068 285.524 21.5858 286.164 23.9355C286.805 26.2851 288.068 28.4183 289.82 30.1099L297.67 24.3999L290.06 13.9299L286.18 16.7599Z"
                    fill="black"
                  />
                  <path
                    id="Vector_18"
                    d="M308.084 30.9345C314.218 26.4764 315.584 17.9007 311.136 11.7802C306.688 5.65969 298.109 4.3121 291.975 8.77027C285.841 13.2284 284.475 21.8042 288.923 27.9247C293.372 34.0451 301.95 35.3927 308.084 30.9345Z"
                    fill="#FDA57D"
                  />
                  <path
                    id="Vector_19"
                    opacity="0.05"
                    d="M293.68 11.7701L285.75 17.0701L286.75 14.4901C286.75 14.4901 293.27 -2.50993 308.47 4.82007C318.86 9.82007 320.83 23.1201 320.04 24.6401C318.867 25.9157 317.521 27.0199 316.04 27.9201C314.089 29.3024 311.692 29.9029 309.32 29.603C306.948 29.3031 304.775 28.1245 303.23 26.3001C300.57 23.1301 295.93 16.5701 296.78 12.8101C296 11.3901 294.98 10.8101 293.67 11.8101L293.68 11.7701Z"
                    fill="black"
                  />
                  <path
                    id="Vector_20"
                    d="M294.3 11.3201L286.37 16.6201L287.37 14.0401C287.37 14.0401 293.89 -2.95988 309.09 4.37012C319.48 9.37012 321.45 22.6701 320.66 24.1901C319.487 25.4658 318.141 26.5699 316.66 27.4701C314.709 28.8525 312.312 29.453 309.94 29.153C307.568 28.8531 305.395 27.6745 303.85 25.8501C301.19 22.6801 296.55 16.1201 297.4 12.3601C296.62 10.9401 295.6 10.3601 294.29 11.3601L294.3 11.3201Z"
                    fill="#5A2F32"
                  />
                  <path
                    id="Vector_21"
                    d="M296.979 12.201C298.343 11.2071 299.048 9.85023 298.552 9.17026C298.057 8.49029 296.549 8.74472 295.185 9.73856C293.821 10.7324 293.116 12.0893 293.611 12.7693C294.107 13.4493 295.614 13.1948 296.979 12.201Z"
                    fill="#FDA57D"
                  />
                  <path
                    id="Vector_22"
                    opacity="0.05"
                    d="M265.03 54.7101L268.66 51.6001L268.7 56.5101L267.91 54.6201L265.03 54.7101Z"
                    fill="black"
                  />
                  <path
                    id="Vector_23"
                    opacity="0.05"
                    d="M270.01 57.6699L270.09 58.4299L286.78 59.7299L286.88 59.0199L270.01 57.6699Z"
                    fill="black"
                  />
                  <path
                    id="Vector_24"
                    d="M244.07 35.6001L245.71 66.4001L251.45 88.5201C251.45 88.5201 255.97 101.23 259.17 101.73C262.37 102.23 262.38 91.8701 260.17 88.7901C257.96 85.7101 259 65.2101 259 65.2101L262.62 39.0601L244.07 35.6001Z"
                    fill="#FDA57D"
                  />
                  <path
                    id="Vector_25"
                    d="M380.23 271.06V271.93C379.91 271.93 379.65 271.73 379.65 271.49C379.65 271.25 379.91 271.06 380.23 271.06Z"
                    fill="#E6E6E6"
                  />
                  <path
                    id="Vector_26"
                    opacity="0.05"
                    d="M245.91 20.6201C245.91 20.6201 242.09 30.9301 243.71 34.4501Z"
                    fill="black"
                  />
                  <path
                    id="Vector_27"
                    opacity="0.05"
                    d="M244.15 35.0701L244.14 36.9801L262.47 40.0601L262.69 38.5301L244.15 35.0701Z"
                    fill="black"
                  />
                  <path
                    id="Vector_28"
                    d="M248.29 19.3601L244.07 35.6001L262.61 39.0601L267.51 18.5601L248.29 19.3601Z"
                    fill="#F55F44"
                  />
                  <g id="Group_3" opacity="0.5">
                    <path
                      id="Vector_29"
                      opacity="0.5"
                      d="M247.66 75.6101L251.31 89.4301C251.31 89.4301 256.02 102.43 259.31 102.92C262.6 103.41 262.65 92.8501 260.31 89.7101C259.08 88.0601 258.82 81.4801 258.84 75.6101H247.66Z"
                      fill="url(#paint2_linear)"
                    />
                  </g>
                  <path
                    id="Vector_30"
                    d="M247.95 75.6101L251.46 89.1401C251.46 89.1401 255.98 101.85 259.18 102.35C262.38 102.85 262.39 92.4901 260.18 89.4101C259 87.7901 258.75 81.3501 258.77 75.6101H247.95Z"
                    fill="#FDA57D"
                  />
                  <g id="Group_4" opacity="0.5">
                    <path
                      id="Vector_31"
                      opacity="0.5"
                      d="M285.07 75.04H270.47L270.67 78.7L276.75 101.52C276.75 101.52 281.54 114.6 284.92 115.12C288.3 115.64 288.31 104.97 285.92 101.81C283.53 98.65 284.73 77.52 284.73 77.52L285.07 75.04Z"
                      fill="url(#paint3_linear)"
                    />
                  </g>
                  <path
                    id="Vector_32"
                    d="M268.091 69.5099L259.844 66.7393L241.109 122.506L249.356 125.277L268.091 69.5099Z"
                    fill="#E0E0E0"
                  />
                  <path
                    id="Vector_33"
                    d="M603.74 614.23H568.47V640.3H603.74V614.23Z"
                    fill="#4D8AF0"
                  />
                  <path
                    id="Vector_34"
                    opacity="0.1"
                    d="M568.47 621.13C568.47 621.13 581.63 622.66 586.1 622.66C590.57 622.66 603.73 621.13 603.73 621.13V614.62H568.47V621.13Z"
                    fill="black"
                  />
                  <path
                    id="Vector_35"
                    d="M603.73 620.75C603.73 620.75 590.57 622.28 586.1 622.28C581.63 622.28 568.47 620.75 568.47 620.75V595.07C568.47 590.394 570.327 585.91 573.634 582.604C576.94 579.297 581.424 577.44 586.1 577.44C590.776 577.44 595.26 579.297 598.566 582.604C601.873 585.91 603.73 590.394 603.73 595.07V620.75Z"
                    fill="#3861E5"
                  />
                  <path
                    id="Vector_36"
                    d="M581.88 568.62H590.31V578.2C590.31 579.319 589.865 580.393 589.074 581.184C588.283 581.975 587.209 582.42 586.09 582.42V582.42C584.971 582.42 583.897 581.975 583.106 581.184C582.315 580.393 581.87 579.319 581.87 578.2V568.62H581.88Z"
                    fill="#FDB797"
                  />
                  <path
                    id="Vector_37"
                    d="M581.12 631.1H568.47V716.96H581.12V631.1Z"
                    fill="#4D8AF0"
                  />
                  <path
                    id="Vector_38"
                    d="M603.73 631.1H591.08V716.96H603.73V631.1Z"
                    fill="#4D8AF0"
                  />
                  <path
                    id="Vector_39"
                    opacity="0.1"
                    d="M581.89 575.01C584.659 575.691 587.551 575.691 590.32 575.01V569.01H581.89V575.01Z"
                    fill="black"
                  />
                  <path
                    id="Vector_40"
                    d="M586.1 571.69C596.262 571.69 604.5 563.452 604.5 553.29C604.5 543.128 596.262 534.89 586.1 534.89C575.938 534.89 567.7 543.128 567.7 553.29C567.7 563.452 575.938 571.69 586.1 571.69Z"
                    fill="#814E4D"
                  />
                  <path
                    id="Vector_41"
                    d="M586.1 575.13C595.837 575.13 603.73 567.237 603.73 557.5C603.73 547.763 595.837 539.87 586.1 539.87C576.363 539.87 568.47 547.763 568.47 557.5C568.47 567.237 576.363 575.13 586.1 575.13Z"
                    fill="#FDB797"
                  />
                  <path
                    id="Vector_42"
                    opacity="0.1"
                    d="M575.42 548.66C576.385 549.182 577.447 549.501 578.54 549.6C583.055 550.218 587.653 549.702 591.92 548.1C592.32 548.967 592.905 549.736 593.634 550.353C594.363 550.969 595.219 551.419 596.14 551.67C597.982 552.157 599.886 552.369 601.79 552.3C602.211 552.349 602.636 552.268 603.01 552.07C603.86 551.5 603.45 550.19 602.95 549.29L600.49 544.84C599.838 543.484 598.958 542.25 597.89 541.19C596.403 540.019 594.634 539.26 592.76 538.99C588.398 538.122 583.894 538.273 579.6 539.43C575 540.65 569.12 544.85 575.42 548.66Z"
                    fill="black"
                  />
                  <path
                    id="Vector_43"
                    d="M575.42 548.28C576.385 548.802 577.447 549.122 578.54 549.22C583.055 549.838 587.653 549.322 591.92 547.72C592.32 548.587 592.905 549.356 593.634 549.973C594.363 550.59 595.219 551.039 596.14 551.29C597.982 551.777 599.886 551.989 601.79 551.92C602.211 551.969 602.636 551.888 603.01 551.69C603.86 551.12 603.45 549.81 602.95 548.91L600.49 544.46C599.838 543.104 598.958 541.87 597.89 540.81C596.403 539.639 594.634 538.88 592.76 538.61C588.398 537.742 583.894 537.893 579.6 539.05C575 540.27 569.12 544.47 575.42 548.28Z"
                    fill="#814E4D"
                  />
                  <path
                    id="Vector_44"
                    d="M603.54 560.37C604.385 560.37 605.07 559.085 605.07 557.5C605.07 555.915 604.385 554.63 603.54 554.63C602.695 554.63 602.01 555.915 602.01 557.5C602.01 559.085 602.695 560.37 603.54 560.37Z"
                    fill="#FDB797"
                  />
                  <path
                    id="Vector_45"
                    d="M568.66 560.37C569.505 560.37 570.19 559.085 570.19 557.5C570.19 555.915 569.505 554.63 568.66 554.63C567.815 554.63 567.13 555.915 567.13 557.5C567.13 559.085 567.815 560.37 568.66 560.37Z"
                    fill="#FDB797"
                  />
                  <path
                    id="Vector_46"
                    d="M586.49 564.4C586.49 564.4 576.49 567.85 568.86 560.18C568.86 560.18 569.48 562.72 570.55 565.79C572.279 569.062 574.994 571.706 578.31 573.349C581.626 574.992 585.375 575.55 589.025 574.944C592.676 574.338 596.043 572.598 598.65 569.972C601.257 567.345 602.971 563.965 603.55 560.31C601.72 561.31 588.62 567.6 586.49 564.4ZM586.11 569C584.2 569 582.66 567.55 582.66 566.7C582.66 565.85 584.2 565.93 586.11 565.93C588.02 565.93 589.56 565.85 589.56 566.7C589.56 567.55 588 569 586.1 569H586.11Z"
                    fill="#814E4D"
                  />
                  <path
                    id="Vector_47"
                    d="M574.79 713.9C576.265 713.9 577.679 714.486 578.721 715.529C579.764 716.571 580.35 717.985 580.35 719.46V720H569.24V719.43C569.248 717.962 569.836 716.557 570.875 715.521C571.915 714.485 573.322 713.903 574.79 713.9V713.9Z"
                    fill="#333333"
                  />
                  <path
                    id="Vector_48"
                    d="M597.41 713.9C598.885 713.9 600.299 714.486 601.341 715.529C602.384 716.571 602.97 717.985 602.97 719.46V720H591.85V719.43C591.858 717.961 592.447 716.554 593.489 715.518C594.531 714.482 595.941 713.9 597.41 713.9V713.9Z"
                    fill="#333333"
                  />
                </g>
                <g id="bonhomme">
                  <path
                    id="Vector_49"
                    d="M380.22 270.77H378.48V272.51H380.22V270.77Z"
                    fill="#CCCCCC"
                  />
                  <path
                    id="Vector_50"
                    d="M377.35 273.39H381.65C381.959 273.39 382.264 273.451 382.549 273.569C382.834 273.687 383.093 273.86 383.312 274.078C383.53 274.297 383.703 274.556 383.821 274.841C383.939 275.126 384 275.432 384 275.74V290.23H375V275.74C375 275.432 375.061 275.126 375.179 274.841C375.297 274.556 375.47 274.297 375.688 274.078C375.907 273.86 376.166 273.687 376.451 273.569C376.736 273.451 377.041 273.39 377.35 273.39Z"
                    fill="#535461"
                  />
                  <path
                    id="Vector_51"
                    d="M381.97 272.23H376.74V273.39H381.97V272.23Z"
                    fill="#F7931A"
                  />
                  <path
                    id="Vector_52"
                    opacity="0.2"
                    d="M380 271L405 266L406 278L380 272V271Z"
                    fill="#535461"
                  />
                  <path
                    id="Vector_53"
                    d="M317.96 253.33L308.75 244.79L324 228.26L333.21 236.79L317.96 253.33Z"
                    fill="#FDA57D"
                  />
                  <path
                    id="Vector_54"
                    d="M325.25 267.63L362.18 283.52L389.47 251.18C389.47 251.18 393.6 246.56 388.68 243.4C383.76 240.24 380.68 248.4 380.68 248.4L359.68 270.88L332.73 257.42L325.25 267.63Z"
                    fill="#FDA57D"
                  />
                  <path
                    id="Vector_55"
                    d="M330.92 245.25C338.928 245.25 345.42 238.745 345.42 230.72C345.42 222.695 338.928 216.19 330.92 216.19C322.912 216.19 316.42 222.695 316.42 230.72C316.42 238.745 322.912 245.25 330.92 245.25Z"
                    fill="#FDA57D"
                  />
                  <path
                    id="Vector_56"
                    d="M151.16 240.88L141 237.25L133.75 262.67C133.75 262.67 141.75 253.95 148.97 253.23L151.16 240.88Z"
                    fill="#535461"
                  />
                  <path
                    id="Vector_57"
                    d="M175.8 208.93L191 205.3C191 205.3 198.25 248.88 209.12 252.51H182.33C182.33 252.51 180.15 210.38 175.8 208.93Z"
                    fill="#4D8AF0"
                  />
                  <path
                    id="Vector_58"
                    d="M191 205.3L188.83 195.86L160.56 202.4C160.56 202.4 173.56 205.31 175.78 208.94L191 205.3Z"
                    fill="#535461"
                  />
                  <path
                    id="Vector_59"
                    d="M333.23 213.2C329.38 212.783 325.487 213.273 321.86 214.63C320.054 215.321 318.411 216.379 317.034 217.737C315.657 219.095 314.576 220.724 313.86 222.52C312.56 226.16 313.4 230.63 316.34 233.13C317.038 233.789 317.935 234.197 318.89 234.29C320.43 234.35 321.72 233.22 322.89 232.24C325.111 230.407 327.558 228.864 330.17 227.65C332.39 226.65 335.1 225.85 337.17 227.12C338.107 227.816 338.956 228.621 339.7 229.52C340.898 230.711 342.371 231.589 343.989 232.075C345.607 232.562 347.32 232.643 348.976 232.311C350.633 231.979 352.182 231.244 353.487 230.171C354.792 229.098 355.813 227.721 356.46 226.16C355.9 227.51 350.72 225.65 349.94 225.24C347.56 223.98 346.34 222.11 345.12 219.82C342.74 215.27 338.26 213.59 333.23 213.2Z"
                    fill="black"
                  />
                  <path
                    id="Vector_60"
                    d="M314.25 272.84L339.62 304.07L378.76 288.07C378.76 288.07 384.56 285.89 381.66 280.81C378.76 275.73 372.24 281.54 372.24 281.54L343.24 291.71L325.6 267.26L314.25 272.84Z"
                    fill="#FDA57D"
                  />
                  <path
                    id="Vector_61"
                    d="M303.74 247.06C303.74 247.06 314.61 280.47 316.06 281.19L333.06 272.84C333.06 272.84 328.23 250.31 322.85 246.84C317.47 243.37 304.47 244.15 303.74 247.06Z"
                    fill="#3861E5"
                  />
                  <path
                    id="Vector_62"
                    d="M345.226 236.01L343.335 234.753L340.164 239.526L342.055 240.782L345.226 236.01Z"
                    fill="black"
                  />
                  <path
                    id="Vector_63"
                    d="M342.577 235.785L328.562 226.467L327.931 227.416L341.946 236.735L342.577 235.785Z"
                    fill="black"
                  />
                  <path
                    id="Vector_64"
                    d="M319 243.43L311.75 241.25L263.15 248.52L263.51 281.52C263.51 281.52 322.59 278.98 329.11 263.73L324.76 248.52L319 243.43Z"
                    fill="#3861E5"
                  />
                  <path
                    id="Vector_65"
                    d="M323.31 249.24L342.16 260.13L339.62 277.2L321.86 263.04L323.31 249.24Z"
                    fill="#3861E5"
                  />
                  <path
                    id="Vector_66"
                    d="M263.51 248.87C263.51 248.87 256.99 243.06 235.97 248.87C214.95 254.68 151.16 240.87 151.16 240.87L149 253.23C149 253.23 185.24 270.66 212.06 267.03C222.5 265.62 232.6 270.03 241.06 271.39C248.485 272.617 255.987 273.329 263.51 273.52V248.87Z"
                    fill="#4D8AF0"
                  />
                </g>
                <g id="balance">
                  <path
                    id="Vector_67"
                    d="M281.63 237.98H278.73V95.9199L281.59 96.0699L281.63 237.98Z"
                    fill="#E0E0E0"
                  />
                  <path
                    id="Vector_68"
                    d="M278.75 96.0699L265.67 76.7399L267.04 72.6499L281.59 96.0699H278.75Z"
                    fill="#E0E0E0"
                  />
                  <path
                    id="Vector_69"
                    d="M284.53 231.44H275.83V290.27H284.53V231.44Z"
                    fill="#E0E0E0"
                  />
                  <path
                    id="Vector_70"
                    d="M271 53L272.64 83.8L278.38 105.97C278.38 105.97 282.9 118.68 286.1 119.18C289.3 119.68 289.31 109.32 287.1 106.24C284.89 103.16 285.95 82.61 285.95 82.61L289.51 56.46L271 53Z"
                    fill="#FDA57D"
                  />
                </g>
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="133.13"
                  y1="136.42"
                  x2="133.13"
                  y2="112.55"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#808080" stopOpacity="0.25" />
                  <stop offset="0.54" stopColor="#808080" stopOpacity="0.12" />
                  <stop offset="1" stopColor="#808080" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear"
                  x1="91604.2"
                  y1="45648.6"
                  x2="91604.2"
                  y2="14971.6"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#808080" stopOpacity="0.25" />
                  <stop offset="0.54" stopColor="#808080" stopOpacity="0.12" />
                  <stop offset="1" stopColor="#808080" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear"
                  x1="7584.99"
                  y1="5224.2"
                  x2="7584.99"
                  y2="4477.64"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#808080" stopOpacity="0.25" />
                  <stop offset="0.54" stopColor="#808080" stopOpacity="0.12" />
                  <stop offset="1" stopColor="#808080" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear"
                  x1="9487.32"
                  y1="8119.17"
                  x2="9487.32"
                  y2="6511.63"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#808080" stopOpacity="0.25" />
                  <stop offset="0.54" stopColor="#808080" stopOpacity="0.12" />
                  <stop offset="1" stopColor="#808080" stopOpacity="0.1" />
                </linearGradient>
                <clipPath id="clip0">
                  <rect width="682" height="729.04" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <EthSvg src={ethSvg} alt="eth-svg" />
          </Application>
        </Fade>
      </>
    </ThemeProvider>
  );
};

export default App;
