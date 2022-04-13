import { Search } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 60px;
`;
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`;
const Left = styled.div`
    flex: 1;
    cursor: poiter;
`;

const SearchContainer = styled.div`
    border: 1px solid lightgray;
`;

const Language = styled.span`
    font-size:  14px;
`;
 
const Center = styled.div`
    flex: 1;
`;

const Right = styled.div`
    flex: 1;
`;

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>   
                        input
                        <Search/>
                    </SearchContainer>
                </Left>
                <Center>Center <i className="fa-solid fa-magnifying-glass"></i></Center>
                <Right>Right <i className="fa-solid fa-address-book"></i></Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar;