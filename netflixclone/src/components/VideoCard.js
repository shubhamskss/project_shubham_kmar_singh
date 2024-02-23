const Video = () => {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          className="w-full"
          src="https://timesofindia.indiatimes.com/photo/msid-103348493,imgsize-156142.cms"
          alt="Video Thumbnail"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Horror Adventure Mystery</div>
          <p className="text-gray-700 text-base">
            97% Match | 2h 33min
          </p>
        </div>
        <div className="px-6 py-4">
          <button className="mr-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            <i className="fa fa-thumbs-up fa-lg" aria-hidden="true"></i>
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            <i className="fa fa-thumbs-down fa-lg" aria-hidden="true"></i>
          </button>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            <i className="fa fa-play"></i> Play
          </button>
        </div>
      </div>
    );
  };
  
  export default Video;
  