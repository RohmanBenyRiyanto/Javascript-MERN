import React from 'react'

import Button from 'components/Button'
import Hero from 'parts/Hero'


export default function MostPick(props) {
    return (
        <section className='container'>
            <h4 className="mb-3">Most Picked</h4>
            <div className="container-grid">
                <div className="item column-4 row-2">
                    <div className="card">Card 1</div>
                </div>
                <div className="item column-4 row-1">
                    <div className="card">Card 2</div>
                </div>
                <div className="item column-4 row-1">
                    <div className="card">Card 3</div>
                </div>
                <div className="item column-4 row-1">
                    <div className="card">Card 4</div>
                </div>
                <div className="item column-4 row-1">
                    <div className="card">Card 5</div>
                </div>
            </div>
        </section>
    )
}


