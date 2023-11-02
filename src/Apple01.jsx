import React, { useState } from "react";


const Apple01 = () => {

  let post = '강남 우동 맛집';
  let [logo, setLogo] = useState('ReactBlog');
  // let [글제목1, b1] = useState('남자 코트 추천'); // a : state에 보관했던 자료 // b : state 변경을 도와주는 함수, useState("초기값")
  // let [글제목2, b2] = useState('강남 우동 맛집');
  // let [글제목3, b3] = useState('파이썬 독학');
  let [글제목, b1] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬독학'])

  let num = [1, 2]; // array 자료
  // let a = num[0]; // num 변수 array 중 0번째 자료("1") 을 a변수에 할당
  // let c = num[1]; // num 변수 array 중 1번째 자료("2") 을 c변수에 할당
  let [a, c] = [1, 2]; // Destructuring 문법 a에 1 할당 c에 2 할당, 위 식과 같이 변수에 각 array 값을 할당하고 싶을 때 이런식으로도 할당할 수 있음
  let [따봉, 따봉변경] = useState(1);

    return (
    <div className="Apple01">
      <div className="black-nav">
        <h4 style={ {color: 'red', fontSize : '30px'} }>{ logo }</h4>
      </div>
      {/* useState를 각 리스트마다 생성해서 반영하는 방법zz */}
      {/* <div className="list">
      <h4>{ 글제목1 }</h4>
      <p>2월 17일 발행</p>
      </div>
      <div className="list">
      <h4>{ 글제목2 }</h4>
      <p>2월 17일 발행</p>
      </div>
      <div className="list">
      <h4>{ 글제목3 }</h4>
      <p>2월 17일 발행</p>
      </div> */}
{/* Array 방식으로 사용하는 방법 */}
      <div className="list">
        {/*onClick : 클릭시 동작값을 입력할 수 있는 함수 */}
        {/*onClick {}안에는 함수만 넣어야함 */}
      <h4>{ 글제목[0] } <span onClick={()=> {따봉변경(따봉+1)} }>👍</span>{따봉}<span onClick={()=>{b1("여자 코트 추천")}}>👩</span></h4>
      <p>2월 17일 발행</p>
      </div>
      <div className="list">
      <h4>{ 글제목[1] }</h4>
      <p>2월 17일 발행</p>
      </div>
      <div className="list">
      <h4>{ 글제목[2] }</h4>
      <p>2월 17일 발행</p>
      </div>
    </div>
  );
};

export default Apple01;
