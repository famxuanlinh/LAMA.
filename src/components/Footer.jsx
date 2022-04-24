import { CallOutlined, EmailOutlined, Facebook, Instagram, LocationOnOutlined, Pinterest, Twitter } from "@material-ui/icons"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
`

const Left = styled.div`
    flex: 1;
    padding: 20px;
`
const Logo = styled.h1`
    
`

const SocialContainer = styled.div`
    display: flex;

`

const SocialIcon = styled.div`
    cursor: pointer;
    width: 40px;
    height: 40px;
    color: white;
    border-radius: 50%;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`
const Desc = styled.p`
    margin: 20px 0;
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
`

const Title= styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    cursor: pointer;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
`
const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment = styled.img`
    
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>LAMA.</Logo>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores impedit reiciendis aliquam non numquam, laborum tenetur, porro dolore quae doloremque totam cumque dignissimos iusto accusamus! Odio voluptate temporibus soluta cupiditate.</Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999"><Facebook/></SocialIcon>
                    <SocialIcon color="E4405F"><Instagram/></SocialIcon>
                    <SocialIcon color="55ACEE"><Twitter/></SocialIcon>
                    <SocialIcon color="E60023"><Pinterest/></SocialIcon>

                </SocialContainer>
            </Left>
            <Center>
                <Title>Usefule Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem><LocationOnOutlined style={{marginRight:"10px"}}/>Binh Duong, Viet Nam</ContactItem>
                <ContactItem><CallOutlined style={{marginRight:"10px"}}/>+123456789</ContactItem>
                <ContactItem><EmailOutlined style={{marginRight:"10px"}}/>contact@lama.dev</ContactItem>
                <Payment src="https://i.ibb.com/Qfvn4z6/payment.png"/>
            </Right>
        </Container>
    )
}

export default Footer