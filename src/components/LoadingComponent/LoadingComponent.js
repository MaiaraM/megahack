import React from 'react';

/** 
  * @Name: LoadingComponent
  * @Data: 2019
  * @Desc: Componente de carregando da página 
  * @props:
  *       
  */

const LoadingComponent = (props) => {

  // Recebe as propriedades
 // const { } = props;

  return (
    <React.Fragment>
      <div className="LoadingComponent">
        <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
      </div>
    </React.Fragment>
  )
}

export default LoadingComponent;