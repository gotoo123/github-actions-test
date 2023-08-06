import {useState, useEffect} from 'react';

const PHRASES = [
  'No Pain No Gain',
  'Always Know Who You Are',
  'Nothing As Bad As Uncertainty'
]

const RollPhrase = () => {
  const [pos, setPos] = useState(0);

  // 设置首页字幕滚动定时器
  useEffect(() => {
    setTimeout(increase, 3000)
    return clearTimeout(increase);
  });

  const increase = () => {
    if (pos >= (PHRASES.length - 1) * 20) {
      setPos(0);
    } else {
      setPos(pos + 20);
    }
  }

  return (
    <div style={{transform: `translateY(-${pos}px)`}}>
      {
        PHRASES.map(item => (<div key={item}>{item}</div>))
      }
    </div>
  )
}

export default RollPhrase;
