import React from 'react'
import './card.css'

const Card = () => {
  return (
    <div className='cardConatiner'>
      <div className="topContainer">
        <h1 className="cardHeading">
            All India Senior Ranking Badminton
          </h1>
          <h1 className="cardHeading">
            Tournament
          </h1>
          <h3>Final</h3>
      </div>
        
        <div className="bottomContainer">
          <div className="left">
              <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/08f830ae-ce65-42f5-b243-b7a3f8a15b5f/crown.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221126T124659Z&X-Amz-Expires=86400&X-Amz-Signature=221dc9a2827cfe86900b1f8643c6d9206c8c9115e5d8723ef9fe8b176f99776b&X-Amz-SignedHeaders=host&x-id=GetObject" alt="" className="crown" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg" alt="" className="flag" />
              <h3 className="name">Kartikey Gulshan Kumar</h3>
          </div>
          <div className="mid">
              <h3>v/s</h3>
              <h3 className="score">9-21,21-10,21-15</h3>
              <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/da00ca61-beb4-4735-8ff8-f6cff8597fc3/logo_white.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221126T124921Z&X-Amz-Expires=86400&X-Amz-Signature=a4fee9ec439ce118acaad840126e7357258ed110c2a7e423dd27a5f3745f6d71&X-Amz-SignedHeaders=host&x-id=GetObject" alt="" className="logo" />
          </div>
          <div className="right">
            <img src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/08f830ae-ce65-42f5-b243-b7a3f8a15b5f/crown.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221126%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221126T124659Z&X-Amz-Expires=86400&X-Amz-Signature=221dc9a2827cfe86900b1f8643c6d9206c8c9115e5d8723ef9fe8b176f99776b&X-Amz-SignedHeaders=host&x-id=GetObject" alt="" className="crown" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg" alt="" className="flag" />
                <h3 className="name">Kartikey Gulshan Kumar</h3>
            </div>
        </div>
    </div>
  )
}

export default Card
