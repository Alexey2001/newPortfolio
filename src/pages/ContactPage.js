import React from 'react'
import Hero from '../components/Hero';
import Content from '../components/Content';
import { Form, Button } from 'react-bootstrap';

class ContactPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            disabled: false,
            emailSent: null,

        }
    }
        render() {
            return(
               <div>
                   <Hero title={this.props.title} />

                   <Content >
                       <Form>
                           <Form.Group>
                               <Form.Label htmlFor="full-name">
                                   Полное имя
                               </Form.Label>
                               <Form.Control 
                                id="full-name" 
                                name="name"
                                type="text"
                                value={this.state.name}
                                onChange={this.handleChange}
                                />
                           </Form.Group>

                           <Form.Group>
                               <Form.Label htmlFor="email">
                                   Email
                               </Form.Label>
                               <Form.Control 
                                id="email" 
                                name="email"
                                type="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                />
                           </Form.Group>

                           <Form.Group>
                               <Form.Label htmlFor="message">
                                   Сообщение
                               </Form.Label>
                               <Form.Control 
                                id="message" 
                                name="message"
                                as="textarea"
                                rows="3"
                                value={this.state.email}
                                onChange={this.handleChange}
                                />

                                <Button>
                                    Отправить сообщение
                                </Button>
                           </Form.Group>
                       </Form>
                   </Content>
               </div>
            )
        }

}

export default ContactPage;