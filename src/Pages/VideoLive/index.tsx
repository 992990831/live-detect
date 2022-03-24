import React, { useRef, useState } from 'react';
import { Button, Space, Mask, DotLoading } from 'antd-mobile';
import { BrowserRouter as Router, Route, Link, Routes, useNavigate } from "react-router-dom";
import { GetSessionCode, VideoVerify } from '../../Util/Util';
import logo from '../../assets/images/user-record.png';
import './index.css';

const token = '24.8b5d9f9d25257ac79bdc93b47b65f256.2592000.1650612168.282335-25828496';

export const VideoLive = () => {
    const camRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const onCameraClick = () => {
        camRef.current && (camRef.current as HTMLInputElement).click();
    }

    const goMenu = () => {
        navigate('/');
    }

    const fileChange = (ev: any) => {
        var video = ev.target.files[0];  //选择的文件
        //https://blog.csdn.net/ligongke513/article/details/116231794
        //转换文件格式
        //var file = new File([video], 'temp.mp4',{type: 'video/mp4;codecs=h264;acodec=aac'});
        let reader = new FileReader();

        reader.readAsDataURL(video);
        // reader.readAsArrayBuffer(img)

        reader.onload = function (e: any) {
            setLoading(true);

            var dataBase64 = e.target.result; //result是你读取到的文件内容，此属性读取完成才能使用
            console.log(encodeURIComponent(dataBase64.split(',')[1]));

            if (dataBase64) {
                GetSessionCode(token).then((sessionCode) => {
                    //视频的base64编码是不包含视频头的，如 data:video/mp4;base64,；
                    //setVideoStr(dataBase64.substring(45));
                    //VideoVerify(token, sessionCode, encodeURI(dataBase64.substring(45)));
                    VideoVerify(token, sessionCode, encodeURIComponent(dataBase64.split(',')[1]))
                        .then((score) => {

                            if(score >= 0.3)
                            {
                                navigate('/success');
                            }
                            else{
                                navigate('/fail');
                            }

                            setLoading(false);
                        });
                });
            }
        }
    }

    return (
        <>
            <img src={logo} alt="" className="logo" />
            <ul style={{   
                left: '22vw',
                top: '5vh',
                position: 'relative',
                fontSize: '1rem',
                color: 'cornflowerblue',
                fontWeight: 'bold',
                lineHeight: '1.8rem'}}>
                <li>环境安静，光线充足</li>
                <li>面部清晰完整</li>
                <li>拍摄2-4秒</li>
            </ul>
            <Space wrap block style={{ '--gap-vertical': '12px', marginTop: '10vh' }} align='center' justify='center' direction='vertical'>
                <Button block color='primary' size='large' onClick={onCameraClick}>
                    &nbsp;&nbsp;&nbsp;&nbsp;点击拍摄视频&nbsp;&nbsp;&nbsp;&nbsp;
                </Button>
                <input type='file' id='videoLive' accept='video/*' capture='user' onChange={fileChange}
                    style={{ display: 'none' }} ref={camRef} />
                <Button block color='primary' size='large' onClick={goMenu}>
                    &nbsp;&nbsp;&nbsp;&nbsp;返回上级菜单&nbsp;&nbsp;&nbsp;&nbsp;
                </Button>
            </Space>

            {/* <Mask visible={loading} onMaskClick={() => setLoading(false)} /> */}
            <Mask visible={loading}>
                <DotLoading color='springgreen' style={{
                    position: 'fixed',
                    top: '50%',
                    left: '27%',
                    textAlign: 'center',
                    fontSize: 'xxx-large'
                }} />
            </Mask>
        </>
    )
}