import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './style.css'
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle'
import Block from '../block'

function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionToggle(eventKey, () =>
        console.log('totally custom!'),
    );

    return (
        <button
            type="button"
            className="btn-custom"
            onClick={decoratedOnClick}
        >
            {children}
        </button>
    );
}

class Section extends React.Component {
    render() {
        console.log("15")
        console.log(this.props.config)

const getCardBlocks = () => {
   return this.props.config && this.props.config.map(
        (section, index) => {
            return(
                <Card>
                <Card.Header >
                    <div className="allignaccordianheader">
                        <h2 className="darktext textfontfamiy ">{section.sectionview}</h2>
                        <CustomToggle variant="link" eventKey="0" className="btn-custom">
                            <FontAwesomeIcon icon={faChevronDown} />
                        </CustomToggle>
                    </div>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <div className = "blockgroupdiv">
                        {
                            section.block && section.block.map((block, index) =>
                            {
                                return(
                                    <Block title={block.blockView} iconName="faEye" />
                                )
                            }    
                            )
                        } 
                        </div>               
                       </Card.Body>
                </Accordion.Collapse>
            </Card>
            )
        }
    )
}
        return (
            <Accordion defaultActiveKey="0">
                {getCardBlocks()}
            </Accordion>
        )
    }
}
export default Section