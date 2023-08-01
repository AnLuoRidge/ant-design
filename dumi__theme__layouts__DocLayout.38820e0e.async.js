"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[5096],{803195:function(Ce,zn,i){i.r(zn),i.d(zn,{default:function(){return vr}});var hn=i(805574),w=i.n(hn),rn=i(294184),C=i.n(rn),Jn=i(727484),Ln=i.n(Jn),Yn=i(533852),l=i(606641),m=i(667294),F=i(715778),wn=i(634577),B=i(302559),Rn=i(438746),Se=i(168400),u=i.n(Se),S=i(370917),z=i(65630),n=i(785893),Qn,gn={1:"#fff",2:"#fafafa",3:"#f5f5f5",4:"#f0f0f0",5:"#d9d9d9",6:"#bfbfbf",7:"#8c8c8c",8:"#595959",9:"#434343",10:"#262626",11:"#1f1f1f",12:"#141414",13:"#000"},ze=function(){var e=(0,z.Fg)(),t=function a(c){var p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;return p<=10?`
.palette-`.concat(c,"-").concat(p,` {
  background: `).concat(e["".concat(c,"-").concat(p)],`;
}
`).concat(a(c,p+1),`
    `):""},o=function a(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1;return c<=13?`
.palette-gray-`.concat(c,` {
  background: `).concat(gn[c],`;
}
`).concat(a(c+1),`
    `):""};return(0,n.jsx)(S.xB,{styles:(0,S.iv)(Qn||(Qn=u()([`
        .color-palettes {
          margin: 0 1%;

          &-dark {
            margin: 0;
            padding: 0 28px;
            background-color: #141414;

            .color-title {
              color: rgba(255, 255, 255, 0.85);
            }

            .color-description {
              color: rgba(255, 255, 255, 0.45);
            }

            .color-palette {
              margin: 45px 3.5% 45px 0;

              &:nth-of-type(3n) {
                margin-right: 0;
              }

              .main-color-item {
                margin-right: 0;

                &:hover {
                  margin-right: -8px;
                }
              }
            }
          }
        }

        .color-palette {
          display: inline-block;
          width: 31%;
          margin: 45px 1%;

          &-pick {
            margin: 0 0 20px;
            font-size: 20px;
            text-align: center;
          }

          &-picker {
            margin: 24px 0;

            &-value {
              position: relative;
              top: -3px;
              margin-left: 16px;
              font-size: 14px;
              font-family: Consolas, sans-serif;

              .ant-row-rtl & {
                margin-right: 16px;
                margin-left: 0;
              }
            }

            &-validation {
              position: relative;
              top: -3px;
              margin-left: 16px;
              color: `,`;
              font-size: 13px;

              .ant-row-rtl & {
                margin-right: 16px;
                margin-left: 0;
              }

              &-dark {
                margin-left: 0;
              }
            }
          }
        }

        .main-color {
          `,`
          `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`
  `,`

  text-align: left;

          &-item {
            position: relative;
            height: 44px;
            margin-right: 4px;
            padding: 0 12px;
            font-size: 14px;
            font-family: Consolas, sans-serif;
            line-height: 44px;
            cursor: pointer;
            transition: all 0.2s;

            &:first-child {
              border-radius: 4px 4px 0 0;
            }

            &:last-child {
              border-radius: 0 0 4px 4px;
            }

            &:hover {
              margin-right: -8px;
              border-radius: 0 4px 4px 0;
            }
          }

          &-item &-text {
            float: left;
            transition: all 0.3s;
          }

          &-item &-value {
            position: relative;
            left: 3px;
            float: right;
            transform: scale(0.85);
            transform-origin: 100% 50%;
            opacity: 0;
            transition: all 0.3s;
          }
        }

        .color-title {
          margin: 0 0 24px;
          color: #5c6b77;
          font-weight: 500;
          font-size: 22px;
          text-align: center;
          text-transform: capitalize;
        }

        .color-description {
          display: block;
          color: #777;
          font-weight: lighter;
          font-size: 14px;
        }

        .main-color:hover {
          .main-color-value {
            left: 0;
            opacity: 0.7;
          }
        }

        .color-palette-horizontal {
          box-sizing: border-box;
          width: 100%;

          &-dark {
            height: 303px;
            padding: 32px 28px;
            background-color: #141414;

            .color-palette-picker {
              margin-bottom: 0;
            }

            .color-palette-pick {
              color: rgba(255, 255, 255, 0.65);
              text-align: left;

              &-hex {
                color: rgba(255, 255, 255, 0.65);
              }

              .ant-row-rtl & {
                direction: rtl;
                text-align: right;
              }
            }
          }

          .main-color {
            display: flex;

            &-item {
              position: relative;
              flex: 1;
              box-sizing: border-box;
              height: 86px;
              margin-right: 0;
              padding: 37px 0 0;
              line-height: normal;
              text-align: center;
              border-radius: 0;

              .main-color-text {
                float: none;
              }

              &:hover {
                height: 96px;
                margin-top: -10px;
                border-radius: 4px 4px 0 0;
              }
            }

            &-value {
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              text-align: center;
              transform-origin: unset;
            }

            &:hover {
              .main-color-item {
                padding-top: 8px;
              }

              .main-color-value {
                bottom: 8px;
                opacity: 0.7;
              }
            }
          }
        }
      `])),e.colorError,t("blue"),t("purple"),t("cyan"),t("green"),t("magenta"),t("red"),t("volcano"),t("orange"),t("gold"),t("yellow"),t("lime"),t("geekblue"),o())})},ce=ze,qn,Le=function(){return(0,n.jsx)(S.xB,{styles:(0,S.iv)(qn||(qn=u()([`
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        > a[aria-hidden]:first-child {
          float: left;
          width: 20px;
          padding-inline-end: 4px;
          font-size: 0;
          line-height: inherit;
          text-align: right;
          padding-inline-end: 4px;
          margin-inline-start: -24px;

          [data-direction='rtl'] & {
            float: right;
          }

          &:hover {
            border: 0;
          }

          > .icon-link::before {
            font-size: 20px;
            content: '#';
          }
        }

        &:not(:hover) > a[aria-hidden]:first-child > .icon-link {
          visibility: hidden;
        }
      }
    `])))})},de,Ae=function(){var r=(0,z.Fg)();return(0,n.jsx)(S.xB,{styles:(0,S.iv)(de||(de=u()([`
        @font-face {
          font-weight: normal;
          font-family: AlibabaPuHuiTi;
          src: url('//at.alicdn.com/t/webfont_6e11e43nfj.woff2') format('woff2'),
            url('//at.alicdn.com/t/webfont_6e11e43nfj.woff') format('woff'),
            /* chrome\u3001firefox */ url('//at.alicdn.com/t/webfont_6e11e43nfj.ttf') format('truetype'); /* chrome\u3001firefox\u3001opera\u3001Safari, Android, iOS 4.2+ */
          font-display: swap;
        }

        @font-face {
          font-weight: bold;
          font-family: AlibabaPuHuiTi;
          src: url('//at.alicdn.com/t/webfont_exesdog9toj.woff2') format('woff2'),
            url('//at.alicdn.com/t/webfont_exesdog9toj.woff') format('woff'),
            /* chrome\u3001firefox */ url('//at.alicdn.com/t/webfont_exesdog9toj.ttf')
              format('truetype'); /* chrome\u3001firefox\u3001opera\u3001Safari, Android, iOS 4.2+ */
          font-display: swap;
        }

        // \u7EC4\u4EF6\u4E30\u5BCC\uFF0C\u9009\u7528\u81EA\u5982\u5B9A\u5236\u4E3B\u9898\u968F\u5FC3\u6240\u6B32\u8BBE\u8BA1\u8BED\u8A00\u4E0E\u7814\u53D1\u6846\u67B61234567890 QWERTYUIOPLKJHGFDSAZXCVBNM,.mnbvcxzasdfghjklpoiuytrewq
        /* CDN \u670D\u52A1\u4EC5\u4F9B\u5E73\u53F0\u4F53\u9A8C\u548C\u8C03\u8BD5\u4F7F\u7528\uFF0C\u5E73\u53F0\u4E0D\u627F\u8BFA\u670D\u52A1\u7684\u7A33\u5B9A\u6027\uFF0C\u4F01\u4E1A\u5BA2\u6237\u9700\u4E0B\u8F7D\u5B57\u4F53\u5305\u81EA\u884C\u53D1\u5E03\u4F7F\u7528\u5E76\u505A\u597D\u5907\u4EFD\u3002 */
        @font-face {
          font-weight: 900;
          font-family: 'AliPuHui';
          src: url('//at.alicdn.com/wf/webfont/exMpJIukiCms/Gsw2PSKrftc1yNWMNlXgw.woff2')
              format('woff2'),
            url('//at.alicdn.com/wf/webfont/exMpJIukiCms/vtu73by4O2gEBcvBuLgeu.woff') format('woff');
          font-display: swap;
        }

        html {
          direction: initial;

          &.rtl {
            direction: rtl;
          }
        }

        body {
          overflow-x: hidden;
          color: `,`;
          font-size: `,`px;
          font-family: `,`;
          line-height: `,`;
          background: `,`;
          transition: background-color 1s cubic-bezier(0.075, 0.82, 0.165, 1);
        }
      `])),r.colorText,r.fontSize,r.fontFamily,r.lineHeight,r.colorBgContainer)})},pe,Ne=function(){return(0,n.jsx)(S.xB,{styles:(0,S.iv)(pe||(pe=u()([`
      body,
      div,
      dl,
      dt,
      dd,
      ul,
      ol,
      li,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      pre,
      code,
      form,
      fieldset,
      legend,
      input,
      textarea,
      p,
      blockquote,
      th,
      td,
      hr,
      button,
      article,
      aside,
      details,
      figcaption,
      figure,
      footer,
      header,
      hgroup,
      menu,
      nav,
      section {
        margin: 0;
        padding: 0;
      }

      ul,
      ol {
        list-style: none;
      }

      img {
        vertical-align: middle;
        border-style: none;
      }
    `])))})},Dn=i(510274),_n,ue=function(){var e=(0,z.Fg)(),t=e.antCls,o=e.colorPrimary;return(0,n.jsx)(S.xB,{styles:(0,S.iv)(_n||(_n=u()([`
        .markdown {
          color: `,`;
          font-size: 14px;
          line-height: 2;
        }

        .highlight {
          line-height: 1.5;
        }

        .markdown img {
          max-width: calc(100% - 32px);
          max-height: 100%;
        }

        .markdown p > img {
          margin: 34px auto;
          box-shadow: 0 8px 20px rgba(143, 168, 191, 0.35);
          max-width: 1024px;
          width: 100%;
          display: block;
        }

        .markdown p > img.markdown-inline-image {
          margin: 0;
          box-shadow: none;
        }

        .markdown h1 {
          margin-top: 8px;
          margin-bottom: 20px;
          color: `,`;
          font-weight: 500;
          font-size: 30px;
          font-family: Avenir, `,`, sans-serif;
          line-height: 38px;

          .subtitle {
            margin-left: 12px;
          }
        }

        .markdown h2 {
          font-size: 24px;
          line-height: 32px;
        }

        .markdown h2,
        .markdown h3,
        .markdown h4,
        .markdown h5,
        .markdown h6 {
          clear: both;
          margin: 1.6em 0 0.6em;
          color: `,`;
          font-weight: 500;
          font-family: Avenir, `,`, sans-serif;
        }

        .markdown h3 {
          font-size: 18px;
        }

        .markdown h4 {
          font-size: 16px;
        }

        .markdown h5 {
          font-size: 14px;
        }

        .markdown h6 {
          font-size: 12px;
        }

        .markdown hr {
          clear: both;
          height: 1px;
          margin: 24px 0;
          background: `,`;
          border: 0;
        }

        .markdown p,
        .markdown pre {
          margin: 1em 0;

          `,`-row-rtl & {
            direction: rtl;
            text-align: right;
          }
        }

        .markdown ul > li {
          margin-left: 20px;
          padding-left: 4px;
          list-style-type: circle;

          .rtl & {
            margin-right: 20px;
            margin-left: 0;
            padding-right: 4px;
            padding-left: 0;
          }

          &:empty {
            display: none;
          }
        }

        .markdown ol > li {
          margin-left: 20px;
          padding-left: 4px;
          list-style-type: decimal;

          `,`-row-rtl & {
            margin-right: 20px;
            margin-left: 0;
            padding-right: 4px;
            padding-left: 0;
          }
        }

        .markdown ul > li > p,
        .markdown ol > li > p {
          margin: 0.2em 0;
        }

        .markdown code {
          margin: 0 1px;
          padding: 0.2em 0.4em;
          font-size: 0.9em;
          background: `,`;
          border: 1px solid `,`;
          border-radius: 3px;
        }

        .markdown pre {
          font-family: `,`;
          background: `,`;
          border-radius: `,`px;
        }

        .markdown pre code {
          margin: 0;
          padding: 0;
          overflow: auto;
          color: `,`;
          font-size: `,`px;
          direction: ltr;
          text-align: left;
          background: #f5f5f5;
          border: none;
        }

        .markdown strong,
        .markdown b {
          font-weight: 500;
        }

        .markdown .dumi-default-source-code {
          margin: 1em 0;
          background-color: `,`;
          border-radius: `,`px;
          > pre.prism-code {
            padding: 12px 20px;
            font-size: 13px;
            line-height: 2;
          }
        }
        .pic-plus {
          & > * {
            display: inline-block !important;
            vertical-align: middle;
          }
          span {
            margin: 0 20px;
            color: #aaa;
            font-size: 30px;
          }
        }
        .antd-site-snippet {
          .ant-tabs-tab {
            .snippet-label {
              display: flex;
              align-items: center;
              justify-content: center;
              svg {
                margin-inline-end: 8px;
              }
            }
          }
          .dumi-default-source-code {
            margin: 0 auto;
            background-color: `,`;
            border-radius: `,`px;
            > pre.prism-code {
              padding: 12px 20px;
              font-size: 13px;
              line-height: 2;
            }
          }
        }

        .markdown table td > a:not(:last-child) {
          margin-right: 0 !important;

          &::after {
            position: relative !important;
          }
        }

        .markdown blockquote {
          margin: 1em 0;
          padding-left: 0.8em;
          color: `,`;
          font-size: 90%;
          border-left: 4px solid `,`;

          .rtl & {
            padding-right: 0.8em;
            padding-left: 0;
            border-right: 4px solid `,`;
            border-left: none;
          }
        }

        .markdown blockquote p {
          margin: 0;
        }

        .markdown .anchor {
          margin-left: 8px;
          opacity: 0;
          transition: opacity 0.3s;

          .rtl & {
            margin-right: 8px;
            margin-left: 0;
          }
        }

        .markdown .waiting {
          color: #ccc;
          cursor: not-allowed;
        }

        .markdown a.edit-button {
          display: inline-block;
          margin-left: 8px;
          text-decoration: none;

          .rtl & {
            margin-right: 8px;
            margin-left: 0;
            transform: rotateY(180deg);
          }

          `,`icon {
            display: block;
            color: `,`;
            font-size: 16px;
            transition: all 0.3s;

            &:hover {
              color: `,`;
            }
          }
        }

        .markdown h1:hover .anchor,
        .markdown h2:hover .anchor,
        .markdown h3:hover .anchor,
        .markdown h4:hover .anchor,
        .markdown h5:hover .anchor,
        .markdown h6:hover .anchor {
          display: inline-block;
          opacity: 1;
        }

        .markdown > br,
        .markdown > p > br {
          clear: both;
        }

        .markdown .dumi-default-table {
          table {
            margin: 0;
            overflow-x: auto;
            overflow-y: hidden;
            direction: ltr;
            empty-cells: show;
            border: 1px solid `,`;
            border-collapse: collapse;
            border-spacing: 0;

            th,
            td {
              padding: 12px 24px;
              text-align: left;
              border: 1px solid `,`;

              &:first-child {
                border-left: 1px solid `,`;
              }

              &:last-child {
                border-right: 1px solid `,`;
              }

              img {
                max-width: unset;
              }
            }

            th {
              color: #5c6b77;
              font-weight: 500;
              white-space: nowrap;
              background: rgba(0, 0, 0, 0.02);
              border-width: 1px 1px 2px;
            }

            tbody tr {
              transition: all 0.3s;

              &:hover {
                background: rgba(60, 90, 100, 0.04);
              }
            }
          }

          table.component-api-table {
            margin: 0;
            overflow-x: auto;
            overflow-y: hidden;
            font-size: `,`px;
            font-family: `,`;
            line-height: `,`;
            border: 1px solid `,`;
            border-width: 0 1px;

            th {
              border-width: 1px 0 2px;
            }

            td {
              border-width: 1px 0;
              &:first-child {
                width: 18%;
                min-width: 58px;
                color: #595959;
                font-weight: 600;
                white-space: nowrap;
              }

              &:nth-child(2) {
                width: 55%;
                min-width: 160px;
              }

              &:nth-child(3) {
                width: 22%;
                color: `,`;
                font-size: `,`px;
              }

              &:nth-child(4) {
                width: 15%;
                font-size: `,`px;
              }

              &:nth-child(5) {
                width: 8%;
                font-size: `,`px;
              }

              &:nth-last-child(3):first-child {
                width: 38%;
              }

              &:nth-last-child(3):first-child ~ td:nth-last-child(2) {
                width: 70%;
              }
            }
          }
        }

        .grid-demo,
        [id^='components-grid-demo-'] {
          `,`-row > div,
            .code-box-demo `,`-row > div {
            min-height: 30px;
            margin-top: 8px;
            margin-bottom: 8px;
            color: #fff;
            text-align: center;
            border-radius: 0;
          }

          .code-box-demo `,`-row > div:not(.gutter-row) {
            padding: 16px 0;
            background: `,`;

            &:nth-child(2n + 1) {
              background: `,`;
            }
          }

          `,`-row .demo-col,
            .code-box-demo `,`-row .demo-col {
            margin-top: 0;
            margin-bottom: 0;
            padding: 30px 0;
            color: `,`;
            font-size: 18px;
            text-align: center;
            border: none;
          }

          `,`-row .demo-col-1 {
            background: `,`;
          }

          `,`-row .demo-col-2,
            .code-box-demo `,`-row .demo-col-2 {
            background: `,`;
          }

          `,`-row .demo-col-3,
            .code-box-demo `,`-row .demo-col-3 {
            color: #999;
            background: rgba(255, 255, 255, 0.2);
          }

          `,`-row .demo-col-4,
            .code-box-demo `,`-row .demo-col-4 {
            background: `,`;
          }

          `,`-row .demo-col-5,
            .code-box-demo `,`-row .demo-col-5 {
            color: #999;
            background: rgba(255, 255, 255, 0.2);
          }

          .code-box-demo .height-100 {
            height: 100px;
            line-height: 100px;
          }

          .code-box-demo .height-50 {
            height: 50px;
            line-height: 50px;
          }

          .code-box-demo .height-120 {
            height: 120px;
            line-height: 120px;
          }

          .code-box-demo .height-80 {
            height: 80px;
            line-height: 80px;
          }
        }

        [id='components-grid-demo-playground'],
        [id='components-grid-demo-gutter'] {
          > .code-box-demo `,`-row > div {
            margin-top: 0;
            margin-bottom: 0;
          }
        }
      `])),e.colorText,e.colorTextHeading,e.fontFamily,e.colorTextHeading,e.fontFamily,e.colorSplit,t,t,e.siteMarkdownCodeBg,e.colorSplit,e.codeFamily,e.siteMarkdownCodeBg,e.borderRadius,e.colorText,Math.max(e.fontSize-1,12),e.siteMarkdownCodeBg,e.borderRadius,e.siteMarkdownCodeBg,e.borderRadius,e.colorTextSecondary,e.colorSplit,e.colorSplit,t,e.colorTextSecondary,e.colorText,e.colorSplit,e.colorSplit,e.colorSplit,e.colorSplit,Math.max(e.fontSize-1,12),e.codeFamily,e.lineHeight,e.colorSplit,e.magenta7,Math.max(e.fontSize-1,12),Math.max(e.fontSize-1,12),Math.max(e.fontSize-1,12),t,t,t,o,new Dn.C(o).setAlpha(.75).toHex8String(),t,t,e.colorWhite,t,new Dn.C(o).setAlpha(.75).toHexString(),t,t,new Dn.C(o).setAlpha(.75).toHexString(),t,t,t,t,new Dn.C(o).setAlpha(.6).toHexString(),t,t,t)})},Te=ue,me,Be=function(){var r=(0,z.Fg)();return(0,n.jsx)(S.xB,{styles:(0,S.iv)(me||(me=u()([`
        /**
* prism.js default theme for JavaScript, CSS and HTML
* Based on dabblet (http://dabblet.com)
* @author Lea Verou
*/

        pre code {
          display: block;
          padding: 16px 32px;
          color: `,`;
          font-size: `,`px;
          font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
          line-height: 2;
          white-space: pre;
          background: white;
          border: 1px solid #e9e9e9;
          border-radius: `,`px;
        }

        code[class*='language-'],
        pre[class*='language-'] {
          color: black;
          font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
          line-height: 1.5;
          direction: ltr;
          white-space: pre;
          text-align: left;
          word-wrap: normal;
          word-break: normal;
          word-spacing: normal;
          tab-size: 4;
          hyphens: none;
          background: none;
        }

        code[class*='css'] {
          direction: ltr;
        }

        pre[class*='language-'] ::selection,
        code[class*='language-'] ::selection {
          text-shadow: none;
          background: #b3d4fc;
        }

        @media print {
          code[class*='language-'],
          pre[class*='language-'] {
            text-shadow: none;
          }
        }

        /* Code blocks */
        pre[class*='language-'] {
          margin: 16px 0;
          padding: 12px 20px;
          overflow: auto;
        }

        :not(pre) > code[class*='language-'],
        pre[class*='language-'] {
          background: #f5f5f5;
        }

        /* Inline code */
        :not(pre) > code[class*='language-'] {
          padding: 0.1em;
          white-space: normal;
          border-radius: 0.3em;
        }

        .token.comment,
        .token.prolog,
        .token.doctype,
        .token.cdata {
          color: slategray;
        }

        .token.punctuation {
          color: #999;
        }

        .namespace {
          opacity: 0.7;
        }

        .markdown {
          .token.property,
          .token.tag,
          .token.boolean,
          .token.number,
          .token.constant,
          .token.symbol,
          .token.deleted {
            color: #f81d22;
          }

          .token.selector,
          .token.attr-name,
          .token.string,
          .token.char,
          .token.builtin,
          .token.inserted {
            color: #0b8235;
          }

          .token.operator,
          .token.entity,
          .token.url,
          .language-css .token.string,
          .style .token.string {
            color: #0b8235;
          }

          .token.atrule,
          .token.attr-value,
          .token.keyword {
            color: #008dff;
          }

          .token.function {
            color: #f81d22;
          }

          .token.regex,
          .token.important,
          .token.variable {
            color: #e90;
          }

          .token.important,
          .token.bold {
            font-weight: bold;
          }

          .token.italic {
            font-style: italic;
          }

          .token.entity {
            cursor: help;
          }
        }
      `])),r.colorText,r.fontSize,r.borderRadius)})},ne,Ee=function(){var e=(0,z.Fg)(),t=e.antCls,o=e.iconCls;return(0,n.jsx)(S.xB,{styles:(0,S.iv)(ne||(ne=u()([`
        .code-boxes-col-1-1 {
          width: 100%;
        }

        .code-boxes-col-2-1 {
          display: inline-block;
          vertical-align: top;
        }

        .code-box {
          position: relative;
          display: inline-block;
          width: 100%;
          margin: 0 0 16px;
          background-color: `,`;
          border: 1px solid `,`;
          border-radius: `,`px;
          transition: all 0.2s;

          .code-box-title {
            &,
            a {
              color: `,` !important;
              background: `,`;
            }
          }

          .code-box-demo {
            background-color: `,`;
            border-radius: `,"px ",`px 0 0;
          }

          .markdown {
            pre {
              margin: 0.5em 0;
              padding: 6px 12px;
            }

            pre code {
              margin: 0;
              background: #f5f5f5;
            }
          }

          &:target {
            border: 1px solid `,`;
          }

          &-expand-trigger {
            position: relative;
            color: #3b4357;
            font-size: 20px;
            cursor: pointer;
            opacity: 0.75;
            transition: all 0.3s;
            margin-inline-start: 12px;

            &:hover {
              opacity: 1;
            }
          }

          &-title {
            position: absolute;
            top: -14px;
            padding: 1px 8px;
            color: #777;
            background: `,`;
            border-radius: `,"px ",`px 0 0;
            transition: background-color 0.4s;
            margin-inline-start: 16px;

            `,`-row-rtl & {
              border-radius: `,"px 0 0 ",`px;
            }

            a,
            a:hover {
              color: `,`;
              font-weight: 500;
              font-size: `,`px;
            }
          }

          &-description {
            padding: 18px 24px 12px;
          }

          a.edit-button {
            position: absolute;
            top: 7px;
            right: -16px;
            font-size: 12px;
            text-decoration: none;
            background: inherit;
            transform: scale(0.9);
            padding-inline-end: 6px;

            `,` {
              color: `,`;
              transition: all 0.3s;

              &:hover {
                color: `,`;
              }
            }

            `,"-row",`-row-rtl & {
              right: auto;
              left: -22px;
            }
          }

          &-demo {
            padding: 42px 24px 50px;
            color: `,`;
            border-bottom: 1px solid `,`;
          }

          iframe {
            width: 100%;
            border: 0;
          }

          &-meta {
            &.markdown {
              position: relative;
              width: 100%;
              font-size: `,`px;
              border-radius: 0 0 `,"px ",`px;
              transition: background-color 0.4s;
            }

            blockquote {
              line-height: 1.5;
            }

            h4,
            section& p {
              margin: 0;
            }

            > p {
              width: 100%;
              margin: 0.5em 0;
              font-size: 12px;
              word-break: break-word;
              padding-inline-end: 25px;
            }
          }

          &.expand &-meta {
            border-bottom: 1px dashed `,`;
            border-radius: 0;
          }

          .code-expand-icon {
            position: relative;
            width: 16px;
            height: 16px;
            cursor: pointer;
          }

          .code-expand-icon-show,
          .code-expand-icon-hide {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            max-width: 100%;
            margin: 0;
            box-shadow: none;
            transition: all 0.4s;
            user-select: none;

            `,`-row-rtl & {
              right: 0;
              left: auto;
            }
          }

          .code-expand-icon-show {
            opacity: 0.55;
            pointer-events: auto;

            &:hover {
              opacity: 1;
            }
          }

          .code-expand-icon`,`-tooltip-open .code-expand-icon-show {
            opacity: 1;
          }

          .code-expand-icon-hide {
            opacity: 0;
            pointer-events: none;
          }

          .highlight-wrapper {
            display: none;
            overflow: auto;
            border-radius: 0 0 `,"px ",`px;

            &-expand {
              display: block;
            }
          }

          .highlight {
            position: relative;

            pre {
              margin: 0;
              padding: 0;
              background: `,`;
            }

            &:not(:first-child) {
              border-top: 1px dashed `,`;
            }
          }

          &-actions {
            display: flex;
            justify-content: center;
            padding: 12px 0;
            border-top: 1px dashed `,`;
            opacity: 0.7;
            transition: opacity 0.3s;

            &:hover {
              opacity: 1;
            }
          }

          &-actions &-code-action {
            position: relative;
            display: flex;
            align-items: center;
            width: 16px;
            height: 16px;
            color: `,`;
            cursor: pointer;
            transition: all 0.24s;

            &:hover {
              color: `,`;
            }

            `,` {
              display: block;
            }
          }

          &-code-copy {
            width: 14px;
            height: 14px;
            font-size: 14px;
            text-align: center;
            background: `,`;
            cursor: pointer;
            transition: transform 0.24s;

            &`,`-check {
              color: `,` !important;
              font-weight: bold;
            }
          }

          &-codepen {
            width: 14px;
            height: 14px;
            overflow: hidden;
            border: 0;
            cursor: pointer;
          }

          &-riddle {
            width: 14px;
            height: 14px;
            overflow: hidden;
            border: 0;
            cursor: pointer;
          }

          &-codesandbox {
            width: 16px;
            height: 16px;
            overflow: hidden;
            border: 0;
            cursor: pointer;

            &:hover {
              opacity: 1;
            }
          }

          .highlight-wrapper:hover &-code-copy,
          .highlight-wrapper:hover &-codepen,
          .highlight-wrapper:hover &-codesandbox,
          .highlight-wrapper:hover &-riddle {
            opacity: 1;
          }

          pre {
            width: auto;
            margin: 0;

            code {
              background: `,`;
              border: none;
              box-shadow: unset;
            }
          }

          &-debug {
            border-color: `,`;
          }

          &-debug &-title a {
            color: `,`;
          }
        }

        .demo-wrapper {
          position: relative;
        }

        .all-code-box-controls {
          position: absolute;
          top: -32px;
          inset-inline-end: 0;
        }

        `,`-row-rtl {
          #components-tooltip-demo-placement,
          #components-popover-demo-placement,
          #components-popconfirm-demo-placement {
            .code-box-demo {
              direction: ltr;
            }
          }
        }
      `])),e.colorBgContainer,e.colorSplit,e.borderRadius,e.colorText,e.colorBgContainer,e.colorBgContainer,e.borderRadius,e.borderRadius,e.colorPrimary,e.colorBgContainer,e.borderRadius,e.borderRadius,t,e.borderRadius,e.borderRadius,e.colorText,e.fontSize,o,e.colorTextSecondary,e.colorText,t,t,e.colorText,e.colorSplit,e.fontSize,e.borderRadius,e.borderRadius,e.colorSplit,t,t,e.borderRadius,e.borderRadius,e.colorBgContainer,e.colorSplit,e.colorSplit,e.colorTextSecondary,e.colorText,o,e.colorBgContainer,o,e.green6,e.colorBgContainer,e.purple3,e.purple6,t)})},X=Ee,d,k=function(){var r=(0,z.Fg)(),e=r.antCls,t=r.iconCls;return(0,n.jsx)(S.xB,{styles:(0,S.iv)(d||(d=u()([`
        ul.anticons-list {
          margin: 10px 0;
          overflow: hidden;
          direction: ltr;
          list-style: none;

          li {
            position: relative;
            float: left;
            width: 16.66%;
            height: 100px;
            margin: 3px 0;
            padding: 10px 0 0;
            overflow: hidden;
            color: #555;
            text-align: center;
            list-style: none;
            background-color: inherit;
            border-radius: 4px;
            cursor: pointer;
            transition: color 0.3s ease-in-out, background-color 0.3s ease-in-out;

            .rtl & {
              margin: 3px 0;
              padding: 10px 0 0;
            }

            `,` {
              margin: 12px 0 8px;
              font-size: 36px;
              transition: transform 0.3s ease-in-out;
              will-change: transform;
            }

            .anticon-class {
              display: block;
              font-family: 'Lucida Console', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono',
                monospace;
              white-space: nowrap;
              text-align: center;
              transform: scale(0.83);

              `,`-badge {
                transition: color 0.3s ease-in-out;
              }
            }

            &:hover {
              color: #fff;
              background-color: `,`;

              `,` {
                transform: scale(1.4);
              }

              `,`-badge {
                color: #fff;
              }
            }

            &.TwoTone:hover {
              background-color: #8ecafe;
            }

            &.copied:hover {
              color: rgba(255, 255, 255, 0.2);
            }

            &::after {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              color: #fff;
              line-height: 110px;
              text-align: center;
              background: #1677ff;
              opacity: 0;
              transition: all 0.3s cubic-bezier(0.18, 0.89, 0.32, 1.28);
              content: 'Copied!';
            }

            &.copied::after {
              opacity: 1;
            }
          }
        }

        .copied-code {
          padding: 2px 4px;
          font-size: 12px;
          background: #f5f5f5;
          border-radius: 2px;
        }
      `])),t,e,r.colorPrimary,t,e)})},E,Z=function(){var r=(0,z.Fg)(),e=r.iconCls;return(0,n.jsx)(S.xB,{styles:(0,S.iv)(E||(E=u()([`
        .icon-pic-searcher {
          display: inline-block;
          margin: 0 8px;

          .icon-pic-btn {
            color: `,`;
            cursor: pointer;
            transition: all 0.3s;

            &:hover {
              color: `,`;
            }
          }
        }

        .icon-pic-preview {
          width: 66px;
          height: 66px;
          margin-top: 10px;
          padding: 8px;
          text-align: center;
          border: 1px solid `,`;
          border-radius: 4px;

          > img {
            max-width: 50px;
            max-height: 50px;
          }
        }

        .icon-pic-search-result {
          min-height: 50px;
          padding: 0 10px;

          > .result-tip {
            padding: 10px 0;
            color: `,`;
          }

          > table {
            width: 100%;

            .col-icon {
              width: 80px;
              padding: 10px 0;

              > `,` {
                font-size: 30px;

                :hover {
                  color: `,`;
                }
              }
            }
          }
        }
      `])),r.colorIcon,r.colorIconHover,r.colorBorder,r.colorTextSecondary,e,r.colorLinkHover)})},W,an=function(){return(0,n.jsx)(S.xB,{styles:(0,S.iv)(W||(W=u()([`
      /* Browser mockup code
 * Contribute: https://gist.github.com/jarthod/8719db9fef8deb937f4f
 * Live example: https://updown.io
 */

      .browser-mockup {
        position: relative;
        border-top: 2em solid rgba(230, 230, 230, 0.7);
        border-radius: 3px 3px 0 0;
        box-shadow: 0 0.1em 0.5em 0 rgba(0, 0, 0, 0.28);
      }

      .browser-mockup::before {
        position: absolute;
        top: -1.25em;
        left: 1em;
        display: block;
        width: 0.5em;
        height: 0.5em;
        background-color: #f44;
        border-radius: 50%;
        box-shadow: 0 0 0 2px #f44, 1.5em 0 0 2px #9b3, 3em 0 0 2px #fb5;
        content: '';
      }

      .browser-mockup.with-tab::after {
        position: absolute;
        top: -2em;
        left: 5.5em;
        display: block;
        width: 20%;
        height: 0;
        border-right: 0.8em solid transparent;
        border-bottom: 2em solid white;
        border-left: 0.8em solid transparent;
        content: '';
      }

      .browser-mockup.with-url::after {
        position: absolute;
        top: -1.6em;
        left: 5.5em;
        display: block;
        width: calc(100% - 6em);
        height: 1.2em;
        background-color: white;
        border-radius: 2px;
        content: '';
      }

      .browser-mockup > * {
        display: block;
      }
    `])))})},ln,Q=function(){var r=(0,z.Fg)();return(0,n.jsx)(S.xB,{styles:(0,S.iv)(ln||(ln=u()([`
        .nav-phone-icon {
          position: absolute;
          top: 25px;
          right: 30px;
          z-index: 1;
          display: none;
          width: 16px;
          height: 22px;
          cursor: pointer;
        }

        @media only screen and (max-width: `,`px) {
          .code-boxes-col-2-1,
          .code-boxes-col-1-1 {
            float: none;
            width: 100%;
            max-width: unset;
          }
        }

        @media only screen and (max-width: 767.99px) {
          .preview-image-boxes {
            float: none;
            width: 100%;
            margin: 0 !important;
          }

          .preview-image-box {
            width: 100%;
            margin: 10px 0;
            padding: 0;
          }

          .image-wrapper {
            display: none;
          }

          div.version {
            display: block;
            margin: 29px auto 16px;
          }

          .toc {
            display: none;
          }

          .nav-phone-icon {
            display: block;
          }

          .main {
            height: calc(100% - 86px);
          }

          .aside-container {
            float: none;
            width: auto;
            padding-bottom: 30px;
            border-right: 0;
          }

          .ant-row-rtl {
            margin-right: 0;
            margin-left: 0;
            padding-right: 16px;
            padding-left: 16px;

            > .markdown > * {
              width: 100% !important;
            }
          }

          .main-wrapper {
            width: 100%;
            margin: 0;
            border-radius: 0;
          }

          .prev-next-nav {
            width: calc(100% - 32px);
            margin-left: 16px;

            .ant-row-rtl & {
              margin-right: 16px;
              margin-left: 64px;
            }
          }

          .drawer {
            .ant-menu-inline .ant-menu-item::after,
            .ant-menu-vertical .ant-menu-item::after {
              right: auto;
              left: 0;
            }
          }

          /** home \u533A\u5757 **/
          .home-page-wrapper {
            .page {
              h2 {
                margin: 80px auto 64px;
              }
            }

            .parallax-bg {
              display: none;
            }
          }

          .banner {
            display: block;
            height: 632px;

            &-bg-wrapper {
              display: none;
            }

            .img-wrapper,
            .text-wrapper {
              display: inline-block;
              width: 100%;
              min-width: unset;
              max-width: unset;
              margin: auto;
              text-align: center;
            }

            .img-wrapper {
              position: initial;
              margin-top: 20px;
              text-align: center;

              svg {
                width: 100%;
                max-width: 260px;
                height: auto;
                margin: 0 auto;
              }
            }

            .text-wrapper {
              min-height: 200px;
              margin-top: 32px;
              padding: 0;

              h1 {
                display: none;
              }

              p {
                color: #314659;
                font-size: 14px;
                line-height: 28px;
              }

              .banner-btns {
                display: block;
                min-width: 100%;
                white-space: nowrap;
                text-align: center;

                .banner-btn {
                  padding: 0 20px;
                  font-size: 14px;
                }
              }

              .banner-promote {
                min-width: 100%;
                margin-top: 32px;

                .ant-divider {
                  display: none;
                }

                a {
                  font-size: 14px;
                  white-space: nowrap;

                  img {
                    width: 20px;
                  }
                }
              }
            }
          }

          .page1 {
            min-height: 1300px;

            .ant-row {
              margin: 24px auto 64px;

              > div {
                margin-bottom: 48px;
              }
            }
          }

          .page2 {
            min-height: 840px;
            background: `,`;

            &-content {
              box-shadow: none;
            }

            &-components {
              display: none;
            }

            &-product {
              min-height: auto;
              padding: 0 16px;

              .product-block {
                margin-bottom: 34px;
                padding-bottom: 35px;
                border-bottom: 1px solid `,`;

                &:last-child {
                  margin-bottom: 32px;
                  border-bottom: none;

                  .block-text-wrapper {
                    height: auto;
                  }
                }

                .block-image-wrapper {
                  height: 88px;

                  img {
                    height: 100%;
                  }
                }

                .block-text-wrapper {
                  padding-bottom: 0;
                  border-bottom: none;

                  h4 {
                    margin-bottom: 4px;
                    font-size: 18px;
                    line-height: 24px;
                  }

                  p {
                    margin-bottom: 8px;
                    font-size: 12px;
                    line-height: 20px;
                  }

                  a {
                    line-height: 20px;
                  }

                  .components-button-wrapper {
                    margin-top: 16px;
                    font-size: 12px;

                    a {
                      display: block;
                    }
                  }

                  a.more-mobile-react,
                  a.more-mobile-angular {
                    margin-top: 0;
                    color: `,`;
                  }

                  a.more-mobile-react:hover,
                  a.more-mobile-angular:hover {
                    color: #40a9ff;
                  }
                }
              }
            }
          }

          .page3 {
            min-height: 688px;
            background: url('https://gw.alipayobjects.com/zos/rmsportal/qICoJIqqQRMeRGhPHBBS.svg')
              no-repeat;
            background-size: cover;

            .ant-row {
              margin: 0 8px;
            }

            .page3-block {
              margin-bottom: 32px;
              padding: 24px;
              background: `,`;
              border-radius: 4px;
              box-shadow: 0 8px 16px rgba(174, 185, 193, 0.3);

              &:nth-child(2) {
                .page3-img-wrapper img {
                  display: block;
                  width: 70%;
                  margin: auto;
                }
              }

              p {
                font-size: 12px;
              }

              .page3-img-wrapper {
                width: 20%;

                img {
                  width: 100%;
                }
              }

              .page3-text-wrapper {
                width: 80%;
                max-width: initial;
                margin: 0;
                padding-left: 16px;
              }
            }
          }
        }
      `])),r.screenLG,r.colorBgContainer,r.colorSplit,r.colorLink,r.colorBgContainer)})},sn,_=function(){var r=(0,z.Fg)();return(0,n.jsx)(S.xB,{styles:(0,S.iv)(sn||(sn=u()([`
        #nprogress {
          .bar {
            background: `,`;
          }

          .peg {
            box-shadow: 0 0 10px `,", 0 0 5px ",`;
          }

          .spinner-icon {
            border-top-color: `,`;
            border-left-color: `,`;
          }
        }
      `])),r.colorPrimary,r.colorPrimary,r.colorPrimary,r.colorPrimary,r.colorPrimary)})},jn,Pn=function(){var r=(0,z.Fg)();return(0,n.jsx)(S.xB,{styles:(0,S.iv)(jn||(jn=u()([`
        .preview-image-boxes {
          display: flex;
          float: right;
          clear: both;
          width: 496px;
          margin: 0 0 70px 64px;

          &-with-carousel {
            width: 420px;

            .preview-image-box img {
              padding: 0;
            }
          }

          .ant-row-rtl & {
            float: left;
            margin: 0 64px 70px 0;
          }
        }

        .preview-image-boxes + .preview-image-boxes {
          margin-top: -35px;
        }

        .preview-image-box {
          float: left;
          width: 100%;
        }

        .preview-image-box + .preview-image-box {
          margin-left: 24px;

          .ant-row-rtl & {
            margin-right: 24px;
            margin-left: 0;
          }
        }

        .preview-image-wrapper {
          position: relative;
          display: inline-block;
          width: 100%;
          padding: 16px;
          text-align: center;
          background: #f2f4f5;
          box-sizing: border-box;
        }

        .preview-image-wrapper.video {
          display: block;
          padding: 0;
          background: 0;
        }

        .preview-image-wrapper video {
          display: block;
          width: 100%;

          + svg {
            position: absolute;
            top: 0;
            left: 0;
          }
        }

        .preview-image-wrapper.good::after {
          position: absolute;
          bottom: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 3px;
          background: `,`;
          content: '';
        }

        .preview-image-wrapper.bad::after {
          position: absolute;
          bottom: 0;
          left: 0;
          display: block;
          width: 100%;
          height: 3px;
          background: `,`;
          content: '';
        }

        .preview-image-title {
          margin-top: 20px;
          color: `,`;
          font-size: 12px;
        }

        .preview-image-description {
          margin-top: 2px;
          color: `,`;
          font-size: 12px;
          line-height: 1.5;
        }

        .preview-image-description hr {
          margin: 2px 0;
          background: none;
          border: 0;
        }

        .preview-image-box img {
          box-sizing: border-box;
          max-width: 100%;
          padding: 12px;
          background: `,`;
          border-radius: `,`px;
          cursor: pointer;
          transition: all 0.3s;

          &.no-padding {
            padding: 0;
            background: none;
          }
        }

        .preview-image-boxes.preview-image-boxes-with-carousel img {
          padding: 0;
          box-shadow: 0 1px 0 0 #ddd, 0 3px 0 0 `,`, 0 4px 0 0 #ddd,
            0 6px 0 0 `,`, 0 7px 0 0 #ddd;
        }

        .preview-image-box img:hover {
          box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.3);
        }

        .transition-video-player,
        .motion-video-min {
          float: right;
          width: 600px;
          padding: 0 0 70px 20px;

          .preview-image-wrapper {
            padding: 0;
          }

          .ant-row-rtl & {
            float: left;
          }
        }

        .motion-video-min {
          width: 390px;
        }

        .motion-principle-wrapper {
          width: 100%;
          max-width: 900px;
          margin: 48px 0 24px;
        }

        .principle-wrapper {
          width: 100%;

          .principle {
            display: inline-block;
            box-sizing: border-box;
            width: 100%;
            min-height: 180px;
            margin-right: 12.5%;
            margin-bottom: 24px;
            padding: 24px;
            font-size: 24px;
            text-align: center;
            border: 1px solid #e8e8e8;
            border-radius: 4px;

            &:last-child {
              margin-right: 0;
            }

            h4 {
              margin: 16px 0 8px;
            }

            p {
              font-size: 12px;
              line-height: 24px;
            }
          }
        }
      `])),r.colorPrimary,r.colorError,r.colorText,r.colorTextSecondary,r.colorBgContainer,r.borderRadius,r.colorBgContainer,r.colorBgContainer)})},An,kn="dumi-default-",Fn=function(){var r=(0,z.Fg)();return(0,n.jsx)(S.xB,{styles:(0,S.iv)(An||(An=u()([`
        html {
          .`,`search-bar {
            &-input {
              color: `,`;
              background: `,`;
              &:focus {
                background: `,`;
              }
              &::placeholder {
                color: `,` !important;
              }
            }
          }
          .`,`search-popover {
            background-color: `,` !important;
            &::before {
              border-bottom-color: `,` !important;
            }
          }
          .`,`search-result {
            dl {
              dt {
                background-color: `,` !important;
              }
              dd {
                a {
                  &:hover {
                    background-color: `,`;
                    h4,
                    p {
                      color: `,` !important;
                    }
                    svg {
                      fill: `,` !important;
                    }
                  }
                }
              }
            }
          }
        }
      `])),kn,r.colorText,r.colorBgContainer,r.colorBgContainer,r.colorTextPlaceholder,kn,r.colorBgElevated,r.colorBgElevated,kn,r.controlItemBgActive,r.controlItemBgHover,r.colorText,r.colorText)})},cn,ee=function(){return(0,n.jsx)(S.xB,{styles:(0,S.iv)(cn||(cn=u()([`
      .design-inline-cards {
        display: flex;
        margin: 0 -20px;
      }
      .design-inline-cards > * {
        flex: 10%;
        margin: 0 20px;
      }
      .design-inline-cards img {
        width: 100%;
        max-width: 100%;
      }
      .design-inline-cards h4 {
        margin-bottom: 0;
      }
    `])))})},xn=function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Ae,{}),(0,n.jsx)(Ne,{}),(0,n.jsx)(Te,{}),(0,n.jsx)(Be,{}),(0,n.jsx)(X,{}),(0,n.jsx)(k,{}),(0,n.jsx)(Z,{}),(0,n.jsx)(an,{}),(0,n.jsx)(Q,{}),(0,n.jsx)(_,{}),(0,n.jsx)(Pn,{}),(0,n.jsx)(ee,{}),(0,n.jsx)(ce,{}),(0,n.jsx)(Le,{}),(0,n.jsx)(Fn,{})]})},$n=xn,fn=i(857278),Nn=i(430932),vn=i(985093),Tn=i(115668),he=i(642207),Bn=i(301210),Wn=i(13923),Un=i(263783),Me=i(937993),ge=i(448118),Zn=i(938545),De=i(173224),te=i(391298),xe=i(630770),bn=i(438199),Gn=i(693399),En="ant-where-checker",Pe={cn:{whereNotSupport:"\u4F60\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u73B0\u4EE3 CSS Selector\uFF0C\u8BF7\u4F7F\u7528\u73B0\u4EE3\u6D4F\u89C8\u5668\uFF08\u5982 Chrome\u3001Firefox \u7B49\u7B49\uFF09\u67E5\u770B\u5B98\u7F51\u3002\u5982\u679C\u9700\u8981\u5BF9\u65E7\u7248\u6D4F\u89C8\u5668\u8FDB\u884C\u6837\u5F0F\u652F\u6301\uFF0C\u6B22\u8FCE\u67E5\u9605\u914D\u7F6E\u6587\u6863\uFF1A",whereDocTitle:"\u517C\u5BB9\u6027\u8C03\u6574\uFF08\u8BF7\u4F7F\u7528\u73B0\u4EE3\u6D4F\u89C8\u5668\u8BBF\u95EE\uFF09",whereDocUrl:"/docs/react/customize-theme-cn#\u517C\u5BB9\u6027\u8C03\u6574"},en:{whereNotSupport:"Your browser not support modern CSS Selector. Please use modern browser to view (e.g. Chrome, Firefox, etc). If you want to compatible style with legacy browser, please refer to the configuration document:",whereDocTitle:"Compatible adjustment (Please use modern browser to visit)",whereDocUrl:"/docs/react/customize-theme#compatible-adjustment"}};function Ze(){var r=(0,B.Z)(Pe),e=w()(r,1),t=e[0],o=m.useState(!0),a=w()(o,2),c=a[0],p=a[1];return m.useEffect(function(){var h=document.createElement("p");h.className=En,h.style.position="fixed",h.style.pointerEvents="none",h.style.visibility="hidden",h.style.width="0",document.body.appendChild(h),(0,Gn.updateCSS)(`
