import React from 'react'

const ProductCard = (props) => {

    const { handleBuy } = props

    // desctructing
    const { imgUrl, title, description, quantity, price } = props.product

    return (

        <div className="card">
            <img src={imgUrl} className="card-img-top" alt="..." />
            <div className="card-body">
            <h5 className="card-title">{title}</h5>
                <p className="card-text">{description && description.substring(0, 80)} ...</p>
                <div className="row mb-3">
                    <div className="col-md-6">ຍັງ <b>{quantity}</b> ອັນ</div>
                    <div className="col-md-6 text-end"><b>{price}</b> ກີບ</div>
                </div>
                <div className="d-grid gap-2 col-12 mx-auto">
                    <button className="btn btn-success text-light py-2" type="button" onClick={handleBuy}>ສັ່ງຊື້</button>
                </div>                    
                
            </div>
        </div>
    )
}

export default ProductCard
