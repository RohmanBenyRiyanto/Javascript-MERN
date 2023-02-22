import React, { Component } from 'react';

import Header from 'parts/Header';
import landingPage from 'json/landingPage.json';
import Hero from 'parts/Hero';
import MostPick from 'parts/MostPick';

export default class LandingPage extends Component {
    render() {
        return (
            <>
                <Header {...this.props}></Header>
                <Hero data={landingPage.hero} />
                <MostPick data={landingPage.mostPicked} />
            </>
        )
    }
}
