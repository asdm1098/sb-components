import './mylabel.css';

export interface MyLabelProps {
    /**
     * Mensaje que se va a mostrar en la etiqueta
     */
    label: string;
    /**
     * Tamaño de la etiqueta
     */
    size: 'normal'|'h1'|'h2'|'h3';
    /**
     * Letra en Mayúsculas
     */
    allCaps?: boolean; 
    /**
     * Color del texto
     */
    color?: 'primary' | 'secondary' | 'tertiary' ;
    /**
     * Color de la fuente personalizado
     */
    fontColor?: string, 
    /**
     * Color de fondo personalizado
     */
    backgroundColor?: string,
}

export const MyLabel = ( {
    allCaps =   false,
    color   = 'primary',
    label   = 'No label',
    size    = 'normal',
    fontColor,
    backgroundColor = 'transparent',
}: MyLabelProps ) => {
  return (
    <span 
        className={ `label ${ size } text-${color}`} 
        style={{color: fontColor, backgroundColor}}>
        { allCaps ? label.toUpperCase() : label }
    </span>
  )
}
