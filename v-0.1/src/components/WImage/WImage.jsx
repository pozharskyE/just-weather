import React, { useEffect, useState } from 'react'

function WImage(props) {
    const [imgName, setImgName] = useState('');

    function getImgName() {
        fetch("/wmo_codes.json")
            .then((res) => res.json())
            .then((data) => {
                setImgName(data[props.wCode]["day"]["image"]);
            })

    }

    useEffect(()=>getImgName(props.weatherCode), [])

    return (
    <img className={props.className} src={`${props.wImgFolder}${imgName}`} alt="" />
    )
}

export default WImage;