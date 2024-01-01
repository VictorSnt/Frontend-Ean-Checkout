import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

const FooterContainer = styled.div`

    
    color: white;
    width: auto;
    height: 50px;
    text-align: center;
   
    

`
const SocialContainer = styled.div`
    width: 300px;
    margin: auto;

`

const SocialHyperLink = styled.a`

    background: linear-gradient(to right, rgb(138, 43, 226), rgb(0, 153, 255)); 
    -webkit-background-clip: text;
    color: transparent;
    margin: 10px;

`

export const Footer = () => {
    return(

        <FooterContainer>

            <SocialContainer>

            <SocialHyperLink className='social' href="#">
                <FontAwesomeIcon icon={faInstagram} />
            </SocialHyperLink>

            <SocialHyperLink className='social' href="#">
                <FontAwesomeIcon icon={faFacebook} />
            </SocialHyperLink>

            <SocialHyperLink className='social' href="#">
                <FontAwesomeIcon icon={faTwitter} />
            </SocialHyperLink>
                
            </SocialContainer>
            
        </FooterContainer>
    )
}