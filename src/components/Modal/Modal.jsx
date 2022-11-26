import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

const modalRoot = document.getElementById('modal-root');

const Modal = ({ onEsc, onBackdrop, children }) => {
  useEffect(() => {
    const modalBackdrop = document.querySelector('.Modal__backdrop');
    document.addEventListener('keydown', onEsc);
    modalBackdrop.addEventListener('click', onBackdrop);

    return () => {
      document.removeEventListener('keydown', onEsc);
      modalBackdrop.removeEventListener('click', onBackdrop);
    };
  }, [onBackdrop, onEsc]);

  return createPortal(
    <div className="Modal__backdrop">
      <div className="Modal__content">{children}</div>
    </div>,
    modalRoot
  );
};

export { Modal };

Modal.propTypes = {
  onEsc: PropTypes.func.isRequired,
  onBackdrop: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
