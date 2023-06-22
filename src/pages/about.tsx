import { useState } from "react";
import HeadTitle from '../components/HeadTitle';

export default function about() {
    const [num, setNum] = useState<number>(0);

    const handleNum = () => {
        let addNum = num;
        addNum++;
        setNum(addNum);
    }

    return (
        <div>
            <HeadTitle title="about"/>
            <h2>어바웃!</h2>
            <p>{num}</p>
            <button onClick={() => handleNum()}>Add</button>
        </div>
    )
}