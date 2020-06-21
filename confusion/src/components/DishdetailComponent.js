import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,CardTitle } from 'reactstrap';

    function RenderDish({dish}){
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

    function RenderComments({comments}){
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

    const DishDetail = (props) => {
        const dish =props.dish;
        if(dish != null) 
            return(
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish={dish} />
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <RenderComments comments={dish.comments} />
                        </div>
                    </div>
                </div>
            );
        else
            return(
                <div></div>
            );
    }



export default DishDetail;