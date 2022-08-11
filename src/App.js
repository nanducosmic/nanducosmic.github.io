import './App.css';
import Spline from '@splinetool/react-spline';
import styled from "styled-components";
import Iconlaptop from './images/icon-laptop.svg';
import IcronTwitte from './images/icon-twitter.svg';
import IconYoutube from './images/icon-youtube.svg';
function App() {
  return (
    <div className="App">
  <Wrapper>
          <Spline className="spline" scene="https://prod.spline.design/fIjps2e1uO2Rp-av/scene.splinecode" />
  <Content>
    <Menu>
      <li><a href="/">Home</a> </li>
      <li><a href="/">About</a> </li>
      <li><a href="/">Download</a> </li>
      
    </Menu>
    <h1>Royal Magneto</h1>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  <button><img src={Iconlaptop} alt="Download"/>Download for Android</button>
  
  
  </Content>
  <Social>
    <div/>
    <img src={IcronTwitte} alt="twitter"/>
    <img src={IconYoutube} alt="youtube"/>

  </Social>
  </Wrapper>
    </div>
  );
}
const Wrapper =styled.div`
font-family:sans-serif;
font-size:16px;
color:white;
position:relative;

.spline{
  position: absolute;
  margin:0;
  top:0;
  right:0;


  @media(max-width:1024px){
    transform:scale(0.8) translateX(200px);
  }
  @media(max-width:800px){
    transform:scale(0.7) translateX(600px);
  }
  @media(max-width:600px){
    transform:scale(0.5) translateX(-100px);
    right:auto;
    left:50%;
    margin-left:-600px;
    
  }
   @media (max-width:599px){ 
     transform:scale(0.3) translateX(-300px); 
    
     right:auto;
     left:-20%;
     margin-left:-100px;

    

}  
`;
const Content=styled.div`  
position:absolute;
top:30px;

display:flex;
flex-direction:column;
gap:80px;


h1{
  font-family:monospace;
  font-weight:bold;
  font-size:70px;
  margin:0;
  max-width:500px;


}
p{
  font-weight:normal;
  line-height:150%;
  max-width:380px;
   }
button{
  background: rgba(0,0,0,0.2);
  border:0px;
  font-size:16px;
  padding:12px 30px;
  border-radius:14px;
  border:1px solid rgba(255,255,255,0.1);
  color:white;
  max-width:280px;
  backdrop-filter:blur(20px);

  display:flex;
  gap:12px;
  justify-content:center;
  align-items:center;

  transition:1s;

  :hover{
    border:1px solid rgba(255,255,255,0.8);
    transform:translate(-3px);
  }
}
h1,p,button{
  margin:0 30px 0 100px;
}
 `;
 const Menu =styled.ul`
 display:flex;
 gap:30px;
 align-items:centre;
 margin: 0 30px 0 100px;
 padding:0;

 li{
  list-style: none;
  margin:0;

  a{
    text-decoration: none;
    color:white;
    padding:8px 20px;
    border:1px solid rgba(255,255,255,0);
    transition:1s;
    border-radius:14px;
    hover{
      border: 1px solid rgba(255,255,255,0.2);
    }

  }
 }

 `;

 const Social=styled.div`
 position:absolute;
 top:150 px;
 left:30 px;
 display:flex;
 flex-direction:column;
 gap:30px;
 align-items:center;

 div{
  width:1px;
  height:500px;
  background:linear-gradient(
    180deg,
    #08b6f9 0%,
    #6c56ef 33.5%,
    #1306dd 65.86%,
    #aa0eb2 100%
  );
}

 `;
export default App;
