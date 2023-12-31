import sliderImg1 from '../../images/togethersLogo.png';
import sliderImg2 from '../../images/sliderImg1.png';
import sliderImg3 from '../../images/sliderImg3.png';
import '../../styles/Main.scss';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slide from './Slider';

const slides = [
  {
    backgroundColor: '#fff088',
    texts: [
      {
        text: 'NOTICE',
        style: {
          color: 'white',
          borderRadius: '20px',
          backgroundColor: '#b291dd',
          margin: '2px',
          padding: '10px 40px',
          fontSize: '20px',
          fontWeight: 'bold',
        },
      },
      {
        text: '투게더S!는 가을맞이 새단장 완료',
        style: {
          color: 'black',
          margin: '2px',
          fontSize: '40px',
          fontWeight: '900',
        },
      },
      {
        text: '더 편해진 투게더S! 지금 사용해보세요 🙏',
        style: {
          color: 'black',
          margin: '2px',
          fontSize: '25px',
          fontWeight: '700',
        },
      },
    ],
    imageSrc: sliderImg1,
    link: 'https://nifty-straw-3ce.notion.site/S-23-09-22-c31457ee673a43d780484688872cd252?pvs=4',
  },
  {
    backgroundColor: '#ffeae9',
    texts: [
      {
        text: 'NOTICE',
        style: {
          color: 'white',
          borderRadius: '20px',
          backgroundColor: '#fb817f',
          margin: '2px',
          padding: '10px 40px',
          fontSize: '20px',
          fontWeight: 'bold',
        },
      },
      {
        text: '투게더S! 공식 인스타그램 OPEN!',
        style: {
          color: 'black',
          margin: '2px',
          fontSize: '40px',
          fontWeight: '900',
        },
      },
      {
        text: '지금 팔로우하고 다양한 소식을 만나보세요!',
        style: {
          color: 'black',
          margin: '2px',
          fontSize: '25px',
          fontWeight: '700',
        },
      },
    ],
    imageSrc: sliderImg2,
    link: 'https://www.instagram.com/to_gethers/?igshid=YTQwZjQ0NmI0OA%3D%3D',
  },
  {
    backgroundColor: '#edfaf7',
    texts: [
      {
        text: 'NOTICE',
        style: {
          color: 'white',
          borderRadius: '20px',
          backgroundColor: '#578EDF',
          margin: '2px',
          padding: '10px 40px',
          fontSize: '20px',
          fontWeight: 'bold',
        },
      },
      {
        text: '스터디를 찾는 가장 쉬운 방법',
        style: {
          color: 'black',
          margin: '2px',
          fontSize: '40px',
          fontWeight: '900',
        },
      },
      {
        text: '투게더S에서 팀원을 찾으세요 🔍',
        style: {
          color: 'black',
          margin: '2px',
          fontSize: '25px',
          fontWeight: '700',
        },
      },
    ],
    imageSrc: sliderImg3,
    link: null,
  },
];

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    autoplaySpeed: 2000,
  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <Slide
            key={index}
            backgroundColor={slide.backgroundColor}
            text={slide.texts}
            imageSrc={slide.imageSrc}
            link={slide.link}
          />
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
