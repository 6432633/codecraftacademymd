import React from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import './hero.css'

const Hero = (props) => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  return (
    <div className="hero-header78">
      <div className="hero-column thq-section-padding thq-section-max-width">
        <div className="hero-content1">
          <h1 className="hero-text1 thq-heading-1">{t.hero.heading1}</h1>
          <p className="hero-text2 thq-body-large">{t.hero.content1}</p>
        </div>
        <div className="hero-actions">
          <button className="thq-button-filled hero-button1" onClick={() => navigate('/courses')}>
            <span className="thq-body-small" >{t.hero.action1}</span>
          </button>
        </div>
      </div>
      <div className="hero-content2">
        <div className="hero-row-container1 thq-animated-group-container-horizontal thq-mask-image-horizontal">
          <div className="thq-animated-group-horizontal">
            <img
              alt={props.image1Alt}
              src="/slider-asstes/laptop-2620118_1920.jpg"
              className="hero-placeholder-image10 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image2Alt}
              src="/slider-asstes/technology-1283624_1280.jpg"
              className="hero-placeholder-image11 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image3Alt}
              src="/slider-asstes/source-4280758_1280.jpg"
              className="hero-placeholder-image12 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image4Alt}
              src="/slider-asstes/engineer-4904884_1280.jpg"
              className="hero-placeholder-image13 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image5Alt}
              src="/slider-asstes/manhattan-3866140_1280.jpg"
              className="hero-placeholder-image14 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image6Alt}
              src="/slider-asstes/ai-generated-8237711_1280.jpg"
              className="hero-placeholder-image15 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
          <div className="thq-animated-group-horizontal">
          <img
              alt={props.image1Alt}
              src="/slider-asstes/laptop-2620118_1920.jpg"
              className="hero-placeholder-image10 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image2Alt}
              src="/slider-asstes/technology-1283624_1280.jpg"
              className="hero-placeholder-image11 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image3Alt}
              src="/slider-asstes/source-4280758_1280.jpg"
              className="hero-placeholder-image12 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image4Alt}
              src="/slider-asstes/engineer-4904884_1280.jpg"
              className="hero-placeholder-image13 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image5Alt}
              src="/slider-asstes/manhattan-3866140_1280.jpg"
              className="hero-placeholder-image14 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image6Alt}
              src="/slider-asstes/ai-generated-8237711_1280.jpg"
              className="hero-placeholder-image15 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
        </div>
        <div className="hero-row-container2 thq-animated-group-container-horizontal thq-mask-image-horizontal">
          <div className="thq-animated-group-horizontal-reverse">
          <img
              alt={props.image1Alt}
              src="/slider-asstes/laptop-2620118_1920.jpg"
              className="hero-placeholder-image10 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image2Alt}
              src="/slider-asstes/technology-1283624_1280.jpg"
              className="hero-placeholder-image11 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image3Alt}
              src="/slider-asstes/source-4280758_1280.jpg"
              className="hero-placeholder-image12 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image4Alt}
              src="/slider-asstes/engineer-4904884_1280.jpg"
              className="hero-placeholder-image13 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image5Alt}
              src="/slider-asstes/manhattan-3866140_1280.jpg"
              className="hero-placeholder-image14 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image6Alt}
              src="/slider-asstes/ai-generated-8237711_1280.jpg"
              className="hero-placeholder-image15 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
          <div className="thq-animated-group-horizontal-reverse">
          <img
              alt={props.image1Alt}
              src="/slider-asstes/laptop-2620118_1920.jpg"
              className="hero-placeholder-image10 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image2Alt}
              src="/slider-asstes/technology-1283624_1280.jpg"
              className="hero-placeholder-image11 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image3Alt}
              src="/slider-asstes/source-4280758_1280.jpg"
              className="hero-placeholder-image12 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image4Alt}
              src="/slider-asstes/engineer-4904884_1280.jpg"
              className="hero-placeholder-image13 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image5Alt}
              src="/slider-asstes/manhattan-3866140_1280.jpg"
              className="hero-placeholder-image14 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image6Alt}
              src="/slider-asstes/ai-generated-8237711_1280.jpg"
              className="hero-placeholder-image15 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="hero-container2">
          <Script
            html={`<style>
  @keyframes scroll-x {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - 16px));
    }
  }jpg

  @keyframes scroll-y {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(calc(-100% - 16px));
    }
  }
</style>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

Hero.defaultProps = {
  image3Src:
    'src/slider-asstes/img3 slider.jpg',
  image8Alt: 'Career Advancement Opportunities',
  image2Src:
    'https://images.unsplash.com/photo-1581087707831-3c75b83a46ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNzcwMzkyNHw&ixlib=rb-4.0.3&q=80&w=1080',
  image6Alt: 'Flexible Schedule Options',
  image11Src:
    'https://images.unsplash.com/photo-1576086213369-97a306d36557?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNzcwMzkyNHw&ixlib=rb-4.0.3&q=80&w=1080',
  image5Alt: 'Certification Upon Completion',
  image1Alt: 'Software Testing Courses',
  image7Src:
    'https://images.unsplash.com/photo-1619708034906-df5e011f2e13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNzcwMzkyNXw&ixlib=rb-4.0.3&q=80&w=1080',
  image7Alt: 'Community Support',
  image12Alt: 'Continuous Learning',
  image2Alt: 'Online Learning Platform',
  image6Src:
    'https://images.unsplash.com/photo-1581092579364-7a6468cb161e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNzcwMzkyNXw&ixlib=rb-4.0.3&q=80&w=1080',
  image12Src:
    'https://images.unsplash.com/photo-1509782642997-4befdc4b21c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNzcwMzkyNXw&ixlib=rb-4.0.3&q=80&w=1080',
  image3Alt: 'Expert Instructors',
  image9Src:
    'https://images.unsplash.com/photo-1582560469781-1965b9af903d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNzcwMzkyNXw&ixlib=rb-4.0.3&q=80&w=1080',
  image11Alt: 'Real-World Scenarios',
  action2: 'Enroll Now',
  action1: 'Explore Courses',
  image8Src:
    'https://images.unsplash.com/photo-1582560469781-1965b9af903d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNzcwMzkyNnw&ixlib=rb-4.0.3&q=80&w=1080',
  image5Src:
    'https://images.unsplash.com/photo-1581094275452-f5df25d2556e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNzcwMzkyNnw&ixlib=rb-4.0.3&q=80&w=1080',
  image4Src:
    'https://images.unsplash.com/photo-1619708034906-df5e011f2e13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNzcwMzkyNnw&ixlib=rb-4.0.3&q=80&w=1080',
  image10Alt: 'Hands-On Projects',
  image4Alt: 'Interactive Learning Experience',
  heading1: 'Master Software Testing with Our Online Academy',
  content1:
    'Take your software testing skills to the next level with our comprehensive courses designed to enhance your knowledge and expertise in the field.',
  image10Src:
    'https://images.unsplash.com/photo-1582719366767-dbbb6c6bf4aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNzcwMzkyNnw&ixlib=rb-4.0.3&q=80&w=1080',
  image9Alt: 'Mobile-Friendly Platform',
  image1Src:
    'https://images.unsplash.com/photo-1583911860071-a2638580e8f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczNzcwMzkyN3w&ixlib=rb-4.0.3&q=80&w=1080',
}

Hero.propTypes = {
  image3Src: PropTypes.string,
  image8Alt: PropTypes.string,
  image2Src: PropTypes.string,
  image6Alt: PropTypes.string,
  image11Src: PropTypes.string,
  image5Alt: PropTypes.string,
  image1Alt: PropTypes.string,
  image7Src: PropTypes.string,
  image7Alt: PropTypes.string,
  image12Alt: PropTypes.string,
  image2Alt: PropTypes.string,
  image6Src: PropTypes.string,
  image12Src: PropTypes.string,
  image3Alt: PropTypes.string,
  image9Src: PropTypes.string,
  image11Alt: PropTypes.string,
  action2: PropTypes.string,
  action1: PropTypes.string,
  image8Src: PropTypes.string,
  image5Src: PropTypes.string,
  image4Src: PropTypes.string,
  image10Alt: PropTypes.string,
  image4Alt: PropTypes.string,
  heading1: PropTypes.string,
  content1: PropTypes.string,
  image10Src: PropTypes.string,
  image9Alt: PropTypes.string,
  image1Src: PropTypes.string,
}

export default Hero
