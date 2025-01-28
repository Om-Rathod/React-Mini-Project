const Block = () => {
    return (
        <main className="Block container">
            <div className="Block-Content">
                <h1>YOUR FEET DESERVE TH BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE
                    HERE TO HELP YOU WITH OUR SHOES</p>
                    <div className="Block-Button">
                        <button>Shop Now</button>
                        <button className="sec-btn">Category</button>
                    </div>
                    <div className="Block-Shopping">
                        <p>Also Available On</p>

                        <div className="brand-icon">
                            <img src="/images/amazon.png" alt="Chutiya ho tum" />
                            <img src="/images/flipkart.png" alt="Chutiya ho tum" />
                        </div>
                    </div>
            </div>
            <div className="shoe-image">
                <img src="/images/shoe_image.png" alt="Chutiya ho tum" />
            </div>
        </main>
    )
}

export default Block;