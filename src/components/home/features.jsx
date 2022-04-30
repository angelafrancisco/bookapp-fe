const Features = () => {
    return (
        <div className="content-container features">
            <h2 className="heading features">Search for books, add custom book lists, get book recommendations and more!</h2>
            <div className="features-grid">
                <div className="single-feature-box">
                    <div className="feature-img">
                        <img src="./img/feature-1.png" alt="icon" />
                    </div>
                    <div className="feature-detail">
                        <h3 className="feature-title">Search books</h3>
                        <p className="feature-text">Lorem ipsum dolor sit amet, consectetur elit. Ipsam magni modi iusto soluta vero inventore dolores!</p>
                    </div>
                </div>
                <div className="single-feature-box">
                    <div className="feature-img">
                        <img src="./img/feature-2.png" alt="icon" />
                    </div>
                    <div className="feature-detail">
                        <h3 className="feature-title">Save favorites</h3>
                        <p className="feature-text">Lorem ipsum dolor sit amet, consectetur elit. Ipsam magni modi iusto soluta vero inventore dolores!</p>
                    </div>
                </div>
                <div className="single-feature-box">
                    <div className="feature-img">
                        <img src="./img/feature-3.png" alt="icon" />
                    </div>
                    <div className="feature-detail">
                        <h3 className="feature-title">Add custom books</h3>
                        <p className="feature-text">Lorem ipsum dolor sit amet, consectetur elit. Ipsam magni modi iusto soluta vero inventore dolores!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;