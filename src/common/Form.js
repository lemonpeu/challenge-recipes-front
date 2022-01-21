import styled from 'styled-components';
import Input from './Input';
import Button from './Button';

const Form = ({ onSubmit, label, name, btnName, defaultValue, onClick }) => {
    return (
        <StyledForm onSubmit={onSubmit}>
            <Input defaultValue={defaultValue} label={label} forInput={name} name={name} />
            <Button styled="principal" submit btnName={btnName} />
            <Button styled="secondary" m={1} onClick={onClick} name="See all" />
        </StyledForm>
    );
};

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default Form;
