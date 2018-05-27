import React from 'react';
if (typeof window !== 'undefined') {
  // Declared with var to scope this globally
  var ReactTypeformEmbed = require('react-typeform-embed').ReactTypeformEmbed;
}

import styles from './form.sass';

class LeadForm extends React.Component {
  constructor(props) {
    super(props);
    this.openForm = this.openForm.bind(this);
  }

  renderEmbed() {
    if (typeof ReactTypeformEmbed !== 'undefined') {
      return (
        <ReactTypeformEmbed
          popup={true}
          mode={'drawer_right'}
          autoOpen={false}
          url={'https://devoncampbell.typeform.com/to/UvqwnO'}
          hideHeaders={true}
          hideFooter={true}
          ref={tf => (this.typeformEmbed = tf)}
        />
      );
    }
  }

  openForm() {
    if (typeof ReactTypeformEmbed !== 'undefined') {
      this.typeformEmbed.typeform.open();
    } else {
      location.assign('https://devoncampbell.typeform.com/to/UvqwnO');
    }
  }

  render() {
    return (
      <section className="lead-form-container">
        {this.renderEmbed()}
        <div className="lead-form-button-container">
          <h2>Ready?</h2>
          <button onClick={this.openForm}>Start building with us</button>
        </div>
      </section>
    );
  }
}

export default LeadForm;
