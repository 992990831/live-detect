import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, useNavigate } from "react-router-dom";
import Home from './Pages/Home';
import { Success } from './Pages/Success';
import { Fail } from './Pages/Fail';
import { PicLive } from './Pages/PicLive';
import { VideoLive } from './Pages/VideoLive';

// const BtnGoBack = () => {
//   const navigate = useNavigate();

//   return <Button icon={Icons.close} onClick={()=>{
//       navigate('/pwa');            
//   }}  className='btn-back' style={{position:'absolute'}}>返回
//   </Button>
// }

// const withGoBack = (element: ReactElement): ReactElement => {
//   return <>
//           {element}
//           <BtnGoBack></BtnGoBack>
//   </>
// }

function App() {
  return (
    <Router>        
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/success" element={<Success></Success>} />
          <Route path="/fail" element={<Fail></Fail>} />
          <Route path="/piclive" element={<PicLive></PicLive>} />
          <Route path="/videoLive" element={<VideoLive></VideoLive>} />
          {/* <Route path="/pwa/exterior" element={withGoBack(<Exterior></Exterior>)} />
          <Route path="/pwa/inner" element={withGoBack(<Interior></Interior>)} />
          <Route path="/pwa/:key" element={<TileGroup></TileGroup>} />
          <Route path="/pwa/:key/detail" element={<TileDetail></TileDetail>} />
          <Route path="/pwa/calc/charge" element={<Charging></Charging>} />
          <Route path="/pwa/calc/range" element={<Range></Range>} /> */}
          {/* <Route path="/pwa/exterior" element={<Exterior></Exterior>} />
          <Route path="/pwa/interior" element={<Interior></Interior>} />
          <Route path="/pwa/exterior/:id" element={<TileGroup></TileGroup>} />
          <Route path="/pwa/interior/:id" element={<TileGroup></TileGroup>} /> */}
          {/* <Route path="/pwa/range" element={<Range></Range>} />
          <Route path="/pwa/charging" element={<Charging></Charging>} /> */}
          {/* <Route path="*" element={<Exterior></Exterior>} /> */}
        </Routes>
    </Router>

  );
}

export default App;
