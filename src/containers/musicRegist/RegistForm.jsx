import React, { Component, PropTypes } from 'react';

let category = {
  Genre: ['이지리스닝', '재즈', '락', '댄스', '팝', '소울', '힙합', '클래식', '어쿠스틱', '월드뮤직',
    '일렉트로닉', '코믹&키즈', '종교음악', '크로스오버', '효과음', '기타'],
  Moods: ['BRIGHT', 'ENERGETIC', 'EMOTIONAL', 'DRAMA', 'FRESH', 'FUN', 'SAD', 'SENTIMENTAL',
    'TENSION', 'MYSTERY', 'FANTASY', 'SEXY', 'POWERFUL', 'MAGNIFICIENT', 'CHIC', 'SEASON', 'DANCY', 'ETC'],
  Instrument: ['키보드(KEYBOARD)', '기타(GUITAR)', '스트링(STRING)', '관악기(BRASS&WOODWIND)', '오케스트라(ORCHESTRA)',
    '타악기(PERCUSSION)', '보이스(VOICE)', '신스(SYNTH)', '국악(KOREAN TRADITIONAL)', '전통악기(TRADITIONAL)', 'ETC']
};

class RegistForm extends Component {
  constructor(props) {
    super(props);

    this.optionList = this.optionList.bind(this);
  }

  optionList(categoryName) {
    var i, categoryOptionForm = [];
    var optionLists = categoryName.map((category) => {
      return (
        <option key={category.id}>{category}</option>
      );
    });

    for (i = 0; i < 3; i++) {
      categoryOptionForm[i] = (function () {
        return (
          <div className="col-md-4">
            <select className="form-control" >
              {optionLists}
            </select>
          </div>
        );
      }());
    }

    return categoryOptionForm.concat();
  }

  render() {
    const myBGMment = "마이비지엠은 창작자 본인의 음악만을 업로드 가능합니다." +
      "음원은 반드시 본인의 창작물이여야 하며 만약 본인의 창작물이 아닌 타인의 창작물을 업로드하였을 경우" +
      "(타인의 창작물을 마음대로 편집하여 올렸을 경우도 해당) 귀하는 저작권법 위반으로 법적인 처벌을 받습니다." +
      " 이에 대한 모든 책임은 음원을 직접 업로드한 본인에게 있으면 저희 마이비지엠에서는 이에 대한 일체의 책임을 지지 않습니다.";

    return (
      <form className="form-horizontal">
        <div className="form-group">
          <label for="trackName" className="col-md-2 control-label">트랙이름</label>
          <div className="col-md-10">
            <input type="text" className="form-control" placeholder="트랙이름(Title)" />
          </div>
        </div>
        <div className="form-group">
          <label for="musicImage" className="col-md-2 control-label">대표이미지</label>
          <div className="col-md-10">
            <img src="" alt="" className="img-rounded" style={{ width: "140px", height: "140px" }} />
          </div>
        </div>
        <div className="form-group">
          <div className="col-md-offset-2 col-md-10">
            <input type="file" />
          </div>
        </div>
        <div className="form-group">
          <label for="musicImage" className="col-md-2 control-label">장르 설정</label>
          <div className="col-md-10">
            <div className="row">
              {this.optionList(category.Genre)}
            </div>
          </div>
        </div>
        <div className="form-group">
          <label for="musicImage" className="col-md-2 control-label">무드 설정</label>
          <div className="col-md-10">
            <div className="row">
              {this.optionList(category.Moods)}
            </div>
          </div>
        </div>
        <div className="form-group">
          <label for="musicImage" className="col-md-2 control-label">악기 설정</label>
          <div className="col-md-10">
            <div className="row">
              {this.optionList(category.Instrument)}
            </div>
          </div>
        </div>
        <div className="form-group">
          <label for="trackName" className="col-md-2 control-label">키워드</label>
          <div className="col-md-10">
            <input type="text" className="form-control" placeholder="생각하시는 음원의 키워드를 '#'으로 구분해 적어주세요" />
          </div>
        </div>
        <div className="form-group">
          <label for="trackName" className="col-md-2 control-label">음원 설명(Description)</label>
          <div className="col-md-10">
            <textarea className="form-control" rows="3" placeholder="작곡하신 음원에 대한 설명을 적어주세요" />
          </div>
        </div>
        <div className="form-group">
          <label for="trackName" className="col-md-2 control-label">음원 업로드<br />(*필수)</label>
          <div className="col-md-10">
            <input type="file" />
          </div>
        </div>
        <div className="form-group">
          <label for="trackName" className="col-md-2 control-label">다른 버전<br />(선택)</label>
          <div className="col-md-10">
            <input type="file" />
          </div>
        </div>
        <hr />
        <div className="well well-lg">
          {myBGMment}
        </div>
        <div className="form-group">
          <div className="col-md-10">
            <div className="checkbox">
              <label>
                <input type="checkbox" /> 이 글을 모두 읽었고, 이에 동의합니다.
              </label>
            </div>
          </div>
        </div>
        <hr />
        <div className="form-group">
          <div className="col-md-10 col-md-offset-2">
            <p className="text-right">
              <button type="submit" className="btn btn-primary">음원 등록 신청</button>
            </p>
          </div>
        </div>
      </form>
    );
  }
}

RegistForm.propTypes = {

};

export default RegistForm;