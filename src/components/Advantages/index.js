import React from 'react';
import advantages from './advantages.module.scss';
import { cardsData } from './const';
const Advantages = () => {
    return (
        <div className={advantages.container}>
            {cardsData.map((el)=>{
                return <div className={advantages.card}>
                    <el.logo/>
                    <p>{el.text}</p>
                </div>
            })
            }
        </div>
    )
}

export default Advantages;