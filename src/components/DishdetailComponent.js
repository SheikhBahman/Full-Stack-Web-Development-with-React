import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';


class DishDetail extends Component {

  convertDate(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
  }

  renderComments(comments) {
    if (comments == null) {
      return (
        <div></div>
      );
    }

    const renderedComments = comments.map((comment) => {
        return (
        <li>
            <p>{comment.comment}</p>
            <p>-- {comment.author}, {this.convertDate(comment.date)}</p>
        </li>
        );
    });

    return (
        <div>
        <h4>Comments</h4>
        <ul className="list-unstyled">
            { renderedComments }
        </ul>
        </div>
    );
}

  renderDish(dish) {
    return (
      <Card>
        <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  }  

  render() {
    if (this.props.dish != null) {
      return (
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            { this.renderDish(this.props.dish) }
          </div>
          <div className="col-12 col-md-5 m-1">
            { this.renderComments(this.props.dish.comments) }
          </div>
        </div>
      );
    }
    else {
      return (
        <div></div>
      );
    }
  }

}

export default DishDetail;