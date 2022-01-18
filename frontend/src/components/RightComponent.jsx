import styled from 'styled-components'

import SearchIcon from '@mui/icons-material/Search';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const Container = styled.div`
    flex: 1.2;
    background-color: black;
    color: rgb(102, 101, 101);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    overflow-y: scroll;
`
const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
    width: 100%;
`
const Search = styled.div`
    background-color: #202327;
    display: flex;
    align-items: center;
    gap: 10px;
    // padding: 10px 40px;
    border-radius: 20px;
    width: 80%;
    height: 50px;
    padding-left: 20px;
`
const Input = styled.input`
    background-color: inherit;
    border: none;
    outline: none;
    font-size: 16px;
    color: #ffff;
`
const MightLike = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    align-items: center;
    background-color: #202327;
    border-radius: 20px;
    width: 80%;
    padding: 20px 0px;
`
const Title = styled.h2`
    color: #ffff;
    font-size: 23px;
`
const MightLikeContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;
`
const Image = styled.img`
    height: 48px;
    width: 48px;
    border-radius: 50%;
`
const UserName = styled.h3`
    color: #ffff;
`
const Paragraph = styled.p`
    color: grey;
`
const TrendName = styled.div`
    color: #ffff;
    font-size : 18px;
`
const FollowBtn = styled.button`
    padding: 0 15px;
    border-radius: 20px;
`
const Trend = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    background-color: #202327;
    border-radius: 20px;
    gap: 20px;
    padding: 15px;
`
const TrendHeader = styled.div`
    display: flex;
    gap: 80px;
    align-items: center;
    margin-bottom: 15px;
`
const TrendContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-left: 20px;

`
const RightComponent = () => {
    return (
        <Container>
            <Header>
                <Search>
                    <SearchIcon style={{cursor: "pointer", fontSize: "20px"}}/>
                    <Input type="text" placeholder='Search Twitter'/>
                </Search>
            </Header>
            <MightLike>
                <Title>you might like</Title>
                <MightLikeContainer>
                    <Image src="https://pbs.twimg.com/profile_images/1153755390863204352/G_0w-e3h_400x400.jpg" alt="crypto" />
                    <div>
                        <UserName>Cryptoa...</UserName>
                        <Paragraph>@CryptoastBlog</Paragraph>
                    </div>
                    <FollowBtn>Follow</FollowBtn>
                </MightLikeContainer>
                <MightLikeContainer>
                    <Image src="https://pbs.twimg.com/profile_images/1430879040156667904/NlbJjd-l_400x400.png" alt="coin" />
                    <div>
                        <UserName>CoinDesk</UserName>
                        <Paragraph>@EoinDesk</Paragraph>
                    </div>
                    <FollowBtn>Follow</FollowBtn>
                </MightLikeContainer>
                <MightLikeContainer>
                    <Image src="https://pbs.twimg.com/profile_images/1458455260868104201/B8BwdGje_400x400.jpg" alt="elon musk" />
                    <div>
                        <UserName>Elon Musk</UserName>
                        <Paragraph>@ElonMusk</Paragraph>
                    </div>
                    <FollowBtn>Follow</FollowBtn>
                </MightLikeContainer>
            </MightLike>
            <Trend>
                <TrendHeader>
                    <Title>Trends for you</Title>
                    <SettingsOutlinedIcon/>
                </TrendHeader>
                <TrendContainer>
                    <div>
                        <Paragraph>Trending in france</Paragraph>
                        <TrendName>#NTFCommunity</TrendName>
                    </div>
                    <Paragraph>133K Tweets</Paragraph>
                </TrendContainer>
                <TrendContainer>
                    <div>
                        <Paragraph>Trending in france</Paragraph>
                        <TrendName>Gane</TrendName>
                    </div>
                    <Paragraph>45.3K Tweets</Paragraph>
                </TrendContainer>
                <TrendContainer>
                    <div>
                        <Paragraph>Politics Trending</Paragraph>
                        <TrendName>Simone Veil</TrendName>
                    </div>
                    <Paragraph>3.557 Tweets</Paragraph>
                </TrendContainer>
                <TrendContainer>
                    <div>
                        <Paragraph>Football trending</Paragraph>
                        <TrendName>Tagliafico</TrendName>
                    </div>
                    <Paragraph>1.953K Tweets</Paragraph>
                </TrendContainer>
                <TrendContainer>
                    <div>
                        <Paragraph>Trending in france</Paragraph>
                        <TrendName>Tilted</TrendName>
                    </div>
                    <Paragraph>2.025K Tweets</Paragraph>
                </TrendContainer>
            </Trend>
            
        </Container>
    )
}

export default RightComponent
