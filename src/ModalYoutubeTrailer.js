import React from "react";
import YouTube from "@u-wave/react-youtube";
import ReactModal from "react-modal";

const ModalYoutubeTrailer = (props) =>   {
    let {keys, isOpen, closeModal} = props;
    let renderYoutubeTrailer;
    if (keys) {
      renderYoutubeTrailer = keys.map((key, index) => (
        <li>
          <YouTube
            video={key}
            width={640}
            autoplay={index === 0}
            height={480}
          />
        </li>
      ));
    }

    return (
      <ReactModal isOpen={isOpen}>
        <div className='container-fluid'>
          <button onClick={closeModal}>Hide</button>
          <h1>Trailers</h1>
          <div className='container'>
            <div className='row'>
              <div className='col-4'>
                <h3>Video Control</h3>
                <p>List of Trailers</p>
                <ul>
                    <li>Name 1</li>
                </ul>
              </div>
              <div className='col-8'>
                <ul>
                  {renderYoutubeTrailer ? renderYoutubeTrailer : "Nothing"}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </ReactModal>
    );
}

export default ModalYoutubeTrailer;