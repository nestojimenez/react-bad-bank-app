import React from 'react'

const Card = (props) => {
    const classes = () =>{
        const bg = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
        const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-white';
        return 'card mb-3 m-5' + bg + txt
    }
  return (
    <div className={classes()} style={{maxWidth:'25rem'}}>
        <div className='card-header'>{props.title}</div>
        <div className='card-body'>
            {/*props.title && <h5 className='card-title'>{props.title}</h5>*/}
            {props.text && <p className='card-text'>{props.text}</p>}
            {props.body}
        </div>
        
    </div>
  )
}

export default Card
