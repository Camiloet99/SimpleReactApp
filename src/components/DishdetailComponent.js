import React, {Component} from 'react';
import {Card,CardImg, CardText, CardBody, CardTitle, ListGroup, ListGroupItemText, ListGroupItem, ListGroupItemHeading} from 'reactstrap'; 

class DishDetail extends Component {
    
    constructor(props){
        super(props);    
        this.state = {

        };
    }

    renderDish(dish){
        if(dish!=null){
            return(
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name}/>
                        <CardBody>
                            <CardTitle>{dish.name} </CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        }else{
            return(
                <div></div>
            );
        }
    }

    renderComents(comments){
        const comm = comments.map(function(comment) {
            return (
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p> -- {comment.author}, {comment.date}</p>
                </li>
            )
        });
        if(comments!=null){
            return(
                <div className="col-12 col-md-5 m-1">
                    <ul className="list-unstyled">
                        {comm}
                    </ul>     
                </div>
            );
        }else{
            return(
                <div></div>
            );
        }

    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    {this.renderDish(this.props.dishaux)}
                    {this.renderComents(this.props.dishaux.comments)}
                </div>
            </div>
        );
    }


    
}

export default DishDetail;