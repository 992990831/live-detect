import { Button, Space } from 'antd-mobile';
import { BrowserRouter as Router, Route, Link, Routes, useNavigate } from "react-router-dom";
import '../App.css';
import logo from '../assets/images/Logo-vertical.png';

function Home() {
    const navigate = useNavigate();

    const gotoSoundLive = ()=> {
      navigate('/success');
    };

    const gotoVideoLive = ()=> {
      navigate('/videolive');
    };

    const gotoPicLive = ()=> {
      navigate('/piclive');
    };

    return (
      <>
        <img src={logo} alt="" className="logo" />
        <Space wrap block style={{ '--gap-vertical': '24px' }} align='center' justify='center' direction='vertical' className='button-list'>
          
          <Button block color='primary' size='large' onClick={gotoVideoLive} style={{width:'70vw'}}>
          &nbsp;&nbsp;&nbsp;&nbsp;视频活体检测&nbsp;&nbsp;&nbsp;&nbsp;
          </Button>
          {/* <Button block color='primary' size='large' onClick={gotoPicLive}>
          &nbsp;&nbsp;&nbsp;&nbsp;图片活体检测&nbsp;&nbsp;&nbsp;&nbsp;
          </Button> */}
        </Space>    
      </>
  
    );
  }
  
  export default Home;