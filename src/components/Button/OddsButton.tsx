import React from 'react'
import Typography from '../Typography/Typography';

interface Props {
    odds: number;
}
const OddsButton: React.FC<Props> = ({ odds }) => {
    return (
        <div className='bg-DarkOddsButton w-[3.25rem] h-[2rem] flex items-center justify-center' >
            <Typography variation='subtitle2'> {odds}</Typography>
        </div>

    )
}

export default OddsButton