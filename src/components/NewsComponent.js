import React, { Component } from "react";
import NewsItemComponent from "./NewsItemComponent";

export class NewsComponent extends Component {
  constructor() {
    super();
    console.log("Hello I am a constructor in News Component");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalArticles: 0,
    };
  }

  page = 1;

  async componentDidMount() {
    console.log("cdm");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=d6101e58c3ae430f8f80ccd5ec16f0fc&page=${this.page}&pageSize=20`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    this.setState({
      articles: data.articles,
      totalArticles: data.totalResults,
    });
  }

  handleNextClick = async () => {
    // this.setState({ page: this.state.page + 1 });
    this.page = this.page + 1;
    // console.log("this.state.page ----------- ", this.state.page);
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=d6101e58c3ae430f8f80ccd5ec16f0fc&page=${this.page}&pageSize=20`;
    let response = await fetch(url);
    let data = await response.json();
    this.setState({ articles: data.articles });
  };

  handlePreviousClick = async () => {
    // this.setState({ page: this.state.page - 1 });
    this.page = this.page - 1;
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=d6101e58c3ae430f8f80ccd5ec16f0fc&page=${this.page}&pageSize=20`;
    let response = await fetch(url);
    let data = await response.json();

    this.setState({ articles: data.articles });
  };

  render() {
    console.log("render");
    return (
      <div className='container my-3'>
        <h1>Todays News</h1>
        <div className='row'>
          {this.state.articles &&
            this.state.articles.map((article) => (
              <div className='col-md-4' key={article.url}>
                <NewsItemComponent
                  title={article.title}
                  description={article.description}
                  imgUrl={article.urlToImage}
                  newsUrl={article.url}
                ></NewsItemComponent>
              </div>
            ))}
        </div>
        <div className='container d-flex justify-content-between'>
          <button
            type='button'
            className='btn btn-primary'
            onClick={this.handlePreviousClick}
            disabled={this.page <= 1}
          >
            &larr; Previous
          </button>

          <button
            type='button'
            className='btn btn-primary'
            onClick={this.handleNextClick}
          >
            &rarr; Next
          </button>
        </div>
      </div>
    );
  }
}

export default NewsComponent;
