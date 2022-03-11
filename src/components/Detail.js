import React from 'react';
import styled from 'styled-components';

function Detail() {
  return (
    <Container>
      <Background>
        <img
          src='https://image.tmdb.org/t/p/w1280/abnNjK3COZHZ4JQmzRbWhiWLum3.jpg'
          alt=''
        ></img>
      </Background>
      <ImageTitle>
        <img src='\images\pngwing.com.png' alt=''></img>
      </ImageTitle>

      <Controls>
        <PlayButton>
          <img src='/images/play-icon-black.png' alt=''></img>
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src='/images/play-icon-white.png' alt=''></img>
          <span>TRAILER</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src='/images/group-icon.png' alt=''></img>
        </GroupWatchButton>
      </Controls>

      <SubTitle>The Wonderful Winter of Mickey Mouse</SubTitle>
      <Description>
        La maravilla de la estación invernal lleva a Mickey Mouse y a sus amigos
        en un viaje a través de tres historias mágicas.
      </Description>
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  positicon: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  height: 30vh;
  min-height: 170px;
  width: 35vw;
  margin: 30px 0px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;
const PlayButton = styled.button`
  display: flex;
  align-items: center;
  border-radius: 4px;
  font-size: 15px;
  height: 56px;
  background: rgb(249, 249, 249);
  border: none;
  padding: 0px 24px;
  margin-right: 22px;
  letter-spacing: 1.8px;
  cursor: pointer;

  &:hover {
    background: rgb(198, 198, 198);
  }

  span {
    color: black;
  }
`;

const TrailerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);

  span {
    color: white;
  }
`;
const AddButton = styled.button`
margin-right: 16px;
  width: 44px;
  height: 44px;
  display flex;
  align-items: center;
  justify-content:center;
  border-radius: 50%;
  border: 2px solid white;
  background-color: rgba(0,0,0,0.6);
  cursor: pointer;

  span{
    font-size: 30px;
    color: white;
    
  }
`;
const GroupWatchButton = styled(AddButton)`
  background-color: rgba(0, 0, 0, 1);
`;

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`;
const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249, 249, 249);
  max-width: 700px;
`;
