import PropTypes from 'prop-types';

export const FirstApp = ({title, subtitle, name}) => {
   return (
      <>
      <h1 data-testid="test-title">{title}</h1>
      <p>{subtitle}</p>
      <p>{subtitle}</p>
      <p>{name}</p>
      </> //this is a fragment
   )
}

FirstApp.propTypes = {
   title: PropTypes.string.isRequired,
   subtitle: PropTypes.string,
}

FirstApp.defaultProps = {
   title: 'No hay title',
   subtitle: 'no hay subtitle',
   name: 'Jordan'
}