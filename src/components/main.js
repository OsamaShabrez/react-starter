import React from 'react';
import { Button } from 'reactstrap';
import { render } from 'react-dom';
import $ from 'jquery';

export default class Layout extends React.Component {
  constructor() {
      super();
  }

  componentDidMount() {
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })
  }

  render() {
    return (
      <div className="container">
        <h3 className="text-center">Our Application Is Alive</h3>
        <Button color="btn btn-primary">Button!</Button>
        <button type="button" className="btn btn-secondary" data-toggle="tooltip" data-placement="top" title="Tooltip on top">Tooltip on top</button>
        <button type="button" className="btn btn-secondary" data-toggle="tooltip" data-placement="right" title="Tooltip on right">
        Tooltip on right
        </button>
        <button type="button" className="btn btn-secondary" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">
        Tooltip on bottom
        </button>
        <button type="button" className="btn btn-secondary" data-toggle="tooltip" data-placement="left" title="Tooltip on left">
        Tooltip on left
        </button>
      </div>
    );
  }
}
