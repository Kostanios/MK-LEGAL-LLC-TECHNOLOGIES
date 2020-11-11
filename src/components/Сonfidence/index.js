import React from 'react'
import confidence from './confidence.module.scss';
import { Point } from '../Svg/Point';
const Confidence = () => {
    return <div className={confidence.layOut}>
        <div className={confidence.container}>
        <div className={confidence.content}>
            <div className={confidence.questionAnswer}>
                <p className={confidence.question}>{`Почему нам доверяют`}</p>
                <p className={confidence.answer}>{`Прозрачность и открытость для клиентов – наш принцип, который с самого начала исключает любые недопонимания. Мы тщательно продумали работу каждого юриста внутри коллектива, что обеспечивает высокое качество юридических услуг компании.`}</p>
            </div>
            <div className={confidence}>
                <div className={confidence.cause}><div><Point/></div><p className={confidence.causeText}>{`безупречная репутация`}</p></div>
                <div className={confidence.cause}><div><Point/></div><p className={confidence.causeText}>{`абсолютная конфиденциальность`}</p></div>
                <div className={confidence.cause}><div><Point/></div><p className={confidence.causeText}>{`внимание к каждому клиенту`}</p></div>
                <div className={confidence.cause}><div><Point/></div><p className={confidence.causeText}>{`успешный опыт решения нестандартных вопросов`}</p></div>
            </div>
        </div>
        <div className={confidence.line}></div>
        <div className={confidence.content}>
            <div className={confidence.questionAnswer}>
                    <p className={confidence.question}>{`Что получает клиент`}</p>
                    <p className={confidence.answer}>{`Юристы нашей компании готовы дать четкие, основанные на фактах, консультации, касающиеся и «типовой», и нестандартной ситуации, опираясь на сложившуюся служебную практику и многолетний опыт. Мы объективно оцениваем риски и тщательно анализируем каждый случай.`}</p>
                </div>
                <div className={confidence}>
                    <div className={confidence.cause}><Point/><p className={confidence.causeText}>{`надежная защита бизнеса`}</p></div>
                    <div className={confidence.cause}><Point/><p className={confidence.causeText}>{`актуальная правовая помощь`}</p></div>
                    <div className={confidence.cause}><Point/><p className={confidence.causeText}>{`своевременная оценка рисков`}</p></div>
                    <div className={confidence.cause}><Point/><p className={confidence.causeText}>{`компетентное решение правовых вопросов`}</p></div>
                </div>
            </div>
        </div>
    </div>
}
export default Confidence;