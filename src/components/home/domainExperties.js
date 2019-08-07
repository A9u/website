import React, { Fragment } from 'react'
import { Row, Col } from 'reactstrap';
import { Heading1 } from "./homeStyledComponents.js";
import domainBg from "../../assetes/images/domain.svg";
import previousSvg from "../../assetes/images/previous.svg"
import JoshCarousel from './carousel.js';

const DomainExperties = (props) => {
  const { domainsData } = props;
  const carouselItems = domainsData.map(domain => {
    return <img src={require(`../../assetes/images/technologies/${domain.logo}`)} />
  })

  const PreviousArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <img
        src={previousSvg}
        className={className}
        onClick={onClick}
      />
    );
  }

  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <PreviousArrow />,
    prevArrow: <PreviousArrow />
  }

  return (
    <Fragment>
      <section id="clientsSlide" className="section-home ">
        <Heading1>Domain Experties</Heading1>
        <Row>
          <Col sm={2} md={3} />
          <Col sm={8} md={6}>
            <Row>
              <Col sm={6} md={4} xs={6} className="pb-14">
                <img src={domainBg} />
              </Col>
              <Col sm={6} md={4} xs={6} className="pb-14">
                <img src={domainBg} />
              </Col>
              <Col sm={6} md={4} xs={6} className="pb-14">
                <img src={domainBg} />
              </Col>
              <Col sm={6} md={4} xs={6} className="pb-14">
                <img src={domainBg} />
              </Col>
              <Col sm={6} md={4} xs={6} className="pb-14">
                <img src={domainBg} />
              </Col>
              <Col sm={6} md={4} xs={6} className="pb-14">
                <img src={domainBg} />
              </Col>
            </Row>
          </Col>
          <Col sm={2} md={3} />
        </Row>
      </section>
      <Row>
        <Col md={2} />
        <Col md={8} >
          <JoshCarousel items={carouselItems} settings={carouselSettings} />
        </Col>
        <Col md={2} />
      </Row>
    </Fragment>
  )
}

DomainExperties.defaultProps = {
  domainsData: [
    {
      id: 1,
      name: "ios",
      logo: "ios.png"
    },
    {
      id: 2,
      name: "android",
      logo: "android.png"
    },
    {
      id: 3,
      name: "go",
      logo: "go.png"
    },
    {
      id: 4,
      name: "ruby",
      logo: "ruby.png"
    },
    {
      id: 5,
      name: "java",
      logo: "java.png"
    },
    {
      id: 6,
      name: "angular",
      logo: "angular.png"
    },
    {
      id: 7,
      name: "react",
      logo: "angular.png"
    }
  ]
}

export default DomainExperties;