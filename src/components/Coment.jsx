import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: black;
    width: 100%;
    gap: 20px;
    align-items: center;
`
const CommentElement = styled.div`
    display:flex;
    width: 100%;
    // border-top: 1px solid grey;
    border-bottom: 1px solid grey;
    min-height: 70px;
    align-items: center;
    padding-left: 30px;
    font-size: 25px;
`

const Coment = ({coments}) => {

    if(coments.length < 1) {
        // console.log(coments);
        return <h1 style={{textAlign : "center"}}>No coments</h1>
    }
    
    return (
        <Container>
                {coments.map(coment => {
                    return <CommentElement key= {coment._id}>
                                <p>{coment.content}</p>
                            </CommentElement>
                })}
        </Container>
    )
}

export default Coment
