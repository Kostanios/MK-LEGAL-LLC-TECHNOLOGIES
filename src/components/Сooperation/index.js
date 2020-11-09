import React from 'react';
import cooperation from './cooperation.module.scss';
import { One, Two } from '../Svg/Numbers';
const Cooperation = () => {
    return <div className={cooperation.container}>
      <div className={cooperation.procedureForm}>
        <div className={cooperation.procedure}>
            <p className={cooperation.procedureHeader}>{`Организация сотрудничества`}</p>
            <div className={cooperation.stepContainer}>
                <div className={cooperation.number}><One/></div>
                <div className={cooperation.stepText}>{`Установив контакт с нашим сотрудником, Вы оговорите нюансы предмета обсуждения и согласуете личную встречу.`}</div>
            </div>
            <div className={cooperation.stepContainer}>
                <div className={cooperation.number}><Two/></div>
                <div className={cooperation.stepText}>{`Юрист изучит документы, необходимые для разработки стратегии решения возникшей ситуации. И заключит договор.`}</div>
            </div>
            <p className={cooperation.procedureText}>{`Также в нашей компании возможна удаленная форма обслуживания с оказанием полного комплекса юридических услуг в РБ через современные средства связи и мессенджеры.`}</p>
        </div>
        <form className={cooperation.form}>
            <div className={cooperation.inputContainer}>
                <p className={cooperation.formName}>{`Ваше имя`}</p>
                <input placeholder='Ваше имя' className={cooperation.input} />
            </div>
            <div className={cooperation.inputContainer}>
                <div className={cooperation.fromPhone}>{`телефон для связи`}</div>
                <input placeholder='+375 (XX) XXX-XX-XX' className={cooperation.input} />
            </div>
            <p className={cooperation.formAdvance}>{`Нажимая на кнопку «Получить консультацию», вы соглашаетесь с условиями Политики конфиденциальности`}</p>
            <div className={cooperation.consultation}><label>{`Получить консультацию`}</label></div>
        </form>
      </div>
      <div className={cooperation.buyServices}>
        <div className={cooperation.buyHeaderContent}>
          <p className={cooperation.buyHeader}>{`Стоимость юридических услуг в Минске`}</p>
          <p className={cooperation.buyContent}>{`Стоимость услуг формируется согласно тарифам, установленным в компании и в зависимости от времени, затраченного юристом на разрешение возникшей ситуации. Принцип прозрачности делает наши цены обоснованными и понятными для клиента.`}</p>
        </div>
        <div className={cooperation.rates}><label>{`тарифы`}</label></div>
      </div>
    </div>
}
export default Cooperation;