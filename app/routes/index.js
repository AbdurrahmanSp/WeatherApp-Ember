import Route from '@ember/routing/route';
import { kelvinToCelsius } from '../helpers/helpers';

export default class IndexRoute extends Route {
  async model() {
    let weatheRresponse = await fetch(' https://api.openweathermap.org/data/2.5/weather?q=sarajevo&appid=f1c020d436b335c082c9a39b5ce16b39');
    let weatherData = await weatheRresponse.json();

    const { main: { temp }, name: city } = weatherData;

    const realTemp = kelvinToCelsius(temp)

    return {realTemp, city}
}}