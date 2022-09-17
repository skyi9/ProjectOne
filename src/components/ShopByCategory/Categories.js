import React from 'react'
import Navbar from '../Header/Navbar'

const Categories = () => {
    return (
        <>
            <Navbar />
            <div className="slide container" style={{ marginTop: '8rem' }}>

                <div className="row">
                    <div className="col-4">
                        <div id="list-example" className="list-group" style={{ height: '550px', border: '2px solid, lightgrey' }}>
                            <a className="list-group-item list-group-item-action active" href="#list-item-1">Item 1</a>
                            <a className="list-group-item list-group-item-action" href="#list-item-2">Item 2</a>
                            <a className="list-group-item list-group-item-action" href="#list-item-3">Item 3</a>
                            <a className="list-group-item list-group-item-action" href="#list-item-4">Item 4</a>
                        </div>
                    </div>
                    <div className="col-8">
                        <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" className="scrollspy-example border p-3 rounded" tabIndex="0" style={{ height: '550px', overflowY: 'scroll' }}>
                            <h4 id="list-item-1">Item 1</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam et nam quam voluptates nulla in, ducimus eveniet adipisci quo dolore officia odit repellendus quaerat consequatur, vitae ullam quasi? Velit, inventore ad minus eligendi, voluptas natus eius mollitia veniam nisi, dolorem cumque at sint ab. Ipsam quae sapiente iste ullam repudiandae.</p>
                            <p>
                                voluptates nulla in, ducimus eveniet adipisci quo dolore officia odit repellendus quaerat consequatur, vitae ullam quasi? Velit, inventore ad minus eligendi, voluptas natus eius mollitia veniam nisi, dolorem cumque at sint ab. Ipsam quae sapiente iste ullam repudiandae.</p>
                            <h4 id="list-item-2">Item 2</h4>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus dignissimos, nesciunt rem perferendis nulla atque dolor aliquid architecto inventore modi, officia corrupti sint illo facilis sequi fugit. Harum tempora sint perspiciatis consequatur aperiam ut exercitationem, obcaecati veniam, porro ea velit eius fugiat ipsam distinctio consectetur laudantium at. Iste, quasi ex!</p>
                            <p>
                                voluptates nulla in, ducimus eveniet adipisci quo dolore officia odit repellendus quaerat consequatur, vitae ullam quasi? Velit, inventore ad minus eligendi, voluptas natus eius mollitia veniam nisi, dolorem cumque at sint ab. Ipsam quae sapiente iste ullam repudiandae.</p>
                            <h4 id="list-item-3">Item 3</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nobis laboriosam quaerat pariatur sit quod totam animi. Nisi fugiat ex itaque omnis animi aliquid harum rerum quas minus exercitationem officiis aperiam, quasi expedita temporibus quod quos quae sit asperiores accusamus dignissimos? Sit quasi in exercitationem quae, fugit iste quo dicta?</p>
                            <p>
                                voluptates nulla in, ducimus eveniet adipisci quo dolore officia odit repellendus quaerat consequatur, vitae ullam quasi? Velit, inventore ad minus eligendi, voluptas natus eius mollitia veniam nisi, dolorem cumque at sint ab. Ipsam quae sapiente iste ullam repudiandae.</p>
                            <h4 id="list-item-4">Item 4</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, pariatur qui quisquam nobis error voluptatem, quae quia illum earum harum aut, dicta ut ab? Laudantium voluptatem eum quos labore tempora voluptate ex accusamus quae eius dignissimos suscipit ipsum a, dolor similique repellendus voluptatibus nesciunt modi id. Mollitia aperiam fugit ipsa?</p>
                            <p>
                                voluptates nulla in, ducimus eveniet adipisci quo dolore officia odit repellendus quaerat consequatur, vitae ullam quasi? Velit, inventore ad minus eligendi, voluptas natus eius mollitia veniam nisi, dolorem cumque at sint ab. Ipsam quae sapiente iste ullam repudiandae.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Categories
