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
      <div>
        <div className="row box-boarder">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-6">
                <select className="form-control" value={this.state.selectValue} onChange={this.handleSetPrice}>
                  {licenseOptions}
                </select>
              </div>
              <div className="col-md-6 margin-top-5">$ {this.state.selectValue}</div>
            </div>
            <div className="row">
              <p>자바스크립트의 핵심 원리, 언어적 특성을 정확하고 알기 쉽게 설명한다. 국내 개발환경, 입문/초급 개발자 수준에 맞춰 그림과 rule을 통해 설명하고 있다. 물론 이 책이 자바스크립트의 모든 것을 다룬 바이블은 아니다. 그러나 자바스크립트를 제대로 공부하고자 하는 개발자에게 여러 자바스크립트 응용 기술들을 소화할 수 있는 기초 체력을 기를 수 있게 도와주는 좋은 가이드가 될 것이다.</p>
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
