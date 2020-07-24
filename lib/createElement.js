// all that create element needs to do is create an element object with type and props

export default function createElement(type, props, ...children){
  return {
    type,
    props: {
      ...props,
      children
    }
  }
}
