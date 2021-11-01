import { css, memoizeStyle, prefix } from '../../lib/theming/Emotion';
import { Theme } from '../../lib/theming/Theme';
import { resetButton, resetText } from '../../lib/styles/Mixins';
import { isFirefox } from '../../lib/client';

import {
  buttonUseMixin,
  buttonHoverMixin,
  buttonActiveMixin,
  buttonSizeMixin,
  arrowOutlineMixin,
  buttonSizeMixinIE11,
} from './Button.mixins';

export const globalClasses = prefix('button')({
  arrowHelper: 'arrow-helper',
  arrowHelperTop: 'arrow-helper-top',
  arrowHelperBottom: 'arrow-helper-bottom',
  caption: 'caption',
});

export const styles = memoizeStyle({
  root(t: Theme) {
    return css`
      ${resetButton()};
      ${resetText()};

      background-clip: ${t.btnBackgroundClip};
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      cursor: pointer;
      display: inline-block;
      position: relative;
      text-align: center;
      width: 100%;
      border: ${t.btnBorderWidth} solid transparent;

      &::-moz-focus-inner {
        border: 0;
        padding: 0;
      }
      &::after {
        content: '';
        display: inline-block;
        vertical-align: baseline;
        width: 0;
      }

      &:active .${globalClasses.caption} {
        transform: translateY(1px);
      }
    `;
  },

  outline() {
    return css`
      border-radius: inherit;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    `;
  },

  outlineLink() {
    return css`
      box-shadow: none;
      left: -2px;
      right: -2px;
      bottom: -2px;
    `;
  },

  sizeSmall(t: Theme) {
    return css`
      border-radius: ${t.btnBorderRadiusSmall};

      ${buttonSizeMixin(
        t.btnFontSizeSmall,
        t.btnHeightSmall,
        t.btnLineHeightSmall,
        t.btnPaddingXSmall,
        t.btnPaddingYSmall,
        t.fontFamilyCompensationBaseline,
      )};
    `;
  },

  sizeSmallIE11(t: Theme) {
    return css`
      ${buttonSizeMixinIE11(
        t.btnFontSizeSmall,
        t.btnPaddingXSmall,
        t.btnPaddingYSmall,
        t.fontFamilyCompensationBaseline,
      )};
    `;
  },

  sizeMedium(t: Theme) {
    return css`
      border-radius: ${t.btnBorderRadiusMedium};

      ${buttonSizeMixin(
        t.btnFontSizeMedium,
        t.btnHeightMedium,
        t.btnLineHeightMedium,
        t.btnPaddingXMedium,
        t.btnPaddingYMedium,
        t.fontFamilyCompensationBaseline,
      )};
    `;
  },

  sizeMediumIE11(t: Theme) {
    return css`
      ${buttonSizeMixinIE11(
        t.btnFontSizeMedium,
        t.btnPaddingXMedium,
        t.btnPaddingYMedium,
        t.fontFamilyCompensationBaseline,
      )};
    `;
  },

  sizeLarge(t: Theme) {
    return css`
      border-radius: ${t.btnBorderRadiusLarge};

      ${buttonSizeMixin(
        t.btnFontSizeLarge,
        t.btnHeightLarge,
        t.btnLineHeightLarge,
        t.btnPaddingXLarge,
        t.btnPaddingYLarge,
        t.fontFamilyCompensationBaseline,
      )};
    `;
  },

  sizeLargeIE11(t: Theme) {
    return css`
      ${buttonSizeMixinIE11(
        t.btnFontSizeLarge,
        t.btnPaddingXLarge,
        t.btnPaddingYLarge,
        t.fontFamilyCompensationBaseline,
      )};
    `;
  },

  link(t: Theme) {
    return css`
      background: none;
      border-radius: ${t.btnLinkBorderRadius};
      border: none;
      box-shadow: none;
      white-space: nowrap;
      color: ${t.btnLinkColor};
      display: inline;
      line-height: inherit !important; // override size mixin
      margin: 0;
      padding: 0 !important; // override size mixin
      height: auto !important; // override size mixin

      &:hover {
        color: ${t.btnLinkHoverColor};
        text-decoration: ${t.btnLinkHoverTextDecoration};
      }
      &:active {
        ${activeStyles.link(t)}
      }
    `;
  },

  linkFocus(t: Theme) {
    return css`
      color: ${t.btnLinkColor};
      text-decoration: ${t.btnLinkHoverTextDecoration};
    `;
  },

  linkDisabled(t: Theme) {
    return css`
      cursor: default;
      pointer-events: none;

      &,
      &:hover,
      &:active {
        color: ${t.btnLinkDisabledColor};
      }
    `;
  },

  focus(t: Theme) {
    return css`
      position: relative;
      z-index: 2;

      &,
      &:hover,
      &:active,
      &:active:hover {
        box-shadow: inset 0 0 0 ${t.btnInsetWidth} ${t.btnOutlineColorFocus},
          0 0 0 ${t.btnFocusShadowWidth} ${t.btnBorderColorFocus};
        border-color: ${t.btnBorderColorFocus};
      }
    `;
  },

  disabled(t: Theme) {
    return css`
      cursor: default;
      pointer-events: none;
      border-color: ${t.btnDisabledBorderColor};

      background-image: none;
      background-color: ${t.btnDisabledBg};
      color: ${t.btnDisabledTextColor};
      box-shadow: none;

      .${globalClasses.arrowHelper} {
        box-shadow: ${t.btnBorderWidth} 0 0 0 ${t.btnDisabledBorderColor};
      }
    `;
  },

  arrowFocus(t: Theme) {
    return css`
      box-shadow: inset 0 0 0 ${t.btnInsetWidth} ${t.btnOutlineColorFocus};

      ${arrowOutlineMixin(t.btnInsetWidth, t.btnBorderColorFocus, t.btnOutlineWidth, t.btnOutlineColorFocus)}
    `;
  },

  arrow() {
    return css`
      background: inherit;
      border-radius: inherit;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;

      .${globalClasses.arrowHelper} {
        width: 100%;
        height: 50%;
        position: absolute;
        left: 0;
        background: inherit;
        background-size: 200% 200%;
        border-radius: inherit;
        background-clip: padding-box;

        // fix ugly arrow edge
        &:before {
          content: '';
          display: block;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          background: inherit;
          border-radius: inherit;
          transform: translateX(${isFirefox ? `0.2px` : `0.3px`});
        }
      }

      .${globalClasses.arrowHelperTop} {
        top: 0;
        transform: skewX(30deg);
        transform-origin: top;
        background-position-y: top;
        border-bottom-right-radius: 1px;

        // fix ugly line in the
        // middle of the button
        &:before {
          bottom: -1px;
        }
      }

      .${globalClasses.arrowHelperBottom} {
        bottom: 0;
        transform: skewX(-30deg);
        transform-origin: bottom;
        background-position-y: bottom;
        border-top-right-radius: 1px;

        // fix ugly line in the
        // middle of the button
        &:before {
          top: -1px;
        }
      }
    `;
  },

  arrowLeft() {
    return css`
      transform: scaleX(-1);
    `;
  },

  default(t: Theme) {
    return css`
      ${buttonUseMixin(
        t.btnDefaultBg,
        t.btnDefaultBgStart,
        t.btnDefaultBgEnd,
        t.btnDefaultTextColor,
        t.btnDefaultBorderColor,
        t.btnDefaultBorderBottomColor,
        t.btnBorderWidth,
      )};

      ${buttonHoverMixin(
        t.btnDefaultHoverBg,
        t.btnDefaultHoverBgStart,
        t.btnDefaultHoverBgEnd,
        t.btnDefaultHoverBorderColor,
        t.btnDefaultHoverBorderBottomColor,
        t.btnBorderWidth,
      )};

      &:active {
        ${activeStyles.default(t)}
      }
    `;
  },

  primary(t: Theme) {
    return css`
      ${buttonUseMixin(
        t.btnPrimaryBg,
        t.btnPrimaryBgStart,
        t.btnPrimaryBgEnd,
        t.btnPrimaryTextColor,
        t.btnPrimaryBorderColor,
        t.btnPrimaryBorderBottomColor,
        t.btnBorderWidth,
      )};

      ${buttonHoverMixin(
        t.btnPrimaryHoverBg,
        t.btnPrimaryHoverBgStart,
        t.btnPrimaryHoverBgEnd,
        t.btnPrimaryHoverBorderColor,
        t.btnPrimaryHoverBorderBottomColor,
        t.btnBorderWidth,
      )};

      &:active {
        ${activeStyles.primary(t)}
      }
    `;
  },

  success(t: Theme) {
    return css`
      ${buttonUseMixin(
        t.btnSuccessBg,
        t.btnSuccessBgStart,
        t.btnSuccessBgEnd,
        t.btnSuccessTextColor,
        t.btnSuccessBorderColor,
        t.btnSuccessBorderBottomColor,
        t.btnBorderWidth,
      )};

      ${buttonHoverMixin(
        t.btnSuccessHoverBg,
        t.btnSuccessHoverBgStart,
        t.btnSuccessHoverBgEnd,
        t.btnSuccessHoverBorderColor,
        t.btnSuccessHoverBorderBottomColor,
        t.btnBorderWidth,
      )};

      &:active {
        ${activeStyles.success(t)}
      }
    `;
  },

  danger(t: Theme) {
    return css`
      ${buttonUseMixin(
        t.btnDangerBg,
        t.btnDangerBgStart,
        t.btnDangerBgEnd,
        t.btnDangerTextColor,
        t.btnDangerBorderColor,
        t.btnDangerBorderBottomColor,
        t.btnBorderWidth,
      )};

      ${buttonHoverMixin(
        t.btnDangerHoverBg,
        t.btnDangerHoverBgStart,
        t.btnDangerHoverBgEnd,
        t.btnDangerHoverBorderColor,
        t.btnDangerHoverBorderBottomColor,
        t.btnBorderWidth,
      )};

      &:active {
        ${activeStyles.danger(t)}
      }
    `;
  },

  pay(t: Theme) {
    return css`
      ${buttonUseMixin(
        t.btnPayBg,
        t.btnPayBgStart,
        t.btnPayBgEnd,
        t.btnPayTextColor,
        t.btnPayBorderColor,
        t.btnPayBorderBottomColor,
        t.btnBorderWidth,
      )};

      ${buttonHoverMixin(
        t.btnPayHoverBg,
        t.btnPayHoverBgStart,
        t.btnPayHoverBgEnd,
        t.btnPayHoverBorderColor,
        t.btnPayHoverBorderBottomColor,
        t.btnBorderWidth,
      )};

      &:active {
        ${activeStyles.pay(t)}
      }
    `;
  },

  checked(t: Theme) {
    const checkedStyles = `
      background-image: none;
      box-shadow: ${t.btnCheckedShadow};
      background-color: ${t.btnCheckedBg};
      color: ${t.btnCheckedTextColor};
      border-color: ${t.btnDefaultCheckedBorderColor};

      .${globalClasses.arrowHelper} {
        box-shadow: ${t.btnBorderWidth} 0 0 ${t.btnDefaultCheckedBorderColor};

        &.${globalClasses.arrowHelperTop} {
          background-image: ${t.btnArrowBgImageChecked};
        }
      }
    `;

    return css`
      ${checkedStyles}

      &:hover,
      &:active,
      &:hover:active {
        ${checkedStyles}
      }
    `;
  },

  checkedDisabled(t: Theme) {
    return css`
      box-shadow: ${t.btnCheckedDisabledShadow};
      background-color: ${t.btnCheckedDisabledBg};
      color: ${t.btnCheckedDisabledColor};
      border-color: ${t.btnCheckedDisabledBorderColor};

      .${globalClasses.arrowHelper} {
        box-shadow: ${t.btnBorderWidth} 0 0 ${t.btnCheckedDisabledBorderColor};

        &.${globalClasses.arrowHelperTop} {
          background-image: none;
        }
      }
    `;
  },

  caption() {
    return css`
      position: relative;
      white-space: nowrap;
      display: inline-block;
      width: 100%;
      vertical-align: top;
    `;
  },

  captionLink() {
    return css`
      display: inline;
      transform: none !important; // override root:active style
    `;
  },

  captionTranslated() {
    return css`
      transform: translateY(1px);
    `;
  },

  captionDisabled() {
    return css`
      transform: none !important; // override root:active style
    `;
  },

  wrap() {
    return css`
      box-sizing: border-box;
      display: inline-block;
    `;
  },

  narrow() {
    return css`
      padding-left: 5px;
      padding-right: 5px;
    `;
  },

  noPadding() {
    return css`
      padding-left: 0;
      padding-right: 0;
    `;
  },

  noRightPadding() {
    return css`
      padding-right: 0;
    `;
  },

  iconNoRightPadding() {
    return css`
      padding-right: 0;
    `;
  },

  iconLink(t: Theme) {
    return css`
      padding-right: ${t.btnLinkIconMarginRight};
    `;
  },

  wrapLink() {
    return css`
      padding: 0;
    `;
  },

  wrapArrow() {
    return css`
      margin-right: 10px;
    `;
  },

  wrapArrowLeft() {
    return css`
      margin-right: 0;
      margin-left: 10px;
    `;
  },

  icon() {
    return css`
      display: inline-block;
    `;
  },
  iconSmall(t: Theme) {
    return css`
      width: ${t.btnIconSizeSmall};
      padding-right: ${t.btnIconGapSmall};
    `;
  },
  iconMedium(t: Theme) {
    return css`
      width: ${t.btnIconSizeMedium};
      padding-right: ${t.btnIconGapMedium};
    `;
  },
  iconLarge(t: Theme) {
    return css`
      width: ${t.btnIconSizeLarge};
      padding-right: ${t.btnIconGapLarge};
    `;
  },

  borderless() {
    return css`
      &,
      &:hover,
      &:active {
        border-color: transparent;
        .${globalClasses.arrowHelperTop}, .${globalClasses.arrowHelperBottom} {
          box-shadow: none;
        }
      }
    `;
  },

  loading() {
    return css`
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      border-radius: inherit;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 10;
    `;
  },

  visibilityHidden() {
    return css`
      visibility: hidden;
    `;
  },
});

