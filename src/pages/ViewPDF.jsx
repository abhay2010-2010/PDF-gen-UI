import React, { useEffect, useState } from 'react'

const ViewPDF = () => {
    const [data, setData] = useState([]);

    const fetchData = () => {
        fetch('')
            .then(res => res.json())
            .then(result => {
                setData(result);
                console.log(result);
            })
            .catch(err => {
                console.log(err);
            })
    }
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div>
            {data.map((ele) => {
                return (
                    <div key={ele.id}>
                        <h1>{ele.title}</h1>
                        <h1>{ele.author}</h1>
                        <h1>{ele.price}</h1>
                        <img src={ele.bgimg} alt="dx" />
                    </div>
                );
            })}
        </div>
    )
}

export default ViewPDF
