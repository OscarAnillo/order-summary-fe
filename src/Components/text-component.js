export default function TextComponent(){
    return (
        <div className="text">
            <h2>Order Summary</h2>
            <p>You can now listen to millions of songs, audiobooks and podcasts on any device anywhere you like!</p>
            <div className="row">
                <div>
                    <img src="/images/icon-music.svg"alt="" />
                </div>
                <div>
                    <h4>Annual Plan</h4>
                    <p>59.99/year</p>
                </div>
                <div>
                    <a>Change</a>
                </div>
            </div>
            <button>Proceed to Payment</button>
            <span>Cancel Order</span>
        </div>
    )
}