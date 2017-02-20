import React, { Component, PropTypes } from 'react';

let licenses = [
  {name: "표준종합 라이센스", val: 1, price: 2000},
  {name: "종합 라이센스", val: 2, price: 1500},
  {name: "표준 라이센스", val: 3, price: 1000}
];

class PurchaseBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectValue: 2000
    };

    this.handleSetPrice = this.handleSetPrice.bind(this);
  }

  handleSetPrice(e) {
    this.setState({
      selectValue: e.target.value
    });
  }

  render() {
    const licenseOptions = licenses.map((license, i) => {
      return (
        <option value={license.price}>{license.name}</option>
      );
    });

    return (
      <div className="shadow">
        <div className="row box-boarder">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-6">
                <select className="form-control" value={this.state.selectValue} onChange={this.handleSetPrice}>
                  {licenseOptions}
                </select>
              </div>
              <div className="col-md-6 margin-top-5"><img className="won-Image" src="/images/won-Image.png" /> {this.state.selectValue}</div>
            </div>
            <div className="row">
              <p>종합라이센스 로 선택하여 구매하신 음원은 게임, 출판, 공연, 강의, 앱, 홈페이지, UCC 등의 제작 목적으로 사용 할 수 있으며, 타인에게 마이비지엠의 승인 없이는 타인에게 양도 혹은 이용허락을 할 수 없습니다.</p>
            </div>
            <div className="row">
              <span className="glyphicon glyphicon-heart-empty icon icon-heart" aria-hidden="true"></span><span className="icon-heart">33</span>
              <span className="glyphicon glyphicon-comment icon" aria-hidden="true"></span><span>19</span>
              <span className="glyphicon glyphicon-shopping-cart icon" aria-hidden="true"></span><span>2</span>
            </div>
            <div className="row padding-15">
              <button type="button" className="btn btn-success form-control">Buy</button>
            </div>
          </div>
        </div>


      </div>
    );
  }
}

export default PurchaseBoard;