:where(.`.concat(En,`) {
  content: "__CHECK__";
}
    `),En);var s=getComputedStyle(h),x=s.content;p(String(x).includes("CHECK")),document.body.removeChild(h),(0,Gn.removeCSS)(En)},[]),c?null:(0,n.jsx)("div",{style:{position:"fixed",left:0,right:0,top:0,bottom:0,zIndex:99999999,background:"rgba(0,0,0,0.65)",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,n.jsxs)("div",{style:{border:"1px solid #ffe58f",background:"#fffbe6",color:"rgba(0,0,0,0.88)",padding:"8px 12px",borderRadius:"8px",zIndex:9999999999,lineHeight:"22px",width:520},children:[t.whereNotSupport," ",(0,n.jsx)("a",{style:{color:"#1677ff",textDecoration:"none"},href:t.whereDocUrl,children:t.whereDocTitle})]})})}var Cn,Mn,oe={cn:{owner:"\u8682\u8681\u96C6\u56E2\u548C Ant Design \u5F00\u6E90\u793E\u533A"},en:{owner:"Ant Group and Ant Design Community"}},He=function(){var e=(0,m.useContext)(bn.Z),t=e.isMobile;return(0,z.kc)(function(o){var a=o.token,c=o.css,p=new Dn.C((0,xe.Z)("#f0f3fa","#fff")).onBackground(a.colorBgContainer).toHexString();return{holder:c(Cn||(Cn=u()([`
      background: `,`;
    `])),p),footer:c(Mn||(Mn=u()([`
      background: `,`;
      color: `,`;
      box-shadow: inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);

      * {
        box-sizing: border-box;
      }

      h2,
      a {
        color: `,`;
      }

      .rc-footer-column {
        margin-bottom: `,`px;
        :last-child {
          margin-bottom: `,`px;
        }
      }

      .rc-footer-item-icon {
        top: -1.5px;
      }

      .rc-footer-container {
        max-width: 1208px;
        margin-inline: auto;
        padding-inline: `,`px;
      }

      .rc-footer-bottom {
        box-shadow: inset 0 106px 36px -116px rgba(0, 0, 0, 0.14);
        .rc-footer-bottom-container {
          font-size: `,`px;
        }
      }
    `])),p,a.colorTextSecondary,a.colorText,t?60:0,t?20:0,a.marginXXL,a.fontSize)}})()},Ie=function(){var e=(0,Rn.Z)(),t=(0,B.Z)(oe),o=w()(t,2),a=o[0],c=o[1],p=He(),h=p.styles,s=e.getLink,x=m.useMemo(function(){var A=c==="cn",O={title:(0,n.jsx)(l._H,{id:"app.footer.resources"}),items:[{title:"Ant Design Charts",url:"https://charts.ant.design",openExternal:!0},{title:"Ant Design Pro",url:"https://pro.ant.design",openExternal:!0},{title:"Ant Design Pro Components",url:"https://procomponents.ant.design",openExternal:!0},{title:"Ant Design Mobile",url:"https://mobile.ant.design",openExternal:!0},{title:"Ant Design Mini",url:"https://mini.ant.design",openExternal:!0},{title:"Ant Design Landing",description:(0,n.jsx)(l._H,{id:"app.footer.landing"}),url:"https://landing.ant.design",openExternal:!0},{title:"Scaffolds",description:(0,n.jsx)(l._H,{id:"app.footer.scaffolds"}),url:"https://scaffold.ant.design",openExternal:!0},{title:"Umi",description:(0,n.jsx)(l._H,{id:"app.footer.umi"}),url:"https://umijs.org",openExternal:!0},{title:"dumi",description:(0,n.jsx)(l._H,{id:"app.footer.dumi"}),url:"https://d.umijs.org",openExternal:!0},{title:"qiankun",description:(0,n.jsx)(l._H,{id:"app.footer.qiankun"}),url:"https://qiankun.umijs.org",openExternal:!0},{title:"ahooks",description:(0,n.jsx)(l._H,{id:"app.footer.hooks"}),url:"https://github.com/alibaba/hooks",openExternal:!0},{title:"Ant Motion",description:(0,n.jsx)(l._H,{id:"app.footer.motion"}),url:"https://motion.ant.design",openExternal:!0},{title:(0,n.jsx)(l._H,{id:"app.footer.chinamirror"}),url:"https://ant-design.antgroup.com"}]},y={title:(0,n.jsx)(l._H,{id:"app.footer.community"}),items:[{icon:(0,n.jsx)(fn.Z,{}),title:(0,n.jsx)(l._H,{id:"app.footer.awesome"}),url:"https://github.com/websemantics/awesome-ant-design",openExternal:!0},{icon:(0,n.jsx)(Nn.Z,{}),title:"Medium",url:"http://medium.com/ant-design/",openExternal:!0},{icon:(0,n.jsx)(vn.Z,{style:{color:"#1DA1F2"}}),title:"Twitter",url:"http://twitter.com/antdesignui",openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",width:16,height:16,alt:"yuque"}),title:(0,n.jsx)(l._H,{id:"app.footer.yuque.repo"}),url:"https://yuque.com/ant-design/ant-design",openExternal:!0},{icon:(0,n.jsx)(Tn.Z,{style:{color:"#056de8"}}),title:(0,n.jsx)(l._H,{id:"app.footer.zhihu"}),url:"https://www.zhihu.com/column/c_1564262000561106944",openExternal:!0},{icon:(0,n.jsx)(Tn.Z,{style:{color:"#056de8"}}),title:(0,n.jsx)(l._H,{id:"app.footer.zhihu.xtech"}),url:"https://www.zhihu.com/column/c_1543658574504751104",openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/mZBWtboYbnMkTBaRIuWQ.png",width:16,height:16,alt:"seeconf"}),title:"SEE Conf",description:(0,n.jsx)(l._H,{id:"app.footer.seeconf"}),url:"https://seeconf.antfin.com/",openExternal:!0}]};A&&y.items.push({icon:(0,n.jsx)(he.Z,{}),title:(0,n.jsx)(l._H,{id:"app.footer.work_with_us"}),url:s("/docs/resources",{cn:"\u52A0\u5165\u6211\u4EEC",en:"JoinUs"}),LinkComponent:l.rU});var v={title:(0,n.jsx)(l._H,{id:"app.footer.help"}),items:[{icon:(0,n.jsx)(Bn.Z,{}),title:"GitHub",url:"https://github.com/ant-design/ant-design",openExternal:!0},{icon:(0,n.jsx)(Wn.Z,{}),title:(0,n.jsx)(l._H,{id:"app.footer.change-log"}),url:s("/changelog"),LinkComponent:l.rU},{icon:(0,n.jsx)(Un.Z,{}),title:(0,n.jsx)(l._H,{id:"app.footer.faq"}),url:s("/docs/react/faq"),LinkComponent:l.rU},{icon:(0,n.jsx)(Me.Z,{}),title:(0,n.jsx)(l._H,{id:"app.footer.bug-report"}),url:"https://new-issue.ant.design/",openExternal:!0},{icon:(0,n.jsx)(ge.Z,{}),title:(0,n.jsx)(l._H,{id:"app.footer.issues"}),url:"https://github.com/ant-design/ant-design/issues",openExternal:!0},{icon:(0,n.jsx)(Zn.Z,{}),title:(0,n.jsx)(l._H,{id:"app.footer.discussions"}),url:"https://github.com/ant-design/ant-design/discussions",openExternal:!0},{icon:(0,n.jsx)(Un.Z,{}),title:(0,n.jsx)(l._H,{id:"app.footer.stackoverflow"}),url:"http://stackoverflow.com/questions/tagged/antd",openExternal:!0},{icon:(0,n.jsx)(Un.Z,{}),title:(0,n.jsx)(l._H,{id:"app.footer.segmentfault"}),url:"https://segmentfault.com/t/antd",openExternal:!0}]},D={icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",width:22,height:22,alt:"Ant XTech"}),title:(0,n.jsx)(l._H,{id:"app.footer.more-product"}),items:[{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg",width:16,height:16,alt:"yuque"}),title:(0,n.jsx)(l._H,{id:"app.footer.yuque"}),url:"https://yuque.com",description:(0,n.jsx)(l._H,{id:"app.footer.yuque.slogan"}),openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/antfincdn/nc7Fc0XBg5/8a6844f5-a6ed-4630-9177-4fa5d0b7dd47.png",width:16,height:16,alt:"AntV"}),title:"AntV",url:"https://antv.vision",description:(0,n.jsx)(l._H,{id:"app.footer.antv.slogan"}),openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://www.eggjs.org/logo.svg",alt:"Egg",width:16,height:16}),title:"Egg",url:"https://eggjs.org",description:(0,n.jsx)(l._H,{id:"app.footer.egg.slogan"}),openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/DMDOlAUhmktLyEODCMBR.ico",width:16,height:16,alt:"kitchen"}),title:"Kitchen",description:(0,n.jsx)(l._H,{id:"app.footer.kitchen"}),url:"https://kitchen.alipay.com",openExternal:!0},{icon:(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg",width:16,height:16,alt:"xtech"}),title:(0,n.jsx)(l._H,{id:"app.footer.xtech"}),url:"https://xtech.antfin.com/",openExternal:!0},{icon:(0,n.jsx)(De.Z,{}),title:(0,n.jsx)(l._H,{id:"app.footer.theme"}),url:s("/theme-editor"),LinkComponent:l.rU}]};return[O,y,v,D]},[c,e.search]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(te.Z,{columns:x,className:h.footer,bottom:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{style:{opacity:"0.4"},children:["Made with ",(0,n.jsx)("span",{style:{color:"#fff"},children:"\u2764"})," by"]}),(0,n.jsx)("div",{children:a.owner})]})}),(0,n.jsx)(Ze,{})]})},re=Ie,Oe=i(97857),L=i.n(Oe),ie=i(9783),Vn=i.n(ie),fe=i(660532),Re=i(39199),Fe=i(98651),$e=i(469181),We=i(344682),ve=i(664095),Xn=i(883458),M=i(316165),U="M448 64l512 0 0 128-128 0 0 768-128 0 0-768-128 0 0 768-128 0 0-448c-123.712 0-224-100.288-224-224s100.288-224 224-224zM64 448l256 224-256 224z",G="M256 64l512 0 0 128-128 0 0 768-128 0 0-768-128 0 0 768-128 0 0-448c-123.712 0-224-100.288-224-224s100.288-224 224-224zM960 896l-256-224 256-224z",dn=function(e){return(0,n.jsx)(M.Z,L()(L()({},e),{},{children:(0,n.jsx)("svg",{viewBox:"0 0 1024 1024",fill:"currentColor",children:(0,n.jsx)("path",{d:e.direction==="ltr"?U:G})})}))},tn=dn,K=i(373638),Hn,pn,In=(0,z.kc)(function(r){var e=r.token,t=r.css,o=e.headerHeight,a=e.colorTextHeading,c=e.fontFamily,p=e.mobileMaxWidth;return{logo:t(Hn||(Hn=u()([`
      height: `,`px;
      padding-inline-start: 40px;
      overflow: hidden;
      color: `,`;
      font-weight: bold;
      font-size: 18px;
      font-family: AlibabaPuHuiTi, `,`, sans-serif;
      line-height: `,`px;
      letter-spacing: -0.18px;
      white-space: nowrap;
      text-decoration: none;
      display: inline-flex;
      align-items: center;

      &:hover {
        color: `,`;
      }

      img {
        height: 32px;
        vertical-align: middle;
        margin-inline-end: 12px;
      }

      @media only screen and (max-width: `,`px) {
        padding-inline-start: 0;
        padding-inline-end: 0;
      }
    `])),o,a,c,o,a,p),title:t(pn||(pn=u()([`
      line-height: 32px;
    `])))}}),be=function(e){var t=e.isZhCN,o=(0,l.TH)(),a=o.search,c=In(),p=c.styles;return(0,n.jsx)("h1",{children:(0,n.jsxs)(l.rU,{to:K.J1("/",t,a),className:p.logo,children:[(0,n.jsx)("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",height:32,width:32,alt:"logo"}),(0,n.jsx)("span",{className:p.title,children:"Ant Design"})]})})},ye=be,so=i(534804),co=i(963918),On=i(905303),Qe,qe,_e,nt=(0,z.kc)(function(r){var e=r.css;return{smallStyle:e(Qe||(Qe=u()([`
    font-size: 12px;
    color: #777;
    margin-left: 0.3em;
  `]))),downOutlined:e(qe||(qe=u()([`
    font-size: 9px;
    margin: -1px 0 0 2px;
    vertical-align: middle;
  `]))),downOutlinedRTL:e(_e||(_e=u()([`
    font-size: 9px;
    margin: -1px 2px 0 0;
    vertical-align: middle;
  `])))}}),et=function(){var e=nt(),t=e.styles;return(0,n.jsxs)("span",{className:t.smallStyle,children:["(",(0,n.jsx)(l._H,{id:"app.implementation.community"}),")"]})},tt=function(){return[{label:(0,n.jsx)("a",{href:"https://charts.ant.design",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(l._H,{id:"app.header.menu.charts"})}),key:"charts"},{label:(0,n.jsx)("a",{href:"http://pro.ant.design",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(l._H,{id:"app.header.menu.pro.v4"})}),key:"pro"},{label:(0,n.jsx)("a",{href:"http://procomponents.ant.design",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(l._H,{id:"app.header.menu.pro.components"})}),key:"procomponents"},{label:(0,n.jsxs)("a",{href:"http://ng.ant.design",target:"_blank",rel:"noopener noreferrer",children:["Ant Design of Angular",(0,n.jsx)(et,{})]}),key:"ng"},{label:(0,n.jsxs)("a",{href:"http://antdv.com",target:"_blank",rel:"noopener noreferrer",children:["Ant Design of Vue",(0,n.jsx)(et,{})]}),key:"vue"}]},po=function(e){var t=e.isRTL,o=nt(),a=o.styles;return(0,n.jsx)(co.Z,{menu:{items:tt()},placement:"bottomRight",children:(0,n.jsxs)(On.ZP,{size:"small",children:[(0,n.jsx)(l._H,{id:"app.header.menu.more"}),(0,n.jsx)(so.Z,{className:t?a.downOutlinedRTL:a.downOutlined})]})})},uo=po,mo=i(719632),Sn=i.n(mo),ot=i(923232),rt,it,ho={cn:{design:"\u8BBE\u8BA1",development:"\u7814\u53D1",components:"\u7EC4\u4EF6",resources:"\u8D44\u6E90",blog:"\u535A\u5BA2"},en:{design:"Design",development:"Development",components:"Components",resources:"Resources",blog:"Blog"}},go=(0,z.kc)(function(r){var e=r.token,t=e.antCls,o=e.iconCls,a=e.fontFamily,c=e.headerHeight,p=e.menuItemBorder,h=e.colorPrimary;return{nav:(0,z.iv)(rt||(rt=u()([`
      height: 100%;
      font-size: 14px;
      font-family: Avenir, `,`, sans-serif;
      border: 0;

      &`,`-menu-horizontal {
        border-bottom: none;

        & > `,"-menu-item, & > ",`-menu-submenu {
          min-width: `,`px;
          height: `,`px;
          padding-right: 12px;
          padding-left: 12px;
          line-height: `,`px;

          &::after {
            top: 0;
            right: 12px;
            bottom: auto;
            left: 12px;
            border-width: `,`px;
          }
        }

        & `,"-menu-submenu-title ",` {
          margin: 0;
        }

        & > `,`-menu-item-selected {
          a {
            color: `,`;
          }
        }
      }

      & > `,"-menu-item, & > ",`-menu-submenu {
        text-align: center;
      }
    `])),a,t,t,t,40+12*2,c,c,p,t,o,t,h,t,t),popoverMenuNav:(0,z.iv)(it||(it=u()([`
      `,`-menu-item,
      `,`-menu-submenu {
        text-align: left;
      }

      `,`-menu-item-group-title {
        padding-left: 24px;
      }

      `,`-menu-item-group-list {
        padding: 0 16px;
      }

      `,`-menu-item,
      a {
        color: #333;
      }
    `])),t,t,t,t,t)}}),xo=function(r){var e,t,o,a=r.isZhCN,c=r.isClient,p=r.isMobile,h=r.responsive,s=r.directionText,x=r.onLangChange,A=r.onDirectionChange,O=(0,l.TH)(),y=O.pathname,v=O.search,D=(0,B.Z)(ho),P=w()(D,1),g=P[0],H=(0,l.yh)(),N=((e=H["/docs/blog"])===null||e===void 0||(t=e[0])===null||t===void 0?void 0:t.children)||[],T=go(),b=T.styles,$=p?"inline":"horizontal",q=y.split("/").filter(function(f){return f}).slice(0,-1).join("/"),nn=q||"home";y.startsWith("/changelog")?nn="docs/react":y.startsWith("/docs/resources")&&(nn="docs/resources");var V,en=[{label:(0,n.jsx)("a",{href:"https://github.com/ant-design/ant-design",target:"_blank",rel:"noopener noreferrer",children:"GitHub"}),key:"github"},{label:(0,n.jsx)(l._H,{id:"app.header.lang"}),onClick:x,key:"switch-lang"},{label:s,onClick:A,key:"switch-direction"}].concat(Sn()(tt()));p?V=en:h==="crowded"&&(V=[{label:(0,n.jsx)(fe.Z,{}),key:"additional",children:Sn()(en)}]);var un=[{label:(0,n.jsx)(l.rU,{to:K.J1("/docs/spec/introduce",a,v),children:g.design}),key:"docs/spec"},{label:(0,n.jsx)(l.rU,{to:K.J1("/docs/react/introduce",a,v),children:g.development}),key:"docs/react"},{label:(0,n.jsx)(l.rU,{to:K.J1("/components/overview/",a,v),children:g.components}),key:"components"},N.length?{label:(0,n.jsx)(l.rU,{to:K.J1(N.sort(function(f,J){return f.frontmatter.date>J.frontmatter.date?-1:1})[0].link,a,v),children:g.blog}),key:"docs/blog"}:null,{label:(0,n.jsx)(l.rU,{to:K.J1("/docs/resources",a,v),children:g.resources}),key:"docs/resources"},a&&c&&window.location.host!=="ant-design.antgroup.com"&&window.location.host!=="ant-design.gitee.io"?{label:"\u56FD\u5185\u955C\u50CF",key:"mirror",children:[{label:(0,n.jsx)("a",{href:"https://ant-design.antgroup.com",children:"\u5B98\u65B9\u955C\u50CF"}),icon:(0,n.jsx)("img",{alt:"logo",src:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",width:16,style:{verticalAlign:"text-bottom"}}),key:"antgroup"},{label:(0,n.jsx)("a",{href:"https://ant-design.gitee.io",children:"Gitee \u955C\u50CF"}),icon:(0,n.jsx)("img",{alt:"gitee",src:"https://gw.alipayobjects.com/zos/bmw-prod/9e91e124-9bab-4113-b500-301412f6b370.svg",width:16,style:{verticalAlign:"text-bottom"}}),key:"gitee"}]}:null].concat(Sn()((o=V)!==null&&o!==void 0?o:[]));return(0,n.jsx)(ot.Z,{mode:$,selectedKeys:[nn],className:b.nav,disabledOverflow:!0,items:un,style:{borderRight:0}})},at=i(879587),lt,st,ct,dt,pt,Kn="1.2em",fo=(0,z.kc)(function(r){var e=r.token,t=r.css,o=e.colorText,a=e.colorBorder,c=e.colorBgContainer,p=e.colorBgTextHover,h=e.borderRadius,s=e.controlHeight,x=e.motionDurationMid;return{btn:t(lt||(lt=u()([`
      color: `,`;
      border-color: `,`;
      padding: 0 !important;
      width: `,`px;
      height: `,`px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: none;
      background: transparent;
      border-radius: `,`px;
      transition: all `,`;
      cursor: pointer;
      .btn-inner {
        transition: all `,`;
      }
      &:hover {
        background: `,`;
      }
      img {
        width: `,`;
        height: `,`;
      }
      .anticon {
        font-size: `,`;
      }
    `])),o,a,s,s,h,x,x,p,Kn,Kn,Kn),innerDiv:t(st||(st=u()([`
      position: relative;
      width: `,`;
      height: `,`;
    `])),Kn,Kn),labelStyle:t(ct||(ct=u()([`
      position: absolute;
      font-size: `,`;
      line-height: 1;
      border: 1px solid `,`;
      color: `,`;
    `])),Kn,o,o),label1Style:t(dt||(dt=u()([`
      left: -5%;
      top: 0;
      z-index: 1;
      background-color: `,`;
      color: `,`;
      transform: scale(0.7);
      transform-origin: 0 0;
    `])),o,c),label2Style:t(pt||(pt=u()([`
      right: -5%;
      bottom: 0;
      z-index: 0;
      transform: scale(0.5);
      transform-origin: 100% 100%;
    `])))}}),vo=function(e){var t=e.label1,o=e.label2,a=e.tooltip1,c=e.tooltip2,p=e.value,h=e.pure,s=e.onClick,x=fo(),A=x.styles,O=A.btn,y=A.innerDiv,v=A.labelStyle,D=A.label1Style,P=A.label2Style,g=(0,n.jsx)("button",{onClick:s,className:O,"aria-label":e["aria-label"],children:(0,n.jsxs)("div",{className:"btn-inner",children:[h&&(p===1?t:o),!h&&(0,n.jsxs)("div",{className:y,children:[(0,n.jsx)("span",{className:C()(v,p===1?D:P),children:t}),(0,n.jsx)("span",{className:C()(v,p===1?P:D),children:o})]})]})},"lang-button");return a||c?(0,n.jsx)(at.Z,{title:p===1?a:c,children:g}):g},Ue=vo,ut,mt,ht,gt=1120,xt=1200,bo=(0,z.kc)(function(r){var e=r.token,t=r.css,o="#ced4d9";return{header:t(ut||(ut=u()([`
      position: relative;
      z-index: 10;
      max-width: 100%;
      background: `,`;
      box-shadow: `,`;

      @media only screen and (max-width: `,`px) {
        text-align: center;
      }

      .nav-search-wrapper {
        display: flex;
        flex: auto;
      }

      .dumi-default-search-bar {
        border-inline-start: 1px solid rgba(0, 0, 0, 0.06);

        > svg {
          width: 14px;
          fill: `,`;
        }

        > input {
          height: 22px;
          border: 0;

          &:focus {
            box-shadow: none;
          }

          &::placeholder {
            color: `,`;
          }
        }

        .dumi-default-search-shortcut {
          color: `,`;
          background-color: rgba(150, 150, 150, 0.06);
          border-color: rgba(100, 100, 100, 0.2);
          border-radius: 4px;
        }

        .dumi-default-search-popover {
          inset-inline-start: 11px;
          inset-inline-end: unset;

          &::before {
            inset-inline-start: 100px;
            inset-inline-end: unset;
          }
        }
      }
    `])),e.colorBgContainer,e.boxShadowTertiary,e.mobileMaxWidth,o,o,o),menuRow:t(mt||(mt=u()([`
      display: flex;
      align-items: center;
      margin: 0;

      > * {
        flex: none;
        margin: 0;
        margin-inline-end: 12px;

        &:last-child {
          margin-inline-end: 40px;
        }
      }
    `]))),dataDirectionIcon:t(ht||(ht=u()([`
      width: 16px;
    `]))),popoverMenu:Vn()({width:300},"".concat(e.antCls,"-popover-inner-content"),{padding:0})}}),ft="ANT_DESIGN_DO_NOT_OPEN_MIRROR_MODAL";function vt(){window.localStorage.setItem(ft,"true")}function yo(){return!window.localStorage.getItem(ft)}var wo=function(){var e=m.useState(!1),t=w()(e,2),o=t[0],a=t[1],c=(0,B.Z)(),p=w()(c,2),h=p[1],s=(0,l.WF)(),x=s.pkg,A=(0,K.Is)(),O=(0,m.useState)({menuVisible:!1,windowWidth:1400,searching:!1}),y=w()(O,2),v=y[0],D=y[1],P=(0,m.useContext)(bn.Z),g=P.direction,H=P.isMobile,N=P.updateSiteConfig,T=(0,m.useRef)(null),b=(0,l.TH)(),$=b.pathname,q=b.search,nn=bo(),V=nn.styles,en=(0,m.useCallback)(function(){D(function(R){return L()(L()({},R),{},{menuVisible:!1})})},[]),un=(0,m.useCallback)(function(){D(function(R){return L()(L()({},R),{},{windowWidth:window.innerWidth})})},[]),f=(0,m.useCallback)(function(){D(function(R){return L()(L()({},R),{},{menuVisible:!0})})},[]),J=(0,m.useCallback)(function(R){D(function(yn){return L()(L()({},yn),{},{menuVisible:R})})},[]),on=function(){N({direction:g!=="rtl"?"rtl":"ltr"})};(0,m.useEffect)(function(){en()},[b]),(0,m.useEffect)(function(){return a(typeof window!="undefined"),un(),window.addEventListener("resize",un),T.current=(0,K.qE)(function(R){R!=="timeout"&&R!=="error"&&window.location.host!=="ant-design.antgroup.com"&&yo()&&Fe.Z.confirm({title:"\u63D0\u793A",content:"\u5185\u7F51\u7528\u6237\u63A8\u8350\u8BBF\u95EE\u56FD\u5185\u955C\u50CF\u4EE5\u83B7\u5F97\u6781\u901F\u4F53\u9A8C\uFF5E",okText:"\u{1F680} \u7ACB\u523B\u524D\u5F80",cancelText:"\u4E0D\u518D\u5F39\u51FA",closable:!0,zIndex:99999,onOk:function(){window.open("https://ant-design.antgroup.com","_self"),vt()},onCancel:function(){vt()}})}),function(){window.removeEventListener("resize",un),T.current&&clearTimeout(T.current)}},[]);var mn=(0,m.useCallback)(function(R){var yn=window.location.href,kr=window.location.pathname;if(/overview/.test(kr)&&/0?[1-39][0-3]?x/.test(R)){window.location.href=yn.replace(window.location.origin,R).replace(/\/components\/overview/,"/docs".concat(/0(9|10)x/.test(R)?"":"/react","/introduce")).replace(/\/$/,"");return}var Ye=new URL(yn.replace(window.location.origin,R));Ye.host.includes("antgroup")&&(window.location.href="".concat(Ye.href.replace(/\/$/,""),"/")),window.location.href=Ye.href.replace(/\/$/,"")},[]),j=(0,m.useCallback)(function(){var R="".concat(window.location.protocol,"//"),yn=window.location.href.slice(R.length);K.Fy()&&localStorage.setItem("locale",K.KE($)?"en-US":"zh-CN"),window.location.href=R+yn.replace(window.location.pathname,K.J1($,!K.KE($),q).pathname)},[b]),I=(0,m.useMemo)(function(){return g!=="rtl"?"RTL":"LTR"},[g]),Y=(0,m.useMemo)(function(){return g==="rtl"?{direction:"ltr",textAlign:"right"}:{}},[g]),le=v.menuVisible,ke=v.windowWidth,oo=v.searching,ro=L()(Vn()({},x.version,x.version),A==null?void 0:A.docVersions),br=Object.keys(ro).map(function(R){return{value:ro[R],label:R}}),io=["","index","index-cn"].includes($),yr=h==="cn",wr=g==="rtl",Ke=null;ke<gt?Ke="crowded":ke<xt&&(Ke="narrow");var jr=C()(V.header,"clearfix",{"home-header":io}),Je={isZhCN:yr,isRTL:wr,isClient:o},ao=(0,n.jsx)(xo,L()(L()({},Je),{},{responsive:Ke,isMobile:H,directionText:I,onLangChange:j,onDirectionChange:on}),"nav"),se=[ao,(0,n.jsx)($e.Z,{className:"version",size:"small",defaultValue:x.version,onChange:mn,dropdownStyle:Y,popupMatchSelectWidth:!1,getPopupContainer:function(yn){return yn.parentNode},options:br},"version"),(0,n.jsx)(uo,L()({},Je),"more"),(0,n.jsx)(Ue,{onClick:j,value:K.KE($)?1:2,label1:"\u4E2D",label2:"En",tooltip1:"\u4E2D\u6587 / English",tooltip2:"English / \u4E2D\u6587"},"lang"),(0,n.jsx)(Ue,{onClick:on,value:g==="rtl"?2:1,label1:(0,n.jsx)(tn,{className:V.dataDirectionIcon,direction:"ltr"}),tooltip1:"LTR",label2:(0,n.jsx)(tn,{className:V.dataDirectionIcon,direction:"rtl"}),tooltip2:"RTL",pure:!0,"aria-label":"RTL Switch Button"},"direction"),(0,n.jsx)("a",{href:"https://github.com/ant-design/ant-design",target:"_blank",rel:"noreferrer",children:(0,n.jsx)(Ue,{value:1,label1:(0,n.jsx)(Bn.Z,{}),tooltip1:"Github",label2:null,pure:!0})},"github")];ke<gt?se=oo?[]:[ao]:ke<xt&&(se=oo?[]:se);var lo=io?[{flex:"none"},{flex:"auto"}]:[{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24},{xxl:20,xl:19,lg:18,md:18,sm:0,xs:0}];return(0,n.jsxs)("header",{className:jr,children:[H&&(0,n.jsx)(We.Z,{overlayClassName:V.popoverMenu,placement:"bottomRight",content:se,trigger:"click",open:le,arrow:{arrowPointAtCenter:!0},onOpenChange:J,children:(0,n.jsx)(fe.Z,{className:"nav-phone-icon",onClick:f})}),(0,n.jsxs)(ve.Z,{style:{flexFlow:"nowrap",height:64},children:[(0,n.jsx)(Xn.Z,L()(L()({},lo[0]),{},{children:(0,n.jsx)(ye,L()(L()({},Je),{},{location:b}))})),(0,n.jsxs)(Xn.Z,L()(L()({},lo[1]),{},{className:V.menuRow,children:[(0,n.jsx)("div",{className:"nav-search-wrapper",children:(0,n.jsx)(Re.ZP,{})}),!H&&se]}))]})]})},jo=wo,Cr=i(945462),ko=i(377376),Ge=i(185209),Co=function(){var e=(0,l.eL)(),t=(0,m.useMemo)(function(){var p;if(!e.frontmatter.subtitle&&!e.frontmatter.title)p="404 Not Found - Ant Design";else{var h;p="".concat(e.frontmatter.subtitle||""," ").concat(((h=e.frontmatter)===null||h===void 0?void 0:h.title)||""," - Ant Design")}var s=e.frontmatter.description||"";return[p,s]},[e]),o=w()(t,2),a=o[0],c=o[1];return(0,n.jsxs)(l.ql,{children:[(0,n.jsx)("title",{children:a}),(0,n.jsx)("meta",{property:"og:title",content:a}),c&&(0,n.jsx)("meta",{name:"description",content:c})]})},bt=Co,yt=i(148050),So=i(823493),zo=i.n(So),Lo=i(517951),Ao=i(658192),wt,jt,kt,Ct=["scroll","resize"],No=(0,z.kc)(function(r){var e=r.token,t=r.css,o=e.boxShadowSecondary,a=e.antCls;return{affixTabs:t(wt||(wt=u()([`
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      z-index: 11;
      padding: 0 40px;
      background: #fff;
      box-shadow: `,`;
      transform: translate3d(0, -100%, 0);
      opacity: 0;
      transition: opacity 0.3s, transform 0.3s;

      `,`-tabs {
        max-width: 1208px;
        margin: 0 auto;

        `,`-tabs-nav {
          margin: 0;

          &::before {
            border-bottom-color: transparent;
          }

          `,`-tabs-tab {
            padding: 21px 0;
          }
        }
      }
    `])),o,a,a,a),affixTabsFixed:t(jt||(jt=u()([`
      transform: translate3d(0, 0, 0);
      opacity: 1;
    `]))),span:t(kt||(kt=u()([`
      text-transform: capitalize;
    `])))}}),St=32,To=function(){var e=m.useRef(null),t=m.useRef([]),o=m.useState(!1),a=w()(o,2),c=a[0],p=a[1],h=m.useState(null),s=w()(h,2),x=s[0],A=s[1],O=No(),y=O.styles,v=y.affixTabs,D=y.affixTabsFixed,P=y.span;function g(N){var T=document.getElementById(N);if(T){var b=T.offsetTop-e.current.offsetHeight-St;(0,Ao.Z)(b)}}m.useEffect(function(){t.current=Array.from(document.querySelectorAll("h2[id]")).map(function(N){var T=N.id;return T}),p(!0)},[]),m.useEffect(function(){var N=decodeURIComponent((location.hash||"").slice(1));N&&g(N)},[c]);var H=m.useMemo(function(){function N(){for(var T=window,b=T.scrollY,$=e.current.offsetHeight,q=t.current.length-1;q>=0;q-=1){var nn=t.current[q],V=document.getElementById(nn),en=V.offsetTop-$-St;if(en<=b){A(nn);return}}A(null)}return zo()(N)},[]);return m.useEffect(function(){return Ct.forEach(function(N){return window.addEventListener(N,H)}),H(),function(){Ct.forEach(function(N){return window.removeEventListener(N,H)})}},[]),(0,n.jsx)("div",{className:C()(v,x&&D),ref:e,children:(0,n.jsx)(Lo.Z,{activeKey:x,onChange:g,items:t.current.map(function(N){return{key:N,label:(0,n.jsx)("span",{className:P,children:N.replace(/-/g," ")})}})})})},Bo=To,zt,Lt,At,Nt=40,we=1208,Ve=24,Eo=(0,z.kc)(function(r){var e=r.token,t=r.css,o=e.antCls;return{resourcePage:t(zt||(zt=u()([`
      footer {
        margin-top: 176px;

        .rc-footer-container {
          max-width: `,`px;
          margin: 0 auto;
          padding-right: 0;
          padding-left: 0;
        }
      }
    `])),we),resourceContent:t(Lt||(Lt=u()([`
      padding: 0 `,`px;
      max-width: `,`px;
      margin: 0 auto;
      box-sizing: content-box;
      min-height: 100vh;

      > .markdown {
        > p {
          margin-bottom: 56px;
        }

        h2 {
          margin-top: 124px;
          color: #314659;
          font-weight: lighter;
          font-size: 30px;
          line-height: 38px;

          &:first-child {
            margin-top: 88px;
          }
        }

        h3 {
          margin-top: 56px;
          font-weight: 400;
          font-size: 24px;
          line-height: 32px;
        }

        p {
          color: #697b8c;
        }
      }

      @media only screen and (max-width: 767.99px) {
        & {
          article {
            padding: 0 `,`px;
          }

          `,`-col {
            padding-top: 16px !important;
            padding-bottom: 16px !important;
          }
        }
      }
    `])),Nt,we,Ve,o),banner:t(At||(At=u()([`
      padding: 0 `,`px;
      overflow: hidden;
      background: url('https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*y_r7RogIG1wAAAAAAAAAAABkARQnAQ');
      background-size: cover;

      h1 {
        box-sizing: content-box;
        max-width: `,`px;
        margin: 56px auto 16px;
      }

      section {
        max-width: `,`px;
        margin: 0 auto 56px;
        font-weight: 200;
        font-size: 16px;
        line-height: 24px;
      }

      @media only screen and (max-width: 767.99px) {
        & {
          margin: 0 -`,`px;
          padding: 0 `,`px;
        }
      }
    `])),Nt,we,we,Ve,Ve)}}),Mo=function(e){var t,o=e.children,a=Eo(),c=a.styles,p=(0,l.eL)();return(0,n.jsx)(wn.ZP,{theme:{token:{colorBgLayout:"#fff"}},children:(0,n.jsxs)(ko.Z,{children:[(0,n.jsx)(bt,{}),(0,n.jsxs)("div",{id:"resources-page",className:c.resourcePage,children:[(0,n.jsx)(Bo,{}),(0,n.jsxs)("div",{className:c.banner,children:[(0,n.jsxs)(Ge.Z.Title,{style:{fontSize:30},children:[(t=p.frontmatter)===null||t===void 0?void 0:t.title,(0,n.jsx)(yt.Z,{title:(0,n.jsx)(l._H,{id:"app.content.edit-page"}),filename:p.frontmatter.filename})]}),(0,n.jsx)("section",{children:p.frontmatter.description})]}),(0,n.jsx)("div",{className:c.resourceContent,children:o}),(0,n.jsx)(re,{})]})]})})},Do=Mo,Po=i(720841),Zo=i(538294),Tt=i(575054),Bt=i(796586),Ho=i(252901),Io=i(605071),Et=i(945016),Oo=i(217187),ae=i(743929),Mt=i(206171),Ro=i(965516),Fo=i(899242),$o=i(513769),Wo=i.n($o),Uo=["to","children"],Go=(0,m.forwardRef)(function(r,e){var t=r.to,o=r.children,a=Wo()(r,Uo),c=(0,l.s0)(),p=function(s){t.startsWith("http")||!s.metaKey&&!s.ctrlKey&&!s.shiftKey&&(s.preventDefault(),(0,m.startTransition)(function(){c(t)}))};return(0,n.jsx)("a",L()(L()({ref:e,href:t,onClick:p},a),{},{children:o}))}),je=Go,Vo=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=(0,l.yh)(),o=(0,Rn.Z)(),a=o.pathname,c=o.search,p=(0,l.tx)(),h=e.before,s=e.after,x=Ro.Z.useToken(),A=x.token,O=(0,m.useMemo)(function(){var y,v=Sn()(p!=null?p:[]);if(a.startsWith("/docs/spec")){var D=v.splice(0,1);v.push.apply(v,Sn()(D))}if(a.startsWith("/docs/react")){var P,g=(P=Object.entries(t).find(function(T){var b=w()(T,1),$=b[0];return $.startsWith("/changelog")}))===null||P===void 0?void 0:P[1];g&&v.push.apply(v,Sn()(g))}if(a.startsWith("/changelog")){var H,N=(H=Object.entries(t).find(function(T){var b=w()(T,1),$=b[0];return $.startsWith("/docs/react")}))===null||H===void 0?void 0:H[1];N&&v.unshift.apply(v,Sn()(N))}return(y=v==null?void 0:v.reduce(function(T,b){if(b!=null&&b.title)if(a.startsWith("/docs/spec")){var $,q,nn=b.children.reduce(function(f,J){var on,mn=(on=J.frontmatter.type)!==null&&on!==void 0?on:"default";return f[mn]||(f[mn]=[]),f[mn].push(J),f},{}),V=[];V.push.apply(V,Sn()(($=(q=nn.default)===null||q===void 0?void 0:q.map(function(f){return{label:(0,n.jsxs)(je,{to:"".concat(f.link).concat(c),children:[h,f==null?void 0:f.title,s]}),key:f.link.replace(/(-cn$)/g,"")}}))!==null&&$!==void 0?$:[])),Object.entries(nn).forEach(function(f){var J=w()(f,2),on=J[0],mn=J[1];on!=="default"&&V.push({type:"group",label:on,key:on,children:mn==null?void 0:mn.map(function(j){return{label:(0,n.jsxs)(je,{to:"".concat(j.link).concat(c),children:[h,j==null?void 0:j.title,s]}),key:j.link.replace(/(-cn$)/g,"")}})})}),T.push({label:b==null?void 0:b.title,key:b==null?void 0:b.title,children:V})}else{var en;T.push({type:"group",label:b==null?void 0:b.title,key:b==null?void 0:b.title,children:(en=b.children)===null||en===void 0?void 0:en.map(function(f){return{label:(0,n.jsxs)(je,{to:"".concat(f.link).concat(c),children:[h,(0,n.jsx)("span",{children:f==null?void 0:f.title},"english"),(0,n.jsx)("span",{className:"chinese",children:f.frontmatter.subtitle},"chinese"),f.frontmatter.tag&&(0,n.jsx)(Fo.Z,{color:"warning",style:{marginInlineStart:A.marginXS},children:f.frontmatter.tag}),s]}),key:f.link.replace(/(-cn$)/g,"")}})})}else{var un=b.children||[];un.every(function(f){var J;return f==null||(J=f.frontmatter)===null||J===void 0?void 0:J.date})&&un.sort(function(f,J){return f.frontmatter.date>J.frontmatter.date?-1:1}),T.push.apply(T,Sn()(un.map(function(f){return{label:(0,n.jsxs)(je,{to:"".concat(f.link).concat(c),children:[h,f==null?void 0:f.title,s]}),key:f.link.replace(/(-cn$)/g,"")}})))}return T},[]))!==null&&y!==void 0?y:[]},[p,t,a,c,e]);return[O,a]},Dt=Vo,Pt,Zt,Ht,It,Xo=(0,z.kc)(function(r){var e=r.token,t=r.css,o=e.colorSplit,a=e.iconCls,c=e.fontSizeIcon;return{prevNextNav:t(Pt||(Pt=u()([`
      width: calc(100% - 234px);
      margin-inline-end: 170px;
      margin-inline-start: 64px;
      overflow: hidden;
      font-size: 14px;
      border-top: 1px solid `,`;
      display: flex;
    `])),o),pageNav:t(Zt||(Zt=u()([`
      flex: 1;
      height: 72px;
      line-height: 72px;
      text-decoration: none;

      `,` {
        color: #999;
        font-size: `,`px;
        transition: all 0.3s;
      }

      .chinese {
        margin-inline-start: 4px;
      }
    `])),a,c),prevNav:t(Ht||(Ht=u()([`
      text-align: start;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      .footer-nav-icon-after {
        display: none;
      }

      .footer-nav-icon-before {
        position: relative;
        line-height: 0;
        vertical-align: middle;
        transition: inset-inline-end 0.3s;
        margin-inline-end: 1em;
        inset-inline-end: 0;
      }

      &:hover .footer-nav-icon-before {
        inset-inline-end: 0.2em;
      }
    `]))),nextNav:t(It||(It=u()([`
      text-align: end;
      display: flex;
      justify-content: flex-end;
      align-items: center;

      .footer-nav-icon-before {
        display: none;
      }

      .footer-nav-icon-after {
        position: relative;
        margin-bottom: 1px;
        line-height: 0;
        vertical-align: middle;
        transition: inset-inline-start 0.3s;
        margin-inline-start: 1em;
        inset-inline-start: 0;
      }

      &:hover .footer-nav-icon-after {
        inset-inline-start: 0.2em;
      }
    `])))}}),Ko=function r(e){return Array.isArray(e)?e.reduce(function(t,o){if(!o)return t;if("children"in o&&o.children){var a;return t.concat((a=r(o.children))!==null&&a!==void 0?a:[])}return t.concat(o)},[]):null},Jo=function(e){var t=e.rtl,o=Xo(),a=o.styles,c={className:"footer-nav-icon-before"},p={className:"footer-nav-icon-after"},h=t?(0,n.jsx)(ae.Z,L()({},c)):(0,n.jsx)(Mt.Z,L()({},c)),s=t?(0,n.jsx)(Mt.Z,L()({},p)):(0,n.jsx)(ae.Z,L()({},p)),x=Dt({before:h,after:s}),A=w()(x,2),O=A[0],y=A[1],v=(0,m.useContext)(bn.Z),D=v.isMobile,P=(0,m.useMemo)(function(){var T=Ko(O);if(!T)return[null,null];var b=-1;return T.forEach(function($,q){$&&$.key===y&&(b=q)}),[T[b-1],T[b+1]]},[O,y]),g=w()(P,2),H=g[0],N=g[1];return D?null:(0,n.jsxs)("section",{className:a.prevNextNav,children:[H&&m.cloneElement(H.label,{className:C()(a.pageNav,a.prevNav,H.className)}),N&&m.cloneElement(N.label,{className:C()(a.pageNav,a.nextNav,N.className)})]})},Yo=Jo,Qo=i(524229),Ot=i(211646),qo=i(294047),Rt=i(315816),_o=function(e){var t=e.className,o=e.style;return(0,n.jsx)("svg",{className:t,style:o,xmlns:"http://www.w3.org/2000/svg",width:"36",height:"28",viewBox:"0 0 36 28",fill:"none",children:(0,n.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.5875 6.77268L21.8232 3.40505L17.5875 0.00748237L17.5837 0L13.3555 3.39757L17.5837 6.76894L17.5875 6.77268ZM17.5863 17.3955H17.59L28.5161 8.77432L25.5526 6.39453L17.59 12.6808H17.5863L17.5825 12.6845L9.61993 6.40201L6.66016 8.78181L17.5825 17.3992L17.5863 17.3955ZM17.5828 23.2891L17.5865 23.2854L32.2133 11.7456L35.1768 14.1254L28.5238 19.3752L17.5865 28L0.284376 14.3574L0 14.1291L2.95977 11.7531L17.5828 23.2891Z",fill:"currentColor"})})},Ft=_o,$t,Wt,Ut,Gt,Vt,Xt,Kt,Xe="https://picx.zhimg.com/v2-3b2bca09c2771e7a82a81562e806be4d.jpg?source=d16d100b",nr=(0,z.kc)(function(r){var e=r.token,t=r.css;return{card:t($t||($t=u()([`
      width: 100%;
      margin: 40px 0;
      transition: all 0.2s;
      background-color: `,`;
    `])),e.colorFillQuaternary),bigTitle:t(Wt||(Wt=u()([`
      font-size: 16px;
      color: #121212;
      margin-bottom: 24px;
      font-weight: 600;
    `]))),cardBody:t(Ut||(Ut=u()([`
      display: flex;
      justify-content: space-between;
      align-items: center;
    `]))),left:t(Gt||(Gt=u()([`
      display: flex;
      justify-content: flex-start;
      align-items: center;
      img {
        width: 200px;
        margin-right: 24px;
        overflow: hidden;
        border-radius: 8px;
      }
    `]))),title:t(Vt||(Vt=u()([`
      color: #444;
      font-size: 16px;
      font-weight: 600;
    `]))),subTitle:t(Xt||(Xt=u()([`
      display: flex;
      justify-content: flex-start;
      align-items: center;
      color: #646464;
      font-size: 14px;
      font-weight: 400;
      margin-top: 8px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      .logo {
        width: 24px;
        height: 24px;
        font-size: 24px;
        &.zhihu-logo {
          color: #056de8;
        }
        &.yuque-logo {
          color: #00b96b;
        }
        &.juejin-logo {
          color: #1e80ff;
        }
      }
      .arrowIcon {
        margin: 0 8px;
        color: #8a8f8d;
        font-size: 12px;
      }
      .zl-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        color: #646464;
      }
    `]))),btn:t(Kt||(Kt=u()([`
      display: flex;
      justify-content: center;
      align-items: center;
    `])))}}),er={cn:{bigTitle:"\u6587\u7AE0\u88AB\u4EE5\u4E0B\u4E13\u680F\u6536\u5F55\uFF1A",zhiHu:"\u4E00\u4E2A UI \u8BBE\u8BA1\u4F53\u7CFB",yuQue:"Ant Design \u5B98\u65B9\u4E13\u680F",junjin:"Ant Design \u5F00\u6E90\u4E13\u680F",buttonText:"\u6211\u6709\u60F3\u6CD5\uFF0C\u53BB\u53C2\u4E0E\u8BA8\u8BBA"},en:{bigTitle:"Articles are included in the column:",zhiHu:"A UI design system",yuQue:"Ant Design official column",junjin:"Ant Design Open Source Column",buttonText:"Go to discuss"}},tr=function(e){var t=e.zhihuLink,o=e.yuqueLink,a=e.juejinLink,c=(0,B.Z)(er),p=w()(c,1),h=p[0],s=nr(),x=s.styles,A=x.card,O=x.bigTitle,y=x.cardBody,v=x.left,D=x.title,P=x.subTitle,g=x.btn;return!t&&!o&&!a?null:(0,n.jsxs)(qo.Z,{className:A,bordered:!1,children:[(0,n.jsx)("h3",{className:O,children:h.bigTitle}),t&&(0,n.jsxs)("div",{className:y,children:[(0,n.jsxs)("div",{className:v,children:[(0,n.jsx)("img",{src:Xe,alt:"antd"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:D,children:"Ant Design"}),(0,n.jsxs)("div",{className:P,children:[(0,n.jsx)(Tn.Z,{className:"logo zhihu-logo"}),(0,n.jsx)(ae.Z,{className:"arrowIcon"}),(0,n.jsx)(On.ZP,{target:"_blank",href:"https://www.zhihu.com/column/c_1564262000561106944",className:"zl-btn",type:"link",children:h.zhiHu})]})]})]}),(0,n.jsx)(On.ZP,{type:"primary",className:g,icon:(0,n.jsx)(Tn.Z,{style:{fontSize:16}}),ghost:!0,target:"_blank",href:t,children:h.buttonText})]}),o&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Rt.Z,{}),(0,n.jsxs)("div",{className:y,children:[(0,n.jsxs)("div",{className:v,children:[(0,n.jsx)("img",{src:Xe,alt:"antd"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:D,children:"Ant Design"}),(0,n.jsxs)("div",{className:P,children:[(0,n.jsx)(Ot.Z,{className:"logo yuque-logo"}),(0,n.jsx)(ae.Z,{className:"arrowIcon"}),(0,n.jsx)(On.ZP,{target:"_blank",href:"https://www.yuque.com/ant-design/ant-design",className:"zl-btn",type:"link",children:h.yuQue})]})]})]}),(0,n.jsx)(On.ZP,{type:"primary",className:g,icon:(0,n.jsx)(Ot.Z,{style:{fontSize:16}}),ghost:!0,target:"_blank",href:o,children:h.buttonText})]})]}),a&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(Rt.Z,{}),(0,n.jsxs)("div",{className:y,children:[(0,n.jsxs)("div",{className:v,children:[(0,n.jsx)("img",{src:Xe,alt:"antd"}),(0,n.jsxs)("div",{children:[(0,n.jsx)("p",{className:D,children:"Ant Design"}),(0,n.jsxs)("div",{className:P,children:[(0,n.jsx)(Ft,{className:"logo juejin-logo"}),(0,n.jsx)(ae.Z,{className:"arrowIcon"}),(0,n.jsx)(On.ZP,{target:"_blank",href:"https://juejin.cn/column/7247354308258054200",className:"zl-btn",type:"link",children:h.junjin})]})]})]}),(0,n.jsx)(On.ZP,{type:"primary",className:g,icon:(0,n.jsx)(Ft,{style:{fontSize:16,width:16,height:16}}),ghost:!0,target:"_blank",href:a,children:h.buttonText})]})]})]})},or=tr,Jt,Yt,Qt,qt,_t,rr=(0,z.kc)(function(r){var e=r.token,t=r.css,o=e.antCls;return{contributorsList:t(Jt||(Jt=u()([`
      display: flex;
      flex-wrap: wrap;
      margin-top: 120px !important;
      clear: both;

      li {
        height: 24px;
      }

      li,
      `,"-avatar + ",`-avatar {
        transition: all `,`;
        margin-inline-end: -8px;
      }
      &:hover {
        li,
        `,`-avatar {
          margin-inline-end: 0;
        }
      }
    `])),o,o,e.motionDurationSlow,o),listMobile:t(Yt||(Yt=u()([`
      margin: 1em 0 !important;
    `]))),toc:t(Qt||(Qt=u()([`
      `,`-anchor {
        `,`-anchor-link-title {
          font-size: 12px;
        }
      }
    `])),o,o),tocWrapper:t(qt||(qt=u()([`
      position: absolute;
      top: 8px;
      inset-inline-end: 0;
      width: 160px;
      margin: 12px 0;
      padding: 8px 0;
      padding-inline: 4px 8px;
      backdrop-filter: blur(8px);
      border-radius: `,`px;
      box-sizing: border-box;

      .toc-debug {
        color: `,`;

        &:hover {
          color: `,`;
        }
      }

      > div {
        box-sizing: border-box;
        width: 100%;
        max-height: calc(100vh - 40px) !important;
        margin: 0 auto;
        overflow: auto;
        padding-inline: 4px;
      }

      @media only screen and (max-width: `,`px) {
        display: none;
      }
    `])),e.borderRadius,e.purple6,e.purple5,e.screenLG),articleWrapper:t(_t||(_t=u()([`
      padding: 0 170px 32px 64px;

      &.rtl {
        padding: 0 64px 144px 170px;
      }

      @media only screen and (max-width: `,`px) {
        &,
        &.rtl {
          padding: 0 48px;
        }
      }
    `])),e.screenLG)}}),ir=function(e){var t=e.num,o=t===void 0?3:t;return(0,n.jsx)("li",{children:Array.from({length:o}).map(function(a,c){return(0,n.jsx)(Tt.Z.Avatar,{size:"small",active:!0,style:{marginLeft:c===0?0:-8}},c)})})},ar=function(e){var t=e.name,o=e.avatar,a=(0,m.useState)(!0),c=w()(a,2),p=c[0],h=c[1],s=(0,m.useState)(!1),x=w()(s,2),A=x[0],O=x[1];return(0,m.useLayoutEffect)(function(){var y=new Image;y.src=o,y.onload=function(){return h(!1)},y.onerror=function(){return O(!0)}},[]),A?null:p?(0,n.jsx)(Tt.Z.Avatar,{size:"small",active:!0}):(0,n.jsx)(Bt.C,{size:"small",src:o,alt:t,children:t})},lr=function(e){var t,o,a,c,p,h=e.children,s=(0,l.eL)(),x=(0,l.zh)(),A=(0,Rn.Z)(),O=A.pathname,y=A.hash,v=(0,l.YB)(),D=v.formatMessage,P=rr(),g=P.styles,H=(0,z.Fg)(),N=(0,m.useContext)(bn.Z),T=N.direction,b=N.isMobile,$=(0,Oo.Z)(!1),q=w()($,2),nn=q[0],V=q[1],en=(0,m.useMemo)(function(){var j;return((j=s.toc)===null||j===void 0?void 0:j.filter(function(I){return I._debug_demo}).map(function(I){return I.id}))||[]},[s]),un=en.includes(y.slice(1));(0,m.useLayoutEffect)(function(){V(un)},[]);var f=(0,m.useMemo)(function(){return{showDebug:nn,setShowDebug:V}},[nn,en]),J=(0,m.useMemo)(function(){return((x==null?void 0:x.toc)||s.toc).reduce(function(j,I){if(I.depth===2)j.push(L()({},I));else if(I.depth===3){var Y=j[j.length-1];Y&&(Y.children=Y.children||[],Y.children.push(L()({},I)))}return j},[])},[x==null?void 0:x.toc,s.toc]),on=T==="rtl",mn=(0,m.useMemo)(function(){var j=s.frontmatter.author;return j?typeof j=="string"?j.split(",").map(function(I){return{name:I,avatar:"https://github.com/".concat(I,".png")}}):Array.isArray(j)?j:[]:[]},[s.frontmatter.author]);return(0,n.jsx)(Qo.Z.Provider,{value:f,children:(0,n.jsxs)(Xn.Z,{xxl:20,xl:19,lg:18,md:18,sm:24,xs:24,children:[(0,n.jsx)(Ho.Z,{children:(0,n.jsx)("section",{className:g.tocWrapper,children:(0,n.jsx)(Io.Z,{className:g.toc,affix:!1,targetOffset:H.marginXXL,showInkInFixed:!0,items:J.map(function(j){var I;return{href:"#".concat(j.id),title:j.title,key:j.id,children:(I=j.children)===null||I===void 0?void 0:I.filter(function(Y){return nn||!en.includes(Y.id)}).map(function(Y){return{key:Y.id,href:"#".concat(Y.id),title:(0,n.jsx)("span",{className:C()(en.includes(Y.id)&&"toc-debug"),children:Y==null?void 0:Y.title})}})}})})})}),(0,n.jsxs)("article",{className:C()(g.articleWrapper,{rtl:on}),children:[(t=s.frontmatter)!==null&&t!==void 0&&t.title?(0,n.jsxs)(Ge.Z.Title,{style:{fontSize:30},children:[(o=s.frontmatter)===null||o===void 0?void 0:o.title,s.frontmatter.subtitle&&(0,n.jsx)("span",{style:{marginLeft:12},children:s.frontmatter.subtitle}),!O.startsWith("/components/overview")&&(0,n.jsx)(yt.Z,{title:(0,n.jsx)(l._H,{id:"app.content.edit-page"}),filename:s.frontmatter.filename})]}):null,s.frontmatter.date||s.frontmatter.author?(0,n.jsx)(Ge.Z.Paragraph,{children:(0,n.jsxs)(Et.Z,{children:[s.frontmatter.date&&(0,n.jsxs)("span",{style:{opacity:.65},children:[(0,n.jsx)(Po.Z,{})," ",Ln()(s.frontmatter.date).format("YYYY-MM-DD")]}),mn.map(function(j){return(0,n.jsx)("a",{href:"https://github.com/".concat(j.name),target:"_blank",rel:"noopener noreferrer",children:(0,n.jsxs)(Et.Z,{size:3,children:[(0,n.jsx)(ar,{name:j.name,avatar:j.avatar}),(0,n.jsxs)("span",{style:{opacity:.65},children:["@",j.name]})]})},j.name)})]})}):null,!s.frontmatter.__autoDescription&&s.frontmatter.description,(0,n.jsx)("div",{style:{minHeight:"calc(100vh - 64px)"},children:h}),(((a=s.frontmatter)===null||a===void 0?void 0:a.zhihu_url)||((c=s.frontmatter)===null||c===void 0?void 0:c.yuque_url)||((p=s.frontmatter)===null||p===void 0?void 0:p.juejin_url))&&(0,n.jsx)(or,{zhihuLink:s.frontmatter.zhihu_url,yuqueLink:s.frontmatter.yuque_url,juejinLink:s.frontmatter.juejin_url}),s.frontmatter.filename&&(0,n.jsx)(Zo.Z,{cache:!0,repo:"ant-design",owner:"ant-design",className:C()(g.contributorsList,Vn()({},g.listMobile,b)),fileName:s.frontmatter.filename,renderItem:function(I,Y){var le;return!I||Y?(0,n.jsx)(ir,{}):(le=I.username)!==null&&le!==void 0&&le.includes("github-actions")?null:(0,n.jsx)(at.Z,{mouseEnterDelay:.3,title:"".concat(D({id:"app.content.contributors"}),": ").concat(I.username),children:(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:"https://github.com/".concat(I.username),target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(Bt.C,{size:"small",src:I.url,alt:I.username,children:I.username})})})},I.username)}})]}),(0,n.jsx)(Yo,{rtl:on}),(0,n.jsx)(re,{})]})})},sr=lr,cr=i(650010),no,eo,dr=(0,z.kc)(function(r){var e=r.token,t=r.css,o=e.antCls,a=e.fontFamily,c=e.colorSplit;return{asideContainer:t(no||(no=u()([`
      min-height: 100%;
      padding-bottom: 48px;
      font-family: Avenir, `,`, sans-serif;

      &`,`-menu-inline {
        `,`-menu-submenu-title h4,
        > `,`-menu-item,
        `,`-menu-item a {
          overflow: hidden;
          font-size: 14px;
          text-overflow: ellipsis;
        }

        > `,"-menu-item-group > ",`-menu-item-group-title {
          margin-top: 16px;
          margin-bottom: 16px;
          font-size: 13px;

          &::after {
            position: relative;
            top: 12px;
            display: block;
            width: calc(100% - 20px);
            height: 1px;
            background: `,`;
            content: '';
          }
        }

        > `,`-menu-item,
        > `,`-menu-submenu
        > `,`-menu-submenu-title,
        > `,`-menu-item-group
        > `,`-menu-item-group-title,
        > `,`-menu-item-group
        > `,`-menu-item-group-list
        > `,`-menu-item,
        &`,`-menu-inline
        > `,`-menu-item-group
        > `,`-menu-item-group-list
        > `,`-menu-item {
          padding-left: 40px !important;

          `,`-row-rtl & {
            padding-right: 40px !important;
            padding-left: 16px !important;
          }
        }

        // Nest Category > Type > Article
        &`,`-menu-inline {
          `,`-menu-item-group-title {
            margin-left: 4px;
            padding-left: 60px;

            `,`-row-rtl & {
              padding-right: 60px;
              padding-left: 16px;
            }
          }

          `,"-menu-item-group-list > ",`-menu-item {
            padding-left: 80px !important;

            `,`-row-rtl & {
              padding-right: 80px !important;
              padding-left: 16px !important;
            }
          }
        }

        `,`-menu-item-group:first-child {
          `,`-menu-item-group-title {
            margin-top: 0;
          }
        }
      }

      a[disabled] {
        color: #ccc;
      }

      .chinese {
        margin-left: 6px;
        font-weight: normal;
        font-size: 12px;
        opacity: 0.67;
      }
    `])),a,o,o,o,o,o,o,c,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),mainMenu:t(eo||(eo=u()([`
      z-index: 1;

      .main-menu-inner {
        position: sticky;
        top: 0;
        width: 100%;
        height: 100%;
        max-height: 100vh;
        overflow: hidden;
      }

      &:hover .main-menu-inner {
        overflow-y: auto;
      }
    `])))}}),pr=function(){var e=(0,l.tx)(),t=(0,m.useContext)(bn.Z),o=t.isMobile,a=t.theme,c=dr(),p=c.styles,h=Dt(),s=w()(h,2),x=s[0],A=s[1],O=a.includes("dark"),y=(0,z.Fg)(),v=y.colorBgContainer,D=(0,n.jsx)(wn.ZP,{theme:{components:{Menu:{itemBg:v,darkItemBg:v}}},children:(0,n.jsx)(ot.Z,{items:x,inlineIndent:30,className:p.asideContainer,mode:"inline",theme:O?"dark":"light",selectedKeys:[A],defaultOpenKeys:e==null?void 0:e.map(function(P){var g=P.title;return g}).filter(function(P){return P})})});return o?(0,n.jsx)(cr.Z,{children:D},"Mobile-menu"):(0,n.jsx)(Xn.Z,{xxl:4,xl:5,lg:6,md:6,sm:24,xs:24,className:p.mainMenu,children:(0,n.jsx)("section",{className:"main-menu-inner",children:D})})},ur=pr,to,mr=(0,z.kc)(function(r){var e=r.css;return{main:e(to||(to=u()([`
    display: flex;
    margin-top: 40px;
  `])))}}),hr=function(e){var t=e.children,o=mr(),a=o.styles;return(0,n.jsxs)("main",{className:a.main,children:[(0,n.jsx)(bt,{}),(0,n.jsx)(ur,{}),(0,n.jsx)(sr,{children:t})]})},gr=hr,xr={cn:{title:"Ant Design - \u4E00\u5957\u4F01\u4E1A\u7EA7 UI \u8BBE\u8BA1\u8BED\u8A00\u548C React \u7EC4\u4EF6\u5E93",description:"\u57FA\u4E8E Ant Design \u8BBE\u8BA1\u4F53\u7CFB\u7684 React UI \u7EC4\u4EF6\u5E93\uFF0C\u7528\u4E8E\u7814\u53D1\u4F01\u4E1A\u7EA7\u4E2D\u540E\u53F0\u4EA7\u54C1\u3002"},en:{title:"Ant Design - The world's second most popular React UI framework",description:"An enterprise-class UI design language and React UI library with a set of high-quality React components, one of best React UI library for enterprises"}},fr=function(){var e=(0,l.pC)(),t=(0,Rn.Z)(),o=t.pathname,a=t.search,c=t.hash,p=(0,B.Z)(xr),h=w()(p,2),s=h[0],x=h[1],A=(0,m.useRef)(null),O=(0,m.useContext)(bn.Z),y=O.direction,v=(0,l.WF)(),D=v.loading;(0,m.useLayoutEffect)(function(){x==="cn"?Ln().locale("zh-cn"):Ln().locale("en")},[]),(0,m.useEffect)(function(){var g=document.getElementById("nprogress-style");g&&(A.current=setTimeout(function(){var H;(H=g.parentNode)===null||H===void 0||H.removeChild(g)},0))},[]),(0,m.useEffect)(function(){var g,H=c.replace("#","");H&&((g=document.getElementById(decodeURIComponent(H)))===null||g===void 0||g.scrollIntoView())},[D,c]),m.useEffect(function(){typeof window.ga!="undefined"&&window.ga("send","pageview",o+a),typeof window._hmt!="undefined"&&window._hmt.push(["_trackPageview",o+a])},[t]);var P=(0,m.useMemo)(function(){return["","/"].some(function(g){return g===o})||["/index"].some(function(g){return o.startsWith(g)})?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{style:{minHeight:"100vh"},children:e}),(0,n.jsx)(re,{})]}):o.startsWith("/docs/resource")?(0,n.jsx)(Do,{children:e}):o.startsWith("/theme-editor")?e:(0,n.jsx)(gr,{children:e})},[o,e]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(l.ql,{encodeSpecialCharacters:!1,children:[(0,n.jsx)("html",{lang:x==="cn"?"zh-CN":x,"data-direction":y,className:C()({rtl:y==="rtl"})}),(0,n.jsx)("title",{children:s==null?void 0:s.title}),(0,n.jsx)("link",{sizes:"144x144",href:"https://gw.alipayobjects.com/zos/antfincdn/UmVnt3t4T0/antd.png"}),(0,n.jsx)("meta",{name:"description",content:s.description}),(0,n.jsx)("meta",{property:"og:title",content:s==null?void 0:s.title}),(0,n.jsx)("meta",{property:"og:description",content:s.description}),(0,n.jsx)("meta",{property:"og:type",content:"website"}),(0,n.jsx)("meta",{property:"og:image",content:"https://gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png"})]}),(0,n.jsxs)(wn.ZP,{direction:y,locale:x==="cn"?F.Z:void 0,children:[(0,n.jsx)($n,{}),(0,n.jsx)(jo,{}),P]})]})},vr=fr},605071:function(Ce,zn,i){i.d(zn,{Z:function(){return Ee}});var hn=i(97857),w=i.n(hn),rn=i(9783),C=i.n(rn),Jn=i(719632),Ln=i.n(Jn),Yn=i(805574),l=i.n(Yn),m=i(294184),F=i.n(m),wn=i(318545),B=i(667294),Rn=i(517423),Se=i(982673),u=i(658192),S=i(252901),z=i(73287),n=B.createContext(void 0),Qn=n,gn=i(785893),ze=function(d){var k=d.href,E=d.title,Z=d.prefixCls,W=d.children,an=d.className,ln=d.target,Q=d.replace,sn=B.useContext(Qn),_=sn||{},jn=_.registerLink,Pn=_.unregisterLink,An=_.scrollTo,kn=_.onClick,Fn=_.activeLink,cn=_.direction;B.useEffect(function(){return jn==null||jn(k),function(){Pn==null||Pn(k)}},[k]);var ee=function(Bn){Q&&(Bn.preventDefault(),window.location.replace(k)),kn==null||kn(Bn,{title:E,href:k}),An==null||An(k)},xn=B.useContext(z.E_),$n=xn.getPrefixCls,fn=$n("anchor",Z),Nn=Fn===k,vn=F()("".concat(fn,"-link"),an,C()({},"".concat(fn,"-link-active"),Nn)),Tn=F()("".concat(fn,"-link-title"),C()({},"".concat(fn,"-link-title-active"),Nn));return(0,gn.jsxs)("div",{className:vn,children:[(0,gn.jsx)("a",{className:Tn,href:k,title:typeof E=="string"?E:"",target:ln,onClick:ee,children:E}),cn!=="horizontal"?W:null]})},ce=ze,qn=i(548073),Le=i(141035),de=i(986943),Ae=function(d){var k,E,Z=d.componentCls,W=d.holderOffsetBlock,an=d.motionDurationSlow,ln=d.lineWidthBold,Q=d.colorPrimary,sn=d.lineType,_=d.colorSplit;return C()({},"".concat(Z,"-wrapper"),(E={marginBlockStart:-W,paddingBlockStart:W},C()(E,Z,w()(w()({},(0,qn.Wf)(d)),{},C()({position:"relative",paddingInlineStart:ln},"".concat(Z,"-link"),(k={paddingBlock:d.linkPaddingBlock,paddingInline:"".concat(d.linkPaddingInlineStart,"px 0"),"&-title":w()(w()({},qn.vS),{},{position:"relative",display:"block",marginBlockEnd:d.anchorTitleBlock,color:d.colorText,transition:"all ".concat(d.motionDurationSlow),"&:only-child":{marginBlockEnd:0}})},C()(k,"&-active > ".concat(Z,"-link-title"),{color:d.colorPrimary}),C()(k,"".concat(Z,"-link"),{paddingBlock:d.anchorPaddingBlockSecondary}),k)))),C()(E,"&:not(".concat(Z,"-wrapper-horizontal)"),C()({},Z,C()({"&::before":{position:"absolute",insetInlineStart:0,top:0,height:"100%",borderInlineStart:"".concat(ln,"px ").concat(sn," ").concat(_),content:'" "'}},"".concat(Z,"-ink"),C()({position:"absolute",insetInlineStart:0,display:"none",transform:"translateY(-50%)",transition:"top ".concat(an," ease-in-out"),width:ln,backgroundColor:Q},"&".concat(Z,"-ink-visible"),{display:"inline-block"})))),C()(E,"".concat(Z,"-fixed ").concat(Z,"-ink ").concat(Z,"-ink"),{display:"none"}),E))},pe=function(d){var k,E=d.componentCls,Z=d.motionDurationSlow,W=d.lineWidthBold,an=d.colorPrimary;return C()({},"".concat(E,"-wrapper-horizontal"),C()({position:"relative","&::before":{position:"absolute",left:{_skip_check_:!0,value:0},right:{_skip_check_:!0,value:0},bottom:0,borderBottom:"1px ".concat(d.lineType," ").concat(d.colorSplit),content:'" "'}},E,(k={overflowX:"scroll",position:"relative",display:"flex",scrollbarWidth:"none","&::-webkit-scrollbar":{display:"none"}},C()(k,"".concat(E,"-link:first-of-type"),{paddingInline:0}),C()(k,"".concat(E,"-ink"),{position:"absolute",bottom:0,transition:"left ".concat(Z," ease-in-out, width ").concat(Z," ease-in-out"),height:W,backgroundColor:an}),k)))},Ne=(0,Le.Z)("Anchor",function(X){var d=X.fontSize,k=X.fontSizeLG,E=X.paddingXXS,Z=(0,de.TS)(X,{holderOffsetBlock:E,anchorPaddingBlockSecondary:E/2,anchorTitleBlock:d/14*3,anchorBallSize:k/2});return[Ae(Z),pe(Z)]},function(X){return{linkPaddingBlock:X.paddingXXS,linkPaddingInlineStart:X.padding}});function Dn(){return window}function _n(X,d){if(!X.getClientRects().length)return 0;var k=X.getBoundingClientRect();return k.width||k.height?d===window?(d=X.ownerDocument.documentElement,k.top-d.clientTop):k.top-d.getBoundingClientRect().top:k.top}var ue=/#([\S ]+)$/,Te=function(d){var k,E,Z=d.rootClassName,W=d.anchorPrefixCls,an=d.className,ln=d.style,Q=d.offsetTop,sn=d.affix,_=sn===void 0?!0:sn,jn=d.showInkInFixed,Pn=jn===void 0?!1:jn,An=d.children,kn=d.items,Fn=d.direction,cn=Fn===void 0?"vertical":Fn,ee=d.bounds,xn=d.targetOffset,$n=d.onClick,fn=d.onChange,Nn=d.getContainer,vn=d.getCurrentAnchor,Tn=d.replace,he=B.useState([]),Bn=l()(he,2),Wn=Bn[0],Un=Bn[1],Me=B.useState(null),ge=l()(Me,2),Zn=ge[0],De=ge[1],te=B.useRef(Zn),xe=B.useRef(null),bn=B.useRef(null),Gn=B.useRef(!1),En=B.useContext(z.E_),Pe=En.direction,Ze=En.getTargetContainer,Cn=En.anchor,Mn=(k=Nn!=null?Nn:Ze)!==null&&k!==void 0?k:Dn,oe=JSON.stringify(Wn),He=(0,wn.default)(function(M){Wn.includes(M)||Un(function(U){return[].concat(Ln()(U),[M])})}),Ie=(0,wn.default)(function(M){Wn.includes(M)&&Un(function(U){return U.filter(function(G){return G!==M})})}),re=function(){var U,G=(U=xe.current)===null||U===void 0?void 0:U.querySelector(".".concat(W,"-link-title-active"));if(G&&bn.current){var dn=bn.current.style,tn=cn==="horizontal";dn.top=tn?"":"".concat(G.offsetTop+G.clientHeight/2,"px"),dn.height=tn?"":"".concat(G.clientHeight,"px"),dn.left=tn?"".concat(G.offsetLeft,"px"):"",dn.width=tn?"".concat(G.clientWidth,"px"):"",tn&&(0,Rn.Z)(G,{scrollMode:"if-needed",block:"nearest"})}},Oe=function(U){var G=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,dn=arguments.length>2&&arguments[2]!==void 0?arguments[2]:5,tn=[],K=Mn();if(U.forEach(function(pn){var In=ue.exec(pn==null?void 0:pn.toString());if(In){var be=document.getElementById(In[1]);if(be){var ye=_n(be,K);ye<G+dn&&tn.push({link:pn,top:ye})}}}),tn.length){var Hn=tn.reduce(function(pn,In){return In.top>pn.top?In:pn});return Hn.link}return""},L=(0,wn.default)(function(M){if(te.current!==M){var U=typeof vn=="function"?vn(M):M;De(U),te.current=U,fn==null||fn(M)}}),ie=B.useCallback(function(){if(!Gn.current){var M=Oe(Wn,xn!==void 0?xn:Q||0,ee);L(M)}},[oe,xn,Q]),Vn=B.useCallback(function(M){L(M);var U=ue.exec(M);if(U){var G=document.getElementById(U[1]);if(G){var dn=Mn(),tn=(0,Se.Z)(dn,!0),K=_n(G,dn),Hn=tn+K;Hn-=xn!==void 0?xn:Q||0,Gn.current=!0,(0,u.Z)(Hn,{getContainer:Mn,callback:function(){Gn.current=!1}})}}},[xn,Q]),fe=F()(Z,"".concat(W,"-wrapper"),(E={},C()(E,"".concat(W,"-wrapper-horizontal"),cn==="horizontal"),C()(E,"".concat(W,"-rtl"),Pe==="rtl"),E),an,Cn==null?void 0:Cn.className),Re=F()(W,C()({},"".concat(W,"-fixed"),!_&&!Pn)),Fe=F()("".concat(W,"-ink"),C()({},"".concat(W,"-ink-visible"),Zn)),$e=w()(w()({maxHeight:Q?"calc(100vh - ".concat(Q,"px)"):"100vh"},Cn==null?void 0:Cn.style),ln),We=function M(U){return Array.isArray(U)?U.map(function(G){return(0,B.createElement)(ce,w()(w()({replace:Tn},G),{},{key:G.key}),cn==="vertical"&&M(G.children))}):null},ve=(0,gn.jsx)("div",{ref:xe,className:fe,style:$e,children:(0,gn.jsxs)("div",{className:Re,children:[(0,gn.jsx)("span",{className:Fe,ref:bn}),"items"in d?We(kn):An]})});B.useEffect(function(){var M=Mn();return ie(),M==null||M.addEventListener("scroll",ie),function(){M==null||M.removeEventListener("scroll",ie)}},[oe]),B.useEffect(function(){typeof vn=="function"&&L(vn(te.current||""))},[vn]),B.useEffect(function(){re()},[cn,vn,oe,Zn]);var Xn=B.useMemo(function(){return{registerLink:He,unregisterLink:Ie,scrollTo:Vn,activeLink:Zn,onClick:$n,direction:cn}},[Zn,$n,Vn,cn]);return(0,gn.jsx)(Qn.Provider,{value:Xn,children:_?(0,gn.jsx)(S.Z,{offsetTop:Q,target:Mn,children:ve}):ve})},me=function(d){var k=d.prefixCls,E=d.rootClassName,Z=B.useContext(z.E_),W=Z.getPrefixCls,an=W("anchor",k),ln=Ne(an),Q=l()(ln,2),sn=Q[0],_=Q[1];return sn((0,gn.jsx)(Te,w()(w()({},d),{},{rootClassName:F()(_,E),anchorPrefixCls:an})))},Be=me,ne=Be;ne.Link=ce;var Ee=ne},377376:function(Ce,zn,i){var hn=i(83996),w=i(296708),rn=hn.ZP;rn.Header=hn.h4,rn.Footer=hn.$_,rn.Content=hn.VY,rn.Sider=w.Z,zn.Z=rn},715778:function(Ce,zn,i){i.d(zn,{Z:function(){return B}});var hn=i(174219),w=i(97857),rn=i.n(w),C=i(585369),Jn={placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",rangePlaceholder:["\u5F00\u59CB\u65F6\u95F4","\u7ED3\u675F\u65F6\u95F4"]},Ln=Jn,Yn={lang:rn()({placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F",yearPlaceholder:"\u8BF7\u9009\u62E9\u5E74\u4EFD",quarterPlaceholder:"\u8BF7\u9009\u62E9\u5B63\u5EA6",monthPlaceholder:"\u8BF7\u9009\u62E9\u6708\u4EFD",weekPlaceholder:"\u8BF7\u9009\u62E9\u5468",rangePlaceholder:["\u5F00\u59CB\u65E5\u671F","\u7ED3\u675F\u65E5\u671F"],rangeYearPlaceholder:["\u5F00\u59CB\u5E74\u4EFD","\u7ED3\u675F\u5E74\u4EFD"],rangeMonthPlaceholder:["\u5F00\u59CB\u6708\u4EFD","\u7ED3\u675F\u6708\u4EFD"],rangeQuarterPlaceholder:["\u5F00\u59CB\u5B63\u5EA6","\u7ED3\u675F\u5B63\u5EA6"],rangeWeekPlaceholder:["\u5F00\u59CB\u5468","\u7ED3\u675F\u5468"]},C.Z),timePickerLocale:rn()({},Ln)};Yn.lang.ok="\u786E\u5B9A";var l=Yn,m=l,F="${label}\u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684${type}",wn={locale:"zh-cn",Pagination:hn.Z,DatePicker:l,TimePicker:Ln,Calendar:m,global:{placeholder:"\u8BF7\u9009\u62E9"},Table:{filterTitle:"\u7B5B\u9009",filterConfirm:"\u786E\u5B9A",filterReset:"\u91CD\u7F6E",filterEmptyText:"\u65E0\u7B5B\u9009\u9879",filterCheckall:"\u5168\u9009",filterSearchPlaceholder:"\u5728\u7B5B\u9009\u9879\u4E2D\u641C\u7D22",selectAll:"\u5168\u9009\u5F53\u9875",selectInvert:"\u53CD\u9009\u5F53\u9875",selectNone:"\u6E05\u7A7A\u6240\u6709",selectionAll:"\u5168\u9009\u6240\u6709",sortTitle:"\u6392\u5E8F",expand:"\u5C55\u5F00\u884C",collapse:"\u5173\u95ED\u884C",triggerDesc:"\u70B9\u51FB\u964D\u5E8F",triggerAsc:"\u70B9\u51FB\u5347\u5E8F",cancelSort:"\u53D6\u6D88\u6392\u5E8F"},Modal:{okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",justOkText:"\u77E5\u9053\u4E86"},Tour:{Next:"\u4E0B\u4E00\u6B65",Previous:"\u4E0A\u4E00\u6B65",Finish:"\u7ED3\u675F\u5BFC\u89C8"},Popconfirm:{cancelText:"\u53D6\u6D88",okText:"\u786E\u5B9A"},Transfer:{titles:["",""],searchPlaceholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9",itemUnit:"\u9879",itemsUnit:"\u9879",remove:"\u5220\u9664",selectCurrent:"\u5168\u9009\u5F53\u9875",removeCurrent:"\u5220\u9664\u5F53\u9875",selectAll:"\u5168\u9009\u6240\u6709",removeAll:"\u5220\u9664\u5168\u90E8",selectInvert:"\u53CD\u9009\u5F53\u9875"},Upload:{uploading:"\u6587\u4EF6\u4E0A\u4F20\u4E2D",removeFile:"\u5220\u9664\u6587\u4EF6",uploadError:"\u4E0A\u4F20\u9519\u8BEF",previewFile:"\u9884\u89C8\u6587\u4EF6",downloadFile:"\u4E0B\u8F7D\u6587\u4EF6"},Empty:{description:"\u6682\u65E0\u6570\u636E"},Icon:{icon:"\u56FE\u6807"},Text:{edit:"\u7F16\u8F91",copy:"\u590D\u5236",copied:"\u590D\u5236\u6210\u529F",expand:"\u5C55\u5F00"},PageHeader:{back:"\u8FD4\u56DE"},Form:{optional:"\uFF08\u53EF\u9009\uFF09",defaultValidateMessages:{default:"\u5B57\u6BB5\u9A8C\u8BC1\u9519\u8BEF${label}",required:"\u8BF7\u8F93\u5165${label}",enum:"${label}\u5FC5\u987B\u662F\u5176\u4E2D\u4E00\u4E2A[${enum}]",whitespace:"${label}\u4E0D\u80FD\u4E3A\u7A7A\u5B57\u7B26",date:{format:"${label}\u65E5\u671F\u683C\u5F0F\u65E0\u6548",parse:"${label}\u4E0D\u80FD\u8F6C\u6362\u4E3A\u65E5\u671F",invalid:"${label}\u662F\u4E00\u4E2A\u65E0\u6548\u65E5\u671F"},types:{string:F,method:F,array:F,object:F,number:F,date:F,boolean:F,integer:F,float:F,regexp:F,email:F,url:F,hex:F},string:{len:"${label}\u987B\u4E3A${len}\u4E2A\u5B57\u7B26",min:"${label}\u6700\u5C11${min}\u4E2A\u5B57\u7B26",max:"${label}\u6700\u591A${max}\u4E2A\u5B57\u7B26",range:"${label}\u987B\u5728${min}-${max}\u5B57\u7B26\u4E4B\u95F4"},number:{len:"${label}\u5FC5\u987B\u7B49\u4E8E${len}",min:"${label}\u6700\u5C0F\u503C\u4E3A${min}",max:"${label}\u6700\u5927\u503C\u4E3A${max}",range:"${label}\u987B\u5728${min}-${max}\u4E4B\u95F4"},array:{len:"\u987B\u4E3A${len}\u4E2A${label}",min:"\u6700\u5C11${min}\u4E2A${label}",max:"\u6700\u591A${max}\u4E2A${label}",range:"${label}\u6570\u91CF\u987B\u5728${min}-${max}\u4E4B\u95F4"},pattern:{mismatch:"${label}\u4E0E\u6A21\u5F0F\u4E0D\u5339\u914D${pattern}"}}},Image:{preview:"\u9884\u89C8"},QRCode:{expired:"\u4E8C\u7EF4\u7801\u8FC7\u671F",refresh:"\u70B9\u51FB\u5237\u65B0"},ColorPicker:{presetEmpty:"\u6682\u65E0"}},B=wn}}]);
