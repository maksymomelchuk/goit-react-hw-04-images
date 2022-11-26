import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';
import css from './GalleryItem.module.css';
import PropTypes from 'prop-types';

const GalleryItem = ({ smallImg, largeImg }) => {
  const [showModal, setShowModal] = useState(false);
  const [link, setLink] = useState('');

  const onImgClick = event => {
    setShowModal(true);
    setLink(event.target.name);
  };

  const onEscPress = event => {
    if (event.key === 'Escape') {
      setShowModal(false);
    }
  };

  const onBackdropClick = event => {
    if (event.target === event.currentTarget) {
      setShowModal(false);
    }
  };

  return (
    <li className={css.ImageGalleryItem}>
      <img
        className={css.ImageGalleryItemImg}
        src={smallImg}
        alt=""
        name={largeImg}
        onClick={onImgClick}
      />
      {showModal && (
        <Modal onEsc={onEscPress} onBackdrop={onBackdropClick}>
          <img src={link} alt="" />
        </Modal>
      )}
    </li>
  );
};

export { GalleryItem };

GalleryItem.propTypes = {
  smallImg: PropTypes.string.isRequired,
  largeImg: PropTypes.string.isRequired,
};
