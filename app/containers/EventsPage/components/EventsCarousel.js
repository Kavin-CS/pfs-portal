import React from "react";
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//https://react-slick.neostack.com/docs/example/multiple-items

import kenColors from "../../../utils/themes/KenColors";


function CustomNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", zIndex:100, right: 2, color: kenColors.neutral400, }}
        onClick={onClick}
      />
    );
  }
  
  function CustomPrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block",zIndex:100, left: 2}}
        onClick={onClick}
      />
    );
  }

const EventsCarousel = (props) => {
    const sliderSettings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 100,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        // appendDots: dots => (
        //     <div
        //       style={{
        //         borderRadius: "10px",
        //         padding: "10px"
        //       }}
        //     >
        //       <ul style={{ margin: "0px"}}> {dots} </ul>
        //     </div>
        //   ),
        //   customPaging: i => (
        //     <div
        //       style={{
        //         width: "30px",
        //         color: "blue",
        //         border: "1px blue solid",
        //         margin: '5px 5px'
        //       }}
        //     >
        //     </div>
        //   ),
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ],
    };
    const [events, setEvents] = React.useState([
        {
            title: 'AI in the ‘New Normal’',
            date: '27 Jun 2020',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis mauris non nullam risus pretium non enim. Turpis amet, lobortis commodo tincidunt id faucibus euismod.',
            imageUrl: 'https://images.unsplash.com/photo-1489844097929-c8d5b91c456e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=752&q=80'
        },
        {
            title: 'Next Vision ‘2030’ ',
            date: '16 Aug 2020',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis mauris non nullam risus pretium non enim. Turpis amet, lobortis commodo tincidunt id faucibus euismod.',
            imageUrl: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
        },
        {
            title: 'Machine Learning And Robotics',
            date: '6 Sep 2020',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis mauris non nullam risus pretium non enim. Turpis amet, lobortis commodo tincidunt id faucibus euismod.',
            imageUrl: 'https://images.unsplash.com/photo-1511649475669-e288648b2339?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80'
        },

    ]);
  
    
  return (
        <div style={{height: 250}}>
            <Slider {...sliderSettings} style={{ height: 240 }}>
                {
                    events.map((event, index) => {
                        return <div>
                            {/* <img
                                key={index}
                                src={event.imageUrl}
                                style={{ height: 240, width: '100%' }}
                            /> */}
                            <div style={{height: 240, background: `linear-gradient(91.33deg, #DEEBFF 3.24%, #EEF2F5 15.49%, #F4F9FC 38.98%, #FED9D7 95.61%)`,transform: `rotate(-180deg)`}}></div>
                            <div style={{
                                position: 'absolute',
                                top: '20px',
                                paddingLeft: '20px',
                                fontSize: '30px',
                                color: kenColors.primary,
                            }}>{event.title}</div>
                            <div></div>
                        </div>

                    })
                }
            </Slider>
        </div>)
    
}



export default EventsCarousel;