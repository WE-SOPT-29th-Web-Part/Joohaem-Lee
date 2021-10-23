import React from "react";

const DataInput = ({
  year, 
  month, 
  date, 
  setYear, 
  setMonth, 
  setDate
}) => {
  const handleChange = (e, setState) => {
    setState(e.target.value);
  };

  // 오늘 버튼 누르면 날짜 변경하기

  return (
    <div>
      <button>오늘</button>
      <div>
        <input type="text" onChange={(e) => handleChange(e, setYear)} value={year}/>년
        <input type="text" onChange={(e) => handleChange(e, setMonth)} value={month}/>월
        <input type="text" onChange={(e) => handleChange(e, setDate)} value={date}/>
        일을 기준으로
      </div>
    </div>
  );
};

export default DataInput;