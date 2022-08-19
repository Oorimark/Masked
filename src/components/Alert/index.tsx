import React from 'react'

interface IProps{
    status: string;
    children?: any
}
const Alert: React.FC<IProps> = (props: IProps) => {
  const AlertStyling: React.CSSProperties = {}

  switch(props.status){
    case 'success':
      AlertStyling.borderLeft = '4px solid rgb(9, 214, 9)';
      break;
    case 'error':
      AlertStyling.borderLeft = '4px solid #ff4133';
      break;
    case 'pending':
      AlertStyling.borderLeft = '4px solid yellow'
  }
  return (
    <React.Fragment>
        <div className="alert-container">
            <div className="text" style={AlertStyling}>
                {props.children}
            </div>
        </div>
    </React.Fragment>
  )
}

export default Alert