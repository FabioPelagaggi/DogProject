import Image from 'next/image';
import PetHero from '../../assets/images/pet-hero.png';
import PrimaryButton from "../PrimaryButton";
import { HeroContainer, HeroContent, HeroH1, HeroP, HeroSpan, ImageContainer } from "./style";

import { Heart } from "phosphor-react";

export default function Hero() {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroSpan>Boas-Vindas 👋 </HeroSpan>
        <HeroH1>Aqui nós lutamos por cada vida. Adote!</HeroH1>
        <HeroP>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra tellus ac sit in scelerisque aliquam sapien in mattis.
        </HeroP>
        <PrimaryButton
          icon={<Heart size={20} weight={'bold'} />}
          text={'Faça sua doação'}
        />
      </HeroContent>
      <ImageContainer>
        <Image
          src={PetHero}
          alt={'Dog'}
        />
      </ImageContainer>
    </HeroContainer>
  )
}
