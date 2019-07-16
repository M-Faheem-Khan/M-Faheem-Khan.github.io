import React, { Component } from "react"; 
// Navigation
import {Redirect} from 'react-router-dom';
// Styles
import {Button, Card, CardBody, CardTitle, CardSubtitle, Col, Row } from "reactstrap"
// Icons
import { FaGithub, FaLinkedin, FaFile, FaFileArchive } from 'react-icons/fa';
import { MdEmail } from "react-icons/md"

class AboutCard extends Component {
    state = {
        gitRedirect: false
    }

    // settings state on changes
    handleStateChange(e){
        this.setState({[e.target.name]: true})
    }
    
    render() {
        const { gitRedirect } = this.state;

        if (gitRedirect) {
          return <Redirect to="https://github.com/M-Faheem-Khan"/>;
        }

        return (
            <div>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }} style={{paddingTop:"50px", paddingRight: "0"}}>
                        <Card>
                            <CardBody>
                                <div className="text-center text-md-center">
                                    <CardTitle style={{fontSize: "2em"}}>Muhammad Faheem Khan</CardTitle>
                                    <CardSubtitle style={{fontSize: "24px"}}>Software Developer</CardSubtitle>
                                    <br/>
                                    <Button name="gitRedirect" style={{margin: "10px"}} outline color="primary">
                                        <FaGithub size={"1em"}/> Github
                                    </Button>

                                    <Button style={{margin: "10px"}} outline color="primary">
                                        <FaLinkedin size={"1em"}/> Linkedin
                                    </Button>

                                    <Button style={{margin: "10px"}} outline color="primary">
                                        <FaFile size={"1em"}/> Resume
                                    </Button>

                                    <Button style={{margin: "10px"}} outline color="primary">
                                        <MdEmail size={"1em"}/> Contact
                                    </Button>

                                    <Button style={{margin: "10px"}} outline color="primary">
                                        <FaFileArchive size={"1em"}/> Projects
                                    </Button>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default AboutCard;