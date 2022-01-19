import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: black;
    width: 335px;
`
const TweetUser = styled.div`
    height: 300px;

`
const Comment = () => {
    return (
        <Container>
            <TweetUser>

            </TweetUser>
            
        </Container>
    )
}

export default Comment
