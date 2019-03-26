import React from "react";
import YouTube from "@u-wave/react-youtube";
import ReactModal from "react-modal";

class ModalYoutubeTrailer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTrailer: 0 //Default Choice
    };
  }

  handleSelectTrailer = index => e => {
    e.preventDefault();
    this.setState({ selectedTrailer: index });
  };

  render() {
    let { trailers, isOpen, closeModal, title } = this.props;
    let { selectedTrailer } = this.state

    return (
      <ReactModal isOpen={isOpen}>
        <div className='modal-header'>
          <h5 className='modal-title text-center'>Movie Trailers for {title}</h5>
          <button
            type='button'
            className='close'
            data-dismiss='modal'
            aria-label='Close'
            onClick={closeModal}>
            <span aria-hidden='true'>&times;</span>
          </button>
        </div>
        <div className='modal-body px-0'>
          <div className='container m-0 p-0'>
            <div className='container'>
              <div className='row my-auto'>
                <div className='col-4'>
                <div className="container mt-3">
                  <h5>List of "{title}" trailers</h5>
                  <ul>
                    {trailers
                      ? trailers.map((trailer, index) => {
                          return (
                            <li key={trailer.key}>
                              <a
                                href='#'
                                onClick={this.handleSelectTrailer(index)}>
                                {index + 1}. {trailer.name}
                              </a>
                            </li>
                          );
                        })
                      : "Nothing"}
                  </ul>
                  </div>
                </div>
                <div className='col-8 mx-auto'>
                  {trailers[selectedTrailer] ? (
                    <YouTube
                      video={trailers[selectedTrailer].key}
                      width={'100%'}
                      autoplay
                      height={480}
                    />
                  ) : (
                    "No Trailer Yet"
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </ReactModal>
    );
  }
}

export default ModalYoutubeTrailer;
