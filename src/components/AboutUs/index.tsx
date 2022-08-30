import Image from 'next/image';
import PicAboutUs from '../../assets/images/pic-aboutUs.png';
import { AboutUsContainer, AboutUsContent, AboutUsH1, AboutUsImgBox, AboutUsP, AboutUsSection, AboutUsSpan } from './style';

export default function AboutUs() {
  return (
    <AboutUsSection id='aboutUs'>
      <AboutUsContainer>
        <AboutUsImgBox>
          <Image src={PicAboutUs} alt={'Rescue dog'} />
        </AboutUsImgBox>

        <AboutUsContent>
          <AboutUsSpan>Sobre nós</AboutUsSpan>
          <AboutUsH1>Entenda quem somos o que nos motiva</AboutUsH1>
          <AboutUsP>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
          </AboutUsP>
        </AboutUsContent>
      </AboutUsContainer>
    </AboutUsSection>
  )
}
