import { useState } from "react";

const Video = () => {
  const [count, setCount] = useState(50);
  const [modalOpen, setModalOpen] = useState(false);

  const increaseLike = () => {
    setCount(count + 1);
  };

  const decreaseLike = () => {
    setCount(count - 1);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg relative">
      <img
        className="w-full"
        src="https://timesofindia.indiatimes.com/photo/msid-103348493,imgsize-156142.cms"
        alt="Video Thumbnail"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Horror Adventure Mystery</div>
        <p className="text-gray-700 text-base">97% Match | 2h 33min</p>
      </div>
      <div className="px-6 py-4">
        <button
          className="mr-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          onClick={increaseLike}
        >
          <i className="fas fa-thumbs-up fa-lg" aria-hidden="true"></i>
        </button>
        <button
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          onClick={decreaseLike}
        >
          <i className="fas fa-thumbs-down fa-lg" aria-hidden="true"></i>
        </button>

        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          <i className="fa fa-play"></i> Play
        </button>
      </div>
      <div>
        <h1>{count} Likes</h1>
        <button className="hover:opacity-100" onMouseEnter={openModal} onMouseLeave={closeModal}>
          More info...
        </button>
      </div>
      {modalOpen && (
        <div className="modal absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="modal-content bg-white p-4 z-50 rounded shadow-lg">
            <span className="close absolute top-0 right-0 p-2" onClick={closeModal}>
              &times;
            </span>
            <p>
              Chandramukhi 2 (transl. Moon faced girl 2) is a 2023 Indian Tamil-language comedy horror film written and
              directed by P. Vasu, and produced by Subaskaran Allirajah under the banner of Lyca Productions. It is a
              sequel to Chandramukhi (2005). The film stars Raghava Lawrence in dual roles alongside Kangana Ranaut and
              Lakshmi Menon in the principal roles along with an ensemble supporting cast, that includes Vadivelu who
              reprises his role from the predecessor
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Video;
