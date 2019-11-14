import React from 'react'

const Contact = (props) => (
    <section id="contact">
        <div className="inner">
            <section>
                {/* <form method="post" action="#">
                    <div className="field half first">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" />
                    </div>
                    <div className="field half">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" />
                    </div>
                    <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" rows="6"></textarea>
                    </div>
                    <ul className="actions">
                        <li><input type="submit" value="Send Message" className="special" /></li>
                        <li><input type="reset" value="Clear" /></li>
                    </ul>
                </form> */}
            <section className="split">
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-envelope"></span>
                        <h3>taylordearden@gmail.com</h3>
                        {/* <a href="#">information@untitled.tld</a> */}
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-phone"></span>
                        <h3>Phone (please text first)</h3>
                        <span>(801) 425-4122</span>
                    </div>
                </section>
                <section>
                    <div className="contact-method">
                        <span className="icon alt fa-home"></span>
                        <h3>Current Residence</h3>
                        <span>
                        Vineyard, Utah<br />
                        United States of America</span>
                    </div>
                </section>
            </section>
            </section>
        </div>
    </section>
)

export default Contact
