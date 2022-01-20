import styled from 'styled-components';
import Input from './Input';
import Button from './Button';

const Form = () => {
    const onSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <StyledForm onSubmit={onSubmit}>
            <Input label="Search recipes" forInput="search" name="search" />
            <Button styled="principal" submit name="Search" />
        </StyledForm>
    );
};

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default Form;
