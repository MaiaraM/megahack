import React from 'react';

/** 
  * @Name: Botão Padrão
  * @Data: 2019
  * @Desc: Botão Padrão do Sistema. 
  * @props:
  *     
  *     className: 'Condição do botão (altera seu estilo)'
  *                 (state(primario, alerta, etc...), large, small, disabled, animate)
  *     disabled: true e false
  *     animate: true e false (ativa a animação padrão do botão)    
  */

const ButtonComponent = (props) => {
    // Recebe as propriedades
    const { state, large, small, disabled, animate, children, click, hidden, type = "button", /* tooltip = false, */loading } = props;

    //const [tooltipValues, setTooltipValue] = useState({});

    //Executado toda vez  após renderização.
   /* useEffect(() => {
        if (tooltip) {
            // window.$('[data-toggle="tooltip"]').tooltip();
            // setTooltipValue({
            //     'data-toggle': "tooltip",
            //     'data-placement': tooltip.placement,
            //     'title': tooltip.title
            // })
        }
    }, [tooltip]);*/

    const values = 
        `btn ${state ? "btn-" + state : "btn-primary"}${large ? " btn-lg" : ""}${small ? " btn-sm": ""}${disabled ? " disabled" : ""}${animate ? " animate" : ''}`;

    return (
        <React.Fragment>
            <button
                className = {values}
                disabled={disabled}
                onClick={click && click} hidden={hidden} type={type}>
                {loading &&  <span className="mini-loading"><span className="spinner-border spinner-border-sm " role="status" aria-hidden="true"></span></span>}
                {children}
            </button>
        </React.Fragment>
    )
}

export default ButtonComponent;