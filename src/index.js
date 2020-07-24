import Didact from './lib/Didact'

// nudges babel to use our library
/** @jsx Didact.createElement */
const element = (
  <div id="foo">
    <a>click me</a>
    <b />
  </div>
)

// ReactDOM.render(element, container)
const node = document.createElement(element.type)
node['title'] = element.props.title
const text = document.createTextNode('')
text['nodeValue'] = element.props.children
node.appendChild(text)

const container = document.getElementById('root')
container.appendChild(node)
