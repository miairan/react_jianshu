import { createGlobalStyle } from 'styled-components';

export const Iconfont = createGlobalStyle`
@font-face {
  font-family: "iconfont";
  src: url('./iconfont.eot?t=1540474644454'); /* IE9*/
  src: url('./iconfont.eot?t=1540474644454#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
  url('./iconfont.ttf?t=1540474644454') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('./iconfont.svg?t=1540474644454#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family:"iconfont" !important;
  font-size:16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;
