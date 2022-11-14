import { useState, useEffect } from 'react';
import { fetchImages } from 'servises/api';
import Searchbar from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { LoadMore } from './Button/Button';
import {Modal} from './Modal/Modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
      setIsLoading(true);
  try{
      fetchImages(searchQuery, page).then(res => {
          const { data } = res;
    if(data.hits.length === 0){
return toast.error(`No pictures found with name ${searchQuery}`);
    } 
    setImages(prev => [...prev, ...data.hits]);
  });
} catch(error){
  setError (error);
}
setIsLoading(false);
},[page, searchQuery]);


  const onSubmitHandler = searchQuery => {
    setSearchQuery(searchQuery);
    setPage(1);
    setImages([]);
  };

  // const handleLoadMore = () => {
  //   setPage( page + 1);
  // };

  const onModalOpen = largeImageURL => {
    toggleModal();
    setLargeImageURL(largeImageURL);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
    };

  return (
    <>
      <Searchbar onSubmit={onSubmitHandler} />
      {error && toast.error(`Oops something went wrong. ${error.message}`)}
      {images.length > 0 && (
        <ImageGallery images={images} openModal={onModalOpen} />
      )}
        {!showModal && (
         <Modal
           onModalClose={toggleModal}
           largeImageUrl={largeImageURL}
         />
       )}
        {isLoading && <Loader />}
      {images.length > 11 && 
        <LoadMore onClick={() => setPage(page + 1)} />
        }
      <ToastContainer autoClose={3000} theme={'colored'} />
    </>
  );
};



