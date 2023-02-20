import React, { Component } from 'react'

import Button from 'components/Button/index.js'
import numberFormat from 'utils/formatNumber.js'

import imgHero from 'assets/images/img-hero.jpg'
import imgFrame from 'assets/images/img-frame.png'

import icTraveler from 'assets/icons/ic_traveler.svg'
import icTreasure from 'assets/icons/ic_treasure.svg'
import icCities from 'assets/icons/ic_cities.svg'


export default class Hero extends Component {
    render() {

        const showMostPict = () => {
            window.scrollTo({
                top: this.props.refMostPicked.current.offsetTop - 30,
                behavior: "smooth"
            });
        }


        return (
            <section className='container pt-4'>
                <div className="row align-items-center">
                    <div className="col-auto pr-5" style={{ width: 530 }}>
                        <h1 className="font-weight-bold line-height-1" style={{ marginBottom: 20 }}>
                            Forget Busy Work,<br />
                            Start Next Vacation
                        </h1>
                        <p className=" font-weight-light text-gray-500 w-75" style={{ lineHeight: "170%", marginBottom: 30 }}>
                            We provide what you need to enjoy your
                            holiday with family. Time to make another
                            memorable moments.
                        </p>
                        <Button
                            className="btn px-5"
                            hasShadow
                            isPrimary
                            onClick={showMostPict}
                        >
                            Show Me Now
                        </Button>
                        <div className="row" style={{ marginTop: 80 }}>
                            <div className="col-auto" style={{ marginRight: 32 }}>
                                <img
                                    width={36}
                                    height={36}
                                    src={icTraveler}
                                    alt={`${numberFormat(this.props.data.travelers)} travelers`}
                                />
                                <h6 className='mt-3'>
                                    {numberFormat(this.props.data.travelers)}
                                    <span className="text-gray-500 font-weight-light" >
                                        {" "}travelers
                                    </span>
                                </h6>
                            </div>
                            <div className="col-auto" style={{ marginRight: 32 }}>
                                <img
                                    width={36}
                                    height={36}
                                    src={icTreasure}
                                    alt={`${numberFormat(this.props.data.treasures)} treasures`}
                                />
                                <h6 className='mt-3'>
                                    {numberFormat(this.props.data.treasures)}
                                    <span className="text-gray-500 font-weight-light" >
                                        {" "}treasure
                                    </span>
                                </h6>
                            </div>
                            <div className="col-auto" >
                                <img
                                    width={36}
                                    height={36}
                                    src={icCities}
                                    alt={`${numberFormat(this.props.data.cities)} cities`}
                                />
                                <h6 className='mt-3'>
                                    {numberFormat(this.props.data.cities)}
                                    <span className="text-gray-500 font-weight-light" >
                                        {" "}cities
                                    </span>
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 pl-5">
                        <div style={{ width: 520, height: 410 }}>
                            <img
                                src={imgHero}
                                alt="Room wiht couches"
                                className="img-fluid position-absolute"
                                style={{ margin: "-30px 0 0 -30px", zIndex: 1 }}
                            />
                            <img
                                src={imgFrame}
                                alt="Room wiht couches frame"
                                className="img-fluid position-absolute"
                                style={{ margin: "-0 -15px -px 0" }}
                            />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}


