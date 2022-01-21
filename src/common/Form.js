import styled from 'styled-components';
import Input from './Input';
import Button from './Button';

const Form = ({ onSubmit, label, name, btnName, defaultValue, onClick, isSecondaryBtn }) => {
    return (
        <StyledForm onSubmit={onSubmit}>
            <Input defaultValue={defaultValue} label={label} forInput={name} name={name} />
            <Button styled="principal" submit btnName={btnName} />
            {isSecondaryBtn && (
                <Button styled="secondary" m={1} onClick={onClick} btnName="Delete" />
            )}
        </StyledForm>
    );
};

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default Form;
