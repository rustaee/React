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
        //console.log(comments);
        if(comments != null){
            const comment = comments.map((comment) => {
                return(
                    <li key={comment.id} className="list-unstyled">
                        <div>{comment.comment}</div>
                        <div>--{comment.author}, {comment.date}</div>
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
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(dish.comments)}
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