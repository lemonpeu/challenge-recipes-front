import styled from 'styled-components';
import Input from './Input';
import Button from './Button';
import Box from './styled/Box';

const Form = ({ onSubmit, label, name, btnName, defaultValue, onClearSearch, isSecondaryBtn }) => {
    return (
        <StyledForm onSubmit={onSubmit}>
            <Input defaultValue={defaultValue} label={label} forInput={name} name={name} />
            <Box display justifyContent>
                <Button styled="principal" submit btnName={btnName} m={0.5} />
                {isSecondaryBtn && (
                    <Button styled="secondary" onClick={onClearSearch} btnName="Delete" m={0.5} />
                )}
            </Box>
        </StyledForm>
    );
};

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default Form;
