import React, { useState } from 'react';
import chair from '../../assets/images/chair.png'
import bg from '../../assets/images/bg.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

const AppointmentBanner = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div className="hero min-h-screen " style={{
            backgroundImage: `url(${bg})`
        }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="max-w-lg rounded-lg shadow-2xl" alt=''/>
                <div>
                    <DayPicker 
                        mode='single'
                        selected={date}
                        onSelect={setDate}
                    />
                    <p>you have selected: {format(date, 'PP')}</p>
                    
                </div>
                
            </div>
            
        </div>
    );
};

export default AppointmentBanner;