import styled from 'styled-components';
import AutoComplete from './AutoComplete';
import Button from './Button';

const Form = () => {
    const onSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <StyledForm onSubmit={onSubmit}>
            <AutoComplete>
                <Button styled="principal" submit name="Enviar" />
            </AutoComplete>
        </StyledForm>
    );
};

const StyledForm = styled.form``;

export default Form;
