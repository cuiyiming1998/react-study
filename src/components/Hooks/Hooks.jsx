import React, { useState , useEffect , createContext , useContext} from 'react';
import { Button } from 'antd';

const CountContext = createContext();

function Counter() {
    // useContext  解决父子组件传值

    let count = useContext(CountContext);

    return (
        <div>
            <h2>count = {count}</h2>
        </div>
    )
}

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
            <CountContext.Provider value={count}>
                <Counter />
            </CountContext.Provider>
        </div>
    )
}

export default Hooks;