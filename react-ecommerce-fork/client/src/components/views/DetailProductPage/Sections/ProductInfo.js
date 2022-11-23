import React, { useEffect, useState } from 'react'
import { Button, Descriptions } from 'antd';
import { Redirect } from 'react-router-dom';

function ProductInfo(props) {

    const [Product, setProduct] = useState({})

    useEffect(() => {

        setProduct(props.detail)

    }, [props.detail])

    const addToCarthandler = () => {
        props.addToCart(props.detail._id)
    }

    const goHome = () => {
        return <Redirect to="LandingPage" />
    }

    return (
        <div>
            <Descriptions title="Product Info">
                <Descriptions.Item label="Price"> {Product.price}</Descriptions.Item>
                <Descriptions.Item label="Sold">{Product.sold}</Descriptions.Item>
                <Descriptions.Item label="View"> {Product.views}</Descriptions.Item>
                <Descriptions.Item label="Description"> {Product.description}</Descriptions.Item>
            </Descriptions>

            <br />
            <br />
            <br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button size="large" shape="round" type="danger"
                    onClick={addToCarthandler}
                >
                    Ajouter au pannier
                    </Button>
                <a href="/"><Button style={{ marginLeft: '1rem' }} size="large" shape="round" positive>
                    Continuer le Shopping
                    </Button></a>
            </div>
        </div>
    )
}

export default ProductInfo
