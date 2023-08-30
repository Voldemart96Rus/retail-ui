import { css, memoizeStyle } from '../../lib/theming/Emotion';
import { Theme } from '../../lib/theming/Theme';

export const styles = memoizeStyle({
  headerMonth(t: Theme) {
    return css`
      display: inline-block;
      padding: ${t.calendarMonthTitlePaddingTop} 0 ${t.calendarMonthTitlePaddingBottom};
    `;
  },

  headerYear(t: Theme) {
    return css`
      display: inline-block;
      position: absolute;
      right: 0;
      padding: ${t.calendarMonthTitlePaddingTop} 0 ${t.calendarMonthTitlePaddingBottom};
    `;
  },

  month(t: Theme) {
    const width = parseInt(t.calendarCellWidth) * 7;
    return css`
      position: absolute;
      width: ${width}px;
    `;
  },

  header() {
    return css`
      position: relative;
    `;
  },

  headerSticky(t: Theme) {
    return css`
      background-color: ${t.calendarMonthHeaderStickedBgColor};
      z-index: 2;
    `;
  },

  monthTitle(t: Theme) {
    return css`
      border-bottom: 1px solid ${t.calendarMonthTitleBorderBottomColor};
      font-weight: ${t.dateSelectFontWeight};
      margin: 0 ${t.calendarMonthTitleMarginX} ${t.calendarMonthTitleMarginBottom};
      line-height: ${t.calendarMonthTitleLineHeight};
    `;
  },

  monthDayGrid(t: Theme) {
    return css`
      line-height: ${t.calendarCellLineHeight};
    `;
  },
});
