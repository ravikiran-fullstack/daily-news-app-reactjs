import { getByTitle } from "@testing-library/react";
import React, { Component } from "react";

export class NewsItemComponent extends Component {
  render() {
    let { title, description, imgUrl, newsUrl } = this.props;
    return (
      <div className='my-3'>
        <div className='card'>
          <img src={imgUrl} className='card-img-top newsCardImg' alt='...' />
          <div className='card-body'>
            <h5 className='card-title titleText'>{title}</h5>
            <p className='card-text descriptionText'>{description}</p>
            <a
              rel='noreferrer'
              href={newsUrl}
              target='_blank'
              className='btn btn-primary btn-sm'
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItemComponent;