export const activeStyles = memoizeStyle({
  default(t: Theme) {
    return css`
      &,
      &:hover {
        ${buttonActiveMixin(
          t.btnDefaultActiveBg,
          t.btnDefaultActiveShadow,
          t.btnDefaultActiveBorderColor,
          t.btnDefaultActiveBorderTopColor,
          t.btnBorderWidth,
          t.btnArrowBgImageActive,
        )};
      }
    `;
  },

  primary(t: Theme) {
    return css`
      &,
      &:hover {
        ${buttonActiveMixin(
          t.btnPrimaryActiveBg,
          t.btnPrimaryActiveShadow,
          t.btnPrimaryActiveBorderColor,
          t.btnPrimaryActiveBorderTopColor,
          t.btnBorderWidth,
          t.btnArrowBgImageActive,
        )};
      }
    `;
  },

  success(t: Theme) {
    return css`
      &,
      &:hover {
        ${buttonActiveMixin(
          t.btnSuccessActiveBg,
          t.btnSuccessActiveShadow,
          t.btnSuccessActiveBorderColor,
          t.btnSuccessActiveBorderTopColor,
          t.btnBorderWidth,
          t.btnArrowBgImageActive,
        )};
      }
    `;
  },

  danger(t: Theme) {
    return css`
      &,
      &:hover {
        ${buttonActiveMixin(
          t.btnDangerActiveBg,
          t.btnDangerActiveShadow,
          t.btnDangerActiveBorderColor,
          t.btnDangerActiveBorderTopColor,
          t.btnBorderWidth,
          t.btnArrowBgImageActive,
        )};
      }
    `;
  },

  pay(t: Theme) {
    return css`
      &,
      &:hover {
        ${buttonActiveMixin(
          t.btnPayActiveBg,
          t.btnPayActiveShadow,
          t.btnPayActiveBorderColor,
          t.btnPayActiveBorderTopColor,
          t.btnBorderWidth,
          t.btnArrowBgImageActive,
        )};
      }
    `;
  },

  link(t: Theme) {
    return css`
      &,
      &:hover {
        color: ${t.linkActiveColor};
      }
    `;
  },
});
