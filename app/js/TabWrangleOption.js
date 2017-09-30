/* @flow */

import React from 'react';

interface Props {
  onChange: (event: SyntheticInputEvent) => void;
  selectedOption: string;
}

const OPTIONS = [
  { name: 'withDupes', text: 'Never (Default)' },
  { name: 'exactURLMatch', text: 'If URL matches exactly' },
  { name: 'hostnameAndTitleMatch', text: 'If Hostname and Title match' },
];

export default class TabWrangleOption extends React.Component {
  props: Props;

  render() {
    return (
      <form className="form-inline" style={{ marginBottom: '20px' }}>
        {OPTIONS.map(option => (
          <div className="radio" key={option.name}>
            <label>
              <input
                checked={this.props.selectedOption === option.name}
                className="form-check-input"
                id={option.name}
                name="wrangleOption"
                onChange={this.props.onChange}
                type="radio"
                value={option.name}
              />{' '}
              {option.text}
            </label>
          </div>
        ))}
        <div className="help-block">
          <dl>
            <dt>Never</dt>
            <dd>
            Never prevent duplicate tabs even if the exact page is already in the corral 
            (original and default behavior).
            <p className="help-block">
            <strong>Example:</strong> A tab for<i>https://en.wikipedia.org/wiki/Google_Chrome#Extensions</i> 
            would be placed at the top of the corral and an older entry will remain as well.
            </p>
            </dd>
            <dt style={{ marginTop: '10px' }}>If URL matches exactly</dt>
            <dd>
            If a tab with the exact URL already exists in the corral, when you wrangle this 
            new tab it will be added to the top of the list and the older entry will be removed.
            <p className="help-block">
            <strong>Example:</strong> A tab for <i>https://en.wikipedia.org/wiki/Google_Chrome#Extensions</i> 
            would be placed at the top of the corral and the older entry would be removed.
            If an older entry existed for <i>https://en.wikipedia.org/wiki/Google_Chrome#Privacy</i> 
            it would not be removed.
            </p>
            </dd>
            <dt style={{ marginTop: '10px' }}>If Hostname and Title match</dt>
            <dd>
            If a tab with the same hostname (e.g. "en.wikipedia.org") and title 
            (e.g. "Google Chrome - Wikipedia") exists in the corral, when you wrangle this 
            new tab it will be added to the top of the list and the older entry will be removed, 
            even if the URL is not an exact match.
            <p className="help-block">
            <strong>Example:</strong> If the new tab is <i>https://en.wikipedia.org/wiki/Google_Chrome#Extensions</i>, 
            an older entry for <i>https://en.wikipedia.org/wiki/Google_Chrome#Privacy</i> would be removed.
            </p>
            </dd>
          </dl>
        </div>
      </form>
    );
  }
}
