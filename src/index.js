import Didact from './lib/Didact'

// nudges babel to use our library
/** @jsx Didact.createElement */
const element = (
  <div id="foo">
    <a>click me</a>
    <b />
  </div>
)

const container = document.getElementById('root')

Didact.render(element, container)
