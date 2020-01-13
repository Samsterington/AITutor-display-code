import * as React from 'react';
import styled from 'styled-components';

import { Quotes, Top, VisualDescriptionCard } from '../molecules';
import { Header } from '../organisms';
import colors from '../themes/colors';

const Page = styled.div`
  display: grid;
  flex-direction: column;
  align-items: space-between;
  text-align: center;
`;
const Animate = styled.div<{ animate: boolean }>`
  display: grid;
  transition: opacity linear 0.8s, transform 0.6s ease-in-out;
  opacity: ${props => (props.animate ? 1 : 0)};
  transform: ${props => (props.animate ? 'translateY(0px)' : 'translateY(30px)')};
  height: 100%;
  align-self: center;
  justify-content: center;
  padding: 5em 0em;
`;

const ColorCard = styled.div<{ type: number }>`
  background-color: ${props => {
    switch (props.type) {
      case 0:
        return colors.WHITE;
      case 1:
        return colors.BLUE;
      case 2:
        return colors.WHITE;
      case 3:
        return colors.PINK;
      case 4:
        return colors.WHITE;
      default:
        return colors.WHITE;
    }
  }};
`;

const visualCardContent = [
  {
    image: 'https://d2aanklr8wrdtr.cloudfront.net/vennDiagram.png',
    text: `AITutor can generate an infinite amount of A - Level Pure, Stats and Mechanics questions from the new syllabus. You will have a bank of exam style questions molded by our expert maths graduates so that you can practise until you can do every part of the syllabus, with CONFIDENCE.`,
    title: 'Infinite Questions',
  },
  {
    image: 'https://d2aanklr8wrdtr.cloudfront.net/proofQuestion2.png',
    text: `Every single question has a detailed, easy to follow explanation. We believe that whenever you get something wrong you should know the correct answer immediately and not have to wait until school time.`,
    title: 'Detailed Explanations',
  },
  {
    image: 'https://d2aanklr8wrdtr.cloudfront.net/video.png',
    text: `We want to make sure that any student can start using our site, no matter their currently ability. We have created hundreds of video explanations going through the fundamentals and common tricky questions of every topic.`,
    title: 'Granular Video Tutorials',
  },
  {
    image: 'https://d2aanklr8wrdtr.cloudfront.net/hypothesis.png',
    text: `All of your session performance will be recorded and a profile of your
    strengths and weaknesses will be built up over time in the dashboard.
    This will be crucial when deciding the best thing to revise, and will
    be how we give you your personalised learning path.`,
    title: 'Smart and Intuitive Dashboard',
  },
  {
    image: 'https://d2aanklr8wrdtr.cloudfront.net/examroom.png',
    text: `We believe that the most efficient way to revise A-Level Maths is through past papers. That’s why we have an infinite amount of them. We even automatically mark and track your progress while also analysing your exam technique. We can tell you how long you spent on each question, and your marks per minute ratio. It's the little things which change an A into an A*.`,
    title: 'Infinite past papers',
  },
];

interface StateTypes {
  parts: boolean[];
}

class Homepage extends React.Component<{}, StateTypes> {
  public state = {
    parts: [false, false, false, false, false, false],
  };
  public componentDidMount() {
    window.scrollTo(0, 0);
    window.addEventListener('scroll', this.handleScroll);
  }

  public componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  public setAnimate = (position: number) => {
    this.setState({
      parts: this.state.parts.map((val, i) => (i === position ? true : val)),
    });
  };
  public handleScroll = () => {
    if (window.pageYOffset) {
      if (window.pageYOffset > 200) {
        this.setAnimate(0);
      }
      if (window.pageYOffset > 1000) {
        this.setAnimate(1);
      }
      if (window.pageYOffset > 1800) {
        this.setAnimate(2);
      }
      if (window.pageYOffset > 2600) {
        this.setAnimate(3);
      }
      if (window.pageYOffset > 3400) {
        this.setAnimate(4);
      }
      if (window.pageYOffset > 4200) {
        this.setAnimate(5);
      }
      // makes sure you dont see blank boxes if the conditions fail
    } else {
      this.setState({
        parts: [true, true, true, true, true, true],
      });
    }
  };

  public render() {
    return (
      <Page onScroll={this.handleScroll}>
        <Header sticky />
        <Top />
        {visualCardContent.map((content, index) => (
          <ColorCard key={content.title} type={index}>
            <Animate animate={this.state.parts[index]}>
              <VisualDescriptionCard {...content} imageLeft={index % 2 === 0} color={index} />
            </Animate>
          </ColorCard>
        ))}
        <Quotes />
      </Page>
    );
  }
}

export default Homepage;
