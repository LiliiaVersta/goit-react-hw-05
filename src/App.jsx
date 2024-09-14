import { useState, useEffect } from "react";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import SearchBar from "./components/SearchBar/SearchBar";

import { Toaster } from 'react-hot-toast';

import fetchGalleryPhotos from './unsplash-api';


export const App = () => {
  const [page, setPage] = useState(1);
	const [queryValue, setQueryValue] = useState('');
	const [gallery, setGallery] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [totalPages, setTotalPages] = useState(0);

	const [modalIsOpen, setIsOpen] = useState(false);
	const [modalImage, setModalImage] = useState('');
	const [altDescription, setAltDescription] = useState('');

	function openModal() {
		setIsOpen(true);
  }
  function closeModal() {
		setIsOpen(false);
	}

	function updateModalStateData(src, alt) {
		setModalImage(src);
		setAltDescription(alt);
	}

	useEffect(() => {
		if (queryValue === '') return;

		const handleSearch = async () => {
			try {
				setIsLoading(true);
				setIsError(false);
				const data = await fetchGalleryPhotos(queryValue, page);
				console.log('data: ', data);
				if (data.total === 0) return;
				setGallery((prevGallery) => {
					return [...prevGallery, ...data.results];
				});
				setTotalPages(data.total_pages);
      } catch (error) {
        console.log(error);
        
				setIsError(true);
			} finally {
				setIsLoading(false);
			}
		};
		handleSearch();
	}, [page, queryValue]);

	const handleQuery = (newQuery) => {
		setQueryValue(newQuery);
		setGallery([]);
		setPage(1);
	};

	const handleLoadMore = () => {
		setPage((prevPage)=> prevPage + 1);
	};

	const isActive = page === totalPages;

  return (
  <>
			<SearchBar onSubmit={handleQuery} />
			{gallery.length > 0 && (
				<ImageGallery
					gallery={gallery}
					openModal={openModal}
					updateModalStateData={updateModalStateData}
				/>
			)}
			{isLoading && <Loader />}
			{isError && <ErrorMessage />}
			{gallery.length > 0 && !isLoading && !isError && (
				<LoadMoreBtn handleLoadMore={handleLoadMore} isActive={isActive} />
			)}
			<ImageModal
				modalIsOpen={modalIsOpen}
				closeModal={closeModal}
				src={modalImage}
				alt={altDescription}
			/>
			<Toaster position='top-right' reverseOrder={true} />
		</>
)
};
