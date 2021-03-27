import { useAuthState } from 'react-firebase-hooks/auth';
import styled from 'styled-components';
import { auth } from '../firebase';

function Message({ user, message }) {
    const [userLoggedIn] = useAuthState(auth);



    return (
        <Container>
            <p>{message.message}</p>
        </Container>
    );
}

export default Message;

const Container = styled.div`

    `;

const MessageElement = styled.p`
        width: fit-content;
        padding: 15px;
        border-radius: 8px;
        margin: 10px;
        min-width: 60px;
        padding-bottom: 26px;
        position: relative;
        text-align: right;
    `;