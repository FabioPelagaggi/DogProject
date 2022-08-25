import Image from 'next/image';
import PetHero from '../../assets/images/pet-hero.png';
import PrimaryButton from "../PrimaryButton";
import {
  BoxNumbers,
  HeroSection, HeroContent, HeroH1,
  HeroP, HeroSpan, ImageContainer, HeroContainer, BoxContainer, NumBox, TextBox, Divider
} from "./style";

import { Heart } from "phosphor-react";

export default function Hero() {
  return (
    <HeroSection>
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

        <BoxNumbers>
          <BoxContainer>
            <NumBox>
              +1.500
            </NumBox>
            <TextBox>
              Animais resgatados
            </TextBox>
          </BoxContainer>

          <Divider />

          <BoxContainer>
            <NumBox>
              +1.200
            </NumBox>
            <TextBox>
              Animais adotados
            </TextBox>
          </BoxContainer>

          <Divider />
          
          <BoxContainer>
            <NumBox>
              +10
            </NumBox>
            <TextBox>
              Anos salvando vidas
            </TextBox>
          </BoxContainer>
        </BoxNumbers>
      </HeroContainer>

    </HeroSection>
  )
}
