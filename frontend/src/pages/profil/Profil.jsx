import styled from 'styled-components'
import LeftComponent from '../../components/LeftComponent'

import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';

const Container = styled.div`
    display: flex;
    height: 100vh;
    background-color: black;
    color: #fff;
`
const Center = styled.div`
    flex: 2;
`
const Header = styled.div`
    position: fixed;
    width: 50%;
    height: 45px;
    background-color: rgba(0,0,0,0.6);
    padding: 0 20px;
    display: flex;
    align-items: center;
`
const ProfilBackGround = styled.div`
    width: 100%;
    background: grey;
    height: 200px;
    margin-top: 45px;
`
const EditProfil = styled.div`
    width: 100%;
    height: 200px;
    background-color: black;
`
const Modification = styled.div`
    display: flex;
    position: relative;
    justify-content: flex-end;
`
const UserNameBtn = styled.div`
    width: 135px;
    height: 135px;
    border-radius:50%;
    position: absolute;
    background-color: rgb(201, 116, 116);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 6em;
    z-index: 3;
    top: -100%;
    left: 20px;
    cursor: pointer;
    &:hover {
        background-color: rgba(201, 116, 116, 0.9);
    }
`
const EditBtn = styled.button`
    color: #ffff;
    border: 2px solid #ffff;
    height: 36px;
    margin: 20px;
    padding: 0 10px;
    border-radius: 20px;
    cursor: pointer;
    font-weight: bold;
    background-color: rgb(0, 0, 0);
`
const UserInformation = styled.div`
    padding-left: 20px;
    padding-bottom: 8px;

`
const Joined = styled.div`
    display: flex;
    margin-bottom: 8px;
    gap: 10px;
    color: grey;
`
const Follow = styled.div`
    display: flex;
    gap: 10px;
    color: grey;
`
const Right = styled.div`
    flex: 1;
    background : yellow;
`
const Profil = () => {
    return (
        <Container>
            <LeftComponent/>
            <Center>
                <Header>
                    <ArrowBackOutlinedIcon style= {{ fontSize: "30px", cursor: "pointer"}}/>
                </Header>
                <ProfilBackGround></ProfilBackGround>
                <EditProfil>
                    <Modification>
                        <UserNameBtn>K</UserNameBtn>
                        <EditBtn>Edit Profil</EditBtn>
                    </Modification>
                    <UserInformation>
                        <h2>Karimou cisse</h2>
                        <p style={{marginBottom: "10px", color: "grey"}}>@karimoucisse2</p>
                        <Joined>
                            <DateRangeOutlinedIcon/>
                            <p>joinded January 2022</p>
                        </Joined>
                        <Follow>
                            <p><strong>6</strong>Following</p>
                            <p><strong>1</strong>Follower</p>
                        </Follow>
                    </UserInformation>
                </EditProfil>
            </Center>
            <Right/>

        </Container>
    )
}

export default Profil
