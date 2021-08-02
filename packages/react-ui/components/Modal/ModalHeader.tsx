import React, { ReactNode, useContext, useEffect, useState } from 'react';
import cn from 'classnames';

import { Sticky } from '../Sticky';
import { ThemeContext } from '../../lib/theming/ThemeContext';
import { ZIndex } from '../../internal/ZIndex';
import { CommonWrapper, CommonProps } from '../../internal/CommonWrapper';

import { jsStyles } from './Modal.styles';
import { ModalClose } from './ModalClose';
import { ModalContext } from './ModalContext';

export interface ModalHeaderProps extends CommonProps {
  /**
   * @default true
   */
  sticky?: boolean;
  children?: ReactNode;
}
/**
 * Шапка модального окна
 *
 * @visibleName Modal.Header
 *
 */

function ModalHeader(props: ModalHeaderProps) {
  const { sticky = true, children } = props;
  const theme = useContext(ThemeContext);
  const modal = useContext(ModalContext);
  const [show, setShow] = useState(true);

  useEffect(() => {
    modal.setHasHeader?.();

    return () => modal.setHasHeader?.(false);
  }, []);

  useEffect(() => {
    setShow(false);
    setTimeout(() => {
      setShow(true);
    }, 50);
  }, [modal.isMobileLayout]);

  const renderContent = (fixed = false) => {
    return (
      <div
        className={cn({
          [jsStyles.header(theme)]: true,
          [jsStyles.fixedHeader(theme)]: fixed,
          [jsStyles.headerAddPadding()]: Boolean(modal.additionalPadding),
          [jsStyles.headerWithClose(theme)]: Boolean(modal.close),
        })}
      >
        {modal.close && <ModalClose requestClose={modal.close.requestClose} disableClose={modal.close.disableClose} />}
        {children}
      </div>
    );
  };

  if (!show) {
    return null;
  }

  return (
    <CommonWrapper {...props}>
      <ZIndex priority={'ModalHeader'} className={jsStyles.headerWrapper()}>
        {sticky ? <Sticky side="top">{renderContent}</Sticky> : renderContent()}
      </ZIndex>
    </CommonWrapper>
  );
}

ModalHeader.__KONTUR_REACT_UI__ = 'ModalHeader';
ModalHeader.__MODAL_HEADER__ = true;

export { ModalHeader };
