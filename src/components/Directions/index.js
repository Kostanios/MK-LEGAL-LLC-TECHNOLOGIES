import React, { useState } from 'react';
import directions from './directions.module.scss';
import { directionsData } from './const';
const Directions = () => {
    // const [cardNumber, setCardNumber] = useState(6);
    // .slice(0, cardNumber)
    return (
    <div className={directions.container}>
      <div className={directions.cards}>
        {directionsData.map((e)=>{
          return <div className={directions.card} key={e.text}>
            <div className={directions.nameButton}>
                <p className={directions.name}>{e.text}</p>
                <a className={directions.link}>{`подробнее`}</a>
            </div>
            <e.logo/>
          </div>  
        })
        }
      </div>
      <div className={directions.more}><label>{`все услуги`}</label></div>
      <div className={directions.mainDirections}>
        <h1>{`Основные направления деятельности`}</h1>
        <div className={directions.mainDirectionsText}>
          <p>{`Основной принцип нашей работы – максимальная открытость и доверительные отношения с каждым клиентом, с тем чтобы от начала и до конца совместной работы, не возникало никакого недопонимания. Мы ставим целью не только привлечение новых клиентов, но и поддержание длительных партнерских отношений с клиентами, которые уже воспользовались нашими услугами.`}</p>
          <p>{`Быстрота анализа и профессиональных действий наших юристов обеспечивают успешное решение, казалось бы, неразрешимых вопросов. Богатые знания и солидный опыт позволяют нам оказывать комплексную правовую помощь в ситуациях любой сложности.`}</p>
        </div>
      </div>
    </div>
    )
}
export default Directions;