import React, { Component } from "react";
import NewsItemComponent from "./NewsItemComponent";
import SpinnerComponent from "./SpinnerComponent";
import InfiniteScroll from "react-infinite-scroll-component";

export class NewsComponent extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 8,
    category: "general",
  };

  // static propTypes = {
  //   country: PropTypes.string,
  // };

  constructor(props) {
    super(props);
    console.log("Hello I am a constructor in News Component");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalArticles: 0,
    };
    document.title = `${this.capitalize(this.props.category)} - News App`;
  }

  capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  updateNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d6101e58c3ae430f8f80ccd5ec16f0fc&page=${this.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let response = await fetch(url);
    let data = await response.json();
    // console.log(data);
    this.setState({
      articles: data.articles,
      totalArticles: data.totalResults,
      loading: false,
    });
  };

  page = 1;
  async componentDidMount() {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d6101e58c3ae430f8f80ccd5ec16f0fc&page=${this.page}&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    // let response = await fetch(url);
    // let data = await response.json();
    // console.log(data);
    // this.setState({
    //   articles: data.articles,
    //   totalArticles: data.totalResults,
    //   loading: false,
    // });
    this.updateNews();
  }

  handleNextClick = async () => {
    // this.setState({ page: this.state.page + 1 });
    if (
      !(
        this.page + 1 >
        Math.ceil(this.state.totalArticles / this.props.pageSize)
      )
    ) {
      this.page = this.page + 1;
      this.updateNews();
      // console.log("this.state.page ----------- ", this.state.page);
      // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d6101e58c3ae430f8f80ccd5ec16f0fc&page=${this.page}&pageSize=${this.props.pageSize}`;
      // this.setState({ loading: true });
      // let response = await fetch(url);
      // let data = await response.json();
      // this.setState({ articles: data.articles, loading: false });
    }
  };

  handlePreviousClick = async () => {
    // this.setState({ page: this.state.page - 1 });
    this.page = this.page - 1;

    this.updateNews();
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d6101e58c3ae430f8f80ccd5ec16f0fc&page=${this.page}&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    // let response = await fetch(url);
    // let data = await response.json();

    // this.setState({ articles: data.articles, loading: false });
  };

  fetchMoreData = async () => {
    this.page = this.page + 1;
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d6101e58c3ae430f8f80ccd5ec16f0fc&page=${this.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let response = await fetch(url);
    let data = await response.json();
    // console.log(data);
    this.setState({
      articles: this.state.articles.concat(data.articles),
      totalArticles: data.totalResults,
      loading: false,
    });
  };

  render() {
    console.log("render");
    return (
      <>
        <h1 className='text-center'>
          Todays News - {this.capitalize(this.props.category)}
        </h1>
        {/* {this.state.loading && <SpinnerComponent></SpinnerComponent>} */}

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalArticles}
          loader={<SpinnerComponent></SpinnerComponent>}
        >
          <div className='container'>
            <div className='row'>
              {this.state.articles &&
                this.state.articles.map((article) => (
                  <div className='col-md-4' key={article.url}>
                    <NewsItemComponent
                      title={article.title}
                      description={article.description}
                      imgUrl={article.urlToImage}
                      newsUrl={article.url}
                      author={article.author}
                      date={article.publishedAt}
                      source={article.source.name}
                    ></NewsItemComponent>
                  </div>
                ))}
            </div>
          </div>
        </InfiniteScroll>
        {/* <div className='container d-flex justify-content-between'>
          <button
            type='button'
            className='btn btn-dark'
            onClick={this.handlePreviousClick}
            disabled={this.page <= 1}
          >
            &larr; Previous
          </button>

          <button
            type='button'
            className='btn btn-dark'
            onClick={this.handleNextClick}
            disabled={
              this.page + 1 >
              Math.ceil(this.state.totalArticles / this.props.pageSize)
            }
          >
            &rarr; Next
          </button>
        </div> */}
      </>
    );
  }
}

export default NewsComponent;
