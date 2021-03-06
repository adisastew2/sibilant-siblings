import React from 'react';
import AnotherQuestButton from './AnotherQuestButton.jsx';
import Summary from './Summary.jsx';

class ResultPage extends React.Component {
  constructor(props) {
    // console.log(props);
    super(props);
  }

  render() {
    // console.log(props);
    return (
      <div>
        {/* This page has a STATEFULL animated background image. */}
        {/* This page has a STATEFULL headline text. */}
        <h1>Abandon Quest</h1>
        <Summary />
        <AnotherQuestButton />
      </div>
    );
  }
}

export default ResultPage;