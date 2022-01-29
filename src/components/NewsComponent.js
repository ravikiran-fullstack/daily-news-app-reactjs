import React, { Component } from "react";
import NewsItemComponent from "./NewsItemComponent";

export class NewsComponent extends Component {
  articles = [
    {
      source: { id: "bbc-sport", name: "BBC Sport" },
      author: "BBC Sport",
      title: "Australia Women v England Women - Cricket - BBC Sport",
      description:
        "Find out the in depth batting and bowling figures for Australia Women v England Women in the Women's International Test Match Series on BBC Sport.",
      url: "https://www.bbc.co.uk/sport/cricket/scorecard/ECKO51135",
      urlToImage:
        "https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.22.0/images/bbc-sport-logo.png",
      publishedAt: "2022-01-28T23:07:24.704972Z",
      content:
        "<table><tr><th>Batter</th><th>How Out</th><th>Bowler</th><th>Runs</th><th>Balls</th><th>4s</th><th>6s</th><th>Mins</th><th>SR</th></tr>\r\n<tr><th>Total</th><th>(104.1 overs)</th><th>337-for9wickets de… [+5725 chars]",
    },
    {
      source: { id: "talksport", name: "TalkSport" },
      author: "Josh Fordham",
      title:
        "Ash Barty drawing inspiration from Evonne Goolagong, once quit tennis to play professional cricket, now...",
      description: "",
      url: "https://talksport.com/sport/tennis/1029218/ash-barty-evonne-goolagong-tennis-cricket-australian-open/",
      urlToImage:
        "https://talksport.com/wp-content/uploads/sites/5/2022/01/TALKSPORT-Barty.jpg?strip=all&quality=100&w=1200&h=800&crop=1",
      publishedAt: "2022-01-28T22:30:00Z",
      content:
        "Ash Barty is already an Australian national treasure, but is chasing her own slice of history in Melbourne on Saturday.\r\nThe world number one has steam rolled her way to the final without dropping a … [+4596 chars]",
    },
    {
      source: { id: "bbc-sport", name: "BBC Sport" },
      author: "BBC Sport",
      title: "Zimbabwe's Taylor banned after admission",
      description:
        "Former Zimbabwe skipper Brendan Taylor is banned from cricket for more than three years after admitting charges related to drug use and a match-fixing approach.",
      url: "http://www.bbc.co.uk/sport/cricket/60170236",
      urlToImage:
        "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/170CE/production/_123041449_taylor_getty.jpg",
      publishedAt: "2022-01-28T15:22:23.9787291Z",
      content:
        "Taylor failed a drugs test during his final one-day international series - against Ireland in September\r\nFormer Zimbabwe skipper Brendan Taylor has been banned from cricket for three and a half years… [+1504 chars]",
    },
    {
      source: { id: "news24", name: "News24" },
      author: null,
      title:
        "FRIDAY BRIEFING | Under the pump: Cricket’s reckoning with race and history",
      description:
        "The gentlemen’s game, as cricket is lovingly referred to, is going through turbulent times in South Africa.",
      url: "https://www.news24.com/news24/Opinions/FridayBriefing/friday-briefing-under-the-pump-crickets-reckoning-with-race-and-history-20220128",
      urlToImage:
        "https://cdn.24.co.za/files/Cms/General/d/2670/40fa292097db4c18aeafcb7b29aefc82.jpg",
      publishedAt: "2022-01-28T06:06:50+00:00",
      content:
        "Under the pump: Cricket’s reckoning with race and history\r\nThe gentlemen’s game, as cricket is lovingly referred to by its many millions of supporters, has gone through a turbulent time in South Afri… [+2530 chars]",
    },
    {
      source: { id: "espn-cric-info", name: "ESPN Cric Info" },
      author: null,
      title:
        "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      description:
        "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      publishedAt: "2020-04-27T11:41:47Z",
      content:
        "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
    },
    {
      source: { id: "espn-cric-info", name: "ESPN Cric Info" },
      author: null,
      title:
        "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      description:
        "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      publishedAt: "2020-03-30T15:26:05Z",
      content:
        "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
    },
  ];
  constructor() {
    super();
    console.log("Hello I am a constructor in News Component");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    return (
      <div className='container my-3'>
        <h2>Todays News</h2>
        <div className='row'>
          <div className='col-md-4'>
            <NewsItemComponent
              title='title'
              description='description'
              imgUrl='https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.22.0/images/bbc-sport-logo.png'
              newUrl='TODO'
            ></NewsItemComponent>
          </div>
          <div className='col-md-4'>
            <NewsItemComponent
              title='title'
              description='description'
              imgUrl='https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.22.0/images/bbc-sport-logo.png'
              newUrl='TODO'
            ></NewsItemComponent>
          </div>
          <div className='col-md-4'>
            <NewsItemComponent
              title='title'
              description='description'
              imgUrl='https:////m.files.bbci.co.uk/modules/bbc-morph-sport-seo-meta/1.22.0/images/bbc-sport-logo.png'
              newUrl='TODO'
            ></NewsItemComponent>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsComponent;
