import data from "./data";

function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">
            amazona
          </a>
        </div>
        <div>
          <a href="/cart">cart</a>
          <a href="/signIn">signin</a>
        </div>
      </header>
      <main>
        <div className="row center">
          {
            data.products.map(product => (
              <div key={product._id} className="card">
                    <a className='img_box' href="product.html">
                        <img className="medium " src={product.image} alt=""/>
                    </a>
                    <div className="card-body">
                        <a href={`/product/${product._id }`}>
                            <h2>{product.name}</h2>
                        </a>
                        <div className="rating">
                            <span>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </span>
                        </div>
                        <div className="price">
                            ${product.price} 
                        </div>
                    </div>
                </div>
            ))
          }
        </div>
      </main>
      <footer>
        <p>all right reserved</p>
      </footer>
    </div>
  );
}

export default App;
