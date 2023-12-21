// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import { onFindAll } from '../config/conexiones'
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";

function CatalogoProductos() {
  const [negocios, setNegocios] = useState([]);

  useEffect(() => {
    onGetNegocios();
  }, []);

  const onGetNegocios = async () =>{
    const lstNegocios = await onFindAll();
    setNegocios(lstNegocios.docs);
    console.log(negocios);
}

  return (
    <div>
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <div className="container bootdey">
      <div className="row justify-content-center product-grid-style">
          <div className="title">
            <span>Featured Products</span>
          </div>
          <div className="col-sm-4 col-md-3 box-product-outer">
            <div className="box-product">
              <div className="img-wrapper">
                <a href="detail.html">
                  <img
                    alt="Product"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Burger_King_logo_%281999%29.svg/2024px-Burger_King_logo_%281999%29.svg.png"
                  />
                </a>
                <div className="tags">
                  <span className="label-tags">
                    <span className="label label-danger">Oferta</span>
                  </span>
                  <span className="label-tags">
                    <span className="label label-info">Featured</span>
                  </span>
                  <span className="label-tags">
                    <span className="label label-warning">Polo</span>
                  </span>
                </div>
                <div className="option">
                  <a
                    href="#/"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title=""
                    data-original-title="Add to Cart"
                  >
                    <i className="ace-icon fa fa-shopping-cart"></i>
                  </a>
                  <a
                    href="#/"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title=""
                    data-original-title="Compare"
                  >
                    <i className="ace-icon fa fa-align-left"></i>
                  </a>
                  <a
                    href="#/"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title=""
                    data-original-title="Wishlist"
                  >
                    <i className="ace-icon fa fa-heart"></i>
                  </a>
                </div>
              </div>
              <h6>
                <a href="detail.html">Burger King</a>
              </h6>
              <div className="price">
                <div>
                  $16.59<span className="price-down">-10%</span>
                </div>
                <span className="price-old">$15.00</span>
              </div>
              <div className="rating">
                <i className="ace-icon fa fa-star"></i>
                <i className="ace-icon fa fa-star"></i>
                <i className="ace-icon fa fa-star"></i>
                <i className="ace-icon fa fa-star"></i>
                <i className="ace-icon fa fa-star-half-o"></i>
                <a href="#/">(2 reviews)</a>
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-md-3 hidden-xs box-product-outer">
            <div className="box-product">
              <div className="img-wrapper">
                <a href="detail.html">
                  <img
                    alt="Product"
                    src="https://upload.wikimedia.org/wikipedia/sco/thumb/b/bf/KFC_logo.svg/2048px-KFC_logo.svg.png"
                  />
                </a>
                <div className="tags">
                  <span className="label-tags">
                    <span className="label label-danger">Sale</span>
                  </span>
                  <span className="label-tags">
                    <span className="label label-info">Featured</span>
                  </span>
                  <span className="label-tags">
                    <span className="label label-warning">Polo</span>
                  </span>
                </div>
                <div className="option">
                  <a
                    href="#/"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title=""
                    data-original-title="Add to Cart"
                  >
                    <i className="ace-icon fa fa-shopping-cart"></i>
                  </a>
                  <a
                    href="#/"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title=""
                    data-original-title="Compare"
                  >
                    <i className="ace-icon fa fa-align-left"></i>
                  </a>
                  <a
                    href="#/"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title=""
                    data-original-title="Wishlist"
                  >
                    <i className="ace-icon fa fa-heart"></i>
                  </a>
                </div>
              </div>
              <h6>
                <a href="detail.html">
                  KFC
                </a>
              </h6>
              <div className="price">
                <div>
                  $45.27<span className="price-down">-10%</span>
                </div>
                <span className="price-old">$15.00</span>
              </div>
              <div className="rating">
                <i className="ace-icon fa fa-star"></i>
                <i className="ace-icon fa fa-star"></i>
                <i className="ace-icon fa fa-star"></i>
                <i className="ace-icon fa fa-star"></i>
                <i className="ace-icon fa fa-star-half-o"></i>
                <a href="#/">(3 reviews)</a>
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-md-3 hidden-xs box-product-outer">
            <div className="box-product">
              <div className="img-wrapper">
                <a href="detail.html">
                  <img
                    alt="Product"
                    src="https://bootdey.com/img/Content/avatar/avatar3.png"
                  />
                </a>
                <div className="tags">
                  <span className="label-tags">
                    <span className="label label-danger">Sale</span>
                  </span>
                  <span className="label-tags">
                    <span className="label label-info">Featured</span>
                  </span>
                  <span className="label-tags">
                    <span className="label label-warning">Polo</span>
                  </span>
                </div>
                <div className="option">
                  <a
                    href="#/"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title=""
                    data-original-title="Add to Cart"
                  >
                    <i className="ace-icon fa fa-shopping-cart"></i>
                  </a>
                  <a
                    href="#/"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title=""
                    data-original-title="Compare"
                  >
                    <i className="ace-icon fa fa-align-left"></i>
                  </a>
                  <a
                    href="#/"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title=""
                    data-original-title="Wishlist"
                  >
                    <i className="ace-icon fa fa-heart"></i>
                  </a>
                </div>
              </div>
              <h6>
                <a href="detail.html">WranglerNavy Blue Solid Polo T-Shirt</a>
              </h6>
              <div className="price">
                <div>
                  $25.59<span className="price-down">-10%</span>
                </div>
                <span className="price-old">$15.00</span>
              </div>
              <div className="rating">
                <i className="ace-icon fa fa-star"></i>
                <i className="ace-icon fa fa-star"></i>
                <i className="ace-icon fa fa-star"></i>
                <i className="ace-icon fa fa-star"></i>
                <i className="ace-icon fa fa-star-half-o"></i>
                <a href="#/">(4 reviews)</a>
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-md-3 hidden-sm hidden-xs box-product-outer">
            <div className="box-product">
              <div className="img-wrapper">
                <a href="detail.html">
                  <img
                    alt="Product"
                    src="https://bootdey.com/img/Content/avatar/avatar5.png"
                  />
                </a>
                <div className="tags">
                  <span className="label-tags">
                    <span className="label label-danger">Sale</span>
                  </span>
                  <span className="label-tags">
                    <span className="label label-info">Featured</span>
                  </span>
                  <span className="label-tags">
                    <span className="label label-warning">Polo</span>
                  </span>
                </div>
                <div className="option">
                  <a
                    href="#/"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title=""
                    data-original-title="Add to Cart"
                  >
                    <i className="ace-icon fa fa-shopping-cart"></i>
                  </a>
                  <a
                    href="#/"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title=""
                    data-original-title="Compare"
                  >
                    <i className="ace-icon fa fa-align-left"></i>
                  </a>
                  <a
                    href="#/"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title=""
                    data-original-title="Wishlist"
                  >
                    <i className="ace-icon fa fa-heart"></i>
                  </a>
                </div>
              </div>
              <h6>
                <a href="detail.html">NikeAs Matchup -Pq Grey Polo T-Shirt</a>
              </h6>
              <div className="price">
                <div>
                  $15.79<span className="price-down">-10%</span>
                </div>
                <span className="price-old">$15.00</span>
              </div>
              <div className="rating">
                <i className="ace-icon fa fa-star"></i>
                <i className="ace-icon fa fa-star"></i>
                <i className="ace-icon fa fa-star"></i>
                <i className="ace-icon fa fa-star"></i>
                <i className="ace-icon fa fa-star-half-o"></i>
                <a href="#/">(5 reviews)</a>
              </div>
            </div>
          </div>
          <div className="clearfix"></div>
          <div className="title">
            <span>V-Neck Collection</span>
          </div>
          <div className="col-sm-4 col-md-3 box-product-outer">
            <div className="box-product">
              <div className="img-wrapper">
                <a href="detail.html">
                  <img
                    alt="Product"
                    src="https://bootdey.com/img/Content/avatar/avatar6.png"
                  />
                </a>
                <div className="tags">
                  <span className="label-tags">
                    <span className="label label-danger">Sale</span>
                  </span>
                  <span className="label-tags">
                    <span className="label label-success">Collection</span>
                  </span>
                </div>
                <div className="option">
                  <a
                    href="#/"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title=""
                    data-original-title="Add to Cart"
                  >
                    <i className="ace-icon fa fa-shopping-cart"></i>
                  </a>
                  <a
                    href="#/"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title=""
                    data-original-title="Compare"
                  >
                    <i className="ace-icon fa fa-align-left"></i>
                  </a>
                  <a
                    href="#/"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title=""
                    data-original-title="Wishlist"
                  >
                    <i className="ace-icon fa fa-heart"></i>
                  </a>
                </div>
              </div>
              <h6>
                <a href="detail.html">
                  PhosphorusGrey Melange Printed V Neck T-Shirt
                </a>
              </h6>
              <div className="price">
                <div>
                  $5.25<span className="price-down">-10%</span>
                </div>
                <span className="price-old">$15.00</span>
              </div>
              <div className="rating">
                <i className="ace-icon fa fa-star"></i>
                <i className="ace-icon fa fa-star"></i>
                <i className="ace-icon fa fa-star"></i>
                <i className="ace-icon fa fa-star-half-o"></i>
                <i className="ace-icon fa fa-star-o"></i>
                <a href="#/">(5 reviews)</a>
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-md-3 hidden-xs box-product-outer">
            <div className="box-product">
              <div className="img-wrapper">
                <a href="detail.html">
                  <img
                    alt="Product"
                    src="https://bootdey.com/img/Content/avatar/avatar5.png"
                  />
                </a>
                <div className="tags">
                  <span className="label-tags">
                    <span className="label label-danger">Sale</span>
                  </span>
                  <span className="label-tags">
                    <span className="label label-success">Collection</span>
                  </span>
                </div>
                <div className="option">
                  <a
                    href="#/"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title=""
                    data-original-title="Add to Cart"
                  >
                    <i className="ace-icon fa fa-shopping-cart"></i>
                  </a>
                  <a
                    href="#/"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title=""
                    data-original-title="Compare"
                  >
                    <i className="ace-icon fa fa-align-left"></i>
                  </a>
                  <a
                    href="#/"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title=""
                    data-original-title="Wishlist"
                  >
                    <i className="ace-icon fa fa-heart"></i>
                  </a>
                </div>
              </div>
              <h6>
                <a href="detail.html">
                  United Colors of BenettonNavy Blue Solid V Neck T Shirt
                </a>
              </h6>
              <div className="price">
                <div>
                  $13.57<span className="price-down">-10%</span>
                </div>
                <span className="price-old">$15.00</span>
              </div>
              <div className="rating">
                <i className="ace-icon fa fa-star"></i>
                <i className="ace-icon fa fa-star"></i>
                <i className="ace-icon fa fa-star"></i>
                <i className="ace-icon fa fa-star-half-o"></i>
                <i className="ace-icon fa fa-star-o"></i>
                <a href="#/">(5 reviews)</a>
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-md-3 hidden-xs box-product-outer">
            <div className="box-product">
              <div className="img-wrapper">
                <a href="detail.html">
                  <img
                    alt="Product"
                    src="https://bootdey.com/img/Content/avatar/avatar3.png"
                  />
                </a>
                <div className="tags">
                  <span className="label-tags">
                    <span className="label label-danger">Sale</span>
                  </span>
                  <span className="label-tags">
                    <span className="label label-success">Collection</span>
                  </span>
                </div>
                <div className="option">
                  <a
                    href="#/"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title=""
                    data-original-title="Add to Cart"
                  >
                    <i className="ace-icon fa fa-shopping-cart"></i>
                  </a>
                  <a
                    href="#/"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title=""
                    data-original-title="Compare"
                  >
                    <i className="ace-icon fa fa-align-left"></i>
                  </a>
                  <a
                    href="#/"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title=""
                    data-original-title="Wishlist"
                  >
                    <i className="ace-icon fa fa-heart"></i>
                  </a>
                </div>
              </div>
              <h6>
                <a href="detail.html">WranglerBlack V Neck T Shirt</a>
              </h6>
              <div className="price">
                <div>
                  $12.00<span className="price-down">-10%</span>
                </div>
                <span className="price-old">$15.00</span>
              </div>
              <div className="rating">
                <i className="ace-icon fa fa-star"></i>
                <i className="ace-icon fa fa-star"></i>
                <i className="ace-icon fa fa-star"></i>
                <i className="ace-icon fa fa-star-half-o"></i>
                <i className="ace-icon fa fa-star-o"></i>
                <a href="#/">(5 reviews)</a>
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-md-3 hidden-sm hidden-xs box-product-outer">
            <div className="box-product">
              <div className="img-wrapper">
                <a href="detail.html">
                  <img
                    alt="Product"
                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                  />
                </a>
                <div className="tags">
                  <span className="label-tags">
                    <span className="label label-danger">Sale</span>
                  </span>
                  <span className="label-tags">
                    <span className="label label-success">Collection</span>
                  </span>
                </div>
                <div className="option">
                  <a
                    href="#/"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title=""
                    data-original-title="Add to Cart"
                  >
                    <i className="ace-icon fa fa-shopping-cart"></i>
                  </a>
                  <a
                    href="#/"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title=""
                    data-original-title="Compare"
                  >
                    <i className="ace-icon fa fa-align-left"></i>
                  </a>
                  <a
                    href="#/"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title=""
                    data-original-title="Wishlist"
                  >
                    <i className="ace-icon fa fa-heart"></i>
                  </a>
                </div>
              </div>
              <h6>
                <a href="detail.html">
                  Tagd New YorkGrey Printed V Neck T-Shirts
                </a>
              </h6>
              <div className="price">
                <div>
                  $8.09<span className="price-down">-10%</span>
                </div>
                <span className="price-old">$15.00</span>
              </div>
              <div className="rating">
                <i className="ace-icon fa fa-star"></i>
                <i className="ace-icon fa fa-star"></i>
                <i className="ace-icon fa fa-star"></i>
                <i className="ace-icon fa fa-star-half-o"></i>
                <i className="ace-icon fa fa-star-o"></i>
                <a href="#/">(5 reviews)</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CatalogoProductos;
