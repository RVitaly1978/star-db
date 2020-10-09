import ItemList from '../item-list';
import {
  withData, withSwapiService, withChildFunction, compose,
} from '../hoc-helpers';

const renderName = ({ name }) => name;

const mapPersonMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople,
  };
}

const mapPlanetMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets,
  };
}

const mapStaeshipMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarships,
  };
}

const PersonList = compose(
  withSwapiService(mapPersonMethodsToProps),
  withData,
  withChildFunction(renderName)
)(ItemList);

const PlanetList = compose(
  withSwapiService(mapPlanetMethodsToProps),
  withData,
  withChildFunction(renderName)
)(ItemList);

const StarshipList = compose(
  withSwapiService(mapStaeshipMethodsToProps),
  withData,
  withChildFunction(renderName)
)(ItemList);

export {
  PersonList,
  PlanetList,
  StarshipList,
};
