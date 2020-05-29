import React, { useState , useEffect } from 'react';
import { Button } from 'antd';

function Hooks() {
    const [count,setCount] = useState(0);

    // useEffect 副作用 --> componentDidMount/componentDidUpdate
    useEffect(()=>{
        return ()=>{
            console.log('Unmount')
        }
    },[])

    return (
        <div>
            <p>You clicked {count} times.</p>
            <Button onClick={()=>{setCount(count+1)}}>Click me</Button>
        </div>
    )
}

export default Hooks;