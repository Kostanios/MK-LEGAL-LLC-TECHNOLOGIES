import React from 'react';
import services from './services.module.scss'
import {servicesDB} from './const';

const Services = () => {
    const cards = servicesDB.map((e, i)=>{
    return <div key={i} className={services.card}>
        <div style={{opacity: e.alfa}} className={services.label}></div>
        <div className={services.content}>
            <p className={services.name}>{e.name}</p>
            <div className={services.linkContainer}><a className={services.link}>{`подробнее`}</a></div>
        </div>
    </div>
    })
    return <div className={services.container}>
      <p className={services.header}>{'Перечень оказываемых услуг'}</p>
      <div className={services.cards}>
          {cards}
      </div>
      <div className={services.workMore}>
          <p className={services.work}>{`Оказание юридических услуг юридическим лицам и индивидуальным предпринимателям – наша работа. Среди собственников бизнеса принято считать, что прочитать закон в Интернете и применить его на практике - это одно и тоже. Основываясь на этом убеждении, они часто отказываются от профессиональной помощи. Практика же показывает, что только опытный юрист может правильно разобраться в правовых тонкостях, своевременно предотвратить ложные шаги и ускорить получение результата.`}</p>
          <p className={services.more}><label>{`Все услуги`}</label></p>
      </div>
    </div>
}

export default Services;