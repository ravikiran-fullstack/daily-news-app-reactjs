import { getByTitle } from "@testing-library/react";
import React, { Component } from "react";

export class NewsItemComponent extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className='my-3'>
        <div className='card'>
          <span
            class='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'
            style={{ left: "94% !important", zIndex: "1" }}
          >
            {source}
          </span>
          <img src={imgUrl} className='card-img-top newsCardImg' alt='...' />
          <div className='card-body'>
            <h5 className='card-title titleText'>{title}</h5>
            <p className='card-text descriptionText'>{description}</p>
            <p className='card-text'>
              <small class='text-muted'>
                By {author ? author : "Unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
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
