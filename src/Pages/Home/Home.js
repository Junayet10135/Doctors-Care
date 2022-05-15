import React from 'react';
import MakeAppointment from './MakeAppointment';
import Banner from './Banner';
import Info from './Info';
import Services from './Services';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <MakeAppointment></MakeAppointment>
        </div>
    );
};

export default Home;