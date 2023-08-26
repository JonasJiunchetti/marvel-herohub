import React from 'react';
import Styles from './PaginationButtons.module.scss';
import setaDireita from '../../assets/icons/angulo-circulo-direita.png';
import setaEsquerda from '../../assets/icons/angulo-circulo-esquerda.png';

const PaginationButtons = ({ page, setPage, lastPage }) => {
    return (
        <div className={Styles.buttons}>
            <button onClick={() => setPage(page - 1)} disabled={page === 1} className={Styles.button}><img src={setaEsquerda}/></button>
            <span className={Styles.page}>{page}</span>
            <button onClick={() => setPage(page + 1)} disabled={page > (lastPage - 1)} className={Styles.button}><img src={setaDireita}/></button>
        </div>
    )
};

export default PaginationButtons;