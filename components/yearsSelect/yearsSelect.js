import styles from './yearsSelect.module.sass'
import palette from '../palette/palette';

export default function YearsSelect(props){


    const style= {
        color: palette[2],
        background: palette[3]
    };

    const styleClicked= {
        color: palette[2],
        background: palette[0]
    }

    const createList = () => {
        const currentDate = (new Date()).getFullYear();
        const nbYears = currentDate - 2018;

        const recursive = (index, nb, res) => index > nb ?
            res :
            recursive(index + 1, nb, res.concat(
                Object.assign({}, {id: index, date: 2018+index})
            ))
        ;

        return recursive(0, nbYears, [])
    };

    const list = createList().map(el => <article 
        className={styles.article} 
        key={el.id}
        style={props.year == el.date ? styleClicked : style}
        onClick={()=> props.clickOnYear(el.date)}
        >
            {el.date}
    </article>
    )

    return <>

        <section className={styles.container}>
            {list}
        </section>
        

    </>
}