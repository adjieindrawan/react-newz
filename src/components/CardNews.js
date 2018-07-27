import React, { Component } from "react";
import { Card, CardImg, CardTitle, CardText, CardBody, Col } from "reactstrap";
import axios from "axios";

class CardNews extends Component {
  state = {
    datanews: {
      articles: []
    }
  };

  componentDidMount() {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=id&pageSize=9&apiKey=d71623011f6c4dc4a124d8e2f34940cd"
      )
      .then(res => {
        const objArticles = res.data;
        this.setState({ datanews: objArticles });

        console.log(this.state.datanews.articles);
      });
  }

  render() {
    return (
      <div className="row">
        {this.state.datanews.articles.map((b, key) => (
          <Col md={4} className="mt-3" key={key}>
            <Card>
              <CardImg top width="100%" src={b.urlToImage} alt={b.title} />
              <CardBody>
                <CardTitle>{b.title}</CardTitle>
                <CardText>{b.description}</CardText>
                <CardText>
                  <a
                    target="_blank" //eslint-disable-line
                    className="btn btn-primary btn-block"
                    href={b.url}
                  >
                    Read More
                  </a>
                </CardText>
              </CardBody>
            </Card>
          </Col>
        ))}
      </div>
    );
  }
}

export default CardNews;
