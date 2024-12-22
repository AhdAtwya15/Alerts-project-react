import {X} from 'lucide-react';
import './Alert.scss';
import { ReactNode } from 'react';
import {alertTypes} from '../../Types/index'

interface IProps
{
    classTitle:alertTypes;
    icon:ReactNode;
    heading:string;
    description?:string;
    children?:ReactNode

}

const Alert = ({classTitle,icon,heading,description,children}:IProps) => {
    return (
    <>
        <div className={classTitle}>
            <div className='alert-header'>
                <div className="alert-title">
                    <span>{icon}</span>
                    <h2>{heading}</h2>
                </div>
                <X className='close-icon' size={30}/>
            </div>
            {children? children:<p>{description}</p>}
            
        </div>
    </>
    )
}

export default Alert
