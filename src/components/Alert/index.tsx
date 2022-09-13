import React, { useRef } from 'react'
import { setFadeOut } from '../../util/utilities/fade';

interface IProps{
    status: string;
    content: string,
    children?: React.ReactNode | string
}
/**
 * Alert-Component - Handles alert messages
 * @param props { Status, Content, Children }
 * @description 
 * @returns ReactNode
 */
const Alert: React.FC<IProps> = (props: IProps) => {
  const alertRef = useRef<any>(null)
  const AlertStyling: React.CSSProperties = {}

  setFadeOut(() => { return alertRef }, 9000) // alert fades out after 4s
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
            <div className="content" style={AlertStyling} ref={alertRef}>
                {props.content}
                {props.children}
            </div>
    </React.Fragment>
  )
}

export default Alert