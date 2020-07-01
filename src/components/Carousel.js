import React from 'react'
import img1 from '../img/img1.png'
import Card from './Card';
import { Container, Row } from 'react-bootstrap';

class Carousel extends React.Component {

    constructor(props){
        super(props);
        this.state= {
            items: [
                {
                    id:0,
                    title: 'Создание вопросов',
                    subTitle: 'Создание вопросов написанное на react+ redux + firebase с авторизацией',
                    imgSrc: img1,
                    link: 'https://react-quiz-dfe1b.web.app/',
                    selected: false
                },
                {
                    id:1,
                    title: 'Создание вопросов',
                    subTitle: 'Создание вопросов написанное на react+ redux + firebase с авторизацией',
                    imgSrc: img1,
                    link: '',
                    selected: false
                }, 
                {
                    id:2,
                    title: 'Создание вопросов',
                    subTitle: 'Создание вопросов написанное на react+ redux + firebase с авторизацией',
                    imgSrc: img1,
                    link: '',
                    selected: false
                },
            ]
        }
    }

    handleCardClick = (id, card) => {
        console.log(id);
        
        let items = [...this.state.items]

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        })

        this.setState({
            items
        })
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(
                e => this.handleCardClick(item.id, e))} key={item.id}/>
        })
    }

    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }

}

export default Carousel;