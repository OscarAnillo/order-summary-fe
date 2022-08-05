export default function TextComponent(){
    return (
        <div className="text">
            <h2>Order Summary</h2>
            <p>You can now listen to millions of songs, audiobooks and podcasts on any device anywhere you like!</p>
            <div className="row">
                <div className="one">
                    <img src="/images/icon-music.svg"alt="" />
                </div>
                <div className="two">
                    <h4>Annual Plan</h4>
                    <span>59.99/year</span>
                </div>
                <div className="three">
                    <a href="/">Change</a>
                </div>
            </div>
            <button>Proceed to Payment</button>
            <span className="cancel">Cancel Order</span>
        </div>
    )
}