import React, {useCallback} from 'react'

const react = () => {

    const onClick = useCallback((e)=>{
        console.log(e.target);
    },[]);

    const onClickFunc = useCallback( () => (e)=>{
        console.log(e.target);
    },[]);

    return (
        <div>
            <p onClick={onClick}>Test 1</p>
            <p onClick={onClickFunc()}>Test 2</p>
        </div>
    )
}

export default react;
