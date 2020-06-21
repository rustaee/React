import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle } from 'reactstrap';

class Dishdetail extends Component {
    constructor(props){
        super(props);
    }

    renderDish(dish){
        return(
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }

    renderComments(comments){
        if(comments != null){
            const comment = comments.map((comment) => {
                return(
                    <li key={comment.id} className="list-unstyled">
                        <p>{comment.comment}</p>
                        <p>--{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                    </li>
                );
            });
                
            return(
                <div>
                    <h4>Comments</h4> 
                    <ul>
                        {comment} 
                    </ul>  
                </div>
            );
        }
        else
            return(
                <div>Be the first one who writes a comment!</div>
            );
    }

    render(){
        const dish = this.props.dish;
        if(dish != null) 
            return(
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            {this.renderDish(dish)}
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            {this.renderComments(dish.comments)}
                        </div>
                    </div>
                </div>
            );
        else
            return(
                <div></div>
            );
    }

}

export default Dishdetail;