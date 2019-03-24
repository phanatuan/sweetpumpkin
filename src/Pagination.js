import React, { Component } from "react";

class Pagination extends Component {
  render() {
    return (
      <nav>
        <ul className='pagination pagination-lg justify-content-center'>
          <li className={this.props.currentPage === 1 ? 'page-item disabled' : 'page-item'}>
            <a
              className='page-link'
              aria-label='Previous'
              onClick={this.props.onPrevious}>
              <span aria-hidden='true'>&laquo;</span>
              <span className='sr-only'>Previous</span>
            </a>
          </li>
          <li className={this.props.currentPage == 1 ? 'page-item active' : 'page-item'}>
            <a className='page-link' onClick={this.props.onPageSelect(1)}>
              1
            </a>
          </li>
          <li className={this.props.currentPage == 2 ? 'page-item active' : 'page-item'}>
            <a className='page-link' onClick={this.props.onPageSelect(2)}>
              2
            </a>
          </li>
          <li className={this.props.currentPage == 3 ? 'page-item active' : 'page-item'}>
            <a className='page-link' onClick={this.props.onPageSelect(3)}>
              3
            </a>
          </li>
          <li className='page-item'>
            <a
              className='page-link'
              aria-label='Next'
              onClick={this.props.onNext}>
              <span aria-hidden='true'>&raquo;</span>
              <span className='sr-only'>Next</span>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Pagination;
