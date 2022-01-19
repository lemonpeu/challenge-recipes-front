import styled from 'styled-components';
import Image from '../../common/Image';

const Header = ({ title, description }) => {
    return (
        <StyledHeader>
            <Image
                src="https://i.pinimg.com/564x/b1/0c/56/b10c56c494df5267df0794eee5205b45.jpg"
                alt=""
                padding
            />
            <h1 className="title">{title}</h1>
            <h2>{description}</h2>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
        text-align: center;
    }
`;

export default Header;
