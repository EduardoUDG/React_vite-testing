import PropTypes from 'prop-types'


// Component
export const FirstApp = ( {title, subTitle, name} ) => {
  return (
    <>
      <h1 data-testid="test-title"> { title } </h1>
      <p>{ subTitle }</p>
      <p>{ name }</p>
    </>
  )
}


// Props
FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string
}

FirstApp.defaultProps = {
  // title: 'No hay titulo',
  subTitle: 'No hay subtitulo',
  name: 'Eduardo Chavez'
}