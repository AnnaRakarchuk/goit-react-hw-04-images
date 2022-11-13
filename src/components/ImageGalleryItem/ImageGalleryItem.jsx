import css from '../ImageGalleryItem/ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export const ImageGalleryItem=({
    id,
    largeImageURL,
    webformatURL,
    openModal, 
}) =>{
    return(
        <li key ={id} className={css.ImageGalleryItem}>
        <img
          src={webformatURL}
          alt=""
          className={css.ImageGalleryItem_image}
          onClick={() => openModal(largeImageURL)}
        />
      </li>
    );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};
