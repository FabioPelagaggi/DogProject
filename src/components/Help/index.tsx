import Image from 'next/image';
import Cat01 from '../../assets/images/cat01.png';
import Dog01 from '../../assets/images/dog01.png';
import Dog02 from '../../assets/images/dog02.png';

import { HelpSection, HelpText, HelpTextTitle, HelpTypeDescription, HelpTypes, HelpTextDescription, HelpTypeTitle, HelpTypeBoxGray, HelpTypeBoxGreen, DonationButton, TextButton, PatreonButton, AdoptButton } from './style';

export default function Help() {
    return (
      <HelpSection id='help'>

        <HelpText>
            <HelpTextTitle>
                Como nos ajudar?
            </HelpTextTitle>
            <HelpTextDescription>
                Toda ajuda conta e faz muita diferença!
            </HelpTextDescription>
        </HelpText>

        <HelpTypes>
            <HelpTypeBoxGray>
                <Image src={Dog02} alt={'Doar'} />
                <HelpTypeTitle>
                    Faça Uma Doação
                </HelpTypeTitle>
                <HelpTypeDescription>
                    Ajude a manter o nosso trabalho
                </HelpTypeDescription>
                <DonationButton>
                    <TextButton>Doar</TextButton>
                </DonationButton>
            </HelpTypeBoxGray>
            <HelpTypeBoxGreen>
                <Image src={Cat01} alt={'Apadrinhar'} />
                <HelpTypeTitle>
                    Apadrinhe Um Pet
                </HelpTypeTitle>
                <HelpTypeDescription>
                    Custeie os cuidados de um animal
                </HelpTypeDescription>
                <PatreonButton>
                    <TextButton>Apadrinhar</TextButton>
                </PatreonButton>
            </HelpTypeBoxGreen>
            <HelpTypeBoxGray>
                <Image src={Dog01} alt={'Adotar'} />
                <HelpTypeTitle>
                    Que Tal Adotar?
                </HelpTypeTitle>
                <HelpTypeDescription>
                    Candidate-se para adoção responsável!
                </HelpTypeDescription>
                <AdoptButton>
                    <TextButton>Adotar</TextButton>
                </AdoptButton>
            </HelpTypeBoxGray>
        </HelpTypes>
        
      </HelpSection>
    )
}